// 图片资源
export const images = {
  // 香港
  hkVictoria: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/43c31d02-5bcb-4d6d-913e-d1c9323d2130/cd1a24d0dbe14b27b8b5c25daf855bae.png',
  hkCauseway: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/e36e8bb6-c2d0-458a-8047-51b804f843aa/91ec7ecee552479c9bed88ff9984637a.png',
  hkPeak: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/5a3d68b9-1fc1-4453-a7a8-68abce6d9780/1c2737af2980476095c4394a739ee581.png',
  hkDimSum: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/c69430b7-c93b-46e1-95e3-ab0559f83287/1865a888c573460d9596f85d15e97a8a.png',
  // 曼谷
  grandPalace: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/ebb33b25-d5c0-4d32-bdb2-e84baf5ec906/9f78f4c0785848b39da64c61b88af81f.png',
  watArun: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/59ca4102-bd2f-431b-bd54-8b957f11aef8/b1d92a33a06242489e43ed07b94621b8.png',
  watPho: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/92ed9f41-903c-49d1-b158-d1a576769ce7/7376a831b3c046988ea74140a44bd054.png',
  chatuchak: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/fb039dff-22f9-4a42-a2af-4277facb5277/9e43573942464ca086188c5541eafc9b.png',
  boatNight: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/df8b13b1-fe22-47d3-9d50-3a38ec53451e/1d5506eae6474e03b843b138b8fa84f0.png',
  // 普吉
  phiphi: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/63ca5d02-97c7-460c-9f8c-b0d8565adf8c/85b32cf320c446ba80c62b7970ea8b92.png',
  karon: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/f7c9e48a-5856-49ba-b5c4-fbeea5282d9d/44aa79c69b1e4f338ebab10861b87803.png',
  bigBuddha: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/f8885345-d1d8-4570-8b41-9176acd2b9e6/77cadd1541b24021ac68b743f736b06e.png',
  oldTown: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/e2b833b2-a7df-46f2-98c2-f489566c99ba/b6a1282233b147ceb147a264e5d305e6.png',
  // 美食
  thaiFood: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/fb039dff-22f9-4a42-a2af-4277facb5277/9e43573942464ca086188c5541eafc9b.png'
};

// 机票与住宿信息
export const flights = [
  { date: '4月30日', from: '香港 HKG · T1', to: '曼谷 素万那普 BKK', time: '21:30 → 23:20', duration: '约 3h 20m', icon: 'fa-plane' },
  { date: '5月2日', from: '曼谷 廊曼 DMK · T2', to: '普吉 HKT', time: '21:50 → 23:15', duration: '约 1h 25m', icon: 'fa-plane' },
  { date: '5月4日', from: '普吉 HKT', to: '曼谷 廊曼 DMK · T2', time: '22:05 → 23:40', duration: '约 1h 35m', icon: 'fa-plane-arrival' }
];

export const hotels = [
  {
    city: '曼谷',
    date: '4.30 - 5.2 · 2 晚',
    addr: 'PFWM+3MV ซอย อิสรภาพ 42, Khet Bangkok Yai, 曼谷 10600',
    area: '吞武里 · 靠近郑王庙 / 卧佛寺',
    tip: '位置紧邻大皇宫、郑王庙，步行 / 短途 Grab 可达多处寺庙景点，非常便利。'
  },
  {
    city: '普吉',
    date: '5.2 - 5.4 · 2 晚',
    addr: 'Sunset Plaza Condominium B12, 264 Patak Road, Karon, 普吉府 83100',
    area: '卡伦海滩 Karon · 步行可到海边',
    tip: '距卡伦海滩约 500m，靠近卡塔海滩，比巴东更安静，适合全家度假。'
  }
];

// 5 天行程概览
export const timeline = [
  {
    day: 'Day 1',
    date: '4.30 周三',
    city: '香港',
    title: '港岛一日游 · 夜飞曼谷',
    tag: '都市文化',
    icon: 'fa-city',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/5a3d68b9-1fc1-4453-a7a8-68abce6d9780/1c2737af2980476095c4394a739ee581.png',
    highlights: ['铜锣湾寄存行李', '太平山顶 / 维港', '港式饮茶']
  },
  {
    day: 'Day 2',
    date: '5.1 周四',
    city: '曼谷',
    title: '皇家寺庙日 · 湄南夜景',
    tag: '文化沉浸',
    icon: 'fa-place-of-worship',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/ebb33b25-d5c0-4d32-bdb2-e84baf5ec906/9f78f4c0785848b39da64c61b88af81f.png',
    highlights: ['大皇宫 + 玉佛寺', '卧佛寺按摩', '郑王庙日落']
  },
  {
    day: 'Day 3',
    date: '5.2 周五',
    city: '曼谷→普吉',
    title: '水上市场 · SPA · 夜航',
    tag: '购物放松',
    icon: 'fa-basket-shopping',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/fb039dff-22f9-4a42-a2af-4277facb5277/9e43573942464ca086188c5541eafc9b.png',
    highlights: ['丹嫩沙多水上市场', 'Let\'s Relax SPA', '廊曼机场飞普吉']
  },
  {
    day: 'Day 4',
    date: '5.3 周六',
    city: '普吉岛',
    title: 'PP 岛跳岛 · 浮潜',
    tag: '海岛天堂',
    icon: 'fa-umbrella-beach',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/63ca5d02-97c7-460c-9f8c-b0d8565adf8c/85b32cf320c446ba80c62b7970ea8b92.png',
    highlights: ['玛雅湾', '竹子岛浮潜', '巴东夜市']
  },
  {
    day: 'Day 5',
    date: '5.4 周日',
    city: '普吉→返程',
    title: '大佛观景 · 老城漫游',
    tag: '慢游收官',
    icon: 'fa-plane-departure',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/copilot/e2b833b2-a7df-46f2-98c2-f489566c99ba/b6a1282233b147ceb147a264e5d305e6.png',
    highlights: ['普吉大佛', '神仙半岛', '普吉老城']
  }
];

// 每日详细行程
export const schedules = {
  day1: [
    { time: '08:30', title: '深圳出发 · 过关赴港', desc: '建议从福田 / 罗湖 / 皇岗口岸过关，高铁 15 分钟直达西九龙；或深圳湾口岸打车到香港约 45 分钟。一家四口建议高铁更轻松。', icon: 'fa-train', tip: '💡 提前在小程序办好港澳通行证签注；港币可用微信支付/八达通卡。' },
    { time: '10:00', title: '铜锣湾寄存行李', desc: '推荐 【崇光 SOGO 百货 B2 层】或 【时代广场客服中心】免费寄存（需购物小票）；付费可用 LuggageHero / Radical Storage 预约点（20-50 港币/件/天）。', icon: 'fa-suitcase', tip: '⚠️ 免费寄存需满足消费门槛；大件行李建议 "Airport Porter" 机场提前托运服务。' },
    { time: '11:00', title: '铜锣湾早茶 · 莲香居 / 荣记粥品', desc: '正宗港式早茶：虾饺、烧麦、凤爪、肠粉、鲜虾云吞面。人均约 100-150 港币。老字号环境热闹有氛围。', icon: 'fa-mug-saucer', tip: '🥟 父母必爱环节。记得点一壶普洱 / 菊普暖胃。' },
    { time: '12:30', title: '太平山顶 · 凌霄阁', desc: '乘山顶缆车（港币 88/人）登太平山，俯瞰维港与港岛全景。父母可在山顶商场休息喝咖啡。', icon: 'fa-mountain-city', tip: '🎫 建议提前官网购票避开长队。穿舒适鞋子。' },
    { time: '15:00', title: '中环 · 半山扶梯 / 石板街', desc: '体验世界最长的户外扶梯系统，顺路逛 PMQ 元创方、苏豪区、文艺咖啡店。年轻人拍照好去处。', icon: 'fa-camera', tip: '📷 石板街 Pottinger Street 是《色戒》取景地。' },
    { time: '17:00', title: '尖沙咀 · 维港天星小轮', desc: '乘历史悠久的天星小轮（港币 5/人）横渡维港，夕阳下的港岛最浪漫。抵达尖沙咀星光大道。', icon: 'fa-ship', tip: '📸 星光大道李小龙像、3D 合影打卡；性价比极高的观光。' },
    { time: '18:30', title: '尖沙咀晚餐 · 添好运 / 翠华餐厅', desc: '添好运（米其林一星点心 · 人均 100 港币）或翠华餐厅（地道茶餐厅 · 人均 80 港币）。点：叉烧包、菠萝油、丝袜奶茶。', icon: 'fa-utensils', tip: '晚餐简单省时，留足机场时间。' },
    { time: '19:30', title: '返回铜锣湾取行李', desc: '港铁 15 分钟回铜锣湾，取回寄存行李。', icon: 'fa-box', tip: '港铁末班车时间晚，无需担心。' },
    { time: '20:00', title: '前往香港机场 T1', desc: '港铁机场快线 (青衣/九龙/香港) 最快 24 分钟直达，100-115 港币/人。一家四口打 Grab 约 400-450 港币也可选。', icon: 'fa-train-subway', tip: '⏰ 起飞前 2 小时到达，21:30 航班最迟 19:30 到 T1。' },
    { time: '21:30', title: '✈️ HKG T1 → BKK 素万那普', desc: '航班起飞，约 3 小时 20 分抵达。飞机上可小睡。', icon: 'fa-plane', tip: '入境需填 TDAC 数字入境卡（提前 3 天官网填）。' },
    { time: '23:20', title: '抵达素万那普 BKK', desc: '入境 → 提行李 → 兑换一点零钱（Super Rich 有 24h 柜台）→ 打 Grab 到吞武里酒店（约 500 铢，45 分钟）。', icon: 'fa-hotel', tip: '🛌 深夜抵达，建议提前在 Grab / Bolt 预约车辆，或机场出租车柜台排队。' }
  ],
  day2: [
    { time: '08:00', title: '酒店早餐', desc: '吞武里区酒店周边有多家泰式咖啡馆，尝试泰式 Jok（咸粥）+ 油条 + 泰奶（¥20-30/人），父母易接受。', icon: 'fa-mug-saucer', tip: '酒店不含早餐的话，附近 7-11 + 街边摊也方便。' },
    { time: '09:00', title: '大皇宫 + 玉佛寺（步行或 Grab 10 分钟）', desc: '酒店所在吞武里距大皇宫仅 3 公里，Grab 约 80-120 铢就到。门票 500 铢/人，参观约 2 小时。服装要求：长袖长裤，可租围裙。', icon: 'fa-place-of-worship', tip: '☀️ 晨间凉爽光线佳；为父母带扇子、瓶装水、帽子。' },
    { time: '11:30', title: '卧佛寺 Wat Pho', desc: '紧邻大皇宫步行 10 分钟可达。46 米金色巨型卧佛震撼心灵，门票 200 铢。寺内正宗泰式古法按摩学校 1 小时 480 铢，舒缓腿脚。', icon: 'fa-spa', tip: '👴 父母按摩首选。签证材料提前拍好以防遗失。' },
    { time: '13:30', title: '午餐 · The Deck by Arun Residence', desc: '河畔露台餐厅，正对郑王庙视角绝佳。推荐：冬阴功汤、芒果糯米饭、菠萝海鲜饭。人均 300-400 铢（¥60-80）。', icon: 'fa-utensils', tip: '空调餐位 + 无敌河景，为父母歇脚最佳选择。' },
    { time: '15:00', title: '回酒店午休', desc: '酒店就在附近（步行 / Grab 5 分钟），午后 3-4 点曼谷最热，避开暑气补觉。', icon: 'fa-bed', tip: '老人午休 1-2 小时非常必要，为晚上保存体力。' },
    { time: '17:00', title: '郑王庙 Wat Arun · 日落', desc: '吞武里区酒店步行 15 分钟或 Grab 5 分钟即到。登上主塔看日落晚霞金光，无比震撼。门票 200 铢。', icon: 'fa-sun', tip: '🌅 最美是 17:30-18:30 黄金时刻。台阶较陡，父母只上底层平台即可。' },
    { time: '19:00', title: '晚餐 · 白兰花游船 (White Orchid)', desc: '从 River City 码头登船，2.5 小时自助晚宴 + 湄南两岸灯光巡游。¥280/人。含泰菜、西餐、甜品、表演。', icon: 'fa-ship', tip: '🎉 一家四口合影绝佳场景。务必提前网上（Klook / 携程）预订。' },
    { time: '22:00', title: '返回酒店', desc: '码头打 Grab 回吞武里酒店（约 10 分钟，150 铢）。', icon: 'fa-moon', tip: '为次日一早出发保存体力。' }
  ],
  day3: [
    { time: '06:30', title: '酒店早餐 + 打包', desc: '吃饱喝足出发；今晚飞普吉，所有行李带好打包。酒店可延迟退房到中午。', icon: 'fa-suitcase-rolling', tip: '大件行李可继续留酒店到下午再取。' },
    { time: '07:30', title: '丹嫩沙多水上市场（Damnoen Saduak）', desc: '距曼谷 1.5 小时车程（包车来回约 1800 铢/4 人）。世界著名水上市场，坐小船穿行买水果、吃船上粉面、拍照极美。船票 200 铢/人。', icon: 'fa-water', tip: '🛶 建议早去，7-9 点最热闹最凉爽。担心颠簸可租独立小船。' },
    { time: '11:30', title: '返回曼谷 · 午餐 · Terminal 21 美食广场', desc: '机场式商场每层不同国家主题，4 楼美食广场性价比超高：海南鸡饭、泰式炒河粉、青木瓜沙拉、芒果糯米饭。人均 80-120 铢。', icon: 'fa-bowl-rice', tip: '凉爽空调 + 多国选择，全家满意。' },
    { time: '14:00', title: 'Let\'s Relax SPA 全家放松', desc: '推荐 Terminal 21 店 / Asok 店。2 小时天堂疗程（泰式按摩 + 足疗 + 芳香精油），约 1600 铢/人（¥330）含茶点。网上预订可 8 折。', icon: 'fa-spa', tip: '💆 一家四口最爱。预订时写明"4 人同房间"。' },
    { time: '16:30', title: '回酒店取行李', desc: '乘 Grab 回吞武里酒店取行李（30-40 分钟），之后直接前往廊曼机场 DMK。', icon: 'fa-taxi', tip: '⚠️ 注意：曼谷→普吉是在 廊曼 DMK T2 起飞，不是素万那普！' },
    { time: '18:00', title: '前往廊曼机场（约 1 小时）', desc: '吞武里到廊曼机场约 28 公里，Grab 大车约 400-500 铢（¥85-110）。堵车时段建议预留 1.5 小时。', icon: 'fa-route', tip: '🚗 傍晚 5-7 点为曼谷堵车高峰，务必提前出发。' },
    { time: '19:30', title: '廊曼机场 T2 晚餐', desc: '机场内 Magic Food Point 美食广场，推荐 MK 泰式火锅或 Black Canyon Coffee；二楼还有 7-11 便利店买小吃。', icon: 'fa-plane-departure', tip: '廊曼 T2 主要为廉价航司（亚航、泰狮航等），值机柜台在 1 楼。' },
    { time: '21:50', title: '✈️ DMK T2 → HKT 普吉', desc: '航班起飞，约 1 小时 25 分抵达普吉国际机场 HKT。', icon: 'fa-plane', tip: '廉价航司一般无托运，请确认托运额度并提前购买。' },
    { time: '23:15', title: '抵达普吉 · 前往卡伦海滩', desc: '打 Grab / 机场出租车到卡伦 Karon 住宿（约 40 公里，1 小时，600-800 铢 ≈ ¥130-170）。', icon: 'fa-hotel', tip: '🛌 深夜到，建议提前联系公寓告知晚到，准备好钥匙/门禁。' }
  ],
  day4: [
    { time: '07:00', title: '公寓早餐 + 码头集合', desc: '自带早餐或酒店周边 7-11 解决。卡伦到查龙码头约 20 分钟车程，一日游通常会接送。', icon: 'fa-mug-saucer', tip: '吃点碳水 + 蛋白质扛到船上。' },
    { time: '08:30', title: 'PP 岛一日游 · 豪华双体游艇', desc: '【Catamaran 双体游艇】平稳舒适，适合父母（不推荐快艇）。四人约 ¥600/人含接送、午餐、浮潜装备。Klook / GetYourGuide 预订。', icon: 'fa-ship', tip: '⚠️ 父母易晕船提前 30 分钟吃晕船药。' },
    { time: '10:00', title: '玛雅湾 Maya Bay', desc: '《海滩》电影取景地，翡翠色海湾令人惊叹。父母可岸边遮阳拍照，年轻人下水戏水。', icon: 'fa-umbrella-beach', tip: '📸 最佳拍照时段；防晒霜 SPF50+ 每 2h 补一次。' },
    { time: '11:30', title: '维京洞穴 + 情人海滩浮潜', desc: '船上观景为主，情人海滩浮潜见热带鱼群。父母可不下水在船上观赏。', icon: 'fa-fish', tip: '浮潜装备让工作人员提供干净未用过的。' },
    { time: '12:30', title: '大 PP 岛午餐', desc: '豪华游艇行程含岛上泰式自助餐，空调餐厅 + 海景座位可选。', icon: 'fa-utensils', tip: '瓶装水自备最划算。' },
    { time: '14:30', title: '猴子海滩 + 竹子岛', desc: '看海岸野生猕猴（⚠️ 勿投喂），竹子岛水浅沙白，全家戏水游泳最佳。', icon: 'fa-water', tip: '🚫 不要拿食物逗猴子避免被抢。' },
    { time: '17:00', title: '返航 · 卡伦海滩日落', desc: '游艇 5 点返程，途中可在甲板看日落。回到酒店还来得及去卡伦海滩散步。', icon: 'fa-sun', tip: '卡伦海滩步行出门 5 分钟即到，沙细水清比巴东安静。' },
    { time: '19:00', title: '晚餐 · Kata Mama 海鲜', desc: '卡塔海滩旁性价比高海鲜店。必点：咖喱蟹、冬阴功海鲜汤、烤龙虾、空心菜。人均 500-800 铢（¥100-170）。', icon: 'fa-shrimp', tip: '🦐 讨价还价可送芒果糯米饭。' },
    { time: '21:00', title: '巴东夜市 / 邑拉街（年轻人可选）', desc: '年轻人可打 Grab 去巴东（约 15 分钟）班赞夜市、邦拉街体验夜生活。父母回酒店泳池放松。', icon: 'fa-moon', tip: '分工灵活；约定回酒店时间避免父母担心。' }
  ],
  day5: [
    { time: '08:00', title: '酒店早餐 + 退房寄存行李', desc: '办理退房，将大件行李寄存公寓前台直到晚上取。', icon: 'fa-suitcase', tip: '提前和前台确认寄存时间与取件方式。' },
    { time: '09:30', title: '普吉大佛 Big Buddha', desc: '距卡伦约 20 分钟车程（Grab 350 铢）。45 米白色大理石巨佛俯瞰查龙湾、卡塔海滩、卡伦海滩。免费参观需着长裤 / 围裙。', icon: 'fa-archway', tip: '🙏 为父母祈福最佳地。山路较窄建议包 Grab 车来回。' },
    { time: '11:30', title: '查龙寺 Wat Chalong', desc: '下山途中顺路参观，普吉最大最重要寺庙，金色宝塔精美。免费。', icon: 'fa-place-of-worship', tip: '不强制停留，时间紧可跳过。' },
    { time: '12:30', title: '午餐 · Kan Eang@Pier 海景餐厅', desc: '查龙湾畔无敌海景餐厅，推荐菠萝海鲜饭、泰式绿咖喱、蒜香烤虾。人均 600-800 铢。', icon: 'fa-utensils', tip: '靠窗位提前 Klook / 电话预订。' },
    { time: '14:00', title: '神仙半岛 Promthep Cape', desc: '普吉最南端观景台，海天一色绝美。白天也非常美，海风舒适。停留 30-45 分钟即可。', icon: 'fa-mountain-sun', tip: '风大戴帽。步行 200m 可到最佳观景台。' },
    { time: '15:30', title: '普吉老城漫步', desc: '中葡混血彩色建筑、文艺咖啡馆、壁画打卡墙。漫步 1.5 小时恰到好处。买椰子冰淇淋解暑。', icon: 'fa-palette', tip: '📷 最上镜：Soi Rommanee、Thalang Road。' },
    { time: '17:30', title: '下午茶 · Feelsion Café / Kopitiam', desc: '老城文艺咖啡馆，冰美式 + 泰式蛋糕。父母可坐着喝热茶歇脚。', icon: 'fa-mug-hot', tip: '长辈点热饮更舒适。' },
    { time: '19:00', title: '早餐 · 蓝象 Blue Elephant 普吉店', desc: '百年老洋房米其林推荐泰餐，环境精致。庆祝家庭旅行完美收官。人均 ¥200-250。需提前预订。', icon: 'fa-crown', tip: 'Smart Casual 着装即可。' },
    { time: '20:30', title: '回公寓取行李 · 前往机场', desc: '老城回卡伦取行李约 40 分钟，Grab 到普吉机场约 1 小时。建议 8 点前出发最保险。', icon: 'fa-taxi', tip: '💼 把零钱花掉，买些手信在机场免税店。' },
    { time: '22:05', title: '✈️ HKT → DMK 廊曼机场', desc: '航班起飞，约 1 小时 35 分抵达廊曼机场 T2（返程中转）。', icon: 'fa-plane-departure', tip: '✅ 一家四口圆满完成 5 日之旅。' },
    { time: '23:40', title: '抵达廊曼 · 中转返程', desc: '根据后续接驳安排中转或住宿。把这次旅行的温馨回忆带回家。', icon: 'fa-heart', tip: '🥰 愿旅行成为一家人共同的美好回忆。' }
  ]
};

// 美食推荐
export const foods = [
  {
    name: '港式早茶 Dim Sum',
    en: '香港传统',
    spicy: 0,
    level: '清淡',
    desc: '虾饺、烧麦、叉烧包、凤爪、肠粉配普洱。父母最爱，全家共享氛围浓。',
    where: '香港 莲香居 / 添好运 / 荣记',
    img: images.hkDimSum,
    color: 'bg-amber-50'
  },
  {
    name: '丝袜奶茶 & 菠萝油',
    en: '港式国民',
    spicy: 0,
    level: '清淡',
    desc: '浓滑丝袜奶茶 + 酥脆刚出炉菠萝油夹厚切黄油，必尝。',
    where: '翠华餐厅 / 金华冰厅',
    img: images.hkDimSum,
    color: 'bg-yellow-50'
  },
  {
    name: '冬阴功汤 Tom Yum Goong',
    en: '泰国国汤',
    spicy: 3,
    level: '微辣',
    desc: '酸辣鲜美招牌汤，含柠檬草、南姜、青柠叶。父母可点 "Mild" 版本。',
    where: '曼谷 Baan Phadthai / 普吉 Kata Mama',
    img: images.thaiFood,
    color: 'bg-red-50'
  },
  {
    name: '泰式炒河粉 Pad Thai',
    en: '国民街头',
    spicy: 1,
    level: '清淡',
    desc: '甜咸适中扁河粉炒虾仁，加花生碎与青柠。几乎人人爱吃。',
    where: '曼谷 Thipsamai 百年老店',
    img: images.thaiFood,
    color: 'bg-amber-50'
  },
  {
    name: '芒果糯米饭',
    en: 'Mango Sticky Rice',
    spicy: 0,
    level: '清淡',
    desc: '甜糯米 + 椰浆 + 新鲜芒果，清凉解腻，长辈超爱。',
    where: '街头甜品摊 / Mae Varee',
    img: images.thaiFood,
    color: 'bg-yellow-50'
  },
  {
    name: '海南鸡饭 Khao Man Gai',
    en: '泰式清淡主食',
    spicy: 0,
    level: '清淡',
    desc: '鸡肉嫩滑 + 鸡油饭 + 姜蒜酱油蘸料，父母绝佳选择。',
    where: 'Go-Ang Pratunam / Terminal 21',
    img: images.thaiFood,
    color: 'bg-orange-50'
  },
  {
    name: '咖喱蟹 Curry Crab',
    en: '海鲜奢华',
    spicy: 2,
    level: '微辣',
    desc: '金黄咖喱酱包裹肥美蟹肉，浓郁鲜香，普吉必吃。',
    where: '普吉 Kata Mama / Kan Eang@Pier',
    img: images.thaiFood,
    color: 'bg-amber-50'
  },
  {
    name: '菠萝海鲜饭',
    en: 'Pineapple Fried Rice',
    spicy: 1,
    level: '清淡',
    desc: '菠萝盛出微甜炒饭 + 虾仁腰果鱼松。造型出片，味道好。',
    where: 'The Deck / Blue Elephant',
    img: images.thaiFood,
    color: 'bg-orange-50'
  }
];

// 预算数据
export const budgetSummary = [
  { label: '人均预算', value: '¥7500', icon: 'fa-user', gradient: 'from-thai-gold to-amber-600', note: '含机票+住宿+餐饮+门票' },
  { label: '四人总计', value: '¥30000', icon: 'fa-users', gradient: 'from-thai-red to-pink-600', note: '中档舒适标准' },
  { label: '建议备用金', value: '¥5000', icon: 'fa-wallet', gradient: 'from-thai-teal to-cyan-600', note: '紧急+购物升级' }
];

export const budgetDetails = [
  { item: '香港→曼谷机票（4 人）', unit: '¥2200', qty: 4, total: 8800 },
  { item: '曼谷→普吉机票（4 人）', unit: '¥400', qty: 4, total: 1600 },
  { item: '普吉→廊曼返程（4 人）', unit: '¥450', qty: 4, total: 1800 },
  { item: '香港境内交通（高铁+地铁+缆车）', unit: '¥200', qty: 4, total: 800 },
  { item: '曼谷 2 晚公寓', unit: '¥500/晚', qty: 2, total: 1000 },
  { item: '普吉 2 晚 Sunset Plaza', unit: '¥450/晚', qty: 2, total: 900 },
  { item: 'PP 岛跳岛游艇一日游（含餐）', unit: '¥600', qty: 4, total: 2400 },
  { item: '水上市场包车一日', unit: '—', qty: 1, total: 400 },
  { item: '当地交通（Grab）全程', unit: '¥180', qty: 4, total: 720 },
  { item: '景点门票（大皇宫、卧佛寺、郑王庙等）', unit: '¥250', qty: 4, total: 1000 },
  { item: '白兰花游船晚宴', unit: '¥280', qty: 4, total: 1120 },
  { item: '每日餐饮（5 天）', unit: '¥180/天', qty: 20, total: 3600 },
  { item: 'SPA 体验', unit: '¥330', qty: 4, total: 1320 },
  { item: '手信 / 购物 / 小费', unit: '—', qty: '-', total: 2000 },
  { item: '境外旅行保险', unit: '¥120', qty: 4, total: 480 }
];

// 实用贴士
export const tips = [
  {
    icon: 'fa-passport',
    color: 'border-blue-400 text-blue-500',
    title: '证件 / 签证',
    items: [
      '港澳通行证需提前办好"一次签注"，过关 4.30 日有效。',
      '中国公民赴泰免签（60 天内有效），护照需 6 个月以上有效期。',
      '提前 3 天官网填写 TDAC 数字入境卡（https://tdac.immigration.go.th）。',
      '护照、通行证各备 2 份复印件，和原件分开存放。'
    ]
  },
  {
    icon: 'fa-money-bill-wave',
    color: 'border-green-400 text-green-500',
    title: '货币 / 支付',
    items: [
      '香港：八达通 + 微信 / 支付宝，无需太多现金（备 500 HKD）。',
      '泰国：1 元 ≈ 5 铢，每人备 3000 铢现金；大部分景区支持扫码。',
      '机场汇率差，到市区 Super Rich（橙色/绿色店）兑换。',
      'ATM 取现手续费约 220 铢 / 笔，尽量少次多取。'
    ]
  },
  {
    icon: 'fa-wifi',
    color: 'border-purple-400 text-purple-500',
    title: '网络 / 通讯',
    items: [
      '中港泰多国通用 eSIM 最方便（7 天 ¥50 左右），落地秒激活。',
      '或泰国 AIS Happy Tourist SIM：8 天无限流量 299 铢。',
      '必装 App：Grab（打车）、Google Maps、微信、支付宝、Klook（门票）。'
    ]
  },
  {
    icon: 'fa-suitcase-medical',
    color: 'border-pink-400 text-pink-500',
    title: '必带物品',
    items: [
      '防晒：SPF50+ 防晒霜、墨镜、遮阳帽、长袖薄防晒衣。',
      '药品：晕船药、感冒药、止泻药、创可贴、驱蚊水、父母慢病药。',
      '装备：转换插头（泰国 A/C 型 2 脚扁插）、充电宝、浮潜备用面罩、拖鞋。',
      '衣物：长裤长袖（进寺庙必须）、泳衣、薄外套（冷气足）、舒适步行鞋。'
    ]
  },
  {
    icon: 'fa-shield-halved',
    color: 'border-red-400 text-red-500',
    title: '安全 / 礼仪',
    items: [
      '不触碰他人头部，不用脚指人/物，进寺庙脱鞋。',
      '尊敬王室，不议论/涂抹国王形象。',
      '拒绝陌生人主动带路 / "关门"骗局（大皇宫常见骗术）。',
      '贵重物品分散携带，不露富，护照随身不离身。'
    ]
  },
  {
    icon: 'fa-plane',
    color: 'border-yellow-500 text-yellow-500',
    title: '航班提示 ⚠️',
    items: [
      '⚠️ 曼谷有两个机场：素万那普 BKK（抵达）、廊曼 DMK（去普吉起飞）。',
      '吞武里酒店到廊曼约 28 km，高峰期打车需 1-1.5h，请预留充足时间。',
      '廉价航司（亚航 / 泰狮航）在廊曼 T2，值机柜台 1 楼。',
      '起飞前 2h 到机场，国际 3h；托运需提前在官网加购。'
    ]
  }
];

// 父母关怀清单
export const parentCare = [
  { icon: 'fa-shoe-prints', text: '每日行走不超过 8000 步，多乘 Grab 代步，寺庙路段走慢些。' },
  { icon: 'fa-pills', text: '父母提醒携带慢病药（高血压/糖尿病等），全程随身不离。' },
  { icon: 'fa-bottle-water', text: '随身小瓶矿泉水 + 电解质粉，泰国天气易脱水。' },
  { icon: 'fa-utensils', text: '泰餐辛辣，点餐明确 "No Spicy, Less Salt"。海鲜过敏者避免。' },
  { icon: 'fa-bed', text: '午后预留 1-2 小时酒店休息，避免高温暴晒。' },
  { icon: 'fa-umbrella-beach', text: '普吉避免高强度水上项目（拖曳伞、摩托艇等）。' },
  { icon: 'fa-phone', text: '4 人微信群实时联系；约定走散集合点（如酒店/地铁站）。' },
  { icon: 'fa-heart-circle-check', text: '境外医疗险必买（含 Covid+ 意外+紧急转运，¥100-150/人）。' },
  { icon: 'fa-passport', text: '父母证件建议年轻人随身代管，避免丢失。' },
  { icon: 'fa-cloud-sun', text: '4-5 月为泰国最热月份，35°+，防中暑。' }
];

// 常用泰语 + 粤语
export const phrases = [
  { thai: 'สวัสดี', cn: '你好 / 萨瓦迪卡', pinyin: 'Sa-wa-dee ka/krap' },
  { thai: 'ขอบคุณ', cn: '谢谢', pinyin: 'Khop-Khun ka/krap' },
  { thai: 'ไม่เผ็ด', cn: '不辣', pinyin: 'Mai-phet' },
  { thai: 'เท่าไร', cn: '多少钱', pinyin: 'Tao-rai' },
  { thai: 'ห้องน้ำ', cn: '洗手间在哪', pinyin: 'Hong-nam yu-ti-nai' },
  { thai: 'อร่อย', cn: '好吃', pinyin: 'A-roi' },
  { thai: 'ช่วยด้วย', cn: '救命！', pinyin: 'Chuay-duay' },
  { thai: '唔該', cn: '粤语 · 谢谢/劳驾', pinyin: 'M-goi' },
  { thai: '多謝', cn: '粤语 · 多谢（收礼）', pinyin: 'Do-je' }
];

// 出行必带清单（分类）
export const packingList = [
  {
    category: '证件文件',
    icon: 'fa-passport',
    color: 'text-blue-500 bg-blue-50',
    items: [
      '护照（有效期 > 6 个月）+ 2 份复印件',
      '港澳通行证 + 有效签注',
      '中国身份证 / 驾照',
      '机票、酒店、保险电子 / 纸质凭证',
      'TDAC 入境卡确认截图',
      '4 人证件照若干张（应急）'
    ]
  },
  {
    category: '电子装备',
    icon: 'fa-plug',
    color: 'text-purple-500 bg-purple-50',
    items: [
      '万能转换插头 2 个（泰国 A/C 型）',
      '充电宝（≤100Wh 可登机）',
      '手机 / 相机充电器 + 数据线',
      '中港泰 eSIM 或 AIS 旅游卡',
      '便携小自拍杆 / 三脚架',
      '耳机 / 降噪耳塞'
    ]
  },
  {
    category: '健康药品',
    icon: 'fa-suitcase-medical',
    color: 'text-pink-500 bg-pink-50',
    items: [
      '父母慢病药（足量 + 备药）',
      '晕船晕车药（PP 岛必备）',
      '感冒药 / 退烧药 / 止泻药',
      '防蚊液 / 蚊虫叮咬膏',
      '创可贴 / 消毒湿巾',
      '清凉油 / 风油精（防中暑）'
    ]
  },
  {
    category: '衣物洗护',
    icon: 'fa-shirt',
    color: 'text-amber-500 bg-amber-50',
    items: [
      '长袖长裤（进寺庙必须）',
      '薄防晒衣 / 防晒袖套',
      '泳衣、浴巾、沙滩拖鞋',
      '舒适步行鞋 + 运动袜',
      '墨镜、遮阳帽、雨伞',
      '洗漱包 / 化妆品（≤100ml 上飞机）'
    ]
  }
];