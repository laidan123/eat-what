import type { EatWhatHistoryItem, EatWhatSettings } from "@/features/eatwhat/types"

const SETTINGS_KEY = "eatwhat.settings.v1"
const HISTORY_KEY = "eatwhat.history.v1"

const DEFAULT_SETTINGS: EatWhatSettings = {
  selectedCategoryIds: [],
  avoidRepeat: true,
  cooldown: 5,
}

export function loadSettings(): EatWhatSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (!raw) return DEFAULT_SETTINGS
    const parsed = JSON.parse(raw) as Partial<EatWhatSettings>
    return {
      selectedCategoryIds: Array.isArray(parsed.selectedCategoryIds) ? parsed.selectedCategoryIds : [],
      avoidRepeat: typeof parsed.avoidRepeat === "boolean" ? parsed.avoidRepeat : DEFAULT_SETTINGS.avoidRepeat,
      cooldown: typeof parsed.cooldown === "number" ? parsed.cooldown : DEFAULT_SETTINGS.cooldown,
    }
  } catch {
    return DEFAULT_SETTINGS
  }
}

export function saveSettings(settings: EatWhatSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}

export function loadHistory(): EatWhatHistoryItem[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as EatWhatHistoryItem[]) : []
  } catch {
    return []
  }
}

export function saveHistory(history: EatWhatHistoryItem[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}

