#!/usr/bin/env node

/**
 * Статическая сборка проекта в HTML
 * Создает index.html с содержимым статьи как основной страницей
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Простая функция для генерации статического HTML контента статьи
function generateArticleHTML() {
  return `
    <div class="min-h-screen bg-background">
      <header class="bg-background border-b border-border">
        <div class="container mx-auto px-4 py-4">
          <div class="max-w-6xl mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold text-primary">Gesundheitsmagazin</h1>
            <nav class="hidden md:block">
              <ul class="flex space-x-6 text-sm">
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Home</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Gesundheit</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Medizin</a></li>
              </ul>
            </nav>
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
                  <div class="text-3xl font-mono font-bold text-red-600" id="timer">23:59:59</div>
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

      <footer class="bg-muted border-t border-border py-8">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto text-center">
            <p class="text-muted-foreground">&copy; 2025 Gesundheitsmagazin. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
      
      <script>
        // Timer countdown
        function updateTimer() {
          const timer = document.getElementById('timer');
          const now = new Date().getTime();
          const endTime = now + (24 * 60 * 60 * 1000); // 24 hours from now
          
          setInterval(() => {
            const currentTime = new Date().getTime();
            const timeLeft = endTime - currentTime;
            
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            timer.innerHTML = String(hours).padStart(2, '0') + ':' + 
                             String(minutes).padStart(2, '0') + ':' + 
                             String(seconds).padStart(2, '0');
          }, 1000);
        }
        updateTimer();
      </script>
    </div>
  `;
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

// Заменяем body секцию на статический HTML контент
const staticBody = `
  <body>
    ${generateArticleHTML()}
  </body>
`;

indexContent = indexContent.replace(
  /<body>[\s\S]*?<\/body>/i,
  staticBody
);

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

// 6. Копируем аватарки
const assetsDir = path.join(process.cwd(), 'src', 'assets');
const avatars = ['commenter-hans.jpg', 'commenter-monika.jpg', 'commenter-klaus.jpg', 'commenter-sabine.jpg'];
avatars.forEach(avatar => {
  const srcPath = path.join(assetsDir, avatar);
  const destPath = path.join(imgDir, avatar);
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