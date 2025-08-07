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
    content: "Ich konnte meine Frau nicht mal mehr umarmen – heute gehen wir wieder spazieren.",
    author: "Peter M. (71)",
    role: "Nürnberg",
    rating: 5,
    avatar: "/src/assets/commenter-hans.jpg"
  },
  {
    content: "Schmerz war mein Alltag. Heute ist Ruhe mein neuer Zustand.",
    author: "Jürgen S. (66)",
    role: "Hamburg",
    rating: 5,
    avatar: "/lovable-uploads/f4a8c36b-d907-4686-861c-85b316f09b50.png"
  },
  {
    content: "Boris hatte recht. Dieses Gel ist kein Werbegag – es wirkt.",
    author: "Andreas W. (59)",
    role: "Berlin",
    rating: 5,
    avatar: "/lovable-uploads/b45bc9e9-7bb5-4bb0-87f6-caca8b6bd274.png"
  },
  {
    content: "Ich konnte 5 Jahre lang keine Nacht durchschlafen – meine Hüfte war wie Feuer. Ich habe Gehhilfe benutzt. Nach 2 Wochen mit Flexosamine – ich brauche sie nicht mehr. Ich laufe wieder!",
    author: "Helga R. (68)",
    role: "Bremen",
    rating: 5,
    avatar: "/src/assets/commenter-sabine.jpg"
  },
  {
    content: "Die Behandlung war sehr effektiv. Meine chronischen Schmerzen sind fast verschwunden.",
    author: "Friedrich Sch. (62)",
    role: "München",
    rating: 5,
    avatar: "/lovable-uploads/58ff73a0-09ae-491b-8520-2115b6c30fbe.png"
  },
  {
    content: "Endlich kann ich wieder normal schlafen und arbeiten. Das Medikament hat mein Leben verändert.",
    author: "Wolfgang K. (57)",
    role: "Köln",
    rating: 5,
    avatar: "/src/assets/commenter-monika.jpg"
  },
  {
    content: "Als Arzt kann ich diese Behandlungsmethode nur empfehlen. Sehr gute Resultate bei meinen Patienten.",
    author: "Dr. Dieter R. (54)",
    role: "Fachartz, Dresden",
    rating: 5,
    avatar: "/src/assets/commenter-klaus.jpg"
  },
  {
    content: "Nach Jahren der Beschwerden endlich eine Lösung gefunden. Bin sehr zufrieden mit dem Ergebnis.",
    author: "Rainer B. (63)",
    role: "Stuttgart",
    rating: 5,
    avatar: "/lovable-uploads/572c52ff-cef4-4902-bcc8-557c192f468a.png"
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