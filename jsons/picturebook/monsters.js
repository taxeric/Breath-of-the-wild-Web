let monstersData = [
  {
    "id": 84,
    "name": "丘丘",
    "image": "../images/picturebook/chuchu.png",
    "category": "monster",
    "desc": "这是一种基于凝胶的低级怪物，可以在海拉尔各地找到。它往往会从地面或树上向毫无防备的猎物发动攻击。它的强度随大小而异，根据丘丘是否被加热、冷却或触电而产生的果冻类型也会有所不同。"
  },
  {
    "id": 85,
    "name": "火丘丘",
    "image": "../images/picturebook/fire_chuchu.png",
    "category": "monster",
    "desc": "这种低级凝胶怪物被火焰包围。其强度随大小而异。它往往在被近距离攻击时爆炸，因此建议使用矛、箭和其他远程武器。"
  },
  {
    "id": 86,
    "name": "冰丘丘",
    "image": "../images/picturebook/ice_chuchu.png",
    "category": "monster",
    "desc": "这种低级凝胶怪物被冰冷的空气包围。其强度随大小而异。它往往在被近距离攻击时爆炸，因此建议使用矛、箭和其他远程武器。"
  },
  {
    "id": 87,
    "name": "电丘丘",
    "image": "../images/picturebook/electric_chuchu.png",
    "category": "monster",
    "desc": "这种低级凝胶怪物被电气包围。其强度随大小而异。它往往在被近距离攻击时爆炸，因此建议使用矛、箭和其他远程武器。"
  },
  {
    "id": 88,
    "name": "奇斯",
    "image": "../images/picturebook/keese.png",
    "category": "monster",
    "desc": "这种夜行的蝙蝠状物种的不可预测的飞行路径可能会让与它们战斗成为一种讨厌的事情，但它们足够弱，可以一击毙命。有时它们会成群袭击，但即使如此，一个攻击也足以使它们离开。"
  },
  {
    "id": 89,
    "name": "火奇斯",
    "image": "../images/picturebook/fire_keese.png",
    "category": "monster",
    "desc": "这些蝙蝠状奇斯身上燃烧着火焰，使它们比标准类型更加危险。它们能够点燃它们触碰到的任何东西。"
  },
  {
    "id": 90,
    "name": "冰奇斯",
    "image": "../images/picturebook/ice_keese.png",
    "category": "monster",
    "desc": "这些蝙蝠状奇斯身上弥漫着强烈的寒冷空气，使它们比标准类型更加危险。它们能够冻结它们触碰到的任何东西。"
  },
  {
    "id": 91,
    "name": "电奇斯",
    "image": "../images/picturebook/electric_keese.png",
    "category": "monster",
    "desc": "这些蝙蝠状奇斯身上弥漫着电气，使它们比标准类型更加危险。它们能够使它们触碰到的任何东西受到电击。"
  },
  {
    "id": 92,
    "name": "水章鱼气球",
    "image": "../images/picturebook/water_octorok.png",
    "category": "monster",
    "desc": "尽管它们大部分时间都在水中，但下雨时气压下降会导致这种章鱼状怪物内部的气囊膨胀，将它们抬升到空中。它们吐出的岩石可以用盾牌弹回。"
  },
  {
    "id": 93,
    "name": "森林章鱼气球",
    "image": "../images/picturebook/forest_octorok.png",
    "category": "monster",
    "desc": "尽管最初是水生物种，但这种类型已经适应了森林生活。它们藏在树木间，伪装成草或不起眼的灌木，然后在有人经过时发动攻击。"
  },
  {
    "id": 94,
    "name": "岩石章鱼气球",
    "image": "../images/picturebook/rock_octorok.png",
    "category": "monster",
    "desc": "这种章鱼状怪物生活在火山地区。当它们吸气时，它们准备吐出火烧岩石，但也有吸入武器或炸弹的记录。"
  },
  {
    "id": 95,
    "name": "雪山章鱼气球",
    "image": "../images/picturebook/snow_octorok.png",
    "category": "monster",
    "desc": "这些章鱼状怪物生活在雪地中，伪装成草。当有人经过时，它们会迅速行动并通过吐雪球来攻击。"
  },
  {
    "id": 96,
    "name": "宝箱章鱼气球",
    "image": "../images/picturebook/treasure_octorok.png",
    "category": "monster",
    "desc": "这些特别聪明的怪物埋在深深的沙子或雪中，伪装成宝箱。任何靠近宝箱的人都会受到攻击。这些宝箱不具有磁性，证明它们实际上是这些怪物身体的一部分。"
  },
  {
    "id": 97,
    "name": "火法师",
    "image": "../images/picturebook/fire_wizzrobe.png",
    "category": "monster",
    "desc": "这些施法怪物可以在海拉尔各地找到。它们使用火杖投掷火球或召唤着火的怪物，并且已知它们会显著提高周围温度。打败法师后，天气将恢复正常。"
  },
  {
    "id": 98,
    "name": "冰法师",
    "image": "../images/picturebook/ice_wizzrobe.png",
    "category": "monster",
    "desc": "这些施法怪物可以在海拉尔各地找到。它们使用冰杖制造冰冷的空气或召唤冻结的怪物，并且已知它们会引起暴风雪，严重降低周围温度。打败法师后，天气将恢复正常。"
  },
  {
    "id": 99,
    "name": "电法师",
    "image": "../images/picturebook/electric_wizzrobe.png",
    "category": "monster",
    "desc": "这些施法怪物可以在海拉尔各地找到。它们使用闪电杖投掷电球或召唤电力充沛的怪物，并且已知它们会引发雷暴。打败法师后，天气将恢复正常。"
  },
  {
    "id": 100,
    "name": "陨石法师",
    "image": "../images/picturebook/meteo_wizzrobe.png",
    "category": "monster",
    "desc": "这些施法怪物可以在海拉尔各地找到。它们使用陨石杖投掷火球或召唤着火的怪物，并且已知它们会显著提高周围温度。打败法师后，天气将恢复正常。"
  },
  {
    "id": 101,
    "name": "冰爆法师",
    "image": "../images/picturebook/blizzrobe.png",
    "category": "monster",
    "desc": "这些施法怪物可以在海拉尔各地找到。它们使用冰风暴杖制造冰冷的空气或召唤冻结的怪物，并且已知它们会引起暴风雪，严重降低周围温度。打败法师后，天气将恢复正常。"
  },
  {
    "id": 102,
    "name": "雷电法师",
    "image": "../images/picturebook/thunder_wizzrobe.png",
    "category": "monster",
    "desc": "这些施法怪物可以在海拉尔各地找到。它们使用雷暴杖投掷电球或召唤电力充沛的怪物，并且已知它们会引发雷暴。打败法师后，天气将恢复正常。"
  },
  {
    "id": 103,
    "name": "波克布林",
    "image": "../images/picturebook/bokoblin.png",
    "category": "monster",
    "desc": "这种普遍的物种遍布整个海拉尔。在大灾厄之后，一些已经联合起来形成了强盗团伙。虽然不是很聪明，但至少足够聪明以狩猎野兽并烤肉为食物。虽然它们通常是凶猛的食肉动物，但它们实际上也喜欢水果。"
  },
  {
    "id": 104,
    "name": "蓝色波克布林",
    "image": "../images/picturebook/blue_bokoblin.png",
    "category": "monster",
    "desc": "这种普遍的物种遍布整个海拉尔。它们比红色的波克布林更强壮，配备了更强大的武器 - 也更聪明一些。至少，它们已经想出了可以简单地踢开遥控炸弹以避免爆炸的方法。"
  },
  {
    "id": 105,
    "name": "黑色波克布林",
    "image": "../images/picturebook/black_bokoblin.png",
    "category": "monster",
    "desc": "尽管波克布林通常很讨厌，但黑波克布林属于最危险的类型之一。它们极具韧性，许多人配备了更先进的武器。"
  },
  {
    "id": 106,
    "name": "骷髅波克布林",
    "image": "../images/picturebook/stalkoblin.png",
    "category": "monster",
    "desc": "在夜晚，波克布林的尸体会出现。虽然它们足够脆弱，只需一击即可崩溃成为一堆骨头，但只要头骨保持完好，它们就会继续重新组装并继续战斗。有时身体会拿错头骨，但这似乎不是问题......"
  },
  {
    "id": 107,
    "name": "白银波克布林",
    "image": "../images/picturebook/silver_bokoblin.png",
    "category": "monster",
    "desc": "妄称这些银色波克布林为一种讨厌的东西是愚蠢的。它们受到甘末的邪恶魔法影响，因此比黑波克布林更强大。它们之所以被称为“银色”，不仅因为它们的颜色，还因为它们的稀有性。紫色的标记使它们更加显眼。"
  },
  {
    "id": 108,
    "name": "莫力布林",
    "image": "../images/picturebook/moblin.png",
    "category": "monster",
    "desc": "这种重量级的怪物物种遍布整个海拉尔。它们在身体非常强壮，腿部足够强壮，可以抵抗炸弹爆炸的力量。它们比波克布林危险得多。事实上，莫力布林已经被证明可以抓起波克布林并将它们投掷成临时的投射武器。"
  },
  {
    "id": 109,
    "name": "蓝色莫力布林",
    "image": "../images/picturebook/blue_moblin.png",
    "category": "monster",
    "desc": "这些重量级怪物遍布整个海拉尔。它们比标准莫力布林更坚韧，通常配备更强大的武器。"
  },
  {
    "id": 110,
    "name": "黑莫力布林",
    "image": "../images/picturebook/black_moblin.png",
    "category": "monster",
    "desc": "这些重量级怪物遍布整个海拉尔，是最危险的莫力布林之一。它们极具韧性，并且通常配备一些莫力布林能携带的最强大的武器。"
  },
  {
    "id": 111,
    "name": "骷髅莫力布林",
    "image": "../images/picturebook/stalmoblin.png",
    "category": "monster",
    "desc": "在夜晚，莫力布林的遗骸会出现。即使现在它们只是一堆骨头，它们也像以前一样狡猾，所以他们将骨头堆积在一起。然而，只要头骨保持完好，它们就会继续重新组装并继续战斗。"
  },
  {
    "id": 112,
    "name": "白银莫力布林",
    "image": "../images/picturebook/silver_moblin.png",
    "category": "monster",
    "desc": "所有莫力布林中最强大的，甘末的邪恶魔法使它们超越了甚至黑莫力布林的力量和韧性。它们之所以被称为“银色”，既是因为它们的身体颜色，也是因为它们的稀有性。紫色的图案使它们更加突出。"
  },
  {
    "id": 113,
    "name": "绿色蜥蜴",
    "image": "../images/picturebook/lizalfos.png",
    "category": "monster",
    "desc": "这些机智的蜥蜴样怪物遍布整个海拉尔。它们是一种狡猾的物种，潜伏在水下或利用伪装与环境融为一体进行伏击。此外，它们永远不会睡觉。它们天生是肉食动物，但偶尔也会享受一两只昆虫。"
  },
  {
    "id": 114,
    "name": "蓝色蜥蜴",
    "image": "../images/picturebook/blue_lizalfos.png",
    "category": "monster",
    "desc": "这些机智的蜥蜴样怪物遍布整个海拉尔。与绿色蜥蜴样相比，许多这些携带更强大的武器并且通常更坚韧。"
  },
  {
    "id": 115,
    "name": "黑色蜥蜴",
    "image": "../images/picturebook/black_lizalfos.png",
    "category": "monster",
    "desc": "这些机智的蜥蜴样怪物遍布整个海拉尔。这个特定类型往往携带一些相当强大的武器，因此它们是最危险的蜥蜴样之一。"
  },
  {
    "id": 116,
    "name": "骷髅蜥蜴",
    "image": "../images/picturebook/stalizalfos.png",
    "category": "monster",
    "desc": "在夜晚，蜥蜴样的遗骸会出现。即使现在它们只是一堆骨头，它们也像以前一样狡猾，所以他们将骨头堆积在一起。然而，只要头骨保持完好，它们就会继续重新组装并继续战斗。它们有时会拿错头骨，但它们似乎从不介意......"
  },
  {
    "id": 117,
    "name": "火蜥蜴",
    "image": "../images/picturebook/fire-breath_lizalfos.png",
    "category": "monster",
    "desc": "这些机智的蜥蜴样怪物遍布整个海拉尔。它们的火焰吐息使它们非常危险，但暴露在寒冷中会使它们立即死亡。它们主要生活在火山地区，但也曾在阿卡拉地区被发现。"
  },
  {
    "id": 118,
    "name": "冰蜥蜴",
    "image": "../images/picturebook/ice-breath_lizalfos.png",
    "category": "monster",
    "desc": "这些机智的蜥蜴样怪物遍布整个海拉尔。它们吐出的冰块使它们特别讨厌，但接触火源会使它们立即死亡。它们主要生活在雪山上。"
  },
  {
    "id": 119,
    "name": "电蜥蜴",
    "image": "../images/picturebook/electric_lizalfos.png",
    "category": "monster",
    "desc": "这些机智的蜥蜴样怪物遍布整个海拉尔。它们可以从身体发射强大的电流，因此不要靠得太近。它们的角充满了电，如果被箭射中，电流将放电并引向附近的区域。它们倾向于生活在沙漠气候中。"
  },
  {
    "id": 120,
    "name": "银蜥蜴人",
    "image": "../images/picturebook/silver_lizalfos.png",
    "category": "monster",
    "desc": "这些蜥蜴人受到甘恩邪恶魔法的影响，成为了所有蜥蜴人中最强大的存在。它们被称为“银蜥蜴人”不仅因为它们独特的着色，还因为它们的稀有性。紫色的图案使它们更加引人注目。"
  },
  {
    "id": 121,
    "name": "獨角獸鬼",
    "image": "../images/picturebook/lynel.png",
    "category": "monster",
    "desc": "这些可怕的怪物自古以来就生活在海拉尔。它们拥有强烈的智慧、韧性和力量，使它们成为全地最危险的怪物之一。这一事实加上它们对所有元素的自然抵抗力，使得只有准备充分的人才明智地挑战独角兽鬼。"
  },
  {
    "id": 122,
    "name": "蓝鬃独角兽鬼",
    "image": "../images/picturebook/blue-maned_lynel.png",
    "category": "monster",
    "desc": "这些可怕的怪物自古以来就生活在海拉尔。与标准的独角兽鬼相比，那些有蓝色鬃毛的更为强大，配备了更强大的武器。与独角兽鬼对抗是不明智的，但如果你必须这样做，确保你做好了充分的准备。"
  },
  {
    "id": 123,
    "name": "白鬃独角兽鬼",
    "image": "../images/picturebook/white-maned_lynel.png",
    "category": "monster",
    "desc": "这些可怕的怪物自古以来就生活在海拉尔。它们能够喷火，使得白鬃独角兽鬼成为最强大的物种之一；它们的每一次攻击都是对坟墓的邀请。对于这一品种，几乎没有目击者的账户，因为白鬃独角兽鬼甚至不允许普通路人逃脱生命的威胁。"
  },
  {
    "id": 124,
    "name": "银鬃独角兽鬼",
    "image": "../images/picturebook/silver_lynel.png",
    "category": "monster",
    "desc": "不要轻视银鬃独角兽鬼。它们受到甘恩邪恶魔法的影响，因此在独角兽鬼物种中是最强大的，甚至超过了白鬃独角兽鬼的力量。术语“银”不仅表示它们的颜色，还表示它们的稀有性。紫色的条纹使它们更加引人注目。"
  },
  {
    "id": 125,
    "name": "守护者猎手",
    "image": "../images/picturebook/guardian_stalker.png",
    "category": "monster",
    "desc": "古代海拉尔的Sheikah族人开发出这个武器来对抗甘恩。它的六条腿使其与大多数现代交通工具相比具有非同寻常的机动性，其强大的激光提供了比传统武器更大的攻击能力。摧毁它的腿会严重降低其机动性。"
  },
  {
    "id": 126,
    "name": "守护者飞行守望者",
    "image": "../images/picturebook/guardian_skywatcher.png",
    "category": "monster",
    "desc": "古代海拉尔的Sheikah族人开发出这个武器来对抗甘恩。这个飞行模型是步行型的改进，可以在空中进行攻击或监视。摧毁螺旋桨会使其着陆。"
  },
  {
    "id": 127,
    "name": "守护者炮台",
    "image": "../images/picturebook/guardian_turret.png",
    "category": "monster",
    "desc": "古代海拉尔的Sheikah族人开发出这个武器来对抗甘恩。这个固定模型被用于保卫重要建筑。其攻击力与其他守护者相当，省略了腿部使制造成本降低。"
  },
  {
    "id": 128,
    "name": "哨兵",
    "image": "../images/picturebook/sentry.png",
    "category": "monster",
    "desc": "这些从Divine Beast Vah Rudania派遣出去的哨兵配备有可以发现入侵者的探照灯。"
  },
  {
    "id": 129,
    "name": "腐烂的守护者",
    "image": "../images/picturebook/decayed_guardian.png",
    "category": "monster",
    "desc": "古代海拉尔的Sheikah族人开发出这个武器来对抗甘恩，但在大灾厄期间被摧毁。经过多年的风吹雨打和忽视，它处于失修状态。小心接近；一些废弃的模型已知在接近时从停滞状态苏醒并发动攻击。"
  },
  {
    "id": 130,
    "name": "守护者斥候 I",
    "image": "../images/picturebook/guardian_scout_i.png",
    "category": "monster",
    "desc": "守护者最初是由一种古代文明设计来对抗甘恩的，但这些较小的模型被放置在神社作为其中的试炼之一。多条腿和激光功能被缩小，但基本上保持不变。"
  },
  {
    "id": 131,
    "name": "守护者斥候 II",
    "image": "../images/picturebook/guardian_scout_ii.png",
    "category": "monster",
    "desc": "尽管最初是由古代文明设计来对抗甘恩的，但这些缩小版的守护者被放置在神社中作为试炼的一部分。除了激光功能外，这个特殊的模型还设计为使用武器，以进一步测试进行试炼者的战斗能力。要与这些之一正面交锋需要一些严肃的技能。"
  },
  {
    "id": 132,
    "name": "守护者斥候 III",
    "image": "../images/picturebook/guardian_scout_iii.png",
    "category": "monster",
    "desc": "尽管最初是由古代文明设计来对抗甘恩的，但这些缩小版的守护者被放置在神社中作为试炼的一部分。这个模型配备了双刀功能，以进一步测试进行试炼者的战斗能力。要战胜这个，需要灵活的战士。"
  },
  {
    "id": 133,
    "name": "守护者斥候 IV",
    "image": "../images/picturebook/guardian_scout_iv.png",
    "category": "monster",
    "desc": "古代文明最初是为了对抗甘恩而设计的守护者，但后来将它们缩小并放置在神社中作为试炼的一部分。这个模型非常坚固，配备了三刀功能，使其能够挥舞三把武器。这将对任何想要成为英雄的人进行考验。与这些之一交战需要相当的力量和信心。"
  },
  {
    "id": 134,
    "name": "弓足千金",
    "image": "../images/picturebook/yiga_footsoldier.png",
    "category": "monster",
    "desc": "弯刀族最低级别的成员。他们被派遣到整个海拉尔，只有一个任务：寻找林克并结束他的生命。他们很狡猾，有时会假装成普通的旅行者或村民来偷袭你。小心你遇到的可疑人物。他们非常灵活，携带弓和单手剑。"
  },
  {
    "id": 135,
    "name": "弓足藤长",
    "image": "../images/picturebook/yiga_blademaster.png",
    "category": "monster",
    "desc": "这些是弯刀族的精锐士兵。他们喜欢风刃剑，尽管身材庞大，但非常灵活。在这个弯刀族的级别上，他们掌握了一种可以操控大地的技巧。通过打击地面，他们可以创建石柱和气流爆炸。"
  },
  {
    "id": 136,
    "name": "库卡大师",
    "image": "../images/picturebook/master_kohga.png",
    "category": "monster",
    "desc": "弯刀族的领袖，这个只有一个目标的团体：消灭林克。他派遣手下在海拉尔各地寻找你，但往往会花大部分时间打瞌睡和懒散。尽管如此，他在奥术艺术上的精通赢得了他深深的尊重。即使他死了，他的追随者也永远不会放弃他们唯一的任务。"
  },
  {
    "id": 137,
    "name": "马兹·科西亚僧侣",
    "image": "../images/picturebook/monk_maz_koshia.png",
    "category": "monster",
    "desc": "对于希望控制神兽的英雄来说，这位僧侣是值得信任的仲裁者，是女神海莉亚的启示。作为最后一部分的最终试炼，僧侣提供了一场古老技巧的挑战。"
  },
  {
    "id": 138,
    "name": "岩石巨人",
    "image": "../images/picturebook/stone_talus.png",
    "category": "monster",
    "desc": "这个巨大的怪物天然伪装成岩石形态。剑和箭都无法穿透它坚硬的外表，但一个狡猾的冒险者知道要爬上它的身体并攻击从其顶端生长的矿石。"
  },
  {
    "id": 139,
    "name": "岩石巨人（发光）",
    "image": "../images/picturebook/stone_talus_(luminous).png",
    "category": "monster",
    "desc": "这个巨大的怪物天然伪装成岩石形态。剑和箭都无法穿透它坚硬的外表，但一个狡猾的冒险者知道要爬上它的身体并攻击从其顶端生长的矿石。与普通的岩石巨人不同，这种类型的矿床主要由发光石组成。"
  },
  {
    "id": 140,
    "name": "岩石巨人（稀有）",
    "image": "../images/picturebook/stone_talus_(rare).png",
    "category": "monster",
    "desc": "这个巨大的怪物天然伪装成岩石形态。剑和箭都无法穿透它坚硬的外表，但一个狡猾的冒险者知道要爬上它的身体并攻击从其顶端生长的矿石。与普通的岩石巨人不同，这种类型的矿床含有大量的宝贵矿石。"
  },
  {
    "id": 141,
    "name": "火岩巨人",
    "image": "../images/picturebook/igneo_talus.png",
    "category": "monster",
    "desc": "这个巨大的怪物天然伪装成熔岩石形态。剑和箭都无法穿透它火红的外表。仅仅触摸它炽热的身体就可能被严重灼伤，但如果你能用一些东西来冷却它的火焰，也许你能攀爬上去。"
  },
  {
    "id": 142,
    "name": "冰岩巨人",
    "image": "../images/picturebook/frost_talus.png",
    "category": "monster",
    "desc": "这个巨大的怪物天然伪装成冻结的岩石形态。剑和箭都无法穿透它寒冷的外表。仅仅触摸它冰冷的身体就可能导致严重的冻伤，但如果你能用一些东西来融化它的冰外壳，也许你能攀爬上去。"
  },
  {
    "id": 143,
    "name": "岩石小魔精",
    "image": "../images/picturebook/stone_pebblit.png",
    "category": "monster",
    "desc": "一个非常年轻的岩石巨人。它们的身体会随着成熟而变得坚硬，成年后变得坚硬如石块。然而，作为儿童，它们的身体足够轻，可以被提起，并且足够脆弱，可以被扔掉时破碎。"
  },
  {
    "id": 144,
    "name": "火岩小魔精",
    "image": "../images/picturebook/igneo_pebblit.png",
    "category": "monster",
    "desc": "一个非常年轻的火岩巨人。它们的身体会随着成熟而变得坚硬，并在成年时完全变成熔岩。然而，作为儿童时，尽管仍然覆盖着火焰，它们的身体足够脆弱且足够轻，可以被炸弹的冲击吹走。"
  },
  {
    "id": 145,
    "name": "冰岩小魔精",
    "image": "../images/picturebook/frost_pebblit.png",
    "category": "monster",
    "desc": "一个非常年轻的冰岩巨人。它们的身体会随着成熟而变得坚硬，并在成年时完全由冰制成。然而，作为儿童时，它们的身体非常脆弱，足够轻，可以被炸弹的冲击吹走。"
  },
  {
    "id": 146,
    "name": "火岩巨人泰坦",
    "image": "../images/picturebook/igneo_talus_titan.png",
    "category": "monster",
    "desc": "这是一种伪装成熔岩石的火岩巨人亚种。在岩浆中生活多年，然后以巨大的尺寸出现。它的力量非常强大，并散发着大量的热量，在其周围产生持续的上升气流。这个怪物非常可怕，赢得了泰坦的称号。"
  },
  {
    "id": 147,
    "name": "海诺克斯",
    "image": "../images/picturebook/hinox.png",
    "category": "monster",
    "desc": "作为生活在海拉尔的最大怪物，海诺克斯主要生活在森林地区。面对它时，对周围环境的敏感意识至关重要，因为海诺克斯以将整棵树从地面上撕下并用作武器而闻名。灵巧的手可以从它们佩戴的项链上偷走武器。"
  },
  {
    "id": 148,
    "name": "蓝色海诺克斯",
    "image": "../images/picturebook/blue_hinox.png",
    "category": "monster",
    "desc": "作为生活在海拉尔的最大怪物，海诺克斯主要生活在森林地区。面对它时，对周围环境的敏感意识至关重要，因为海诺克斯以将整棵树从地面上撕下并用作武器而闻名。蓝色海诺克斯穿着护腿，可以被烧掉以暴露它们的脚。灵巧的手可以从它们佩戴的项链上偷走武器。"
  },
  {
    "id": 149,
    "name": "黑色海诺克斯",
    "image": "../images/picturebook/black_hinox.png",
    "category": "monster",
    "desc": "作为生活在海拉尔的最大怪物，黑色海诺克斯主要生活在森林地区。面对它时，对周围环境的敏感意识至关重要，因为黑色海诺克斯以将整棵树从地面上撕下并用作武器而闻名。黑色海诺克斯穿着金属护胫，对电导非常好。灵巧的手可以从它们佩戴的项链上偷走武器。"
  },
  {
    "id": 150,
    "name": "尸巨人",
    "image": "../images/picturebook/stalnox.png",
    "category": "monster",
    "desc": "曾经是一个被称为海诺克斯的巨大怪物的残骸。这些骷髅野兽只在夜晚出现。与它们生前的同类一样，尸巨人会把整棵树从地面上撕下来用作武器。此外，即使它一开始看起来被击败了，只要它的眼睛保持完好，它就会不断回来。"
  },
  {
    "id": 151,
    "name": "莫尔度迦",
    "image": "../images/picturebook/molduga.png",
    "category": "monster",
    "desc": "这个庞大的怪物在沙漠的沙下游泳。它大部分时间都潜藏在水下，但如果它察觉到声音，它就会冲出水面，用它能够抓住的任何东西为食。在怀疑该地区可能有莫尔度迦时，随意奔跑可能是危险的。"
  },
  {
    "id": 152,
    "name": "莫尔度王",
    "image": "../images/picturebook/molduking.png",
    "category": "monster",
    "desc": "这个庞大的怪物在沙漠的沙下游泳。这是莫尔度迦的一个亚种，通过在地下沉睡数百年来积蓄了大量能量。它的力量优于莫尔度迦，因为它的皮肤富含铁，可以充当保护屏障。"
  },
  {
    "id": 153,
    "name": "迪纳尔",
    "image": "../images/picturebook/dinraal.png",
    "category": "monster",
    "desc": "火之灵魂化身成了这条巨龙。它居住在艾尔丁地区，据说自古以来一直侍奉着力量之泉。有句古老的谚语说：“龙在太阳开始下山时升上天空”，但在当前时代没有人见过这一幕。覆盖身体的火焰使得靠近它很危险，但迪纳尔并不对人类怀有敌意。"
  },
  {
    "id": 154,
    "name": "纳伊德拉",
    "image": "../images/picturebook/naydra.png",
    "category": "monster",
    "desc": "冰之灵魂化身成了这条巨龙。它居住在拉奈鲁地区，据说自古以来一直侍奉着智慧之泉。有句古老的谚语说：“龙在太阳开始下山时升上天空”，但在当前时代没有人见过这一幕。覆盖身体的冰使得靠近它很危险，但纳伊德拉并不对人类怀有敌意。"
  },
  {
    "id": 155,
    "name": "法洛斯",
    "image": "../images/picturebook/farosh.png",
    "category": "monster",
    "desc": "雷之灵魂化身成了这条巨龙。它居住在法伦地区，据说自古以来一直侍奉着勇气之泉。有句古老的谚语说：“龙在太阳开始下山时升上天空”，但在当前时代没有人见过这一幕。覆盖身体的电使得靠近它很危险，但法洛斯并不对人类怀有敌意。"
  },
  {
    "id": 156,
    "name": "被诅咒的独眼鬼兵",
    "image": "../images/picturebook/cursed_bokoblin.png",
    "category": "monster",
    "desc": "黑暗之力赋予了这些独眼鬼兵头骨一种生命。它们毫无生前所属独眼鬼兵的智慧，现在只存在于攻击任何靠近的东西。"
  },
  {
    "id": 157,
    "name": "被诅咒的大鬼兵",
    "image": "../images/picturebook/cursed_moblin.png",
    "category": "monster",
    "desc": "黑暗之力赋予了这些大鬼兵头骨一种可怜的不死生命。它们唯一保留下来的是它们生前所有大鬼兵所固有的凶猛性格，因此它们会攻击任何靠近的人。"
  },
  {
    "id": 158,
    "name": "被诅咒的蜥蜴人",
    "image": "../images/picturebook/cursed_lizalfos.png",
    "category": "monster",
    "desc": "黑暗之力赋予了这些蜥蜴人头骨一种可悲的不死生命。只有它们生前狡猾的一面保留下来，使它们比独眼鬼兵头骨更快。它们会毫不考虑地攻击任何靠近的人。"
  },
  {
    "id": 159,
    "name": "雷之加农",
    "image": "../images/picturebook/thunderblight_ganon.png",
    "category": "monster",
    "desc": "这个 Ganon 的幽灵袭击了神兽瓦尔·纳博利斯，并导致了冠军乌尔波萨的死亡。它擅长快速、以雷为基础的攻击。"
  },
  {
    "id": 160,
    "name": "火之加农",
    "image": "../images/picturebook/fireblight_ganon.png",
    "category": "monster",
    "desc": "这个 Ganon 的幽灵袭击了神兽瓦尔·鲁达尼亚，并导致了冠军达鲁克的死亡。它使用大剑和火魔法进行攻击。"
  },
  {
    "id": 161,
    "name": "水之加农",
    "image": "../images/picturebook/waterblight_ganon.png",
    "category": "monster",
    "desc": "这个 Ganon 的幽灵袭击了神兽瓦尔·鲁塔，并导致了冠军米法的死亡。它使用长矛和冰魔法进行攻击。"
  },
  {
    "id": 162,
    "name": "风之加农",
    "image": "../images/picturebook/windblight_ganon.png",
    "category": "monster",
    "desc": "这个 Ganon 的幽灵袭击了神兽瓦尔·梅多，并导致了冠军瑞瓦利的死亡。它擅长远程的风属性攻击。"
  },
  {
    "id": 163,
    "name": "灾厄加农",
    "image": "../images/picturebook/calamity_ganon.png",
    "category": "monster",
    "desc": "这是在海拉尔历史上一再出现的黑暗之源。它被称为许多名字，从“邪恶大王”到“灾厄”都有。在 Link 醒来后，它试图在虫茧中再生一个物理形态，但被迫以不完整的状态面对他。"
  },
  {
    "id": 164,
    "name": "黑暗加农",
    "image": "../images/picturebook/dark_beast_ganon.png",
    "category": "monster",
    "desc": "在 Link 击败 Ganon 后，剩余的黑暗力量汇聚在一起形成了这个野兽般的生物。它的外观和邪恶的魔法赢得了它黑暗兽的名号。这个形态被认为是 Ganon 的原始形态，尽管在这个状态下，他的意识完全被黑暗力量吞噬，他所知道的一切都是对横冲直撞和摧毁的渴望。"
  }
]