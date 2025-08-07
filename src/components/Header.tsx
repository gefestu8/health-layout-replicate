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
    <header className="w-full bg-white">
      {/* Top bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end items-center py-2 text-xs">
            <div className="flex items-center gap-6">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">REGISTRIEREN</span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">LOGIN</span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">NEWSLETTER BESTELLEN</span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">BÜCHER</span>
              <div className="flex items-center gap-3 ml-4">
                <Facebook size={14} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Instagram size={14} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Youtube size={14} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Heart size={14} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-red-600 p-2 rounded mr-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-5 h-5 bg-red-600 rounded"></div>
                </div>
              </div>
              <div>
                <div className="text-red-600 font-bold text-2xl leading-tight">APOTHEKEN</div>
                <div className="text-red-600 font-bold text-2xl leading-tight">Umschau</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                  UNABHÄNGIGE GESUNDHEITSINFORMATION
                </div>
              </div>
            </div>
            
            {/* Search */}
            <div className="flex-1 max-w-md ml-8">
              <input 
                type="text" 
                placeholder="Suchbegriff oder Frage an KI eingeben"
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item === "HOME" ? "/" : item === "KRANKHEITEN & SYMPTOME" ? "/article" : "#"}
                  className="block px-4 py-3 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-3 text-sm">
            <a href="#" className="text-red-600 hover:underline">Home</a>
            <span className="text-gray-400">›</span>
            <a href="#" className="text-red-600 hover:underline">Krankheiten & Symptome</a>
            <span className="text-gray-400">›</span>
            <span className="text-gray-600">Adipositas</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;