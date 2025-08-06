import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    "Главная",
    "Болезни и симптомы", 
    "Лекарства",
    "Терапия",
    "Диагноз",
    "Семья",
    "Уход",
    "Здоровая жизнь"
  ];

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-end items-center py-2 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Регистрация</span>
            <span className="text-muted-foreground">Войти</span>
            <span className="text-muted-foreground">Newsletter</span>
            <span className="text-muted-foreground">Рецепты</span>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="bg-primary text-primary-foreground px-3 py-2 font-bold text-xl rounded-sm">
              MediSchau
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Поиск или вопрос о здоровье"
                className="w-80 px-4 py-2 border border-border rounded bg-background text-sm"
              />
              <Button size="sm" className="absolute right-1 top-1 h-6 bg-secondary">
                Найти
              </Button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-border">
          <ul className="flex items-center py-3 text-sm font-medium">
            {navItems.map((item, index) => (
              <li key={index} className="px-4 py-2 text-foreground hover:text-primary cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;