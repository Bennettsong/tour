// 南昆山行程数据（含景点、行程、美食、贴士）
export const days = [
  {
    id: 'day1',
    badge: '周五 8.21',
    title: '上午出发 & 午后初探',
    subtitle: '10点启程，午后玩竹海、泡温泉',
    color: 'from-emerald-600 to-forest-800',
    accent: 'bg-emerald-100 text-emerald-800',
    items: [
      { time: '10:00', title: '深圳出发', desc: '上午错开早高峰，经广河高速前往龙门县永汉出口。', icon: '🚗' },
      { time: '11:30', title: 'S355 盘山公路自驾', desc: '永汉出口下高速，驶入九曲十八弯的盘山公路，沿途竹林溪谷、观景台不断，开车本身就是风景线。', icon: '🛣️' },
      { time: '12:15', title: '抵达南昆山，山野午餐', desc: '先来一顿客家窑鸡或竹筒饭，补充能量。', icon: '🍚' },
      { time: '14:00', title: '办理入住', desc: '入住温泉度假酒店（推荐云顶温泉或十字水生态度假村）。', icon: '🏨' },
      { time: '15:30', title: '竹海漫步', desc: '万亩竹林天然氧吧，负氧离子爆表，漫步拍照超治愈。', icon: '🎋' },
      { time: '18:30', title: '客家晚餐', desc: '山坑鱼、酿豆腐，再来一顿地道客家菜。', icon: '🍽️' },
      { time: '20:30', title: '山间温泉泡汤', desc: '卸下一周疲惫，泡着温泉听虫鸣，安静又治愈。', icon: '♨️' },
    ],
  },
  {
    id: 'day2',
    badge: '周六 8.22',
    title: '核心景点打卡日',
    subtitle: '飞瀑、溪流、温泉，一天看尽南昆山精华',
    color: 'from-accent-500 to-amber-600',
    accent: 'bg-amber-100 text-amber-800',
    items: [
      { time: '08:30', title: '酒店早餐', desc: '吃个暖胃的山野早餐，元气满满出发。', icon: '🥣' },
      { time: '09:30', title: '川龙瀑布', desc: '南昆山标志景点，落差近百米，水雾清凉扑面。', icon: '💧' },
      { time: '10:30', title: '石河奇观', desc: '千年溪流冲刷出的奇石河道，徒步戏水两相宜。', icon: '🪨' },
      { time: '12:00', title: '山野午餐', desc: '客家窑鸡、竹筒饭、酿豆腐，来一顿地道客家菜。', icon: '🍚' },
      { time: '14:00', title: '观音潭', desc: '溪水长流不涸，林荫静谧，适合午后小憩。', icon: '🌊' },
      { time: '15:30', title: '九重远眺', desc: '登高观景台，俯瞰层峦叠嶂，运气好能遇云海。', icon: '🏔️' },
      { time: '17:30', title: '晚餐 & 温泉', desc: '再来一顿山坑鱼，饭后温泉或抬头观星。', icon: '✨' },
    ],
  },
  {
    id: 'day3',
    badge: '周日 8.23',
    title: '休闲收尾 & 返程',
    subtitle: '睡到自然醒，慢悠悠回家',
    color: 'from-sky-600 to-emerald-700',
    accent: 'bg-sky-100 text-sky-800',
    items: [
      { time: '08:30', title: '睡到自然醒，早餐', desc: '不设闹钟，享受最后一个山中清晨。', icon: '🌅' },
      { time: '09:30', title: '十字水度假村打卡', desc: '隐于山林的生态酒店，竹桥流水，随手出片。', icon: '📸' },
      { time: '11:30', title: '午餐 & 采购山货', desc: '蜂蜜、竹笋干、腐竹、山茶油，带点伴手礼回家。', icon: '🛍️' },
      { time: '13:00', title: '办理退房', desc: '收拾行李，检查物品，准备返程。', icon: '🧳' },
      { time: '14:00', title: '返程回深圳（从化方向）', desc: '走从化方向盘山公路下山，另一条风景线，顺路可眺望流溪河，去程上山、返程下山，全程环线不走回头路。', icon: '🛣️' },
      { time: '16:30', title: '抵达深圳', desc: '平安到家，结束愉快的森呼吸之旅。', icon: '🏠' },
    ],
  },
];

export const spots = [
  { name: '川龙瀑布', tag: '南昆山标志', desc: '落差近百米的飞瀑，水雾清凉，是南昆山必打卡的第一站。', img: 'https://assets.with.tencent.com/default/db99d02d-bc76-4b0b-b486-6a63a5c67fb7/image_1787112908_2_3.jpg' },
  { name: '石河奇观', tag: '奇石溪流', desc: '千年溪流冲刷出的奇石河道，可徒步戏水，清凉一夏。', img: 'https://assets.with.tencent.com/default/1d697b2f-a4da-492f-9c04-535d01cf19ea/image_1787112900_2_1.jpg' },
  { name: '观音潭', tag: '灵秀静谧', desc: '溪水长流不涸的深潭，林荫环绕，静谧清凉。', img: 'https://assets.with.tencent.com/default/7f843ebe-da80-4534-a34e-f4a63a35bbc6/image_1787112913_1_3.jpg' },
  { name: '九重远眺', tag: '登高揽胜', desc: '观景台俯瞰层峦叠嶂，晨雾云海时最是震撼。', img: 'https://assets.with.tencent.com/default/cf4d6f49-7734-4737-bafb-3fcfe74f6915/image_1787112917_3_1.jpg' },
  { name: '竹海漫步', tag: '天然氧吧', desc: '万亩竹林，负氧离子爆表，漫步其间身心舒畅。', img: 'https://assets.with.tencent.com/default/896b7337-b447-487e-b345-4bc10cfec540/image_1787112915_2_1.jpg' },
  { name: '温泉度假村', tag: '山间泡汤', desc: '云顶温泉、慕思嘉华等度假酒店，泡汤放松的绝佳选择。', img: 'https://assets.with.tencent.com/default/d0b30de0-d645-4a49-b565-83eb30a23bc7/image_1787112914_2_1.jpg' },
  { name: '十字水度假村', tag: '隐世生态', desc: '藏于山林的生态度假村，竹桥流水，度假氛围拉满。', img: 'https://assets.with.tencent.com/default/a72b6d98-65ab-42d8-8869-fa05fe743e17/image_1787112920_2_1.jpg' },
  { name: '森林公园全景', tag: '北回归线绿洲', desc: '整个南昆山被森林覆盖，四季常青，是珠三角的后花园。', img: 'https://assets.with.tencent.com/default/0150a6ed-8ea3-4b21-a81b-ca59060e99f0/image_1787112898_1_1.jpg' },
];

export const foods = [
  { name: '客家窑鸡', emoji: '🍗', desc: '外皮焦香、肉质嫩滑，山里最地道的招牌菜。' },
  { name: '竹筒饭', emoji: '🎋', desc: '竹香浸润米饭，软糯清香，带着山野气息。' },
  { name: '山坑鱼', emoji: '🐟', desc: '溪涧小鱼，香煎或焖制，鲜甜无腥味。' },
  { name: '客家酿豆腐', emoji: '🧆', desc: '嫩豆腐酿肉，汤汁浓郁，经典客家风味。' },
  { name: '蜂蜜', emoji: '🍯', desc: '南昆山蜂蜜闻名，带回一瓶，甜过整个夏天。' },
  { name: '竹笋干', emoji: '🥬', desc: '山货明星，炖肉煲汤都绝佳，适合做伴手礼。' },
  { name: '腐竹', emoji: '🥢', desc: '山泉水制作，豆香浓郁，久煮不烂。' },
  { name: '山茶油', emoji: '🫒', desc: '本地茶籽压榨，炒菜香醇，健康又实在。' },
];

export const tips = [
  { icon: '🗺️', title: '自驾路线', desc: '深圳 → 广河高速 → 永汉出口 → S355 盘山公路上山；返程从化方向下山，环线不走回头路，全程约 130~160 公里。' },
  { icon: '🎟️', title: '门票参考', desc: '南昆山国家森林公园门票约 30~60 元/人，各景点或另有小门票，以现场为准。' },
  { icon: '🏨', title: '住宿预订', desc: '周末温泉酒店紧俏，建议提前 3~5 天预订云顶温泉、十字水或精品民宿。' },
  { icon: '🎒', title: '装备清单', desc: '徒步鞋、泳衣、防晒、驱蚊液、轻薄外套（山上早晚温差大）、充电宝。' },
  { icon: '⏰', title: '出发时间', desc: '周五上午 10:00 出发，午后抵达；周日 14:00 返程避开下午高峰。' },
  { icon: '📶', title: '信号与支付', desc: '山区部分路段信号较弱，可提前下载离线地图，现金与手机支付都备上。' },
];
