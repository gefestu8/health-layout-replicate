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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="container mx-auto px-4 py-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
              GESUNDHEIT
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Gelenkschmerzen im Alter: Was wirklich hilft und was Sie wissen sollten
          </h1>
          
          <div className="text-sm text-muted-foreground mb-4">
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
              <img 
                src="/lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png" 
                alt="Gelenkschmerzen im Alter" 
                className="w-full h-96 md:h-[500px] object-cover rounded-lg"
              />
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Millionen Deutsche leiden unter Gelenkschmerzen.</strong> Besonders Menschen über 50 
              kennen das Problem: Morgens sind die Finger steif, die Knie schmerzen beim Treppensteigen, 
              der Rücken macht sich nach langem Sitzen bemerkbar. Doch was steckt dahinter und welche 
              Behandlungsmöglichkeiten gibt es wirklich?
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Die häufigsten Ursachen von Gelenkbeschwerden
            </h2>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Arthrose</strong> ist die häufigste Gelenkerkrankung überhaupt. Dabei nutzt sich der 
              Knorpel in den Gelenken ab - ein natürlicher Alterungsprozess, der jedoch durch verschiedene 
              Faktoren beschleunigt werden kann:
            </p>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Übergewicht belastet die tragenden Gelenke</li>
              <li>Mangelnde Bewegung schwächt die stützende Muskulatur</li>
              <li>Einseitige Belastungen im Beruf oder Sport</li>
              <li>Genetische Veranlagung</li>
              <li>Frühere Verletzungen oder Operationen</li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              <strong>Arthritis</strong> hingegen ist eine entzündliche Erkrankung, die oft schubweise verläuft 
              und verschiedene Ursachen haben kann - von Autoimmunreaktionen bis hin zu Infektionen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Was Betroffene wirklich hilft
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">
              1. Bewegung ist das A und O
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Paradoxerweise ist Bewegung bei Gelenkschmerzen oft das Beste, was Sie tun können. 
              Gelenkschonende Sportarten wie Schwimmen, Radfahren oder Nordic Walking halten die 
              Gelenke beweglich und stärken die umgebende Muskulatur.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              2. Gewichtsreduktion entlastet
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Jedes Kilogramm weniger auf der Waage entlastet die Knie um etwa vier Kilogramm. 
              Eine moderate Gewichtsabnahme kann daher erheblich zur Schmerzlinderung beitragen.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              3. Wärme und Kälte gezielt einsetzen
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Bei akuten Entzündungen hilft Kälte, bei chronischen Beschwerden und Steifheit 
              ist Wärme oft wohltuend. Finden Sie heraus, was Ihnen persönlich guttut.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              4. Ernährung kann Entzündungen beeinflussen
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Omega-3-Fettsäuren aus Fisch, Antioxidantien aus buntem Gemüse und Obst sowie 
              weniger verarbeitete Lebensmittel können entzündliche Prozesse im Körper reduzieren.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Wann sollten Sie zum Arzt?
            </h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Suchen Sie ärztliche Hilfe, wenn:
            </p>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Schmerzen länger als eine Woche anhalten</li>
              <li>Gelenke anschwellen oder sich warm anfühlen</li>
              <li>Die Beweglichkeit stark eingeschränkt ist</li>
              <li>Schmerzmittel nicht mehr helfen</li>
              <li>Sie nachts vor Schmerzen nicht schlafen können</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h4 className="font-semibold mb-2">Wichtiger Hinweis:</h4>
              <p className="text-sm">
                Dieser Artikel ersetzt keine medizinische Beratung. Bei anhaltenden Beschwerden 
                konsultieren Sie immer einen Arzt oder eine Ärztin.
              </p>
            </div>
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
                    Limitiertes Angebot!
                  </h2>
                  <p className="text-red-600 font-semibold mb-4">
                    Angebot läuft ab in:
                  </p>
                  <Timer />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Ihr Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="mt-1"
                      placeholder="Vorname Nachname"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Ihre Telefonnummer *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="mt-1"
                      placeholder="+49..."
                    />
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-foreground mb-3 font-medium">
                      Flexosamin — bereits über 400.000 mal in Deutschland verkauft
                    </p>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 h-auto animate-pulse"
                    >
                      Jetzt bestellen
                    </Button>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center gap-4 text-sm text-green-700">
                        <span className="flex items-center gap-1">
                          <span className="text-green-600">✅</span>
                          TÜV geprüft
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="text-green-600">✅</span>
                          Von Ärzten empfohlen
                        </span>
                      </div>
                      <div className="flex items-center justify-center text-sm text-green-700">
                        <span className="flex items-center gap-1">
                          <span className="text-green-600">✅</span>
                          100% Natur
                        </span>
                      </div>
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
            <h3 className="text-xl font-bold text-foreground mb-6">Kommentare (23)</h3>
            
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  <img 
                    src={hansImage} 
                    alt="Hans M." 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Hans M., 67</span>
                      <span className="text-muted-foreground text-sm">vor 2 Stunden</span>
                    </div>
                    <p className="text-foreground">
                      Danke für diesen informativen Artikel! Als Rentner mit Knieproblemen kann ich nur bestätigen, 
                      dass regelmäßige Bewegung wirklich hilft. Schwimmen hat mir sehr geholfen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  <img 
                    src={monikaImage} 
                    alt="Monika S." 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Monika S., 54</span>
                      <span className="text-muted-foreground text-sm">vor 5 Stunden</span>
                    </div>
                    <p className="text-foreground">
                      Sehr hilfreicher Artikel! Ich arbeite als Krankenschwester und die Belastung macht sich in den 
                      Gelenken bemerkbar. Die Tipps zur Ernährung werde ich definitiv befolgen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  <img 
                    src={klausImage} 
                    alt="Klaus W." 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Klaus W., 72</span>
                      <span className="text-muted-foreground text-sm">vor 1 Tag</span>
                    </div>
                    <p className="text-foreground">
                      Endlich mal ein Artikel, der nicht nur Medikamente empfiehlt! Als ehemaliger Handwerker 
                      spüre ich jeden Tag meine Gelenke. Werde den Tipp mit der Gewichtsreduktion ernst nehmen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-3">
                  <img 
                    src={sabineImage} 
                    alt="Sabine K." 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Sabine K., 49</span>
                      <span className="text-muted-foreground text-sm">vor 2 Tagen</span>
                    </div>
                    <p className="text-foreground">
                      Meine Mutter leidet seit Jahren unter Arthrose. Dieser Artikel gibt mir Hoffnung, 
                      dass es natürliche Wege gibt, ihr zu helfen. Vielen Dank für die wertvollen Informationen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article;