import {
  Beef,
  CookingPot,
  Flame,
  Salad,
  Soup,
  UtensilsCrossed,
} from "lucide-react"
import type { ComponentType } from "react"
import type { EatWhatCategoryId } from "@/features/eatwhat/types"

export const slogans = [
  "别想了，交给今晚的命运。",
  "你负责按按钮，香味负责出现。",
  "纠结到此为止，吃饭从此有答案。",
  "今日菜单不靠脑补，靠盲抽。",
]

export const categoryIconMap: Record<EatWhatCategoryId, ComponentType<{ className?: string }>> = {
  home: UtensilsCrossed,
  hotpot: CookingPot,
  bbq: Flame,
  noodles: Soup,
  light: Salad,
  snack: Beef,
}

export const historyTimeFormatter = new Intl.DateTimeFormat("zh-CN", {
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
})
