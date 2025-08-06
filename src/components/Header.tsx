import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Heart } from "lucide-react";

const Header = () => {
  const navItems = [
    "HOME",
    "KRANKHEITEN & SYMPTOME",
    "MEDIKAMENTE", 
    "THERAPIE",
    "DIAGNOSE",
    "FAMILIE",
    "PFLEGE",
    "GESUND LEBEN"
  ];

  return (
    <header className="bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 px-4 text-xs border-b border-border">
          <div></div>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground hover:text-foreground cursor-pointer">REGISTRIEREN</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer">LOGIN</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer">NEWSLETTER BESTELLEN</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer">BÜCHER</span>
            <div className="flex items-center gap-2 ml-4">
              <Facebook size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
              <Instagram size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
              <Youtube size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
              <Heart size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="bg-red-600 text-white p-2 rounded-sm mr-3">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className="text-red-600 font-bold text-xl">APOTHEKEN</div>
                <div className="text-red-600 font-bold text-xl">Umschau</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  UNABHÄNGIGE GESUNDHEITSINFORMATION
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Suchbegriff oder Frage an KI eingeben"
                className="w-80 px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-border bg-gray-50">
          <div className="px-4">
            <ul className="flex items-center text-sm font-medium">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">
                  {item === "HOME" ? (
                    <a href="/">{item}</a>
                  ) : item === "KRANKHEITEN & SYMPTOME" ? (
                    <a href="/article">{item}</a>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        {/* Breadcrumbs */}
        <div className="px-4 py-3 bg-background border-b border-border">
          <div className="flex items-center gap-2 text-sm text-primary">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="text-muted-foreground">›</span>
            <span className="hover:underline cursor-pointer">Krankheiten & Symptome</span>
            <span className="text-muted-foreground">›</span>
            <span className="text-muted-foreground">Adipositas</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;