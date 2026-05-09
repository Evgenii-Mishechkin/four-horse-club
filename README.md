# Клуб четырёх коней / Four Knights Club

**[🌐 Открыть сайт](https://evgenii-mishechkin.github.io/four-horse-club/)**

---

## RU О проекте

Лендинг шахматного клуба «Четыре коня» — художественный проект по мотивам главы XXXIV романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев». Страница имитирует афишу турнира, организованного великим комбинатором Остапом Бендером в захолустных Васюках с целью «превратить уездный город в столицу земного шара».

Проект выполнен в качестве тестового задания для [Yandex Crowd](https://yandex.ru/jobs/pages/crowd) и представляет собой полностью адаптивный лендинг, реализованный без использования CSS-фреймворков и JavaScript-библиотек.

### Функциональность

| Блок | Описание |
|---|---|
| **Герой** | Анимированный стартовый экран с вращающимся SVG-кругом, покачивающимися шахматными фигурами и фоновым изображением города. Две кнопки-якоря ведут к соответствующим секциям страницы. |
| **Бегущая строка** | Бесшовная прокручиваемая строка (×2) на красном фоне. Встречается дважды — после героя и перед футером. |
| **Секция «Идея»** | Анонс лекции и сеанса одновременной игры. Содержит таблицу с условиями участия. |
| **Этапы преображения** | Сетка из 7 карточек на десктопе / слайдер с пагинацией на мобильных устройствах. Не зацикленный, без автоперелистывания. |
| **Участники турнира** | Карусель карточек — зацикленная, автоматически переключается каждые 4 секунды, приостанавливается при наведении. |
| **Футер** | Юридическая оговорка о вымышленности персонажей. |

### Анимации

Страница содержит анимации при загрузке, при прокрутке (IntersectionObserver) и постоянные фоновые анимации. Реализованы средствами CSS и Vanilla JS без сторонних библиотек.

### Адаптивность

- Поддерживаемые разрешения: **375px – 1920px+**

### Технологии

- **HTML5** — семантическая разметка, SVG, `<table>`
- **CSS3** — Custom Properties, Flexbox, CSS Grid, `@keyframes`, `animation`, `transition`, IntersectionObserver-классы
- **JavaScript (Vanilla ES6)** — три модуля без зависимостей
- **Google Fonts** — Golos Text, Merriweather

### Структура проекта

```
four-horse-club/
├── index.html
├── styles/
│   ├── reset.css          — сброс стилей
│   ├── style.css          — основные стили + анимации
│   └── media.css          — адаптивные стили
├── scripts/
│   ├── animate.js         — hover-эффекты + scroll-reveal
│   ├── slider-players.js  — карусель участников
│   └── stages-slider.js   — слайдер этапов
└── images/
    ├── header/
    ├── hero/
    ├── idea/
    ├── stages/
    └── slider-players/
```

---

## EN About the Project

A landing page for the "Four Knights Chess Club" — an artistic project inspired by Chapter XXXIV of the novel *The Twelve Chairs* by Ilya Ilf and Yevgeny Petrov. The page recreates a tournament poster organized by the great schemer Ostap Bender in the backwater town of Vasyuki, promising to turn it into "the capital of the globe."

The project was completed as a test assignment for [Yandex Crowd](https://yandex.ru/jobs/pages/crowd) and is a fully responsive landing page built without any CSS frameworks or JavaScript libraries.

### Features

| Section | Description |
|---|---|
| **Hero** | Animated opening screen with a rotating SVG circle, swaying chess pieces, and a city background. Two anchor buttons scroll to corresponding sections. |
| **Running Line** | Seamless scrolling marquee (×2 copies) on a red background. Appears twice — after the hero and before the footer. |
| **"The Idea" Section** | Announcement of a lecture and simultaneous chess session, with a participation fee table. |
| **Stages of Transformation** | 7-card grid (desktop) / paginated slider (mobile). Not looped, no auto-sliding. |
| **Tournament Participants** | Card carousel — looped, auto-advances every 4 seconds, pauses on hover. |
| **Footer** | Disclaimer about fictional characters. |

### Animations

The page features entrance animations on load, scroll-triggered reveals via IntersectionObserver, and continuous background animations — all implemented with pure CSS and Vanilla JS, no third-party libraries.

### Responsive Design

- Supported widths: **375px – 1920px+**

### Tech Stack

- **HTML5** — semantic markup, SVG, `<table>`
- **CSS3** — Custom Properties, Flexbox, CSS Grid, `@keyframes`, `animation`, `transition`, IntersectionObserver-driven classes
- **JavaScript (Vanilla ES6)** — three dependency-free modules
- **Google Fonts** — Golos Text, Merriweather

### Project Structure

```
four-horse-club/
├── index.html
├── styles/
│   ├── reset.css          — CSS reset
│   ├── style.css          — main styles + animations
│   └── media.css          — responsive styles
├── scripts/
│   ├── animate.js         — hover effects + scroll-reveal
│   ├── slider-players.js  — participants carousel
│   └── stages-slider.js   — stages slider
└── images/
    ├── header/
    ├── hero/
    ├── idea/
    ├── stages/
    └── slider-players/
```

---

*Все персонажи, события и цитаты являются вымышленными. С подробностями можно познакомиться в главе XXXIV романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».*

*All characters, events, and quotes are fictional. See Chapter XXXIV of Ilya Ilf and Yevgeny Petrov's "The Twelve Chairs" for details.*
