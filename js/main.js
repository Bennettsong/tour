import { days, spots, foods, tips } from './data.js';

const $ = (sel) => document.querySelector(sel);

// 转义 HTML，避免注入
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// 渲染三日时间轴
function renderTimeline() {
  const root = $('#timeline');
  root.innerHTML = days.map((day, di) => `
    <div class="relative pl-8 md:pl-10 ${di < days.length - 1 ? 'pb-12' : ''}">
      ${di < days.length - 1 ? '<span class="timeline-line absolute left-[15px] md:left-[19px] top-2 bottom-0 w-[2px] rounded"></span>' : ''}
      <span class="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${day.color} text-white grid place-items-center text-sm shadow-lg">${di + 1}</span>
      <div class="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden reveal">
        <div class="px-6 md:px-8 py-6 border-b border-stone-100 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r ${day.color}">
          <div>
            <span class="inline-block text-white/90 text-xs font-semibold tracking-wide mb-1">${esc(day.badge)}</span>
            <h3 class="font-serif text-white text-2xl md:text-3xl font-bold">${esc(day.title)}</h3>
            <p class="text-white/85 text-sm mt-1">${esc(day.subtitle)}</p>
          </div>
          <span class="text-white/90 text-sm hidden sm:block">${day.items.length} 个安排</span>
        </div>
        <div class="divide-y divide-stone-100">
          ${day.items.map((it) => `
            <div class="flex items-start gap-4 px-6 md:px-8 py-4 hover:bg-emerald-50/40 transition">
              <div class="shrink-0 w-16 text-right">
                <span class="font-mono font-semibold text-forest-700 text-sm">${esc(it.time)}</span>
              </div>
              <div class="shrink-0 text-2xl mt-0.5">${it.icon}</div>
              <div>
                <p class="font-semibold text-stone-800">${esc(it.title)}</p>
                <p class="text-sm text-stone-500 mt-0.5 leading-relaxed">${esc(it.desc)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// 渲染景点卡片
function renderSpots() {
  const root = $('#spotsGrid');
  root.innerHTML = spots.map((s) => `
    <article class="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-stone-100 hover:shadow-2xl hover:-translate-y-1.5 transition duration-300 reveal">
      <div class="relative h-52 overflow-hidden">
        <img src="${esc(s.img)}" alt="${esc(s.name)}" loading="lazy"
             class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <span class="absolute top-3 left-3 bg-white/90 backdrop-blur text-forest-800 text-xs font-semibold px-3 py-1 rounded-full">${esc(s.tag)}</span>
      </div>
      <div class="p-5">
        <h3 class="font-serif font-bold text-lg text-forest-800">${esc(s.name)}</h3>
        <p class="text-sm text-stone-500 mt-1.5 leading-relaxed">${esc(s.desc)}</p>
      </div>
    </article>
  `).join('');
}

// 渲染美食
function renderFood() {
  const root = $('#foodGrid');
  root.innerHTML = foods.map((f) => `
    <div class="flex items-start gap-4 bg-white rounded-2xl p-5 border border-stone-100 shadow-sm hover:shadow-lg transition reveal">
      <span class="text-3xl shrink-0">${f.emoji}</span>
      <div>
        <h4 class="font-semibold text-stone-800">${esc(f.name)}</h4>
        <p class="text-sm text-stone-500 mt-1 leading-relaxed">${esc(f.desc)}</p>
      </div>
    </div>
  `).join('');
}

// 渲染贴士
function renderTips() {
  const root = $('#tipsGrid');
  root.innerHTML = tips.map((t) => `
    <div class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition reveal">
      <div class="text-3xl">${t.icon}</div>
      <h4 class="font-semibold text-white mt-3">${esc(t.title)}</h4>
      <p class="text-sm text-white/70 mt-2 leading-relaxed">${esc(t.desc)}</p>
    </div>
  `).join('');
}

// 滚动进入视口时触发 reveal 动画
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

// 初始化
function init() {
  renderTimeline();
  renderSpots();
  renderFood();
  renderTips();
  initReveal();
}

init();
