import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timer from "@/components/Timer";
import hansImage from "@/assets/commenter-hans.jpg";
import monikaImage from "@/assets/commenter-monika.jpg";
import klausImage from "@/assets/commenter-klaus.jpg";
import sabineImage from "@/assets/commenter-sabine.jpg";
import { useState, useEffect } from "react";

const Article = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="container mx-auto px-4 py-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
              GESUNDHEIT
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">„Ich war gelähmt vor Schmerz. Jetzt bewege ich mich wieder wie früher.“</h1>
          <p className="text-xl text-muted-foreground">Erfahrungsbericht von Boris Becker – Ex-Tennisstar spricht offen über seine Gelenkhölle</p>
          
          <div className="text-sm text-muted-foreground mb-4 mt-6">
            Von <span className="text-primary font-medium">Dr. Maria Schmidt</span> (Rheumatolgin) • 
            Medizinische Prüfung: <span className="text-primary font-medium">Prof. Dr. Hans Weber</span> • 
            07.08.2025
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img src="/lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png" alt="Boris Becker" className="w-full h-auto object-cover rounded-lg" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Persönlicher Einstieg</h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>„Ich hatte alles. Doch ich verlor das Wichtigste: meine Beweglichkeit.“</strong>
              <br/>
              Ich bin Boris Becker. Ich habe große Turniere gewonnen, für mein Land gespielt, unzählige Stunden auf dem Platz verbracht.
              <br/><br/>
              Doch der härteste Kampf meines Lebens begann nach meiner Karriere – und nicht mit einem Schläger in der Hand.
              <br/><br/>
              Es begann schleichend. Schmerzen im Knie, ein steifer Rücken, brennende Finger.
              <br/>
              <em>„Ich konnte mir kaum noch selbst die Socken anziehen.“</em>
              <br/><br/>
              Sport? Unmöglich.
              <br/>
              Spazieren? Nur unter Schmerzen.
              <br/>
              Schlafen? Unruhig, unterbrochen, verzweifelt.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Der medizinische Teufelskreis</h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>„Nichts hat langfristig geholfen.“</strong>
              <br/>
              Ich habe alles versucht:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Tabletten</li>
              <li>Kortison</li>
              <li>Spritzen</li>
              <li>Physiotherapie</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              Manches half kurz. Doch die Schmerzen kamen immer wieder – härter und tiefer als zuvor.
              <br/><br/>
              Ich begann zu akzeptieren: „Das ist eben das Alter.“
              <br/><br/>
              Aber innerlich wehrte ich mich.
              <br/>
              <em>„Ich wollte mein Leben zurück. Nicht morgen. Jetzt.“</em>
            </p>

            <div className="mb-8">
              <img src="/lovable-uploads/DeWatermark.ai_1754506600916.jpeg" alt="Boris Becker mit Krücken" className="w-full h-auto object-cover rounded-lg" />
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Die Empfehlung – Flexosamine</h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>„Ein Tipp eines Arztes hat alles verändert.“</strong>
              <br/>
              Ein befreundeter Arzt, selbst ehemaliger Leistungssportler, sagte mir klipp und klar:
              <br/>
              <em>„Du brauchst keine OP. Du brauchst Regeneration – von innen.“</em>
              <br/><br/>
              Seine Empfehlung: <strong>Flexosamine</strong> – ein Gelenk-Gel mit neuartiger Wirkformel.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Dringt tief in das Gewebe ein</li>
              <li>Unterstützt Knorpelregeneration</li>
              <li>Lindert Entzündungen & Schwellungen</li>
              <li>Verbessert Beweglichkeit</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              Natürlich. Ohne Tabletten. Ohne Nebenwirkungen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Die Anwendung – und der Effekt</h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>„Ich spürte die Wirkung früher, als ich dachte.“</strong>
              <br/>
              Ich begann, morgens und abends Flexosamine auf Knie, Rücken und Hände aufzutragen.
              <br/><br/>
              Ohne Erwartungen – aber mit Hoffnung.
              <br/><br/>
              Und dann passierte es:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>✅ Nach 3 Tagen – weniger Steifheit</li>
              <li>✅ Nach 6 Tagen – ruhiger Schlaf, ohne ständiges Aufwachen</li>
              <li>✅ Nach 2 Wochen – wieder Spaziergänge möglich</li>
              <li>✅ Nach 3 Wochen – ich stand wieder auf dem Tennisplatz</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              <em>„Nicht für ein Turnier. Sondern für mich. Für mein Leben.“</em>
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Für wen ist Flexosamine geeignet?</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Menschen mit Gelenkverschleiß</li>
              <li>Senioren mit eingeschränkter Beweglichkeit</li>
              <li>Ehemalige Sportler mit alten Verletzungen</li>
              <li>Menschen mit Schmerzen durch Arbeit oder Haltung</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              <em>„Ich empfehle es jedem, der noch Hoffnung hat – und nicht aufgeben will.“</em>
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist Flexosamine?</h2>
            <p className="text-lg leading-relaxed mb-6">
              Flexosamine ist ein therapeutisches Gel, entwickelt in Deutschland, mit einer hochkonzentrierten Formel auf natürlicher Basis.
            </p>
            <ul className="list-none mb-6 space-y-2">
                <li>💡 Anwendung: 2× täglich lokal auftragen</li>
                <li>🌿 100 % Naturformel</li>
                <li>🔬 Von Ärzten empfohlen</li>
                <li>✅ TÜV-geprüft</li>
                <li>🚫 Keine bekannten Nebenwirkungen</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Vertrauen durch Erfahrung</h2>
            <p className="text-lg leading-relaxed mb-6">
                Mehr als 400.000 Anwender in Deutschland berichten von positiven Ergebnissen.
                <br/><br/>
                Flexosamine ist inzwischen ein echter Geheimtipp – und längst kein Insiderprodukt mehr.
                <br/>
                <em>„Ich war einer von ihnen – heute bin ich wieder frei.“</em>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Order Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-12 border-t-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl border-2 border-red-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Jetzt handeln – bevor es zu spät ist
                  </h2>
                  <p className="text-red-600 font-semibold mb-4">
                    Angebot läuft ab in:
                  </p>
                  <Timer />
                </div>
                
                <div className="mb-8">
                    <img src="/lovable-uploads/photo_2025-08-06_13-33-44.jpg" alt="Flexosamine Produktbild" className="w-full h-auto object-cover rounded-lg" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Ihr Name *
                    </Label>
                    <Input id="name" type="text" required value={formData.name} onChange={e => setFormData(prev => ({
                    ...prev,
                    name: e.target.value
                  }))} className="mt-1" placeholder="Vorname Nachname" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Ihre Telefonnummer *
                    </Label>
                    <Input id="phone" type="tel" required value={formData.phone} onChange={e => setFormData(prev => ({
                    ...prev,
                    phone: e.target.value
                  }))} className="mt-1" placeholder="+49..." />
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-foreground mb-3 font-medium">
                      📦 Flexosamine – bereits über 400.000 Mal verkauft in Deutschland!
                    </p>
                    <p className="text-lg text-primary font-bold mb-4">🎁 Sonderaktion: Jetzt 50 % Rabatt sichern</p>
                    <p className="text-sm text-muted-foreground mb-4">🕒 Nur für kurze Zeit – begrenzte Verfügbarkeit</p>
                    
                    <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 h-auto animate-pulse">
                      JETZT BESTELLEN
                    </Button>
                    
                    <div className="mt-4 space-y-2 text-sm text-green-700">
                        <p>✅ TÜV geprüft</p>
                        <p>✅ Von Ärzten empfohlen</p>
                        <p>✅ 100 % natürliche Inhaltsstoffe</p>
                        <p>✅ Hergestellt in Deutschland</p>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-6">Leser-Kommentare</h3>
            
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  <img src={hansImage} alt="Peter M." className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Peter M. (71), Nürnberg</span>
                    </div>
                    <p className="text-foreground">
                      Meine Knie waren zerstört. Treppensteigen? Unmöglich. Ich war kurz davor, mich operieren zu lassen. Jetzt nehme ich Flexosamine – und gehe jeden Tag 30 Minuten spazieren. Ohne Schmerzen
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  <img src={monikaImage} alt="Jürgen S." className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Matthias K. (66), Hamburg</span>
                    </div>
                    <p className="text-foreground">
                      Ich brauchte morgens 40 Minuten, um mich zu bewegen. Alles war steif und geschwollen. Jetzt bin ich in 5 Minuten im Garten – ohne Schmerzen, ohne Medikamente
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  <img src={klausImage} alt="Andreas W." className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Andreas W. (59), Berlin</span>
                    </div>
                    <p className="text-foreground">
                      Ich hatte chronischen Rückenschmerz seit über 10 Jahren. Alles ausprobiert – nichts half. Flexosamine hat in 4 Tagen mehr gebracht als 10 Jahre Therapie
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  <img src={sabineImage} alt="Helga R." className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Ingrid B. (68), Bremen</span>
                    </div>
                    <p className="text-foreground">
                      Nach 3 Jahren ständiger Schmerzen in den Fingern konnte ich meine Stricknadeln nicht mehr halten. Ich hatte aufgegeben. Jetzt stricke ich wieder – täglich. Flexosamine hat mir mein Leben zurückgegeben
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  {/* You can add a placeholder image here */}
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Frank T. (62), Hannover</span>
                    </div>
                    <p className="text-foreground">
                      „Meine Knie waren zerstört. Treppensteigen? Unmöglich. Ich war kurz davor, mich operieren zu lassen. Jetzt nehme ich Flexosamine – und gehe jeden Tag 30 Minuten spazieren. Ohne Schmerzen.“
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  {/* You can add a placeholder image here */}
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Ingrid B. (73), München</span>
                    </div>
                    <p className="text-foreground">
                      „Nach 3 Jahren ständiger Schmerzen in den Fingern konnte ich meine Stricknadeln nicht mehr halten. Ich hatte aufgegeben. Jetzt stricke ich wieder – täglich. Flexosamine hat mir mein Leben zurückgegeben.“
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  {/* You can add a placeholder image here */}
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Matthias K. (58), Leipzig</span>
                    </div>
                    <p className="text-foreground">
                      „Ich hatte chronischen Rückenschmerz seit über 10 Jahren. Alles ausprobiert – nichts half. Flexosamine hat in 4 Tagen mehr gebracht als 10 Jahre Therapie.“
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  {/* You can add a placeholder image here */}
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Renate P. (65), Mainz</span>
                    </div>
                    <p className="text-foreground">
                      „Ich brauchte morgens 40 Minuten, um mich zu bewegen. Alles war steif und geschwollen. Jetzt bin ich in 5 Minuten im Garten – ohne Schmerzen, ohne Medikamente.“
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  {/* You can add a placeholder image here */}
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Kurt H. (74), Stuttgart</span>
                    </div>
                    <p className="text-foreground">
                      „Ich habe 20 Jahre auf dem Bau gearbeitet. Meine Gelenke waren hin. Ich dachte, mein Körper sei am Ende. Flexosamine war mein letzter Versuch – und es war der richtige. Keine Schmerzen mehr.“
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  {/* You can add a placeholder image here */}
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Beate S. (60), Düsseldorf</span>
                    </div>
                    <p className="text-foreground">
                      „Ich konnte meine Enkel nicht mehr hochheben – meine Arme und Schultern waren wie blockiert. Nach 10 Tagen Flexosamine war ich wieder die Oma, die ich sein wollte.“
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Article;
