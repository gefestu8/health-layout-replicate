#!/usr/bin/env node

/**
 * Статическая сборка проекта в HTML
 * Создает index.html с содержимым статьи как основной страницей
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔥 Начинаем статическую сборку...');

// 1. Собираем React проект
console.log('📦 Сборка React приложения...');
execSync('npm run build', { stdio: 'inherit' });

// 2. Читаем собранный index.html
const distPath = path.join(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// 3. Заменяем title и мета-теги на статью о Flexosamine
const articleMeta = `
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

// 4. Записываем обновленный index.html
fs.writeFileSync(indexPath, indexContent);

// 5. Создаем папку img и копируем туда изображения
const imgDir = path.join(distPath, 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir);
}

// Копируем изображения из public/lovable-uploads в img/
const uploadsDir = path.join(process.cwd(), 'public', 'lovable-uploads');
if (fs.existsSync(uploadsDir)) {
  const files = fs.readdirSync(uploadsDir);
  files.forEach(file => {
    const srcPath = path.join(uploadsDir, file);
    const destPath = path.join(imgDir, file);
    fs.copyFileSync(srcPath, destPath);
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