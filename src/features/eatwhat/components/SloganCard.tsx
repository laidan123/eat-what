import { Sparkles } from "lucide-react"

export function SloganCard({ slogan }: { slogan: string }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 backdrop-blur">
      <div className="flex items-center gap-2 text-[#ffe49c]">
        <Sparkles className="h-4 w-4" />
        <span className="text-sm tracking-[0.2em]">今日宣言</span>
      </div>
      <p className="mt-4 min-h-[72px] text-2xl font-bold leading-snug text-[#fff9ef] md:text-3xl">{slogan}</p>
      <p className="mt-4 max-w-[38ch] text-sm text-white/60">
        家常菜、火锅、烤肉、粉面、轻食、下饭小馆全部在场。你只需要选范围，然后把决定权交给按钮。
      </p>
    </div>
  )
}

