let materialsData = [
  {
    "id": 165,
    "name": "苹果",
    "image": "../images/picturebook/apple.png",
    "category": "material",
    "desc": "在海拉尔各地的树上都能找到的普通水果。新鲜食用，或烹饪以增强效果。"
  },
  {
    "id": 166,
    "name": "椰果",
    "image": "../images/picturebook/palm_fruit.png",
    "category": "material",
    "desc": "生长在靠近海洋的棕榈树上的果实。没有特殊效果，但用作食材时会增加心脏恢复。"
  },
  {
    "id": 167,
    "name": "野莓",
    "image": "../images/picturebook/wildberry.png",
    "category": "material",
    "desc": "生长在寒冷、多雪的地区的水果，以其酸甜的味道而闻名。没有特殊效果，但是是一种受欢迎的烹饪食材。"
  },
  {
    "id": 168,
    "name": "生命榴莲",
    "image": "../images/picturebook/hearty_durian.png",
    "category": "material",
    "desc": "这种水果散发着强烈的气味，被誉为“水果之王”。具有巨大的恢复能力；烹饪时会暂时增加你的最大心脏。"
  },
  {
    "id": 169,
    "name": "水甜瓜",
    "image": "../images/picturebook/hydromelon.png",
    "category": "material",
    "desc": "这种坚韧的水果甚至可以在沙漠的酷热中茁壮成长。其中的液体具有降温效果，在烹饪时会增加你的耐热能力。"
  },
  {
    "id": 170,
    "name": "辛辣椒",
    "image": "../images/picturebook/spicy_pepper.png",
    "category": "material",
    "desc": "这种辣椒充满辛辣的味道。烹饪时使用它可以制作出提高体温并帮助你抵御寒冷的菜肴。"
  },
  {
    "id": 171,
    "name": "电果",
    "image": "../images/picturebook/voltfruit.png",
    "category": "material",
    "desc": "在格鲁达沙漠发现的仙人掌结出的甜蜜果实。天然绝缘，所以在烹饪时会提供对电的抵抗力。"
  },
  {
    "id": 172,
    "name": "飞荷花种子",
    "image": "../images/picturebook/fleet-lotus_seeds.png",
    "category": "material",
    "desc": "这些种子的植物生长在深水附近。根吸取水分，烹饪时使用这些种子会增加你的移动速度。"
  },
  {
    "id": 173,
    "name": "强效香蕉",
    "image": "../images/picturebook/mighty_bananas.png",
    "category": "material",
    "desc": "这种水果主要生长在法伦地区的热带森林。作为食材使用，制作出的菜肴会暂时提高你的攻击力。"
  },
  {
    "id": 174,
    "name": "海拉尔蘑菇",
    "image": "../images/picturebook/hylian_shroom.png",
    "category": "material",
    "desc": "在海拉尔附近的树木附近常见的蘑菇。食用可恢复半颗心。"
  },
  {
    "id": 175,
    "name": "恩度拉蘑菇",
    "image": "../images/picturebook/endura_shroom.png",
    "category": "material",
    "desc": "一种罕见的橙黄色蘑菇。食用前烹饪可以暂时增加你的耐力极限。"
  },
  {
    "id": 176,
    "name": "活力蘑菇",
    "image": "../images/picturebook/stamella_shroom.png",
    "category": "material",
    "desc": "在森林附近的树木旁边生长的绿色蘑菇。充满天然能量。烹饪后释放其恢复体力的特性。"
  },
  {
    "id": 177,
    "name": "生命松露",
    "image": "../images/picturebook/hearty_truffle.png",
    "category": "material",
    "desc": "这种稀有蘑菇散发着浓郁的香气。食用前烹饪可以暂时增加你的最大心脏。"
  },
  {
    "id": 178,
    "name": "大生命松露",
    "image": "../images/picturebook/big_hearty_truffle.png",
    "category": "material",
    "desc": "多年来一直未被采摘，使得这种丰盛的心菌长得相当大。充满营养。烹饪成菜肴后，会暂时增加你的最大心脏。"
  },
  {
    "id": 179,
    "name": "冷蘑菇",
    "image": "../images/picturebook/chillshroom.png",
    "category": "material",
    "desc": "经常在寒冷气候的松树底部发现这些蘑菇。触感凉爽，可用于烹饪让你即使在干旱地区也能保持凉爽的菜肴。"
  },
  {
    "id": 180,
    "name": "日蘑菇",
    "image": "../images/picturebook/sunshroom.png",
    "category": "material",
    "desc": "在炎热气候中生长的鲜红蘑菇。富含热能，可用于烹饪让你在严寒中持久的菜肴。"
  },
  {
    "id": 181,
    "name": "闪电蘑菇",
    "image": "../images/picturebook/zapshroom.png",
    "category": "material",
    "desc": "这种蘑菇在格鲁达地区野生。帽子天然绝缘，所以在烹饪中将提供对电的防护。"
  },
  {
    "id": 182,
    "name": "突蘑",
    "image": "../images/picturebook/rushroom.png",
    "category": "material",
    "desc": "几乎可以在任何地方生长的蘑菇，但更喜欢在天花板和悬崖上。在食用前烹饪，可暂时增加你的移动速度。"
  },
  {
    "id": 183,
    "name": "锋刃蘑菇",
    "image": "../images/picturebook/razorshroom.png",
    "category": "material",
    "desc": "这种蘑菇以帽子上的自然切口而闻名。食用后激发你的竞争精神。在烹饪中使用可制备出增加力量的菜肴。"
  },
  {
    "id": 184,
    "name": "铁蘑",
    "image": "../images/picturebook/ironshroom.png",
    "category": "material",
    "desc": "这种蘑菇的帽子非常坚硬。在烹饪中使用可制备出增加你防御的菜肴。"
  },
  {
    "id": 185,
    "name": "寂静蘑菇",
    "image": "../images/picturebook/silent_shroom.png",
    "category": "material",
    "desc": "这是一种在森林夜晚微微发光的奇怪蘑菇。烹饪成菜肴后，释放其帽子中的营养物质，制作出的餐点能让你悄悄移动。"
  },
  {
    "id": 186,
    "name": "海拉尔草",
    "image": "../images/picturebook/hyrule_herb.png",
    "category": "material",
    "desc": "这种健康草药在海拉尔平原茂盛生长。在食用前烹饪，可以增加其恢复心脏数量。"
  },
  {
    "id": 187,
    "name": "元气萝卜",
    "image": "../images/picturebook/hearty_radish.png",
    "category": "material",
    "desc": "这是一种在阳光明媚的平原上生长最好的稀有萝卜。在食用前烹饪，可以暂时增加你的最大心脏。"
  },
  {
    "id": 188,
    "name": "巨大元气萝卜",
    "image": "../images/picturebook/big_hearty_radish.png",
    "category": "material",
    "desc": "这种元气萝卜比普通的萝卜大得多。富含振奋性化合物，烹饪成菜肴后，能暂时增加你的最大心脏。"
  },
  {
    "id": 189,
    "name": "清凉红花",
    "image": "../images/picturebook/cool_safflina.png",
    "category": "material",
    "desc": "这种药用植物生长在高海拔地区，如希巴或格鲁达地区的山脉。烹饪成菜肴后，能暂时增加你的耐热能力。"
  },
  {
    "id": 190,
    "name": "温暖红花",
    "image": "../images/picturebook/warm_safflina.png",
    "category": "material",
    "desc": "这种药用植物生长在炎热的地区，如格鲁达沙漠。触感温暖，烹饪成菜肴后，能增加你的耐寒能力。"
  },
  {
    "id": 191,
    "name": "电红花",
    "image": "../images/picturebook/electric_safflina.png",
    "category": "material",
    "desc": "这种药用植物在格鲁达沙漠生长得很多。其奇特的纤维导电，烹饪成菜肴后，能增加你的电气防护。"
  },
  {
    "id": 192,
    "name": "迅捷胡萝卜",
    "image": "../images/picturebook/swift_carrot.png",
    "category": "material",
    "desc": "这种胡萝卜在卡卡里科村广泛种植。烹饪成菜肴后，能增强腿部和臀部力量，帮助提高你的移动速度。"
  },
  {
    "id": 193,
    "name": "恩度拉胡萝卜",
    "image": "../images/picturebook/endura_carrot.png",
    "category": "material",
    "desc": "作为药用植物，这种胡萝卜含有大量的滋养能量。烹饪成菜肴后，能提高你的耐力超过极限。"
  },
  {
    "id": 194,
    "name": "强壮南瓜",
    "image": "../images/picturebook/fortified_pumpkin.png",
    "category": "material",
    "desc": "这是在村庄田地里种植的极其坚硬的南瓜。烹饪时，这种坚硬性表现出色，大幅提升防御。"
  },
  {
    "id": 195,
    "name": "速速紫罗兰",
    "image": "../images/picturebook/swift_violet.png",
    "category": "material",
    "desc": "这种富含活力的花主要在悬崖上开花。烹饪成菜肴后，其中的滋养化合物会增加你的移动速度。"
  },
  {
    "id": 196,
    "name": "大剑蓟",
    "image": "../images/picturebook/mighty_thistle.png",
    "category": "material",
    "desc": "这种药用植物以其锋利的刺和果实而闻名。果实中含有的化合物在烹饪成菜肴后，能提高你的攻击力。"
  },
  {
    "id": 197,
    "name": "铠甲草",
    "image": "../images/picturebook/armoranth.png",
    "category": "material",
    "desc": "这种坚韧的药用植物无法被打破，但可以烹饪。其耐用而灵活的纤维在烹饪成菜肴后，能提高你的防御。"
  },
  {
    "id": 198,
    "name": "蓝夜兰",
    "image": "../images/picturebook/blue_nightshade.png",
    "category": "material",
    "desc": "这种植物生长在海拉尔的安静地区。夜晚发出柔和的光辉。烹饪时使用，可以提高你的潜行能力。"
  },
  {
    "id": 199,
    "name": "静谧公主",
    "image": "../images/picturebook/silent_princess.png",
    "category": "material",
    "desc": "据说这种可爱的花曾是海拉尔公主的最爱。曾被认为已经灭绝，但最近在野外发现了生长。"
  },
  {
    "id": 200,
    "name": "迅猛蜜蜂蜜",
    "image": "../images/picturebook/courser_bee_honey.png",
    "category": "material",
    "desc": "直接从蜂巢中取得的蜜蜂蜜充满营养。烹饪成菜肴后，释放这些营养的潜力，并提供耐力恢复效果。"
  }
]