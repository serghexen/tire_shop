<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const menuOpen = ref(false);

const services = [
  {
    image: '/service-icons/tires.jpg',
    name: 'Продажа шин',
    desc: 'Летние, зимние и всесезонные шины от ведущих мировых производителей. Огромный ассортимент для легковых и внедорожников.'
  },
  {
    image: '/service-icons/disks.jpg',
    name: 'Продажа дисков',
    desc: 'Литые и штампованные диски. Широкий выбор размеров и крепежей. Подбор по марке и модели автомобиля.'
  },
  {
    image: '/service-icons/mounting.jpg',
    name: 'Шиномонтаж',
    desc: 'Профессиональный монтаж легковых автомобилей и внедорожников. Ремонт порезов, прокатка дисков, ошиповка шин.'
  },
  {
    image: '/service-icons/balance.png',
    name: 'Балансировка',
    desc: 'Компьютерная балансировка колёс. Устраняем вибрацию и продлеваем срок службы ходовой части.'
  },
  {
    image: '/service-icons/storage.jpg',
    name: 'Сезонное хранение',
    desc: 'Храним ваши шины в охраняемом складе весь сезон. Удобно, безопасно, с напоминанием о смене.'
  },
  {
    image: '/service-icons/cosmetics.jpg',
    name: 'Запчасти и расходные\nматериалы',
    desc: 'Являемся производителем масла REALMAX. В наличии расходные материалы для прохождение ТО. Большой выбор запчастей.'
  }
];

const allBrands = [
  'Lassa',
  'Otani',
  'Infinity',
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
  { name: 'LASSA', origin: 'Турция', logo: '/brand-logos/lassa-red.jpg', zoom: '2.56' },
  { name: 'OTANI', origin: 'Таиланд', logo: '/brand-logos/otani.png', zoom: '1.08' },
  { name: 'PIRELLI', origin: 'Италия', logo: '/brand-logos/pirelli.svg', zoom: '1.08' },
  { name: 'BRIDGESTONE', origin: 'Япония', logo: '/brand-logos/bridgestone.svg', zoom: '1.08' },
  { name: 'YOKOHAMA', origin: 'Япония', logo: '/brand-logos/yokohama.svg', zoom: '1.08' },
  { name: 'INFINITY', origin: 'ОАЭ', logo: '/brand-logos/infinity.png', zoom: '1.08' },
  { name: 'IKON TYRES', origin: 'Россия', logo: '/brand-logos/ikon-tyres.jpg', zoom: '2.0' },
  { name: 'KUMHO', origin: 'Корея', logo: '/brand-logos/kumho-official.svg', zoom: '1.20' }
];

const mainPhone = '8 (800) 777-0-735';
const mainPhoneHref = 'tel:+78007770735';

const stores = [
  {
    name: 'Офис-Склад',
    addr: 'Краснодар, ул. Демуса 9/9',
    schedule: ['ПН-ПТ 9:00 до 18:00', 'СБ 9:00 до 15:00', 'ВС Выходной'],
    phones: [
      { label: '8-928-038-01-31', href: 'tel:+79280380131' },
      { label: '8-861-212-67-91', href: 'tel:+78612126791' },
      { label: '8-861-212-67-92', href: 'tel:+78612126792' }
    ],
    lat: 45.05346,
    lng: 39.09271
  },
  {
    name: 'Шинный центр LASSA',
    addr: 'Краснодар, ул. Дзержинского 132',
    schedule: ['ПН-ВС 9:00 до 19:00'],
    notes: ['Шиномонтаж, Сезонное хранение', 'Магазин Шины&Диски'],
    phones: [
      { label: '8-928-038-01-31', href: 'tel:+79280380131' },
      { label: '8-929-837-05-87', href: 'tel:+79298370587' }
    ],
    lat: 45.08415,
    lng: 39.0279
  },
  {
    name: 'Шинный центр YOKOHAMA',
    addr: 'Краснодар, ул. Старокубанская 122/11',
    schedule: ['ПН-ВС 9:00 до 19:00'],
    phones: [
      { label: '8-902-407-22-01', href: 'tel:+79024072201' },
      { label: '8-928-210-7000', href: 'tel:+79282107000' },
      { label: '8-861-290-7000', href: 'tel:+78612907000' }
    ],
    lat: 45.02476,
    lng: 39.00185
  },
  {
    name: 'Склад',
    addr: 'Ростов-на-Дону, Вавилова 67Г',
    schedule: ['ПН-ПТ 9:00 до 18:00'],
    phones: [
      { label: '8-909-40-23-254', href: 'tel:+79094023254' }
    ]
  },
  {
    name: 'Офис-Склад',
    addr: 'Санкт-Петербург, Пушкинский район, посёлок Шушары, Московское шоссе, 15В · этаж 2, офис 2-9',
    schedule: ['ПН-ПТ 9:00 до 18:00', 'СБ-ВС 10:00 до 17:00'],
    phones: [
      { label: '8-981-129-53-25', href: 'tel:+79811295325' }
    ]
  }
];

const perks = [
  '15 лет на рынке Краснодарского края',
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
        <span class="logo-brand"><span class="logo-outlined">АВТО</span><span class="logo-solid">РЕАЛ</span></span>
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

      <div class="nav-actions">
        <a :href="mainPhoneHref" class="btn-primary nav-phone">{{ mainPhone }}</a>
      </div>
    </nav>

    <section id="hero">
      <div class="hero-bg"></div>
      <div class="hero-lines">
        <a class="hero-qr-hero" href="https://t.me/AVTOREAL_735_BOT" target="_blank" rel="noopener noreferrer">
          <img src="/hero/telegram-card-cropped.png" alt="QR для Telegram @AVTOREAL_735_BOT" class="hero-qr-hero-img" loading="lazy" />
          <span class="hero-qr-hero-caption">Подбор шин и дисков 24/7</span>
        </a>
      </div>

      <div class="hero-content">
        <div class="hero-tag">Автореал — Диски &amp; Шины · Краснодар</div>
        <a class="hero-qr-mobile" href="https://t.me/AVTOREAL_735_BOT" target="_blank" rel="noopener noreferrer">
          <img src="/hero/telegram-card-cropped.png" alt="QR для Telegram @AVTOREAL_735_BOT" class="hero-qr-hero-img" loading="lazy" />
          <span class="hero-qr-hero-caption">Подбор шин и дисков 24/7</span>
        </a>
        <h1 class="hero-title">Твой<br /><span class="accent">Правильный</span>Выбор</h1>
        <p class="hero-sub">
          Крупнейший в Краснодарском крае магазин шин и дисков. Шиномонтаж, балансировка,
          сезонное хранение и диагностика.
        </p>
      </div>

      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-num">15<span>+</span></div>
          <div class="stat-label">Лет на рынке</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">3</div>
          <div class="stat-label">Магазина в Краснодаре</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">100<span>+</span></div>
          <div class="stat-label">Брендов в наличии</div>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="section-tag reveal">— Что мы делаем</div>
      <h2 class="section-title reveal">Наши Услуги</h2>
      <div class="services-grid reveal">
        <article class="service-card" v-for="(service, index) in services" :key="service.name">
          <div class="service-ornament" aria-hidden="true">
            <img :src="service.image" :alt="service.name" loading="lazy" />
          </div>
          <div class="service-num">0{{ index + 1 }}</div>
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
          <span class="brand-logo-shell">
            <img :src="brand.logo" :alt="`${brand.name} logo`" class="brand-logo-img" :style="{ '--brand-zoom': brand.zoom || '1' }" loading="lazy" />
          </span>
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
              <div class="store-hours">
                <div v-for="line in store.schedule" :key="line">{{ line }}</div>
              </div>
              <div v-if="store.notes?.length" class="store-notes">
                <div v-for="note in store.notes" :key="note">{{ note }}</div>
              </div>
              <div class="store-phones">
                <a v-for="phone in store.phones" :key="phone.label" :href="phone.href">{{ phone.label }}</a>
              </div>
            </div>
          </article>
        </div>

        <div class="map-yandex reveal">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f7309c9d12b800d64a1c8f11465f9ab18722d72e2f30aba63ed0c1488759686&amp;source=constructor" 
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="about-bg-text">АВТОРЕАЛ</div>
      <div class="about-layout">
        <div class="about-img-side reveal">
          <div class="about-img-box">
            <div class="about-service-visual">
              <img src="/about/wheel-building.jpg" alt="Колесо в сервисной зоне" class="about-service-photo" loading="lazy" />
              <div class="about-visual-tag">СЕРВИС · ШИНЫ · ДИСКИ</div>
            </div>
            <div class="about-info-panel">
              <div class="about-info-kicker">Склад и сервис</div>
              <div class="about-info-title">Подбор за 15 минут</div>
              <div class="about-info-meta">Шины в наличии · Монтаж в день покупки</div>
            </div>
          </div>
          <div class="about-accent-box">
            <div class="about-accent-num">15</div>
            <div class="about-accent-label">лет на рынке</div>
          </div>
        </div>

        <div>
          <div class="section-tag reveal">— О компании</div>
          <h2 class="section-title reveal" style="margin-bottom: 32px">Мы знаем<br />колёса</h2>
          <p class="about-lead reveal">
            ООО «Автореал» — крупнейший в Краснодарском крае магазин шин, дисков и сопутствующих товаров для авто.
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
      <h2 class="cta-title reveal"><span>Подберём комплект</span><br /><span class="cta-title-accent">под ваш авто</span></h2>
      <div class="cta-btns reveal">
        <a :href="mainPhoneHref" class="btn-primary">{{ mainPhone }}</a>
        <a href="tel:+79280380131" class="btn-secondary">+7 (928) 038-01-31</a>
      </div>
    </section>

    <footer>
      <a href="#hero" class="footer-logo" @click="closeMenu">
        <img src="/logo.png" alt="Автореал" />
        <span class="logo-brand"><span class="logo-outlined">АВТО</span><span class="logo-solid">РЕАЛ</span></span>
      </a>

      <div class="footer-links">
        <a href="#services">Услуги</a>
        <a href="#brands">Бренды</a>
        <a href="#map">Магазины</a>
        <a href="#about">О нас</a>
      </div>

      <div class="footer-copy">
        <div>{{ mainPhone }} · +7 (928) 038-01-31</div>
        <div>© {{ currentYear }} ООО Автореал · Краснодар</div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap&subset=cyrillic');

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

.logo-brand {
  font-family: 'Russo One', sans-serif;
  font-size: 46px;
  letter-spacing: 0.03em;
  line-height: 1;
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
}

.logo-outlined {
  color: transparent;
  -webkit-text-stroke: 1.5px #f0f2f6;
}

.logo-solid {
  color: #ff5722;
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

.nav-actions {
  display: inline-flex;
  align-items: center;
  width: 236px;
}

.nav-phone {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
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
  background:
    linear-gradient(90deg, rgba(5, 7, 12, 0.96) 0%, rgba(5, 7, 12, 0.82) 40%, rgba(5, 7, 12, 0.72) 100%),
    url('/hero/hero-bg-wheel.jpg') center right / cover no-repeat;
}

.hero-lines {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50%;
}

.hero-qr-hero {
  position: absolute;
  right: 60px;
  top: 540px;
  transform: none;
  width: 236px;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}

.hero-qr-hero-img {
  width: 100%;
  display: block;
  border-radius: 0;
  background: transparent;
  object-fit: contain;
}

.hero-qr-hero-caption {
  display: block;
  margin-top: -50px;
  text-align: center;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--white);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: min(52vw, 760px);
  margin-top: -190px;
}

.hero-qr-mobile {
  display: none;
  width: 236px;
  margin-top: 18px;
  text-decoration: none;
}

.hero-tag {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--orange);
  border: 1px solid var(--orange);
  padding: 6px 14px;
  margin-top: -72px;
  margin-bottom: 104px;
  transform: translateY(-18px);
  opacity: 0;
  animation: fade-up 0.8s 0.2s forwards;
}

.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(68px, 7.2vw, 112px);
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
  bottom: 150px;
  left: 60px;
  right: 60px;
  display: flex;
  align-items: flex-end;
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
  gap: 16px;
  margin-top: 60px;
}

.service-card {
  background: var(--gray);
  padding: 52px 40px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 320px;
}

.service-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 88% 14%, rgba(255, 77, 0, 0.18), transparent 36%),
    linear-gradient(126deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
  pointer-events: none;
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

.service-ornament {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 42%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

.service-ornament img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: grayscale(0.18) contrast(1.08) brightness(0.74);
  opacity: 0.58;
  transform: scale(1.04);
  transition: transform 0.35s ease, opacity 0.35s ease, filter 0.35s ease;
}

.service-card:hover .service-ornament {
  border-left-color: rgba(255, 77, 0, 0.3);
}

.service-card:hover .service-ornament img {
  transform: scale(1.08);
  opacity: 0.7;
  filter: grayscale(0.06) contrast(1.1) brightness(0.86);
}

.service-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 72px;
  color: rgba(255, 255, 255, 0.04);
  position: absolute;
  bottom: 12px;
  left: 24px;
  z-index: 2;
}

.service-name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
  white-space: pre-line;
}

.service-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
  position: relative;
  z-index: 2;
  max-width: 58%;
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

.brand-origin {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 4px;
}

.brand-logo-img {
  display: block;
  width: 100%;
  max-width: 182px;
  height: 48px;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
  transform: scale(var(--brand-zoom, 1));
}

.brand-logo-shell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 64px;
  padding: 6px 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid rgba(255, 255, 255, 0.26);
  overflow: hidden;
}

.map-layout {
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 48px;
  align-items: stretch;
}

.stores-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
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

.store-notes {
  margin-top: 8px;
  font-size: 12px;
  color: var(--white);
  line-height: 1.5;
}

.store-phones {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
}

.store-phones a {
  color: var(--muted);
  text-decoration: none;
  font-size: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
}

.store-phones a:hover {
  color: var(--orange);
  border-bottom-color: var(--orange);
}

.map-yandex {
  height: 520px;
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
  background:
    radial-gradient(circle at 18% 22%, rgba(255, 77, 0, 0.2), transparent 36%),
    linear-gradient(155deg, #2a2a2a 0%, #151515 54%, #101010 100%);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.about-img-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.03) 0 1px,
      transparent 1px 42px
    );
}

.about-service-visual {
  position: absolute;
  left: 22px;
  right: 22px;
  top: 24px;
  bottom: 128px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.about-service-visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(155deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.22) 44%, rgba(0, 0, 0, 0.66) 100%),
    radial-gradient(circle at 18% 18%, rgba(255, 77, 0, 0.2), transparent 40%);
}

.about-service-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transform: scale(1.02);
}

.about-visual-tag {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  margin: 0 auto;
  width: fit-content;
  background: rgba(10, 10, 10, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 8px 14px;
  font-size: 10px;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.82);
  z-index: 2;
}

.about-info-panel {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: rgba(8, 8, 8, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 14px 16px;
}

.about-info-kicker {
  font-size: 10px;
  letter-spacing: 0.14em;
  color: var(--orange);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.about-info-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 34px;
  letter-spacing: 0.03em;
  line-height: 1;
  margin-bottom: 6px;
}

.about-info-meta {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.72);
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
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cta-title span {
  display: inline-block;
}

.cta-title-accent {
  color: var(--orange);
  text-shadow: 0 6px 26px rgba(255, 77, 0, 0.36);
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
  margin-top: 38px;
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
    padding: 100px 24px 84px;
    overflow: visible;
  }

  .hero-lines {
    display: none;
  }

  .hero-qr-mobile {
    display: none;
  }

  .hero-stats {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    margin-top: 26px;
    gap: 26px;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .hero-content {
    max-width: 100%;
    margin-top: -70px;
  }

  section {
    padding: 84px 24px;
  }

  .services-grid,
  .brands-featured,
  .reviews-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stores-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .services-grid {
    gap: 14px;
  }

  .about-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .about-bg-text {
    display: none;
  }

  .service-desc {
    max-width: 64%;
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
    margin-left: 0;
    padding: 8px 12px;
    font-size: 10px;
  }

  nav {
    flex-wrap: wrap;
    padding: 16px 14px;
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

  #hero {
    padding-top: 122px;
  }

  .hero-content {
    margin-top: 0;
  }

  .hero-qr-mobile {
    display: block;
    width: min(46vw, 176px);
    margin-top: -75px;
    margin-bottom: -25px;
    margin-left: auto;
    margin-right: -15px;
    text-align: center;
  }

  .hero-qr-mobile .hero-qr-hero-caption {
    margin-top: -35px;
    font-size: 10px;
    letter-spacing: 0.05em;
  }

  .services-grid,
  .brands-featured,
  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .stores-list {
    grid-template-columns: 1fr;
  }

  .services-grid {
    gap: 12px;
  }

  .service-ornament {
    display: none;
  }

  .service-desc {
    max-width: none;
  }

  .hero-title {
    font-size: clamp(44px, 13.2vw, 62px);
    line-height: 1;
    letter-spacing: 0;
    max-width: 100%;
  }

  .hero-tag {
    display: none;
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

  .cta-title {
    font-size: clamp(34px, 10.2vw, 46px);
    line-height: 0.95;
    letter-spacing: 0.03em;
  }

  .logo,
  .footer-logo {
    line-height: 0;
  }

  .logo img {
    height: 40px;
  }

  .footer-logo img {
    height: 40px;
  }

  .logo-brand {
    font-size: 24px;
    letter-spacing: 0.02em;
  }

  .about-service-visual {
    left: 14px;
    right: 14px;
    top: 14px;
    bottom: 152px;
  }

  .about-visual-tag {
    bottom: 10px;
    padding: 6px 10px;
    font-size: 9px;
    letter-spacing: 0.1em;
  }

  .about-info-panel {
    left: 14px;
    right: 14px;
    bottom: 14px;
    padding: 12px 12px;
  }

  .about-accent-box {
    position: static;
    width: auto;
    max-width: 180px;
    margin: 12px 0 0 auto;
    right: auto;
    bottom: auto;
    padding: 14px 18px;
  }

  .about-accent-num {
    font-size: 40px;
  }
}
</style>
