<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const menuOpen = ref(false);
const wheelSrc = ref('/wheel.jpg');

const services = [
  {
    icon: '◉',
    name: 'Продажа шин',
    desc: 'Летние, зимние и всесезонные шины от ведущих мировых производителей. Огромный ассортимент для легковых и внедорожников.'
  },
  {
    icon: '⬡',
    name: 'Продажа дисков',
    desc: 'Литые и штампованные диски. Широкий выбор размеров и крепежей. Подбор по марке и модели автомобиля.'
  },
  {
    icon: '◈',
    name: 'Шиномонтаж',
    desc: 'Профессиональный монтаж легковых автомобилей и внедорожников. Ремонт порезов, прокатка дисков, ошиповка шин.'
  },
  {
    icon: '⊚',
    name: 'Балансировка',
    desc: 'Компьютерная балансировка колёс. Устраняем вибрацию и продлеваем срок службы ходовой части.'
  },
  {
    icon: '▣',
    name: 'Сезонное хранение',
    desc: 'Храним ваши шины в охраняемом складе весь сезон. Удобно, безопасно, с напоминанием о смене.'
  },
  {
    icon: '◑',
    name: 'Автокосметика',
    desc: 'Японская автокосметика премиум-класса Eikosha. Автомасла на розлив, спецжидкости, автохимия.'
  }
];

const allBrands = [
  'Michelin',
  'Pirelli',
  'Continental',
  'Bridgestone',
  'Goodyear',
  'Yokohama',
  'Dunlop',
  'Hankook',
  'Nokian',
  'Cordiant',
  'Nordman',
  'Maxxis',
  'Toyo',
  'Kumho'
];

const featuredBrands = [
  { name: 'MICHELIN', origin: 'Франция', flag: '🇫🇷' },
  { name: 'PIRELLI', origin: 'Италия', flag: '🇮🇹' },
  { name: 'CONTINENTAL', origin: 'Германия', flag: '🇩🇪' },
  { name: 'BRIDGESTONE', origin: 'Япония', flag: '🇯🇵' },
  { name: 'NOKIAN', origin: 'Финляндия', flag: '🇫🇮' },
  { name: 'LASSA', origin: 'Турция', flag: '🇹🇷' },
  { name: 'YOKOHAMA', origin: 'Япония', flag: '🇯🇵' },
  { name: 'HANKOOK', origin: 'Корея', flag: '🇰🇷' }
];

const stores = [
  {
    name: 'Демуса',
    addr: 'ул. Демуса, 9/9',
    hours: 'Пн–Пт: 9:00–18:00, Сб: 9:00–15:00',
    lat: 45.05346,
    lng: 39.09271
  },
  {
    name: 'Старокубанская',
    addr: 'ул. Старокубанская, 122/11',
    hours: 'Пн–Вс: 9:00–19:00',
    lat: 45.02476,
    lng: 39.00185
  },
  {
    name: 'Дзержинского',
    addr: 'ул. Дзержинского, 132',
    hours: 'Пн–Вс: 9:00–19:00',
    lat: 45.08415,
    lng: 39.0279
  }
];

const perks = [
  '10 лет на рынке Краснодарского края',
  'Сотрудничество с ведущими мировыми производителями',
  'Шины и диски в кредит или рассрочку',
  'Легковой шиномонтаж и шиномонтаж внедорожников',
  'Японская автокосметика премиум-класса Eikosha'
];

const reviews = [
  {
    name: 'Кирилл Нечаев',
    date: '4 декабря 2024',
    text: 'Покупал резину, цена за резину которая есть в наличии здесь и сейчас самая адекватная в городе. Тут же можно и переобуться, быстро и хорошо все сделали.'
  },
  {
    name: 'Артём Курченко',
    date: '5 октября 2025',
    text: 'Большой выбор резины. На месте сразу и поменял резину, работает шиномонтаж. Отлично проконсультировали, быстро нашли что нужно.'
  },
  {
    name: 'Елена С.',
    date: '21 ноября 2025',
    text: 'По телефону помогли выбрать, организовали доставку, не навязывали что дороже, а посоветовали вариант цена-качество.'
  },
  {
    name: 'Павел',
    date: '26 мая 2025',
    text: 'Оперативно без суеты организовали доставку нужного товара. Вежливые и ответственные сотрудники, свежие шины, отличный ценник.'
  },
  {
    name: 'Алёна',
    date: '20 января',
    text: 'Мониторила цены по городу. Здесь были самые адекватные цены на зимнюю резину. В снегопад и гололед показала себя отлично.'
  },
  {
    name: 'Oleg Kostin',
    date: '13 января',
    text: 'Отличные специалисты со знанием своего дела. Широкий выбор, адекватные цены, хорошая система скидок.'
  }
];

const currentYear = new Date().getFullYear();
let observer;

const closeMenu = () => {
  menuOpen.value = false;
};

onMounted(() => {
  const img = new Image();
  img.src = '/wheel.jpg';
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const px = frame.data;

    // Chroma-key for dark background: keep metallic wheel, remove near-black pixels.
    for (let i = 0; i < px.length; i += 4) {
      const r = px[i];
      const g = px[i + 1];
      const b = px[i + 2];
      const m = Math.max(r, g, b);

      if (m < 18) {
        px[i + 3] = 0;
      } else if (m < 42) {
        px[i + 3] = Math.round(((m - 18) / 24) * 255);
      }
    }

    ctx.putImageData(frame, 0, 0);
    wheelSrc.value = canvas.toDataURL('image/png');
  };

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div>
    <nav>
      <a href="#hero" class="logo" @click="closeMenu">
        <img src="/logo.png" alt="Автореал" />
        <span class="logo-text">АВТО<span>РЕАЛ</span></span>
      </a>

      <button class="menu-btn" @click="menuOpen = !menuOpen" aria-label="Открыть меню">
        {{ menuOpen ? 'Закрыть' : 'Меню' }}
      </button>

      <ul :class="{ open: menuOpen }">
        <li><a href="#services" @click="closeMenu">Услуги</a></li>
        <li><a href="#brands" @click="closeMenu">Бренды</a></li>
        <li><a href="#map" @click="closeMenu">Магазины</a></li>
        <li><a href="#about" @click="closeMenu">О нас</a></li>
        <li><a href="#reviews" @click="closeMenu">Отзывы</a></li>
      </ul>

      <a href="tel:+79284449500" class="btn-primary nav-phone">+7 (928) 444-95-00</a>
    </nav>

    <section id="hero">
      <div class="hero-bg"></div>
      <div class="hero-lines">
        <div class="hero-wheel">
          <img :src="wheelSrc" alt="" class="hero-wheel-img" />
        </div>
      </div>

      <div class="hero-content">
        <div class="hero-tag">Автореал — Диски &amp; Шины · Краснодар</div>
        <h1 class="hero-title">Твой<br /><span class="accent">Правильный</span>Выбор</h1>
        <p class="hero-sub">
          Крупнейший в Краснодарском крае интернет-магазин шин и дисков. Шиномонтаж, балансировка,
          сезонное хранение и диагностика.
        </p>
        <div class="hero-cta">
          <a href="tel:+79284449500" class="btn-primary">Позвонить</a>
          <a href="#map" class="btn-ghost">Где мы находимся</a>
        </div>
      </div>

      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-num">10<span>+</span></div>
          <div class="stat-label">Лет на рынке</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">3</div>
          <div class="stat-label">Точки в Краснодаре</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">100<span>+</span></div>
          <div class="stat-label">Брендов в наличии</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">0<span>%</span></div>
          <div class="stat-label">Рассрочка</div>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="section-tag reveal">— Что мы делаем</div>
      <h2 class="section-title reveal">Наши Услуги</h2>
      <div class="services-grid reveal">
        <article class="service-card" v-for="(service, index) in services" :key="service.name">
          <div class="service-num">0{{ index + 1 }}</div>
          <span class="service-icon">{{ service.icon }}</span>
          <div class="service-name">{{ service.name }}</div>
          <div class="service-desc">{{ service.desc }}</div>
        </article>
      </div>
    </section>

    <section id="brands">
      <div class="brands-header">
        <div>
          <div class="section-tag reveal">— Партнёры</div>
          <h2 class="section-title reveal">Бренды, которым<br />мы доверяем</h2>
        </div>
        <p class="brands-note reveal">
          Работаем только с проверенными производителями. Каждый бренд — гарантия качества и
          безопасности.
        </p>
      </div>

      <div class="brands-marquee-wrap reveal">
        <div class="brands-track">
          <div class="brand-chip" v-for="(brand, index) in [...allBrands, ...allBrands]" :key="`${brand}-${index}`">
            <div class="brand-dot"></div>
            <span class="brand-name">{{ brand }}</span>
          </div>
        </div>
      </div>

      <div class="brands-featured reveal">
        <article class="brand-card" v-for="brand in featuredBrands" :key="brand.name">
          <span class="brand-flag">{{ brand.flag }}</span>
          <span class="brand-logo-text">{{ brand.name }}</span>
          <div class="brand-origin">{{ brand.origin }}</div>
        </article>
      </div>
    </section>

    <section id="map">
      <div class="section-tag reveal">— Где нас найти</div>
      <h2 class="section-title reveal">Наши Магазины</h2>

      <div class="map-layout">
        <div class="stores-list reveal">
          <article
            class="store-item"
            v-for="(store, index) in stores"
            :key="store.name"
          >
            <div class="store-num">0{{ index + 1 }}</div>
            <div>
              <div class="store-name">{{ store.name }}</div>
              <div class="store-addr">{{ store.addr }}</div>
              <div class="store-hours">{{ store.hours }}</div>
            </div>
          </article>
        </div>

        <div class="map-yandex reveal">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f7309c9d12b800d64a1c8f11465f9ab18722d72e2f30aba63ed0c1488759686&amp;source=constructor"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="about-bg-text">АВТОРЕАЛ</div>
      <div class="about-layout">
        <div class="about-img-side reveal">
          <div class="about-img-box">
            <svg class="about-tire-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" stroke="white" stroke-width="2" />
              <circle cx="100" cy="100" r="70" stroke="white" stroke-width="8" />
              <circle cx="100" cy="100" r="30" stroke="white" stroke-width="2" />
              <line x1="100" y1="10" x2="100" y2="70" stroke="white" stroke-width="2" />
              <line x1="100" y1="130" x2="100" y2="190" stroke="white" stroke-width="2" />
              <line x1="10" y1="100" x2="70" y2="100" stroke="white" stroke-width="2" />
              <line x1="130" y1="100" x2="190" y2="100" stroke="white" stroke-width="2" />
              <line x1="36" y1="36" x2="79" y2="79" stroke="white" stroke-width="2" />
              <line x1="121" y1="121" x2="164" y2="164" stroke="white" stroke-width="2" />
              <line x1="164" y1="36" x2="121" y2="79" stroke="white" stroke-width="2" />
              <line x1="79" y1="121" x2="36" y2="164" stroke="white" stroke-width="2" />
            </svg>
          </div>
          <div class="about-accent-box">
            <div class="about-accent-num">10</div>
            <div class="about-accent-label">лет на рынке</div>
          </div>
        </div>

        <div>
          <div class="section-tag reveal">— О компании</div>
          <h2 class="section-title reveal" style="margin-bottom: 32px">Мы знаем<br />колёса</h2>
          <p class="about-lead reveal">
            ООО «Автореал» — крупнейший в Краснодарском крае интернет-магазин шин, дисков и сопутствующих товаров для авто.
          </p>
          <p class="about-body reveal">
            Занимаясь шинами и дисками уже длительное время, наша компания готова предложить лучший ассортимент для притязательного автовладельца.
          </p>
          <p class="about-body reveal">
            Мы сотрудничаем с ведущими мировыми производителями и предлагаем комплексный сервис: продажу, монтаж, балансировку и сезонное хранение шин.
          </p>

          <div class="about-perks reveal">
            <div class="perk" v-for="perk in perks" :key="perk">
              <div class="perk-line"></div>
              <div class="perk-text">{{ perk }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="reviews">
      <div class="section-tag reveal">— Отзывы</div>
      <h2 class="section-title reveal">Говорят клиенты</h2>
      <div class="reviews-grid">
        <article class="review-card reveal" v-for="(review, index) in reviews" :key="review.name" :style="{ transitionDelay: `${index * 0.1}s` }">
          <div class="review-quote">"</div>
          <p class="review-text">{{ review.text }}</p>
          <div class="review-author">{{ review.name }}</div>
          <div class="review-meta">
            <span class="review-stars">★★★★★</span>
            <span class="review-date">{{ review.date }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="cta">
      <div class="cta-bg"></div>
      <h2 class="cta-title reveal">Готов к<br />сезону?</h2>
      <p class="cta-sub reveal">
        Напишите нам и мы перезвоним. Поможем подобрать шины и диски, оформим заказ или запишем на сервис.
      </p>
      <div class="cta-btns reveal">
        <a href="tel:+79284449500" class="btn-primary">+7 (928) 444-95-00</a>
        <a href="tel:+78612922923" class="btn-secondary">+7 (861) 292-29-23</a>
      </div>
    </section>

    <footer>
      <a href="#hero" class="footer-logo" @click="closeMenu">
        <img src="/logo.png" alt="Автореал" />
        <span class="logo-text">АВТО<span>РЕАЛ</span></span>
      </a>

      <div class="footer-links">
        <a href="#services">Услуги</a>
        <a href="#brands">Бренды</a>
        <a href="#map">Магазины</a>
        <a href="#about">О нас</a>
        <a href="mailto:info@avtoreal.example">info@avtoreal.example</a>
      </div>

      <div class="footer-copy">
        <div>+7 (928) 444-95-00 · +7 (861) 292-29-23</div>
        <div>© {{ currentYear }} ООО Автореал · Краснодар</div>
      </div>
    </footer>
  </div>
</template>

<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 24px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.95), transparent);
}

.logo,
.footer-logo {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.logo img {
  height: 56px;
  width: auto;
  display: block;
}

.footer-logo img {
  height: 48px;
  width: auto;
  display: block;
}

.logo-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 34px;
  letter-spacing: 0.08em;
  color: var(--white);
  line-height: 1;
}

.logo-text span {
  color: var(--orange);
}

.menu-btn {
  display: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--white);
  background: transparent;
  padding: 10px 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 11px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 32px;
  margin: 0;
  padding: 0;
}

nav ul a {
  color: var(--muted);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s;
}

nav ul a:hover {
  color: var(--white);
}

.nav-phone {
  text-decoration: none;
  white-space: nowrap;
}

#hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 120px 60px 60px;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 80% 50%, #1a0a00 0%, transparent 70%);
}

.hero-lines {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50%;
}

.hero-wheel {
  position: absolute;
  right: -70px;
  top: 50%;
  transform: translateY(-50%);
  width: 840px;
  height: 840px;
  animation: spin-slow 30s linear infinite;
}

.hero-wheel-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  filter: contrast(1.06) brightness(1.03);
}

@keyframes spin-slow {
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-tag {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--orange);
  border: 1px solid var(--orange);
  padding: 6px 14px;
  margin-bottom: 32px;
  transform: translateY(-18px);
  opacity: 0;
  animation: fade-up 0.8s 0.2s forwards;
}

.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(72px, 9vw, 128px);
  line-height: 0.9;
  margin: 0;
  opacity: 0;
  animation: fade-up 0.8s 0.4s forwards;
}

.hero-title .accent {
  color: var(--orange);
  display: block;
}

.hero-sub {
  margin-top: 28px;
  font-size: 16px;
  color: var(--muted);
  max-width: 460px;
  line-height: 1.7;
  opacity: 0;
  animation: fade-up 0.8s 0.6s forwards;
}

.hero-cta {
  margin-top: 48px;
  display: flex;
  gap: 16px;
  align-items: center;
  opacity: 0;
  animation: fade-up 0.8s 0.8s forwards;
}

.hero-stats {
  position: absolute;
  bottom: 60px;
  left: 60px;
  right: 60px;
  display: flex;
  gap: 60px;
  opacity: 0;
  animation: fade-up 0.8s 1s forwards;
}

.stat-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
}

.stat-num span {
  color: var(--orange);
}

.stat-label {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section {
  padding: 120px 60px;
}

.section-tag {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 16px;
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(42px, 5vw, 72px);
  line-height: 1;
  margin: 0;
}

#services,
#map,
#reviews {
  background: var(--gray);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.06);
}

.service-card {
  background: var(--gray);
  padding: 48px 36px;
  position: relative;
}

.service-card::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: var(--orange);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card:hover {
  background: var(--gray-mid);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  font-size: 36px;
  margin-bottom: 24px;
  display: block;
}

.service-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 72px;
  color: rgba(255, 255, 255, 0.04);
  position: absolute;
  top: 16px;
  right: 24px;
}

.service-name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.service-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
}

.brands-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
}

.brands-note {
  max-width: 340px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
  text-align: right;
}

.brands-marquee-wrap {
  overflow: hidden;
  margin-top: 48px;
  position: relative;
}

.brands-marquee-wrap::before,
.brands-marquee-wrap::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;
  z-index: 2;
}

.brands-marquee-wrap::before {
  left: 0;
  background: linear-gradient(to right, var(--black), transparent);
}

.brands-marquee-wrap::after {
  right: 0;
  background: linear-gradient(to left, var(--black), transparent);
}

.brands-track {
  display: flex;
  animation: marquee 20s linear infinite;
  width: max-content;
}

.brands-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

.brand-chip {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  white-space: nowrap;
  height: 80px;
}

.brand-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--orange);
}

.brand-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.3);
  transition: color 0.25s;
}

.brand-chip:hover .brand-name {
  color: var(--white);
}

.brands-featured {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 48px;
}

.brand-card {
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 32px 24px;
  text-align: center;
  transition: border-color 0.25s, background 0.25s;
}

.brand-card:hover {
  border-color: var(--orange);
  background: rgba(255, 77, 0, 0.04);
}

.brand-logo-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.6);
  display: block;
  margin-bottom: 8px;
}

.brand-origin {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.brand-flag {
  font-size: 20px;
  display: block;
  margin-bottom: 10px;
}

.map-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;
  align-items: start;
}

.stores-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.store-item {
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 24px 28px;
  display: flex;
  gap: 20px;
}

.store-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  color: var(--orange);
}

.store-name {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
}

.store-addr {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 4px;
}

.store-hours {
  font-size: 12px;
  color: var(--orange);
}

.map-yandex {
  height: 460px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.28);
  overflow: hidden;
}

.map-yandex iframe {
  width: 100%;
  height: 100%;
  border: 0;
  filter: saturate(0.85) brightness(0.9);
}

#about {
  position: relative;
  overflow: hidden;
}

.about-bg-text {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 200px;
  color: rgba(255, 255, 255, 0.02);
  letter-spacing: -0.05em;
  user-select: none;
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-img-side {
  position: relative;
}

.about-img-box {
  width: 100%;
  aspect-ratio: 4 / 5;
  background: var(--gray-mid);
  position: relative;
  overflow: hidden;
}

.about-img-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 77, 0, 0.15) 0%, transparent 50%);
}

.about-tire-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  opacity: 0.15;
}

.about-accent-box {
  position: absolute;
  right: -24px;
  bottom: -24px;
  width: 160px;
  padding: 24px;
  background: var(--orange);
  color: var(--black);
  text-align: center;
}

.about-accent-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  line-height: 1;
}

.about-accent-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.about-lead {
  font-size: 20px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 24px;
}

.about-body {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.8;
  margin: 0 0 36px;
}

.about-perks {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.perk {
  display: flex;
  gap: 14px;
  align-items: center;
}

.perk-line {
  width: 32px;
  height: 1px;
  background: var(--orange);
}

.perk-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 60px;
}

.review-card {
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 32px;
}

.review-quote {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 72px;
  color: var(--orange);
  opacity: 0.3;
  line-height: 0.8;
  margin-bottom: 16px;
}

.review-text {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.8;
  margin: 0 0 24px;
}

.review-author {
  font-size: 13px;
  font-weight: 700;
}

.review-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.review-stars {
  color: var(--orange);
  font-size: 12px;
  letter-spacing: 2px;
}

.review-date {
  font-size: 11px;
  color: var(--muted);
}

#cta {
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 90px 60px;
}

.cta-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255, 77, 0, 0.08) 0%, transparent 70%);
}

.cta-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(52px, 7vw, 96px);
  margin: 0;
  position: relative;
  z-index: 1;
}

.cta-sub {
  font-size: 16px;
  color: var(--muted);
  margin: 20px auto 44px;
  max-width: 560px;
  position: relative;
  z-index: 1;
}

.cta-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.btn-primary,
.btn-secondary {
  padding: 16px 30px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
}

.btn-primary {
  background: var(--orange);
  color: var(--black);
  border: 0;
  transition: background 0.2s, transform 0.2s;
}

.btn-primary:hover {
  background: var(--orange-dim);
  transform: translateY(-2px);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--white);
}

.btn-ghost {
  color: var(--white);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0.7;
  transition: opacity 0.2s;
  background: none;
  border: none;
  text-decoration: none;
}

.btn-ghost:hover {
  opacity: 1;
}

.btn-ghost::before {
  content: '→';
  font-size: 18px;
}

footer {
  background: #050505;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.footer-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-copy {
  font-size: 12px;
  color: var(--muted);
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1100px) {
  nav {
    padding: 20px 24px;
  }

  #hero {
    grid-template-columns: 1fr;
    padding: 100px 24px 150px;
  }

  .hero-lines {
    display: none;
  }

  .hero-stats {
    left: 24px;
    right: 24px;
    bottom: 32px;
    gap: 26px;
    flex-wrap: wrap;
  }

  section {
    padding: 84px 24px;
  }

  .services-grid,
  .brands-featured,
  .reviews-grid {
    grid-template-columns: 1fr 1fr;
  }

  .map-layout,
  .about-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .about-bg-text {
    display: none;
  }

  footer {
    padding: 40px 24px;
    flex-direction: column;
    text-align: center;
  }

  .footer-copy {
    text-align: center;
  }
}

@media (max-width: 760px) {
  .menu-btn {
    display: block;
    margin-left: auto;
  }

  nav {
    flex-wrap: wrap;
  }

  nav ul {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 18px;
    padding: 16px;
    background: rgba(10, 10, 10, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  nav ul.open {
    display: flex;
  }

  .nav-phone {
    display: none;
  }

  .services-grid,
  .brands-featured,
  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .hero-cta {
    margin-top: 32px;
    flex-wrap: wrap;
  }

  .brands-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .brands-note {
    text-align: left;
    max-width: none;
  }

  .map-yandex {
    height: 320px;
  }

  #cta {
    padding: 70px 24px;
  }

  .logo,
  .footer-logo {
    line-height: 0;
  }

  .logo img {
    height: 48px;
  }

  .footer-logo img {
    height: 40px;
  }

  .logo-text {
    font-size: 28px;
  }
}
</style>
