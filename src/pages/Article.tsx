import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Article = () => {
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

      {/* CTA Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Haben Sie Fragen zu Gelenkbeschwerden?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vereinbaren Sie einen Termin mit einem Spezialisten in Ihrer Nähe
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Expertenberatung vereinbaren
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article;