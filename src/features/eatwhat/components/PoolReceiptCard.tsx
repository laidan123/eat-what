import type { EatWhatDish } from "@/features/eatwhat/types"

export function PoolReceiptCard({
  poolSize,
  previewDishes,
  modeLabel,
}: {
  poolSize: number
  previewDishes: EatWhatDish[]
  modeLabel: string
}) {
  return (
    <div className="receipt-card rounded-[28px] border border-white/10 p-5">
      <div className="flex items-center justify-between text-[#0e0e0e]">
        <span className="font-mono text-xs uppercase tracking-[0.35em]">今日菜单池</span>
        <span className="text-sm font-semibold">{poolSize} 道候选</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {previewDishes.slice(0, 10).map((dish) => (
          <span
            key={dish.id}
            className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold text-black/75"
          >
            {dish.name}
          </span>
        ))}
      </div>
      <div className="mt-4 text-xs text-black/60">{modeLabel}</div>
    </div>
  )
}

