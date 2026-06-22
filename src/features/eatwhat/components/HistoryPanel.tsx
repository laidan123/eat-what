import { History as HistoryIcon, Trash2 } from "lucide-react"
import { CATEGORY_BY_ID } from "@/features/eatwhat/data"
import { historyTimeFormatter } from "@/features/eatwhat/ui"
import type { EatWhatHistoryItem } from "@/features/eatwhat/types"

export function HistoryPanel({ history, onClear }: { history: EatWhatHistoryItem[]; onClear: () => void }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
            <HistoryIcon className="h-5 w-5 text-[#ffd34d]" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">最近抽到</p>
            <p className="mt-1 text-sm text-white/60">最多保留 30 条本地记录</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:border-[#ff6666]/50 hover:text-white"
        >
          <Trash2 className="h-4 w-4" />
          清空
        </button>
      </div>

      <div className="mt-5 max-h-[360px] space-y-3 overflow-auto pr-1">
        {history.length ? (
          history.map((item, index) => {
            const category = CATEGORY_BY_ID[item.categoryId]
            return (
              <div
                key={item.id}
                className={`rounded-[24px] border px-4 py-4 ${
                  index === 0 ? "border-[#ffd34d]/30 bg-[#ffd34d]/10" : "border-white/10 bg-black/20"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xl font-bold text-[#fff8e6]">{item.dishName}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold text-black"
                        style={{ backgroundColor: category?.color ?? "#fff" }}
                      >
                        {item.categoryName}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                        {historyTimeFormatter.format(item.createdAt)}
                      </span>
                    </div>
                  </div>
                  {index === 0 ? <span className="text-xs font-bold text-[#ffe49c]">最新</span> : null}
                </div>
              </div>
            )
          })
        ) : (
          <div className="rounded-[24px] border border-dashed border-white/10 bg-black/20 p-6 text-center text-sm text-white/45">
            还没有抽取记录，先按一次按钮看看今晚吃什么。
          </div>
        )}
      </div>
    </div>
  )
}

