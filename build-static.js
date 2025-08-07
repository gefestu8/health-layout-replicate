#!/usr/bin/env node

/**
 * Статическая сборка проекта в HTML
 * Создает index.html с содержимым статьи как основной страницей
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Функция для извлечения всех CSS переменных и стилей
function extractFullCSS() {
  const indexCssContent = fs.readFileSync(path.join(process.cwd(), 'src/index.css'), 'utf8');
  
  return `
/* CSS Variables from index.css */
${indexCssContent}

/* Additional Tailwind Classes */
.min-h-screen { min-height: 100vh; }
.container { width: 100%; }
@media (min-width: 640px) { .container { max-width: 640px; } }
@media (min-width: 768px) { .container { max-width: 768px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; } }
@media (min-width: 1280px) { .container { max-width: 1280px; } }
@media (min-width: 1536px) { .container { max-width: 1536px; } }
.mx-auto { margin-left: auto; margin-right: auto; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-8 { padding-top: 2rem; padding-bottom: 2rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.p-8 { padding: 2rem; }
.max-w-6xl { max-width: 72rem; }
.max-w-4xl { max-width: 56rem; }
.max-w-md { max-width: 28rem; }
.max-w-none { max-width: none; }
.flex { display: flex; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.font-medium { font-weight: 500; }
.font-mono { font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace; }
.bg-background { background-color: hsl(var(--background)); }
.bg-muted { background-color: hsl(var(--muted)); }
.text-primary { color: hsl(var(--primary)); }
.text-foreground { color: hsl(var(--foreground)); }
.text-muted-foreground { color: hsl(var(--muted-foreground)); }
.text-primary-foreground { color: hsl(var(--primary-foreground)); }
.text-red-600 { color: rgb(220 38 38); }
.text-red-700 { color: rgb(185 28 28); }
.text-white { color: rgb(255 255 255); }
.text-green-700 { color: rgb(21 128 61); }
.bg-primary { background-color: hsl(var(--primary)); }
.bg-red-600 { background-color: rgb(220 38 38); }
.hover\\:bg-red-700:hover { background-color: rgb(185 28 28); }
.hover\\:text-foreground:hover { color: hsl(var(--foreground)); }
.border { border-width: 1px; }
.border-b { border-bottom-width: 1px; }
.border-t { border-top-width: 1px; }
.border-t-4 { border-top-width: 4px; }
.border-2 { border-width: 2px; }
.border-border { border-color: hsl(var(--border)); }
.border-red-200 { border-color: rgb(254 202 202); }
.border-red-500 { border-color: rgb(239 68 68); }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mt-4 { margin-top: 1rem; }
.mt-8 { margin-top: 2rem; }
.pt-4 { padding-top: 1rem; }
.pb-6 { padding-bottom: 1.5rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.rounded { border-radius: 0.25rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-md { border-radius: 0.375rem; }
.rounded-full { border-radius: 9999px; }
.shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
.space-x-6 > :not([hidden]) ~ :not([hidden]) { margin-left: 1.5rem; }
.space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
.space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
.space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.leading-tight { line-height: 1.25; }
.leading-relaxed { line-height: 1.625; }
.prose { color: hsl(var(--foreground)); max-width: 65ch; }
.prose-lg { font-size: 1.125rem; line-height: 1.7; }
.w-full { width: 100%; }
.w-10 { width: 2.5rem; }
.h-auto { height: auto; }
.h-10 { height: 2.5rem; }
.flex-1 { flex: 1 1 0%; }
.object-cover { object-fit: cover; }
.list-disc { list-style-type: disc; }
.list-none { list-style-type: none; }
.list-inside { list-style-position: inside; }
.hidden { display: none; }
.block { display: block; }
.text-center { text-align: center; }
.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
@keyframes pulse {
  50% { opacity: .5; }
}
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-red-50 { --tw-gradient-from: #fef2f2; --tw-gradient-to: rgb(254 242 242 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-orange-50 { --tw-gradient-to: #fff7ed; }

@media (min-width: 768px) {
  .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .md\\:block { display: block; }
}

/* Form styles */
input[type="text"], input[type="tel"] {
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
}

input[type="text"]:focus, input[type="tel"]:focus {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

input::placeholder {
  color: hsl(var(--muted-foreground));
}

button {
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

/* Link hover effects */
a:hover {
  text-decoration: none;
}
  `;
}

// Простая функция для генерации статического HTML контента статьи
function generateArticleHTML() {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Boris Becker über Flexosamine: "Jetzt bewege ich mich wieder wie früher" | Gelenk-Gel Erfahrung</title>
  <meta name="description" content="Boris Becker spricht offen über seine Gelenkprobleme und wie Flexosamine ihm geholfen hat. Erfahrungsbericht über das revolutionäre Gelenk-Gel aus Deutschland." />
  <meta name="author" content="Boris Becker, Gesundheitsmagazin" />
  <meta name="keywords" content="Flexosamine, Boris Becker, Gelenkschmerzen, Gelenk-Gel, Arthrose, Knieschmerzen, Rückenschmerzen" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Boris Becker über Flexosamine: Jetzt bewege ich mich wieder wie früher" />
  <meta property="og:description" content="Ex-Tennisstar Boris Becker berichtet über seine Erfahrungen mit Flexosamine Gelenk-Gel. Wie er seine Gelenkschmerzen überwunden hat." />
  <meta property="og:url" content="https://flexosamine-becker.de/" />
  <meta property="og:image" content="./lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://flexosamine-becker.de/" />
  <meta property="twitter:title" content="Boris Becker über Flexosamine: Jetzt bewege ich mich wieder wie früher" />
  <meta property="twitter:description" content="Ex-Tennisstar Boris Becker berichtet über seine Erfahrungen mit Flexosamine Gelenk-Gel." />
  <meta property="twitter:image" content="./lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png" />
  
  <style>
    ${extractFullCSS()}
  </style>
</head>
<body>
    <div class="min-h-screen bg-background">
      <!-- Header -->
      <header class="bg-background">
        <div class="max-w-7xl mx-auto">
          <!-- Top bar -->
          <div class="flex justify-between items-center py-2 px-4 text-xs border-b border-border">
            <div></div>
            <div class="flex items-center gap-6">
              <span class="text-muted-foreground hover:text-foreground cursor-pointer">REGISTRIEREN</span>
              <span class="text-muted-foreground hover:text-foreground cursor-pointer">LOGIN</span>
              <span class="text-muted-foreground hover:text-foreground cursor-pointer">NEWSLETTER BESTELLEN</span>
              <span class="text-muted-foreground hover:text-foreground cursor-pointer">BÜCHER</span>
              <div class="flex items-center gap-2 ml-4">
                <svg width="16" height="16" fill="currentColor" class="text-muted-foreground hover:text-foreground cursor-pointer" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <svg width="16" height="16" fill="currentColor" class="text-muted-foreground hover:text-foreground cursor-pointer" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <svg width="16" height="16" fill="currentColor" class="text-muted-foreground hover:text-foreground cursor-pointer" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <svg width="16" height="16" fill="currentColor" class="text-muted-foreground hover:text-foreground cursor-pointer" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
            </div>
          </div>
          
          <!-- Main header -->
          <div class="flex items-center justify-between py-4 px-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <div class="bg-red-600 text-white p-2 rounded-sm mr-3">
                  <div class="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div class="w-4 h-4 bg-red-600 rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <div class="text-red-600 font-bold text-xl">APOTHEKEN</div>
                  <div class="text-red-600 font-bold text-xl">Umschau</div>
                  <div class="text-xs text-muted-foreground uppercase tracking-wide">
                    UNABHÄNGIGE GESUNDHEITSINFORMATION
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Suchbegriff oder Frage an KI eingeben"
                  class="w-80 px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
          
          <!-- Navigation -->
          <nav class="border-t border-border bg-gray-50">
            <div class="px-4">
              <ul class="flex items-center text-sm font-medium">
                <li class="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">HOME</li>
                <li class="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">KRANKHEITEN & SYMPTOME</li>
                <li class="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">MEDIKAMENTE</li>
                <li class="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">THERAPIE</li>
                <li class="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">DIAGNOSE</li>
                <li class="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">FAMILIE</li>
                <li class="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">PFLEGE</li>
                <li class="py-4 px-4 text-muted-foreground hover:text-primary cursor-pointer uppercase tracking-wide">GESUND LEBEN</li>
              </ul>
            </div>
          </nav>
          
          <!-- Breadcrumbs -->
          <div class="px-4 py-3 bg-background border-b border-border">
            <div class="flex items-center gap-2 text-sm text-primary">
              <span class="hover:underline cursor-pointer">Home</span>
              <span class="text-muted-foreground">›</span>
              <span class="hover:underline cursor-pointer">Krankheiten & Symptome</span>
              <span class="text-muted-foreground">›</span>
              <span class="text-muted-foreground">Adipositas</span>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Article Header -->
      <section class="container mx-auto px-4 py-8 border-b border-border">
        <div class="max-w-4xl mx-auto">
          <div class="mb-6">
            <span class="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
              GESUNDHEIT
            </span>
          </div>
          
          <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">„Ich war gelähmt vor Schmerz. Jetzt bewege ich mich wieder wie früher."</h1>
          <p class="text-xl text-muted-foreground">Erfahrungsbericht von Boris Becker – Ex-Tennisstar spricht offen über seine Gelenkhölle</p>
        </div>
      </section>

      <!-- Article Content -->
      <section class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none">
            <div class="mb-8">
              <img src="./lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png" alt="Boris Becker" class="w-full h-auto object-cover rounded-lg" />
            </div>
            
            <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Persönlicher Einstieg</h2>
            <p class="text-lg leading-relaxed mb-6">
              <strong>„Ich hatte alles. Doch ich verlor das Wichtigste: meine Beweglichkeit."</strong>
              <br/>
              Ich bin Boris Becker. Ich habe große Turniere gewonnen, für mein Land gespielt, unzählige Stunden auf dem Platz verbracht.
              <br/><br/>
              Doch der härteste Kampf meines Lebens begann nach meiner Karriere – und nicht mit einem Schläger in der Hand.
              <br/><br/>
              Es begann schleichend. Schmerzen im Knie, ein steifer Rücken, brennende Finger.
              <br/>
              <em>„Ich konnte mir kaum noch selbst die Socken anziehen."</em>
              <br/><br/>
              Sport? Unmöglich.
              <br/>
              Spazieren? Nur unter Schmerzen.
              <br/>
              Schlafen? Unruhig, unterbrochen, verzweifelt.
            </p>
            
            <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Der medizinische Teufelskreis</h2>
            <p class="text-lg leading-relaxed mb-6">
              <strong>„Nichts hat langfristig geholfen."</strong>
              <br/>
              Ich habe alles versucht:
            </p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>Tabletten</li>
              <li>Kortison</li>
              <li>Spritzen</li>
              <li>Physiotherapie</li>
            </ul>
            <p class="text-lg leading-relaxed mb-6">
              Manches half kurz. Doch die Schmerzen kamen immer wieder – härter und tiefer als zuvor.
              <br/><br/>
              Ich begann zu akzeptieren: „Das ist eben das Alter."
              <br/><br/>
              Aber innerlich wehrte ich mich.
              <br/>
              <em>„Ich wollte mein Leben zurück. Nicht morgen. Jetzt."</em>
            </p>

            <div class="mb-8">
              <img src="./lovable-uploads/DeWatermark.ai_1754506600916.jpeg" alt="Boris Becker mit Krücken" class="w-full h-auto object-cover rounded-lg" />
            </div>

            <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Die Empfehlung – Flexosamine</h2>
            <p class="text-lg leading-relaxed mb-6">
              <strong>„Ein Tipp eines Arztes hat alles verändert."</strong>
              <br/>
              Ein befreundeter Arzt, selbst ehemaliger Leistungssportler, sagte mir klipp und klar:
              <br/>
              <em>„Du brauchst keine OP. Du brauchst Regeneration – von innen."</em>
              <br/><br/>
              Seine Empfehlung: <strong>Flexosamine</strong> – ein Gelenk-Gel mit neuartiger Wirkformel.
            </p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>Dringt tief in das Gewebe ein</li>
              <li>Unterstützt Knorpelregeneration</li>
              <li>Lindert Entzündungen & Schwellungen</li>
              <li>Verbessert Beweglichkeit</li>
            </ul>
            <p class="text-lg leading-relaxed mb-6">
              Natürlich. Ohne Tabletten. Ohne Nebenwirkungen.
            </p>

            <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Die Anwendung – und der Effekt</h2>
            <p class="text-lg leading-relaxed mb-6">
              <strong>„Ich spürte die Wirkung früher, als ich dachte."</strong>
              <br/>
              Ich begann, morgens und abends Flexosamine auf Knie, Rücken und Hände aufzutragen.
              <br/><br/>
              Ohne Erwartungen – aber mit Hoffnung.
              <br/><br/>
              Und dann passierte es:
            </p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>✅ Nach 3 Tagen – weniger Steifheit</li>
              <li>✅ Nach 6 Tagen – ruhiger Schlaf, ohne ständiges Aufwachen</li>
              <li>✅ Nach 2 Wochen – wieder Spaziergänge möglich</li>
              <li>✅ Nach 3 Wochen – ich stand wieder auf dem Tennisplatz</li>
            </ul>
            <p class="text-lg leading-relaxed mb-6">
              <em>„Nicht für ein Turnier. Sondern für mich. Für mein Leben."</em>
            </p>

            <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Für wen ist Flexosamine geeignet?</h2>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>Menschen mit Gelenkverschleiß</li>
              <li>Senioren mit eingeschränkter Beweglichkeit</li>
              <li>Ehemalige Sportler mit alten Verletzungen</li>
              <li>Menschen mit Schmerzen durch Arbeit oder Haltung</li>
            </ul>
            <p class="text-lg leading-relaxed mb-6">
              <em>„Ich empfehle es jedem, der noch Hoffnung hat – und nicht aufgeben will."</em>
            </p>
            
            <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Was ist Flexosamine?</h2>
            <p class="text-lg leading-relaxed mb-6">
              Flexosamine ist ein therapeutisches Gel, entwickelt in Deutschland, mit einer hochkonzentrierten Formel auf natürlicher Basis.
            </p>
            <ul class="list-none mb-6 space-y-2">
                <li>💡 Anwendung: 2× täglich lokal auftragen</li>
                <li>🌿 100 % Naturformel</li>
                <li>🔬 Von Ärzten empfohlen</li>
                <li>✅ TÜV-geprüft</li>
                <li>🚫 Keine bekannten Nebenwirkungen</li>
            </ul>

            <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Vertrauen durch Erfahrung</h2>
            <p class="text-lg leading-relaxed mb-6">
                Mehr als 400.000 Anwender in Deutschland berichten von positiven Ergebnissen.
                <br/><br/>
                Flexosamine ist inzwischen ein echter Geheimtipp – und längst kein Insiderprodukt mehr.
                <br/>
                <em>„Ich war einer von ihnen – heute bin ich wieder frei."</em>
            </p>
          </div>
        </div>
      </section>

      <!-- CTA Order Section -->
      <section class="bg-gradient-to-br from-red-50 to-orange-50 py-12 border-t-4 border-red-500">
        <div class="container mx-auto px-4">
          <div class="max-w-md mx-auto">
            <div class="bg-background shadow-xl border-2 border-red-200 rounded-lg">
              <div class="p-8">
                <div class="text-center mb-6">
                  <h2 class="text-2xl font-bold text-foreground mb-2">
                    Jetzt handeln – bevor es zu spät ist
                  </h2>
                  <p class="text-red-600 font-semibold mb-4">
                    Angebot läuft ab in:
                  </p>
                  <div class="text-3xl font-mono font-bold text-red-600" id="timer">
                    <span id="hours">01</span>:<span id="minutes">23</span>:<span id="seconds">45</span>
                  </div>
                </div>
                
                <div class="mb-8">
                    <img src="./lovable-uploads/photo_2025-08-06_13-33-44.jpg" alt="Flexosamine Produktbild" class="w-full h-auto object-cover rounded-lg" />
                </div>

                <form class="space-y-4" onsubmit="alert('Bestellung erfolgreich!'); return false;">
                  <div>
                    <label for="name" class="block text-sm font-medium text-foreground mb-1">
                      Ihr Name *
                    </label>
                    <input id="name" type="text" required class="w-full px-3 py-2 border border-border rounded-md" placeholder="Vorname Nachname" />
                  </div>
                  
                  <div>
                    <label for="phone" class="block text-sm font-medium text-foreground mb-1">
                      Ihre Telefonnummer *
                    </label>
                    <input id="phone" type="tel" required class="w-full px-3 py-2 border border-border rounded-md" placeholder="+49..." />
                  </div>

                  <div class="text-center pt-4">
                    <p class="text-sm text-foreground mb-3 font-medium">
                      📦 Flexosamine – bereits über 400.000 Mal verkauft in Deutschland!
                    </p>
                    <p class="text-lg text-primary font-bold mb-4">🎁 Sonderaktion: Jetzt 50 % Rabatt sichern</p>
                    <p class="text-sm text-muted-foreground mb-4">🕒 Nur für kurze Zeit – begrenzte Verfügbarkeit</p>
                    
                    <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 px-4 rounded-md animate-pulse">
                      JETZT BESTELLEN
                    </button>
                    
                    <div class="mt-4 space-y-2 text-sm text-green-700">
                        <p>✅ TÜV geprüft</p>
                        <p>✅ Von Ärzten empfohlen</p>
                        <p>✅ 100 % natürliche Inhaltsstoffe</p>
                        <p>✅ Hergestellt in Deutschland</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Comments Section -->
      <section class="py-8 bg-background">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h3 class="text-xl font-bold text-foreground mb-6">Leser-Kommentare</h3>
            
            <div class="space-y-6">
              <div class="border-b border-border pb-6">
                <div class="flex items-start gap-3">
                  <img src="./img/commenter-hans.jpg" alt="Peter M." class="w-10 h-10 rounded-full object-cover" />
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="font-semibold text-foreground">Peter M. (71), Nürnberg</span>
                    </div>
                    <p class="text-foreground">
                      „Ich konnte meine Frau nicht mal mehr umarmen – heute gehen wir wieder spazieren."
                    </p>
                  </div>
                </div>
              </div>

              <div class="border-b border-border pb-6">
                <div class="flex items-start gap-3">
                  <img src="./img/commenter-monika.jpg" alt="Jürgen S." class="w-10 h-10 rounded-full object-cover" />
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="font-semibold text-foreground">Jürgen S. (66), Hamburg</span>
                    </div>
                    <p class="text-foreground">
                      „Schmerz war mein Alltag. Heute ist Ruhe mein neuer Zustand."
                    </p>
                  </div>
                </div>
              </div>

              <div class="border-b border-border pb-6">
                <div class="flex items-start gap-3">
                  <img src="./img/commenter-klaus.jpg" alt="Andreas W." class="w-10 h-10 rounded-full object-cover" />
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="font-semibold text-foreground">Andreas W. (59), Berlin</span>
                    </div>
                    <p class="text-foreground">
                      „Boris hatte recht. Dieses Gel ist kein Werbegag – es wirkt."
                    </p>
                  </div>
                </div>
              </div>

              <div class="border-b border-border pb-6">
                <div class="flex items-start gap-3">
                  <img src="./img/commenter-sabine.jpg" alt="Helga R." class="w-10 h-10 rounded-full object-cover" />
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="font-semibold text-foreground">Helga R. (68), Bremen</span>
                    </div>
                    <p class="text-foreground">
                      „Ich konnte 5 Jahre lang keine Nacht durchschlafen – meine Hüfte war wie Feuer. Ich habe Gehhilfe benutzt. Nach 2 Wochen mit Flexosamine – ich brauche sie nicht mehr. Ich laufe wieder!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <script>
        // Timer countdown with proper logic matching React component
        let timeLeft = {
          hours: 1,
          minutes: 23,
          seconds: 45
        };
        
        function updateTimer() {
          const hoursEl = document.getElementById('hours');
          const minutesEl = document.getElementById('minutes');
          const secondsEl = document.getElementById('seconds');
          
          if (hoursEl && minutesEl && secondsEl) {
            hoursEl.textContent = String(timeLeft.hours).padStart(2, '0');
            minutesEl.textContent = String(timeLeft.minutes).padStart(2, '0');
            secondsEl.textContent = String(timeLeft.seconds).padStart(2, '0');
          }
        }
        
        function countdown() {
          if (timeLeft.seconds > 0) {
            timeLeft.seconds--;
          } else if (timeLeft.minutes > 0) {
            timeLeft.minutes--;
            timeLeft.seconds = 59;
          } else if (timeLeft.hours > 0) {
            timeLeft.hours--;
            timeLeft.minutes = 59;
            timeLeft.seconds = 59;
          } else {
            // Reset timer when it reaches 0
            timeLeft = { hours: 1, minutes: 23, seconds: 45 };
          }
          updateTimer();
        }
        
        // Initialize and start timer
        updateTimer();
        setInterval(countdown, 1000);
      </script>
    </div>

    <!-- Footer -->
    <footer style="background-color: hsl(var(--background)); border-top: 1px solid hsl(var(--border)); padding: 32px 0;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;">
        <!-- Top Section with Three Columns -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 32px;">
          <div style="display: flex; align-items: flex-start; gap: 16px;">
            <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <img src="./img/afgis-seal.png" alt="afgis Logo" style="width: 100%; height: 100%; object-fit: contain;" />
            </div>
            <div>
              <h3 style="font-weight: 600; color: hsl(var(--foreground)); font-size: 0.875rem; margin: 0 0 4px 0;">
                Unser Angebot erfüllt die afgis-Transparenzkriterien.
              </h3>
              <p style="font-size: 0.75rem; color: hsl(var(--muted-foreground)); margin: 0;">
                Das afgis-Logo steht für hochwertige Gesundheitsinformationen im Internet.
              </p>
            </div>
          </div>

          <div style="display: flex; align-items: flex-start; gap: 16px;">
            <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <img src="./img/wb-verlag-logo.png" alt="W&B Logo" style="width: 100%; height: 100%; object-fit: contain;" />
            </div>
            <div>
              <h3 style="font-weight: 600; color: hsl(var(--foreground)); font-size: 0.875rem; margin: 0 0 4px 0;">
                European Publishing Awards 2025
              </h3>
              <p style="font-size: 0.75rem; color: hsl(var(--muted-foreground)); margin: 0;">
                Wort & Bild Verlag gewinnt internationale Preise in den Kategorien Story of the Year und Podcast.
              </p>
            </div>
          </div>

          <div style="display: flex; align-items: flex-start; gap: 16px;">
            <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <img src="./img/stiftung-gesundheit-logo.png" alt="Stiftung Gesundheit Logo" style="width: 100%; height: 100%; object-fit: contain;" />
            </div>
            <div>
              <h3 style="font-weight: 600; color: hsl(var(--foreground)); font-size: 0.875rem; margin: 0 0 4px 0;">
                Zertifikat der Stiftung Gesundheit
              </h3>
              <p style="font-size: 0.75rem; color: hsl(var(--muted-foreground)); margin: 0;">
                In qualifizierter Weise wird über gesundheitsrelevante Themen und Zusammenhänge informiert.
              </p>
            </div>
          </div>
        </div>

        <!-- Links Section -->
        <div style="border-top: 1px solid hsl(var(--border)); padding-top: 24px; margin-bottom: 16px; text-align: center;">
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px 16px; font-size: 0.75rem; color: hsl(var(--muted-foreground));">
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Beratende Experten</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Ethische Grundlagen</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Wissenschaftlicher Beirat</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Privacy Manager</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Zustimmung widerrufen</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Datenschutz</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Über uns</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Kontaktformular</a>
          </div>
          
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px 16px; font-size: 0.75rem; color: hsl(var(--muted-foreground)); margin-top: 8px;">
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Abo kündigen</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Impressum</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Nutzungsbedingungen</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Barrierefreiheit</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Archiv</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Arzneimittellisten</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Presse-Service</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Media-Service</a>
            <span>|</span>
            <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none;">Mediadaten</a>
          </div>
        </div>

        <!-- Copyright -->
        <div style="font-size: 0.75rem; color: hsl(var(--muted-foreground)); text-align: center;">
          © Wort & Bild Verlag Konradshöhe GmbH & Co. KG - Gesundheits-Tipps und Infos zu Medizin, Krankheiten, Therapien, Laborwerten und Medikamenten
        </div>
      </div>
    </footer>
  </body>
</html>`;
}

console.log('🔥 Начинаем статическую сборку...');

// 1. Собираем React проект
console.log('📦 Сборка React приложения...');
execSync('npm run build', { stdio: 'inherit' });

// 2. Читаем собранный index.html
const distPath = path.join(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Извлекаем CSS ссылки из собранного HTML
const cssMatches = indexContent.match(/<link[^>]*href="[^"]*\.css"[^>]*>/g) || [];
const jsMatches = indexContent.match(/<script[^>]*src="[^"]*\.js"[^>]*>/g) || [];
const cssLinks = cssMatches.join('\n  ');
const jsScripts = jsMatches.join('\n  ');

// 3. Заменяем title и мета-теги на статью о Flexosamine
const articleMeta = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Boris Becker über Flexosamine: "Jetzt bewege ich mich wieder wie früher" | Gelenk-Gel Erfahrung</title>
  <meta name="description" content="Boris Becker spricht offen über seine Gelenkprobleme und wie Flexosamine ihm geholfen hat. Erfahrungsbericht über das revolutionäre Gelenk-Gel aus Deutschland." />
  <meta name="author" content="Boris Becker, Gesundheitsmagazin" />
  <meta name="keywords" content="Flexosamine, Boris Becker, Gelenkschmerzen, Gelenk-Gel, Arthrose, Knieschmerzen, Rückenschmerzen" />
  
  ${cssLinks}
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Boris Becker über Flexosamine: Jetzt bewege ich mich wieder wie früher" />
  <meta property="og:description" content="Ex-Tennisstar Boris Becker berichtet über seine Erfahrungen mit Flexosamine Gelenk-Gel. Wie er seine Gelenkschmerzen überwunden hat." />
  <meta property="og:url" content="https://flexosamine-becker.de/" />
  <meta property="og:image" content="https://flexosamine-becker.de/lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Boris Becker über Flexosamine: Jetzt bewege ich mich wieder wie früher" />
  <meta property="twitter:description" content="Ex-Tennisstar Boris Becker berichtet über seine Erfahrungen mit Flexosamine Gelenk-Gel." />
  <meta property="twitter:image" content="https://flexosamine-becker.de/lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png" />
  
  <!-- Структурированные данные -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Boris Becker über Flexosamine: Jetzt bewege ich mich wieder wie früher",
    "description": "Ex-Tennisstar Boris Becker berichtet über seine Erfahrungen mit Flexosamine Gelenk-Gel und wie er seine Gelenkschmerzen überwunden hat.",
    "author": {
      "@type": "Person",
      "name": "Boris Becker"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gesundheitsmagazin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flexosamine-becker.de/logo.png"
      }
    },
    "image": "https://flexosamine-becker.de/lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png",
    "datePublished": "${new Date().toISOString()}",
    "dateModified": "${new Date().toISOString()}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://flexosamine-becker.de/"
    }
  }
  </script>
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://flexosamine-becker.de/" />
`;

// Заменяем head секцию
indexContent = indexContent.replace(
  /<head>[\s\S]*?<\/head>/i,
  `<head>${articleMeta}</head>`
);

// Заменяем весь HTML-документ статическим содержимым
indexContent = generateArticleHTML();

// 4. Записываем обновленный index.html
fs.writeFileSync(indexPath, indexContent);

// 5. Создаем папку img и копируем туда изображения
const imgDir = path.join(distPath, 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir);
}

// Копируем изображения из public/lovable-uploads 
const uploadsDir = path.join(process.cwd(), 'public', 'lovable-uploads');
const uploadsDestDir = path.join(distPath, 'lovable-uploads');
if (!fs.existsSync(uploadsDestDir)) {
  fs.mkdirSync(uploadsDestDir);
}

if (fs.existsSync(uploadsDir)) {
  const files = fs.readdirSync(uploadsDir);
  files.forEach(file => {
    const srcPath = path.join(uploadsDir, file);
    const destPath = path.join(uploadsDestDir, file);
    fs.copyFileSync(srcPath, destPath);
    // Также копируем в img/ для совместимости
    const imgDestPath = path.join(imgDir, file);
    fs.copyFileSync(srcPath, imgDestPath);
  });
}

// 6. Копируем аватарки и логотипы
const assetsDir = path.join(process.cwd(), 'src', 'assets');
const avatars = ['commenter-hans.jpg', 'commenter-monika.jpg', 'commenter-klaus.jpg', 'commenter-sabine.jpg'];
avatars.forEach(avatar => {
  const srcPath = path.join(assetsDir, avatar);
  const destPath = path.join(imgDir, avatar);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Копируем логотипы для футера
const logos = ['afgis-seal.png', 'wb-verlag-logo.png', 'stiftung-gesundheit-logo.png'];
logos.forEach(logo => {
  const srcPath = path.join(assetsDir, logo);
  const destPath = path.join(imgDir, logo);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
});

// 7. Создаем robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://flexosamine-becker.de/sitemap.xml
`;
fs.writeFileSync(path.join(distPath, 'robots.txt'), robotsContent);

// 8. Создаем sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://flexosamine-becker.de/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapContent);

console.log('✅ Статическая сборка завершена!');
console.log('📁 Файлы готовы в папке dist/');
console.log('🌐 Можно разместить содержимое dist/ на любом веб-сервере');
console.log('');
console.log('📋 Структура:');
console.log('├── index.html (основная страница со статьей)');
console.log('├── img/ (все изображения)');
console.log('├── assets/ (стили и скрипты)');
console.log('├── robots.txt');
console.log('└── sitemap.xml');