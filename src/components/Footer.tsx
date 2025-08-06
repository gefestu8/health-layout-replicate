const Footer = () => {
  const footerSections = [
    {
      title: "Здоровье",
      links: ["Симптомы", "Диагностика", "Лечение", "Профилактика"]
    },
    {
      title: "Сервисы", 
      links: ["Поиск врача", "Онлайн консультации", "Анализы", "Вакцинация"]
    },
    {
      title: "Информация",
      links: ["О нас", "Контакты", "Политика конфиденциальности", "Условия использования"]
    },
    {
      title: "Поддержка",
      links: ["Помощь", "FAQ", "Обратная связь", "Техподдержка"]
    }
  ];

  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-primary text-primary-foreground px-3 py-2 font-bold text-lg rounded-sm">
                MediSchau
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                © 2024 MediSchau. Все права защищены.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;