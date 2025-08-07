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
      <header class="bg-white shadow-sm border-b">
        <div class="max-w-4xl mx-auto px-4 py-4">
          <h1 class="text-2xl font-bold text-primary">Gesundheitsmagazin</h1>
        </div>
      </header>
      
      <main class="max-w-4xl mx-auto px-4 py-8">
        <article>
          <header class="mb-8">
            <h1 class="text-4xl font-bold mb-4 text-primary">Boris Becker über Flexosamine: "Jetzt bewege ich mich wieder wie früher"</h1>
            <p class="text-xl text-muted-foreground mb-6">Ex-Tennisstar Boris Becker spricht offen über seine Gelenkprobleme und wie ein innovatives Gelenk-Gel aus Deutschland sein Leben verändert hat.</p>
            <div class="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Von: Gesundheitsmagazin</span>
              <span>•</span>
              <span>${new Date().toLocaleDateString('de-DE')}</span>
            </div>
          </header>

          <div class="prose max-w-none">
            <img src="./lovable-uploads/efeb78ca-317c-456d-b1f8-543002fb5fdb.png" alt="Boris Becker über Flexosamine" class="w-full rounded-lg mb-8">
            
            <p class="lead text-lg mb-6">Nach jahrelangen Gelenkschmerzen hat Boris Becker endlich eine Lösung gefunden. In einem exklusiven Interview spricht der ehemalige Tennisstar über seine Erfahrungen mit Flexosamine - einem revolutionären Gelenk-Gel, das in Deutschland entwickelt wurde.</p>

            <h2 class="text-2xl font-bold mt-8 mb-4">Die Schmerzen eines Champions</h2>
            <p class="mb-4">"Jahrelang habe ich unter starken Gelenkschmerzen gelitten", berichtet Boris Becker. "Als ehemaliger Profisportler waren meine Knie und mein Rücken stark belastet. Die Schmerzen wurden so stark, dass ich nachts nicht mehr schlafen konnte."</p>

            <p class="mb-6">Wie viele Menschen in seinem Alter suchte Becker nach einer Lösung, die nicht nur die Symptome lindert, sondern auch langfristig hilft. "Ich habe alles versucht - von Physiotherapie bis hin zu starken Schmerzmitteln. Nichts hat wirklich geholfen."</p>

            <h2 class="text-2xl font-bold mt-8 mb-4">Die Entdeckung von Flexosamine</h2>
            <p class="mb-4">Durch einen Bekannten erfuhr Becker von Flexosamine, einem innovativen Gelenk-Gel aus Deutschland. "Anfangs war ich skeptisch", gibt er zu. "Aber nach den ersten Anwendungen spürte ich bereits eine deutliche Verbesserung."</p>

            <div class="bg-blue-50 p-6 rounded-lg my-8">
              <h3 class="text-xl font-bold mb-4">Was macht Flexosamine so besonders?</h3>
              <ul class="space-y-2">
                <li>✓ Natürliche Inhaltsstoffe aus Deutschland</li>
                <li>✓ Schnelle Wirkung durch innovative Gel-Formel</li>
                <li>✓ Lindert Schmerzen und Entzündungen</li>
                <li>✓ Verbessert die Beweglichkeit</li>
                <li>✓ Ohne Nebenwirkungen</li>
              </ul>
            </div>

            <h2 class="text-2xl font-bold mt-8 mb-4">Die Transformation</h2>
            <p class="mb-4">"Nach nur wenigen Wochen konnte ich wieder ohne Schmerzen gehen", erzählt Becker begeistert. "Heute fühle ich mich wie früher - beweglich und schmerzfrei. Flexosamine hat mein Leben verändert."</p>

            <img src="./lovable-uploads/DeWatermark.ai_1754506600916.jpeg" alt="Flexosamine Gel" class="w-full max-w-md mx-auto rounded-lg my-8">

            <div class="bg-green-50 p-8 rounded-lg text-center my-12">
              <h2 class="text-3xl font-bold mb-4 text-green-800">🔥 Limitiertes Angebot 🔥</h2>
              <p class="text-xl mb-6">Nur heute: 50% Rabatt auf Flexosamine!</p>
              <div class="mb-6">
                <span class="text-3xl font-bold line-through text-gray-500">79,98€</span>
                <span class="text-4xl font-bold text-green-600 ml-4">39,99€</span>
              </div>
              <div class="countdown-timer mb-6">
                <span class="text-lg">Angebot endet in: </span>
                <span class="font-mono text-xl font-bold text-red-600">23:45:12</span>
              </div>
              <a href="#order" class="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors">
                Jetzt 50% sparen →
              </a>
            </div>

            <h2 class="text-2xl font-bold mt-8 mb-4">Kundenbewertungen</h2>
            <div class="grid gap-6 md:grid-cols-2 my-8">
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="flex items-center mb-4">
                  <img src="./img/commenter-hans.jpg" alt="Hans" class="w-12 h-12 rounded-full mr-4">
                  <div>
                    <h4 class="font-bold">Hans M., 58</h4>
                    <div class="text-yellow-500">★★★★★</div>
                  </div>
                </div>
                <p class="text-gray-700">"Endlich kann ich wieder schmerzfrei spazieren gehen. Flexosamine ist ein Wunder!"</p>
              </div>
              
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="flex items-center mb-4">
                  <img src="./img/commenter-monika.jpg" alt="Monika" class="w-12 h-12 rounded-full mr-4">
                  <div>
                    <h4 class="font-bold">Monika S., 62</h4>
                    <div class="text-yellow-500">★★★★★</div>
                  </div>
                </div>
                <p class="text-gray-700">"Nach 3 Wochen waren meine Knieschmerzen komplett weg. Unglaublich!"</p>
              </div>
            </div>

            <div id="order" class="bg-blue-600 text-white p-8 rounded-lg text-center my-12">
              <h2 class="text-3xl font-bold mb-6">Bestellen Sie jetzt!</h2>
              <form class="max-w-md mx-auto space-y-4">
                <input type="text" placeholder="Ihr Name" class="w-full p-3 rounded text-black" required>
                <input type="tel" placeholder="Ihre Telefonnummer" class="w-full p-3 rounded text-black" required>
                <button type="submit" class="w-full bg-green-600 text-white p-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors">
                  Jetzt bestellen - 50% Rabatt sichern!
                </button>
              </form>
              <p class="text-sm mt-4 opacity-90">Kostenlose Lieferung • 30 Tage Geld-zurück-Garantie</p>
            </div>
          </div>
        </article>
      </main>
      
      <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2025 Gesundheitsmagazin. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
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