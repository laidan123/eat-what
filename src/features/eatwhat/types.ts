export type EatWhatCategoryId =
  | "home"
  | "hotpot"
  | "bbq"
  | "noodles"
  | "light"
  | "snack"

export type EatWhatCategory = {
  id: EatWhatCategoryId
  name: string
  color: string
  hint?: string
}

export type EatWhatDish = {
  id: string
  name: string
  categoryId: EatWhatCategoryId
  tags?: string[]
  pairings?: string[]
}

export type EatWhatSettings = {
  selectedCategoryIds: EatWhatCategoryId[]
  avoidRepeat: boolean
  cooldown: number
}

export type EatWhatHistoryItem = {
  id: string
  dishId: string
  dishName: string
  categoryId: EatWhatCategoryId
  categoryName: string
  createdAt: number
}

