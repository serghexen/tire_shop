# Tire Shop Landing (Vue + Vite)

Лендинг для шинного магазина на `Vue 3 + Vite` с адаптивной версткой (включая мобильный режим) и готовым Docker-деплоем через Nginx.

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть: `http://localhost:5173`

## Production build

```bash
npm run build
npm run preview
```

## Деплой в Docker (VDS)

Ниже полный минимальный сценарий для Ubuntu-сервера без SSL.

### 1) Подключиться к серверу

```bash
ssh <user>@<VDS_IP>
```

### 2) Установить Docker и docker-compose

```bash
sudo apt update
sudo apt install -y docker.io docker-compose
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
newgrp docker
```

### 3) Загрузить проект на сервер

Вариант через git:

```bash
git clone <repo_url> tire_shop
cd tire_shop
```

Вариант через rsync с локальной машины:

```bash
rsync -avz --delete /Users/sergey/Documents/tire_shop/tire_shop/ <user>@<VDS_IP>:/home/<user>/tire_shop/
ssh <user>@<VDS_IP>
cd /home/<user>/tire_shop
```

### 4) Запустить контейнер

```bash
docker-compose up -d --build
```

### 5) Проверить состояние

```bash
docker-compose ps
docker-compose logs -f
```

### 6) Открыть порт 80 в firewall (если UFW включен)

```bash
sudo ufw allow 80/tcp
sudo ufw status
```

Сайт будет доступен по адресу:

`http://<VDS_IP>`

## Почему без API/CMS

На текущем этапе это лендинг, поэтому контент хранится прямо в `src/App.vue` (массивы `services`, `stores`, `reviews` и т.д.).

## Карта

Используется iframe Яндекс.Карт: это самый простой и надежный вариант для лендинга без backend и API-ключей.
