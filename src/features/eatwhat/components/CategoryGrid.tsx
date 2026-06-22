import { CATEGORIES } from "@/features/eatwhat/data"
import { categoryIconMap } from "@/features/eatwhat/ui"
import type { EatWhatCategoryId } from "@/features/eatwhat/types"

export function CategoryGrid({
  selectedIds,
  onToggle,
  onQuickSelect,
}: {
  selectedIds: EatWhatCategoryId[]
  onToggle: (id: EatWhatCategoryId) => void
  onQuickSelect: (mode: "all" | "none") => void
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-black/35 p-4 md:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">模块筛选</p>
          <p className="mt-1 text-sm text-white/60">可多选；不选则默认全模块随机</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onQuickSelect("all")}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-[#79ff4d]/50 hover:text-white"
          >
            全选
          </button>
          <button
            type="button"
            onClick={() => onQuickSelect("none")}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-[#ff6666]/50 hover:text-white"
          >
            清空
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {CATEGORIES.map((category, index) => {
          const selected = selectedIds.includes(category.id)
          const Icon = categoryIconMap[category.id]
          return (
            <button
              type="button"
              key={category.id}
              onClick={() => onToggle(category.id)}
              className={`group relative overflow-hidden rounded-[24px] border px-4 py-4 text-left transition duration-200 ${
                selected
                  ? "border-white bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_18px_40px_rgba(0,0,0,0.35)]"
                  : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              }`}
              style={{
                transform: `rotate(${index % 2 === 0 ? -1.2 : 1}deg)`,
                boxShadow: selected ? `0 0 24px ${category.color}33` : undefined,
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-bold text-[#fffaf1]">{category.name}</p>
                  <p className="mt-2 text-sm text-white/55">{category.hint}</p>
                </div>
                <div
                  className="rounded-2xl border border-white/10 p-3 text-white/75 transition group-hover:scale-105"
                  style={{ backgroundColor: `${category.color}22` }}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

