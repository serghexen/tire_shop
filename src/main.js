import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const METRIKA_ID = (import.meta.env.VITE_YANDEX_METRIKA_ID || '').trim();

function initYandexMetrika(counterId) {
  if (!counterId || typeof window === 'undefined') {
    return;
  }

  const scriptId = `yandex-metrika-${counterId}`;
  if (document.getElementById(scriptId)) {
    return;
  }

  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    k.id = scriptId;
    a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

  window.ym(counterId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });

  const noscriptId = `yandex-metrika-noscript-${counterId}`;
  if (!document.getElementById(noscriptId)) {
    const fallback = document.createElement('noscript');
    fallback.id = noscriptId;
    fallback.innerHTML =
      `<div><img src="https://mc.yandex.ru/watch/${counterId}" ` +
      'style="position:absolute; left:-9999px;" alt="" /></div>';
    document.body.appendChild(fallback);
  }
}

initYandexMetrika(METRIKA_ID);

createApp(App).mount('#app');
