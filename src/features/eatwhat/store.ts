import { create } from "zustand"
import { CATEGORIES, DISH_BY_ID, DISHES } from "@/features/eatwhat/data"
import { randomId, randomInt } from "@/features/eatwhat/random"
import { loadHistory, loadSettings, saveHistory, saveSettings } from "@/features/eatwhat/storage"
import type { EatWhatCategoryId, EatWhatDish, EatWhatHistoryItem, EatWhatSettings } from "@/features/eatwhat/types"

type EatWhatState = {
  settings: EatWhatSettings
  history: EatWhatHistoryItem[]
  lastResult?: EatWhatHistoryItem
  setSelectedCategoryIds: (ids: EatWhatCategoryId[]) => void
  setAvoidRepeat: (enabled: boolean) => void
  setCooldown: (cooldown: number) => void
  clearHistory: () => void
  draw: (categoryIds: EatWhatCategoryId[]) => EatWhatDish
}

function clampCooldown(value: number) {
  if (!Number.isFinite(value)) return 5
  return Math.max(0, Math.min(20, Math.floor(value)))
}

function getAllowedDishes(categoryIds: EatWhatCategoryId[]) {
  if (!categoryIds.length) return DISHES
  const set = new Set(categoryIds)
  return DISHES.filter((d) => set.has(d.categoryId))
}

function getAvoidedDishIds(history: EatWhatHistoryItem[], cooldown: number) {
  if (cooldown <= 0) return new Set<string>()
  const slice = history.slice(0, cooldown)
  return new Set(slice.map((h) => h.dishId))
}

export const useEatWhatStore = create<EatWhatState>((set, get) => {
  const initialSettings = loadSettings()
  const initialHistory = loadHistory()

  return {
    settings: initialSettings,
    history: initialHistory,
    lastResult: initialHistory[0],

    setSelectedCategoryIds: (ids) => {
      const next: EatWhatSettings = {
        ...get().settings,
        selectedCategoryIds: ids,
      }
      saveSettings(next)
      set({ settings: next })
    },

    setAvoidRepeat: (enabled) => {
      const next: EatWhatSettings = {
        ...get().settings,
        avoidRepeat: enabled,
      }
      saveSettings(next)
      set({ settings: next })
    },

    setCooldown: (cooldown) => {
      const next: EatWhatSettings = {
        ...get().settings,
        cooldown: clampCooldown(cooldown),
      }
      saveSettings(next)
      set({ settings: next })
    },

    clearHistory: () => {
      saveHistory([])
      set({ history: [], lastResult: undefined })
    },

    draw: (categoryIds) => {
      const { settings, history } = get()
      const allowed = getAllowedDishes(categoryIds)
      if (!allowed.length) {
        return DISH_BY_ID["home-tomatoegg"] ?? DISHES[0]
      }

      const avoided = settings.avoidRepeat ? getAvoidedDishIds(history, settings.cooldown) : new Set<string>()
      const pool = allowed.filter((d) => !avoided.has(d.id))
      const finalPool = pool.length ? pool : allowed
      const chosen = finalPool[randomInt(finalPool.length)]

      const category = CATEGORIES.find((c) => c.id === chosen.categoryId)
      const item: EatWhatHistoryItem = {
        id: randomId("h"),
        dishId: chosen.id,
        dishName: chosen.name,
        categoryId: chosen.categoryId,
        categoryName: category?.name ?? "未知模块",
        createdAt: Date.now(),
      }

      const nextHistory = [item, ...history].slice(0, 30)
      saveHistory(nextHistory)
      set({ history: nextHistory, lastResult: item })
      return chosen
    },
  }
})

