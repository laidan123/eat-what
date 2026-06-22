import { Minus, Plus } from "lucide-react"

export function SettingsPanel({
  avoidRepeat,
  cooldown,
  onToggleAvoidRepeat,
  onSetCooldown,
}: {
  avoidRepeat: boolean
  cooldown: number
  onToggleAvoidRepeat: () => void
  onSetCooldown: (cooldown: number) => void
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-white/45">抽取设置</p>

      <div className="mt-5 space-y-5">
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-lg font-bold text-[#fff8e6]">避免短期重复</p>
              <p className="mt-2 text-sm text-white/55">开启后会尽量避开最近抽中过的菜，减少“怎么又是它”的概率。</p>
            </div>
            <button
              type="button"
              aria-pressed={avoidRepeat}
              onClick={onToggleAvoidRepeat}
              className={`relative h-8 w-14 rounded-full transition ${avoidRepeat ? "bg-[#79ff4d]" : "bg-white/15"}`}
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-black transition ${avoidRepeat ? "left-7" : "left-1"}`}
              />
            </button>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-bold text-[#fff8e6]">重复冷却次数</p>
              <p className="mt-2 text-sm text-white/55">控制最近多少次抽取结果会被优先避开。</p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-3 py-2">
              <button
                type="button"
                onClick={() => onSetCooldown(Math.max(0, cooldown - 1))}
                className="rounded-full border border-white/10 p-2 text-white/65 transition hover:text-white"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-8 text-center text-lg font-black text-[#ffe49c]">{cooldown}</span>
              <button
                type="button"
                onClick={() => onSetCooldown(Math.min(20, cooldown + 1))}
                className="rounded-full border border-white/10 p-2 text-white/65 transition hover:text-white"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

