import { timeline, schedules, foods, budgetSummary, budgetDetails, tips, parentCare, phrases, flights, hotels, packingList } from './data.js';

// 渲染行程总览时间轴
function renderTimeline() {
  const el = document.getElementById('timelineGrid');
  if (!el) return;
  el.innerHTML = timeline.map((t) => `
    <div class="timeline-card fade-in-up" style="min-height: 340px;">
      <div class="img-bg" style="background-image: url('${t.img}');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
      <div class="absolute inset-0 p-5 flex flex-col justify-between text-white">
        <div>
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur rounded-full text-[11px] font-semibold">${t.day}</span>
            <i class="fa-solid ${t.icon} text-thai-gold text-lg"></i>
          </div>
          <p class="text-xs opacity-80 mt-3">${t.date} · ${t.city}</p>
          <h3 class="font-serif text-lg font-bold mt-1 leading-snug">${t.title}</h3>
        </div>
        <div>
          <p class="text-[10px] opacity-80 uppercase tracking-wider mb-2">${t.tag}</p>
          <ul class="space-y-1 text-xs">
            ${t.highlights.map(h => `<li class="flex items-center gap-2"><i class="fa-solid fa-circle text-thai-gold text-[5px]"></i>${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
}

// 航班
function renderFlights() {
  const el = document.getElementById('flightList');
  if (!el) return;
  el.innerHTML = flights.map(f => `
    <div class="bg-gradient-to-r from-white to-amber-50 border border-amber-100 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-lg transition fade-in-up flex flex-col md:flex-row md:items-center gap-4">
      <div class="flex items-center gap-4 md:w-48">
        <div class="w-12 h-12 rounded-full bg-thai-gold/10 flex items-center justify-center">
          <i class="fa-solid ${f.icon} text-thai-gold text-lg"></i>
        </div>
        <div>
          <p class="text-xs text-gray-500">航班日期</p>
          <p class="font-bold">${f.date}</p>
        </div>
      </div>
      <div class="flex-1 flex items-center gap-3">
        <div class="text-right flex-1">
          <p class="font-bold text-gray-800">${f.from}</p>
          <p class="text-xs text-gray-500 mt-1">起飞</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-plane text-thai-gold"></i>
          <div class="w-20 h-px bg-gradient-to-r from-transparent via-thai-gold to-transparent my-2"></div>
          <p class="text-[10px] text-gray-400">${f.duration}</p>
        </div>
        <div class="flex-1">
          <p class="font-bold text-gray-800">${f.to}</p>
          <p class="text-xs text-gray-500 mt-1">到达</p>
        </div>
      </div>
      <div class="bg-thai-gold/10 text-thai-deepgold px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap text-center">
        ⏰ ${f.time}
      </div>
    </div>
  `).join('');
}

// 酒店
function renderHotels() {
  const el = document.getElementById('hotelList');
  if (!el) return;
  el.innerHTML = hotels.map(h => `
    <div class="bg-gradient-to-br from-white to-rose-50 border border-rose-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition fade-in-up">
      <div class="flex items-start justify-between mb-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-thai-red/10 text-thai-red rounded-full text-xs font-semibold mb-2">
            <i class="fa-solid fa-location-dot"></i>${h.city}
          </div>
          <h4 class="font-serif text-xl font-bold">${h.area}</h4>
        </div>
        <i class="fa-solid fa-hotel text-thai-red/20 text-4xl"></i>
      </div>
      <p class="text-sm text-gray-500 mb-2"><i class="fa-solid fa-calendar mr-2"></i>${h.date}</p>
      <p class="text-sm text-gray-700 mb-4 font-mono bg-gray-50 p-3 rounded-lg leading-relaxed">${h.addr}</p>
      <div class="text-xs bg-amber-50 border-l-4 border-thai-gold text-gray-700 px-3 py-2 rounded">
        💡 ${h.tip}
      </div>
    </div>
  `).join('');
}

// 每日行程
function renderSchedule(dayKey, containerId) {
  const el = document.getElementById(containerId);
  const list = schedules[dayKey];
  if (!el || !list) return;
  el.innerHTML = list.map(item => `
    <div class="schedule-item fade-in-up">
      <span class="time-badge">${item.time}</span>
      <h4 class="font-bold text-lg mb-1 flex items-center gap-2">
        <i class="fa-solid ${item.icon} text-thai-gold"></i>${item.title}
      </h4>
      <p class="text-gray-600 leading-relaxed text-sm mb-2">${item.desc}</p>
      <div class="text-xs bg-amber-50 border-l-4 border-thai-gold text-gray-700 px-3 py-2 rounded">
        ${item.tip}
      </div>
    </div>
  `).join('');
}

// 美食
function renderFoods() {
  const el = document.getElementById('foodGrid');
  if (!el) return;
  el.innerHTML = foods.map(f => {
    const spicyIcons = Array.from({ length: 3 }, (_, i) => `<i class="fa-solid fa-pepper-hot ${i < f.spicy ? 'active' : ''}"></i>`).join('');
    const levelColor = f.level === '清淡' ? 'bg-green-100 text-green-700' : f.level === '微辣' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700';
    return `
      <div class="food-card fade-in-up">
        <div class="food-img" style="background-image: url('${f.img}');"></div>
        <div class="p-5 ${f.color}">
          <div class="flex items-start justify-between mb-2">
            <div>
              <h4 class="font-bold text-lg">${f.name}</h4>
              <p class="text-xs text-gray-500">${f.en}</p>
            </div>
            <span class="px-2 py-1 rounded-full text-xs font-semibold ${levelColor}">${f.level}</span>
          </div>
          <div class="spicy-level mb-3">${spicyIcons}</div>
          <p class="text-sm text-gray-700 mb-3 leading-relaxed">${f.desc}</p>
          <p class="text-xs text-gray-500 flex items-center gap-1">
            <i class="fa-solid fa-location-dot text-thai-red"></i>${f.where}
          </p>
        </div>
      </div>
    `;
  }).join('');
}

// 预算卡片
function renderBudgetCards() {
  const el = document.getElementById('budgetCards');
  if (!el) return;
  el.innerHTML = budgetSummary.map(b => `
    <div class="budget-card bg-gradient-to-br ${b.gradient} shadow-lg fade-in-up relative">
      <div class="relative z-10">
        <div class="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
          <i class="fa-solid ${b.icon} text-white text-2xl"></i>
        </div>
        <p class="text-white/80 text-sm mb-2">${b.label}</p>
        <p class="text-4xl font-bold font-serif mb-3">${b.value}</p>
        <p class="text-white/80 text-xs">${b.note}</p>
      </div>
    </div>
  `).join('');
}

// 预算表
function renderBudgetTable() {
  const tbody = document.querySelector('#budgetTable tbody');
  if (!tbody) return;
  const total = budgetDetails.reduce((sum, d) => sum + (typeof d.total === 'number' ? d.total : 0), 0);
  tbody.innerHTML = budgetDetails.map(d => `
    <tr class="transition">
      <td class="px-4 py-3">${d.item}</td>
      <td class="px-4 py-3 text-gray-600">${d.unit}</td>
      <td class="px-4 py-3 text-gray-600">${d.qty}</td>
      <td class="px-4 py-3 text-right font-semibold text-thai-deepgold">¥${d.total.toLocaleString()}</td>
    </tr>
  `).join('') + `
    <tr class="bg-thai-gold/10 font-bold text-thai-deepgold">
      <td class="px-4 py-4" colspan="3">四人总合计</td>
      <td class="px-4 py-4 text-right text-lg">¥${total.toLocaleString()}</td>
    </tr>
  `;
}

// 贴士
function renderTips() {
  const el = document.getElementById('tipsGrid');
  if (!el) return;
  el.innerHTML = tips.map(t => {
    const textColor = t.color.split(' ')[1];
    return `
    <div class="tip-card fade-in-up" style="border-top-color: currentColor;">
      <div class="flex items-center gap-3 mb-4 ${textColor}">
        <div class="w-12 h-12 rounded-full flex items-center justify-center bg-current/10">
          <i class="fa-solid ${t.icon} text-xl"></i>
        </div>
        <h3 class="font-bold text-lg text-gray-800">${t.title}</h3>
      </div>
      <ul class="space-y-2 text-sm text-gray-700">
        ${t.items.map(i => `<li class="flex gap-2"><i class="fa-solid fa-check text-thai-gold mt-1 text-xs"></i><span>${i}</span></li>`).join('')}
      </ul>
    </div>
  `;
  }).join('');
}

// 父母关怀
function renderParentCare() {
  const el = document.getElementById('parentCareList');
  if (!el) return;
  el.innerHTML = parentCare.map(c => `
    <div class="flex items-start gap-3 bg-white/70 backdrop-blur rounded-xl p-4 fade-in-up">
      <div class="w-10 h-10 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center flex-shrink-0">
        <i class="fa-solid ${c.icon}"></i>
      </div>
      <p class="text-sm text-gray-700 leading-relaxed pt-1">${c.text}</p>
    </div>
  `).join('');
}

// 必带清单
function renderPacking() {
  const el = document.getElementById('packingList');
  if (!el) return;
  el.innerHTML = packingList.map(p => `
    <div class="fade-in-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 rounded-xl ${p.color} flex items-center justify-center">
          <i class="fa-solid ${p.icon} text-xl"></i>
        </div>
        <h4 class="font-bold text-lg">${p.category}</h4>
      </div>
      <ul class="space-y-2 text-sm text-gray-700 pl-2">
        ${p.items.map(i => `<li class="flex gap-2"><i class="fa-solid fa-square-check text-thai-gold mt-0.5"></i><span>${i}</span></li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// 常用泰语
function renderPhrases() {
  const el = document.getElementById('phraseGrid');
  if (!el) return;
  el.innerHTML = phrases.map(p => `
    <div class="group p-4 rounded-xl border-2 border-gray-100 hover:border-thai-gold hover:bg-amber-50 transition cursor-pointer fade-in-up">
      <p class="text-xl font-serif text-thai-deepgold group-hover:scale-105 transition inline-block">${p.thai}</p>
      <p class="text-lg font-bold mt-2">${p.cn}</p>
      <p class="text-xs text-gray-500 mt-1 italic">${p.pinyin}</p>
    </div>
  `).join('');
}

// 滚动交互
function initScrollInteractions() {
  const nav = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}

function init() {
  renderTimeline();
  renderFlights();
  renderHotels();
  renderSchedule('day1', 'day1Schedule');
  renderSchedule('day2', 'day2Schedule');
  renderSchedule('day3', 'day3Schedule');
  renderSchedule('day4', 'day4Schedule');
  renderSchedule('day5', 'day5Schedule');
  renderFoods();
  renderBudgetCards();
  renderBudgetTable();
  renderTips();
  renderParentCare();
  renderPacking();
  renderPhrases();

  requestAnimationFrame(() => initScrollInteractions());
}

document.addEventListener('DOMContentLoaded', init);
