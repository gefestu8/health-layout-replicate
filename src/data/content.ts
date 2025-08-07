// Централизованное хранение контента для переиспользования

export const siteConfig = {
  name: "MediSchau",
  description: "Медицинская информационная платформа"
};

export const navigation = [
  { label: "Главная", href: "/" },
  { label: "Болезни и симптомы", href: "/diseases" },
  { label: "Лекарства", href: "/medications" },
  { label: "Терапия", href: "/therapy" },
  { label: "Диагноз", href: "/diagnosis" },
  { label: "Семья", href: "/family" },
  { label: "Уход", href: "/care" },
  { label: "Здоровая жизнь", href: "/healthy-living" }
];

export const features = [
  {
    title: "Достоверная информация",
    description: "Только проверенные медицинские данные от ведущих специалистов и исследователей в области здравоохранения.",
    icon: "🔬"
  },
  {
    title: "Персональные рекомендации", 
    description: "Индивидуальный подход к каждому пациенту с учетом особенностей здоровья и медицинской истории.",
    icon: "👤"
  },
  {
    title: "Удобный поиск",
    description: "Быстрый поиск симптомов, заболеваний, лекарств и ближайших медицинских учреждений.",
    icon: "🔍"
  },
  {
    title: "Экспертные консультации",
    description: "Возможность получить профессиональную консультацию от квалифицированных врачей онлайн.",
    icon: "💬",
    variant: "highlighted" as const
  }
];

export const testimonials = [
  {
    content: "Отличный ресурс для получения медицинской информации. Помог мне лучше понять свое состояние и подготовиться к визиту к врачу.",
    author: "Анна К.",
    role: "Пациент",
    rating: 5,
    avatar: "/src/assets/commenter-sabine.jpg"
  },
  {
    content: "Использую для консультаций с пациентами. Качественная база знаний и актуальная информация о лекарственных препаратах.",
    author: "Д-р Михаил П.",
    role: "Терапевт",
    rating: 5,
    avatar: "/src/assets/commenter-hans.jpg"
  },
  {
    content: "Удобный интерфейс и понятная подача медицинской информации. Рекомендую всем, кто следит за своим здоровьем.",
    author: "Елена В.",
    role: "Медсестра", 
    rating: 5,
    avatar: "/src/assets/commenter-monika.jpg"
  }
];

export const footerSections = [
  {
    title: "Здоровье",
    links: [
      { label: "Симптомы", href: "/symptoms" },
      { label: "Диагностика", href: "/diagnostics" },
      { label: "Лечение", href: "/treatment" },
      { label: "Профилактика", href: "/prevention" }
    ]
  },
  {
    title: "Сервисы", 
    links: [
      { label: "Поиск врача", href: "/find-doctor" },
      { label: "Онлайн консультации", href: "/consultations" },
      { label: "Анализы", href: "/tests" },
      { label: "Вакцинация", href: "/vaccination" }
    ]
  },
  {
    title: "Информация",
    links: [
      { label: "О нас", href: "/about" },
      { label: "Контакты", href: "/contacts" },
      { label: "Политика конфиденциальности", href: "/privacy" },
      { label: "Условия использования", href: "/terms" }
    ]
  },
  {
    title: "Поддержка",
    links: [
      { label: "Помощь", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Обратная связь", href: "/feedback" },
      { label: "Техподдержка", href: "/support" }
    ]
  }
];

export const heroContent = {
  category: "ЗДРАВООХРАНЕНИЕ",
  title: "Как медицинская индустрия препятствует тому, что могло бы сделать страну здоровее",
  description: "Исследование показывает влияние лоббизма на политические решения в сфере здравоохранения. Узнайте, как промышленность влияет на принятие важных медицинских решений.",
  readTime: "7 мин чтения",
  imageCaption: "Лоббисты медицинской индустрии влияют на политические решения"
};