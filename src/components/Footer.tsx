const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        {/* Top Section with Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">afgis</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                Unser Angebot erfüllt die afgis-Transparenzkriterien.
              </h3>
              <p className="text-xs text-muted-foreground">
                Das afgis-Logo steht für hochwertige Gesundheitsinformationen im Internet.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">W&B</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                European Publishing Awards 2025
              </h3>
              <p className="text-xs text-muted-foreground">
                Wort & Bild Verlag gewinnt internationale Preise in den Kategorien Story of the Year und Podcast.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">SG</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                Zertifikat der Stiftung Gesundheit
              </h3>
              <p className="text-xs text-muted-foreground">
                In qualifizierter Weise wird über gesundheitsrelevante Themen und Zusammenhänge informiert.
              </p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="border-t border-border pt-6 mb-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Beratende Experten</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Ethische Grundlagen</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Wissenschaftlicher Beirat</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Privacy Manager</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Zustimmung widerrufen</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Datenschutz</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Über uns</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Kontaktformular</a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground mt-2">
            <a href="#" className="hover:text-foreground">Abo kündigen</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Impressum</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Nutzungsbedingungen</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Barrierefreiheit</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Archiv</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Arzneimittellisten</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Presse-Service</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Media-Service</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Mediadaten</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted-foreground text-center">
          © Wort & Bild Verlag Konradshöhe GmbH & Co. KG - Gesundheits-Tipps und Infos zu Medizin, Krankheiten, Therapien, Laborwerten und Medikamenten
        </div>
      </div>
    </footer>
  );
};

export default Footer;