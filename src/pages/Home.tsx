import { useEffect, useMemo, useState } from "react"
import { CATEGORIES, CATEGORY_BY_ID, DISH_BY_ID, DISHES } from "@/features/eatwhat/data"
import { CategoryGrid } from "@/features/eatwhat/components/CategoryGrid"
import { DrawMachine } from "@/features/eatwhat/components/DrawMachine"
import { HistoryPanel } from "@/features/eatwhat/components/HistoryPanel"
import { PoolReceiptCard } from "@/features/eatwhat/components/PoolReceiptCard"
import { SettingsPanel } from "@/features/eatwhat/components/SettingsPanel"
import { SloganCard } from "@/features/eatwhat/components/SloganCard"
import { useEatWhatStore } from "@/features/eatwhat/store"
import { slogans } from "@/features/eatwhat/ui"
import type { EatWhatCategoryId, EatWhatDish } from "@/features/eatwhat/types"

function shufflePreview(pool: EatWhatDish[]) {
  if (!pool.length) return []
  const next: EatWhatDish[] = []
  const size = Math.min(10, Math.max(6, pool.length))
  for (let i = 0; i < size; i += 1) {
    next.push(pool[(i * 7 + Math.floor(Math.random() * pool.length)) % pool.length])
  }
  return next
}

export default function Home() {
  const { settings, history, lastResult, setSelectedCategoryIds, setAvoidRepeat, setCooldown, clearHistory, draw } =
    useEatWhatStore()
  const [displayDish, setDisplayDish] = useState<EatWhatDish | undefined>(() =>
    lastResult ? DISH_BY_ID[lastResult.dishId] : undefined,
  )
  const [isDrawing, setIsDrawing] = useState(false)
  const [ticker, setTicker] = useState<string[]>([])
  const [sloganIndex, setSloganIndex] = useState(0)

  const selectedIds = settings.selectedCategoryIds

  const activePool = useMemo(() => {
    if (!selectedIds.length) return DISHES
    const selectedSet = new Set(selectedIds)
    return DISHES.filter((dish) => selectedSet.has(dish.categoryId))
  }, [selectedIds])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSloganIndex((current) => (current + 1) % slogans.length)
    }, 3500)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!lastResult) return
    setDisplayDish(DISH_BY_ID[lastResult.dishId])
  }, [lastResult])

  const toggleCategory = (categoryId: EatWhatCategoryId) => {
    const set = new Set(selectedIds)
    if (set.has(categoryId)) {
      set.delete(categoryId)
    } else {
      set.add(categoryId)
    }
    setSelectedCategoryIds(Array.from(set))
  }

  const handleQuickSelect = (mode: "all" | "none") => {
    if (mode === "all") {
      setSelectedCategoryIds(CATEGORIES.map((c) => c.id))
      return
    }
    setSelectedCategoryIds([])
  }

  const handleDraw = () => {
    if (isDrawing) return
    const previewPool = activePool.length ? activePool : DISHES
    setIsDrawing(true)

    const rolling = window.setInterval(() => {
      const preview = shufflePreview(previewPool).map((dish) => dish.name)
      setTicker(preview)
    }, 110)

    window.setTimeout(() => {
      window.clearInterval(rolling)
      const chosen = draw(selectedIds)
      setDisplayDish(chosen)
      setTicker([])
      setIsDrawing(false)
    }, 1500)
  }

  const activeCategory = displayDish ? CATEGORY_BY_ID[displayDish.categoryId] : undefined

  return (
    <main className="min-h-screen bg-[#090909] text-[#fff9ef]">
      <div className="page-noise" />
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-6 px-4 py-6 md:px-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10 lg:py-10">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,211,77,0.12),_transparent_30%),linear-gradient(145deg,_rgba(255,59,59,0.12),_rgba(9,9,9,0.98)_48%,_rgba(121,255,77,0.12))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] md:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.03)_38%,transparent_70%)]" />
          <div className="relative flex h-full flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.5em] text-[#ffd34d]">Eat What Tonight</p>
                <h1 className="font-display mt-3 max-w-[12ch] text-5xl font-black leading-[0.9] text-[#fff8e6] md:text-7xl">
                  今天吃什么
                </h1>
              </div>
              <div className="rounded-full border border-[#ffd34d]/30 bg-black/30 px-4 py-2 text-sm text-[#ffe49c] backdrop-blur">
                盲抽模式已启动
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <SloganCard slogan={slogans[sloganIndex]} />
              <PoolReceiptCard
                poolSize={activePool.length}
                previewDishes={activePool.length ? activePool : DISHES}
                modeLabel={selectedIds.length ? "当前按已选模块抽取" : "当前为全模块盲抽"}
              />
            </div>

            <CategoryGrid selectedIds={selectedIds} onToggle={toggleCategory} onQuickSelect={handleQuickSelect} />
            <DrawMachine
              isDrawing={isDrawing}
              ticker={ticker}
              dish={displayDish}
              category={activeCategory}
              avoidRepeatLabel={settings.avoidRepeat ? `已避开最近 ${settings.cooldown} 次` : "允许重复"}
              onDraw={handleDraw}
            />
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <HistoryPanel history={history} onClear={clearHistory} />
          <SettingsPanel
            avoidRepeat={settings.avoidRepeat}
            cooldown={settings.cooldown}
            onToggleAvoidRepeat={() => setAvoidRepeat(!settings.avoidRepeat)}
            onSetCooldown={setCooldown}
          />
        </section>
      </div>
    </main>
  )
}
