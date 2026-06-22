import type { EatWhatCategory, EatWhatDish } from "@/features/eatwhat/types"

export const CATEGORIES: EatWhatCategory[] = [
  { id: "home", name: "家常菜", color: "#ff3b3b", hint: "锅里来点安心的" },
  { id: "hotpot", name: "火锅", color: "#ffd34d", hint: "咕嘟咕嘟，快乐翻倍" },
  { id: "bbq", name: "烤肉", color: "#79ff4d", hint: "滋啦一下，香到犯规" },
  { id: "noodles", name: "粉面", color: "#4dd5ff", hint: "热汤一口，灵魂续费" },
  { id: "light", name: "轻食", color: "#7bffb9", hint: "清爽不内疚" },
  { id: "snack", name: "下饭小馆", color: "#ff66c4", hint: "重口一点也没关系" },
]

export const DISHES: EatWhatDish[] = [
  { id: "home-kungpao", name: "宫保鸡丁", categoryId: "home", tags: ["微辣", "下饭"], pairings: ["米饭", "黄瓜条"] },
  { id: "home-mapotofu", name: "麻婆豆腐", categoryId: "home", tags: ["麻辣", "快手"], pairings: ["米饭", "海苔碎"] },
  { id: "home-tomatoegg", name: "番茄炒蛋", categoryId: "home", tags: ["酸甜", "快手"], pairings: ["米饭", "紫菜汤"] },
  { id: "home-shreddedpork", name: "鱼香肉丝", categoryId: "home", tags: ["酸甜", "经典"], pairings: ["米饭", "凉拌黄瓜"] },
  { id: "home-braisedpork", name: "红烧肉", categoryId: "home", tags: ["浓郁"], pairings: ["米饭", "青菜"] },
  { id: "home-braisedeggplant", name: "红烧茄子", categoryId: "home", tags: ["软糯", "下饭"], pairings: ["米饭", "蒜蓉生菜"] },
  { id: "home-sautedbeans", name: "干煸四季豆", categoryId: "home", tags: ["香辣", "脆"], pairings: ["米饭", "冰可乐"] },
  { id: "home-bokchoy", name: "蒜蓉小青菜", categoryId: "home", tags: ["清爽", "快手"], pairings: ["米饭", "豆腐汤"] },
  { id: "home-stewchicken", name: "香菇炖鸡", categoryId: "home", tags: ["暖胃"], pairings: ["米饭", "蘸椒盐"] },
  { id: "home-friedrice", name: "蛋炒饭", categoryId: "home", tags: ["快手"], pairings: ["榨菜", "紫菜汤"] },

  { id: "hotpot-spicy", name: "麻辣牛油火锅", categoryId: "hotpot", tags: ["重辣", "热闹"], pairings: ["毛肚", "黄喉", "冰粉"] },
  { id: "hotpot-tomato", name: "番茄火锅", categoryId: "hotpot", tags: ["酸甜", "不辣"], pairings: ["肥牛", "金针菇", "豆腐皮"] },
  { id: "hotpot-mushroom", name: "菌汤火锅", categoryId: "hotpot", tags: ["清香"], pairings: ["鸡肉", "时蔬拼盘", "豆皮"] },
  { id: "hotpot-sour", name: "酸汤火锅", categoryId: "hotpot", tags: ["开胃"], pairings: ["肥牛", "土豆片", "年糕"] },
  { id: "hotpot-lamb", name: "清汤羊肉火锅", categoryId: "hotpot", tags: ["暖"], pairings: ["羊肉片", "粉丝", "香菜葱花"] },
  { id: "hotpot-fish", name: "鱼火锅", categoryId: "hotpot", tags: ["鲜"], pairings: ["鱼片", "豆芽", "宽粉"] },

  { id: "bbq-beef", name: "韩式烤牛五花", categoryId: "bbq", tags: ["肥瘦", "香"], pairings: ["生菜", "蒜片", "泡菜"] },
  { id: "bbq-porkbelly", name: "烤五花肉", categoryId: "bbq", tags: ["滋啦"], pairings: ["生菜", "蘸料", "小葱"] },
  { id: "bbq-lambskewer", name: "孜然羊肉串", categoryId: "bbq", tags: ["孜然", "辣"], pairings: ["烤馒头片", "冰啤/气泡水"] },
  { id: "bbq-chickenwing", name: "蜜汁烤鸡翅", categoryId: "bbq", tags: ["甜咸"], pairings: ["玉米", "可乐"] },
  { id: "bbq-oyster", name: "蒜蓉烤生蚝", categoryId: "bbq", tags: ["蒜香"], pairings: ["粉丝", "青柠"] },
  { id: "bbq-shrimp", name: "椒盐烤虾", categoryId: "bbq", tags: ["香脆"], pairings: ["啤酒/无酒精", "小番茄"] },
  { id: "bbq-veggies", name: "烤蔬菜拼盘", categoryId: "bbq", tags: ["解腻"], pairings: ["蘑菇", "彩椒", "西葫芦"] },

  { id: "noodles-lanzhou", name: "兰州牛肉面", categoryId: "noodles", tags: ["热汤"], pairings: ["小菜", "卤蛋"] },
  { id: "noodles-biangbiang", name: "油泼扯面", categoryId: "noodles", tags: ["香辣"], pairings: ["青菜", "蒜泥"] },
  { id: "noodles-wonton", name: "鲜肉馄饨", categoryId: "noodles", tags: ["清汤"], pairings: ["紫菜", "虾皮"] },
  { id: "noodles-ramen", name: "豚骨拉面", categoryId: "noodles", tags: ["浓汤"], pairings: ["溏心蛋", "海苔"] },
  { id: "noodles-fried", name: "炒河粉", categoryId: "noodles", tags: ["锅气"], pairings: ["豆芽", "辣椒酱"] },
  { id: "noodles-rice", name: "过桥米线", categoryId: "noodles", tags: ["鲜"], pairings: ["菌菇", "薄肉片"] },
  { id: "noodles-dandan", name: "担担面", categoryId: "noodles", tags: ["麻辣"], pairings: ["花生碎", "酸豆角"] },

  { id: "light-saladchicken", name: "鸡胸肉沙拉", categoryId: "light", tags: ["清爽"], pairings: ["油醋汁", "全麦面包"] },
  { id: "light-salmon", name: "煎三文鱼配蔬菜", categoryId: "light", tags: ["蛋白"], pairings: ["柠檬", "芦笋"] },
  { id: "light-poke", name: "Poke 盖饭", categoryId: "light", tags: ["清爽"], pairings: ["牛油果", "海苔碎"] },
  { id: "light-soup", name: "蔬菜浓汤", categoryId: "light", tags: ["暖"], pairings: ["蒜香面包片"] },
  { id: "light-yogurt", name: "酸奶水果碗", categoryId: "light", tags: ["轻盈"], pairings: ["坚果", "燕麦"] },

  { id: "snack-spicyfish", name: "水煮鱼", categoryId: "snack", tags: ["麻辣", "爽"], pairings: ["米饭", "豆芽"] },
  { id: "snack-boiledbeef", name: "水煮牛肉", categoryId: "snack", tags: ["麻辣"], pairings: ["米饭", "冰粉"] },
  { id: "snack-crayfish", name: "小龙虾", categoryId: "snack", tags: ["夜宵"], pairings: ["啤酒/气泡水", "手套"] },
  { id: "snack-friedchicken", name: "炸鸡", categoryId: "snack", tags: ["酥脆"], pairings: ["可乐", "酸黄瓜"] },
  { id: "snack-curry", name: "咖喱饭", categoryId: "snack", tags: ["浓郁"], pairings: ["福神渍", "温泉蛋"] },
  { id: "snack-bbqrice", name: "烧腊饭", categoryId: "snack", tags: ["肉香"], pairings: ["例汤", "青菜"] },
  { id: "snack-burger", name: "汉堡薯条", categoryId: "snack", tags: ["放纵"], pairings: ["冰饮", "番茄酱"] },
]

export const CATEGORY_BY_ID: Record<string, EatWhatCategory> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
)

export const DISH_BY_ID: Record<string, EatWhatDish> = Object.fromEntries(DISHES.map((d) => [d.id, d]))

