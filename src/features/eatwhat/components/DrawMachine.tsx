import { Dices } from "lucide-react"
import type { EatWhatCategory, EatWhatDish } from "@/features/eatwhat/types"

export function DrawMachine({
  isDrawing,
  ticker,
  dish,
  category,
  avoidRepeatLabel,
  onDraw,
}: {
  isDrawing: boolean
  ticker: string[]
  dish?: EatWhatDish
  category?: EatWhatCategory
  avoidRepeatLabel: string
  onDraw: () => void
}) {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-[#ffd34d]/20 bg-[#120d07] p-5 shadow-[0_20px_80px_rgba(255,112,67,0.18)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,211,77,0.15),transparent_40%)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#ffe49c]">Blind Draw Machine</p>
            <p className="mt-2 text-sm text-white/65">按下按钮，今晚就别再犹豫。</p>
          </div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">{avoidRepeatLabel}</div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_220px]">
          <div className="rounded-[28px] border border-dashed border-white/10 bg-black/20 p-5">
            {isDrawing ? (
              <div className="flex min-h-[220px] flex-col justify-center">
                <p className="text-sm uppercase tracking-[0.3em] text-white/45">正在洗牌</p>
                <div className="mt-6 space-y-3 overflow-hidden">
                  {ticker.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="animate-slide rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-lg font-semibold text-white/80"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex min-h-[220px] flex-col justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/45">抽取结果</p>
                  <div className="mt-5 flex flex-wrap items-start gap-4">
                    <div className="flex-1">
                      <div className="text-4xl font-black leading-tight text-[#fff8e6] md:text-5xl">
                        {dish?.name ?? "等你来抽"}
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {category ? (
                          <span
                            className="rounded-full px-3 py-1 text-sm font-bold text-black"
                            style={{ backgroundColor: category.color }}
                          >
                            {category.name}
                          </span>
                        ) : (
                          <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/45">
                            将从菜单池中随机诞生
                          </span>
                        )}
                        {dish?.tags?.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/65">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] px-5 py-4 text-right">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/45">推荐搭配</p>
                      <p className="mt-3 max-w-[14ch] text-lg font-semibold text-white/80">
                        {dish?.pairings?.join(" · ") ?? "命运马上告诉你"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={onDraw}
                    className="draw-button inline-flex items-center gap-3 rounded-full px-6 py-4 text-lg font-black text-[#1b1303]"
                  >
                    <Dices className="h-5 w-5" />
                    盲抽一下
                  </button>
                  <button
                    type="button"
                    onClick={onDraw}
                    className="rounded-full border border-white/10 px-5 py-4 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
                  >
                    再抽一次
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">抽签提示</p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>不选模块 = 全池随机</li>
              <li>多选模块 = 在所选范围中抽取</li>
              <li>开启避免重复 = 尽量不撞到最近吃过的</li>
            </ul>
            <div className="mt-5 rounded-2xl border border-dashed border-[#79ff4d]/35 bg-[#79ff4d]/10 p-4 text-sm text-[#d6ffd6]">
              适合拿来解决“什么都想吃，又什么都不想决定”的时刻。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

