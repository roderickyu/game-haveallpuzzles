const fs = require('fs');

console.log('🎨 Creating SVG icons for HaveAllPuzzles...');

// Create favicon SVG
const faviconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" fill="url(#grad)" rx="4"/>
  <rect x="8" y="8" width="16" height="16" fill="white"/>
  <rect x="14" y="8" width="4" height="6" fill="url(#grad)"/>
  <rect x="8" y="14" width="6" height="4" fill="url(#grad)"/>
  <circle cx="16" cy="5" r="2" fill="white"/>
  <circle cx="5" cy="16" r="2" fill="white"/>
  <rect x="8" y="8" width="16" height="2" fill="rgba(255,255,255,0.3)"/>
</svg>`;

// Create organization logo SVG
const logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#logoGrad)" rx="50"/>
  <rect x="128" y="128" width="256" height="256" fill="white"/>
  <rect x="224" y="128" width="64" height="96" fill="url(#logoGrad)"/>
  <rect x="128" y="224" width="96" height="64" fill="url(#logoGrad)"/>
  <circle cx="256" cy="80" r="32" fill="white"/>
  <circle cx="80" cy="256" r="32" fill="white"/>
  <text x="256" y="470" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">H</text>
  <text x="256" y="500" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="white">HaveAllPuzzles</text>
</svg>`;

// Create Apple Touch Icon SVG
const appleTouchSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="appleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="180" height="180" fill="url(#appleGrad)" rx="20"/>
  <rect x="45" y="45" width="90" height="90" fill="white"/>
  <rect x="78" y="45" width="24" height="36" fill="url(#appleGrad)"/>
  <rect x="45" y="78" width="36" height="24" fill="url(#appleGrad)"/>
  <rect x="45" y="45" width="90" height="10" fill="rgba(255,255,255,0.3)"/>
</svg>`;

// Create simple favicon.ico data (base64 encoded PNG)
const simpleIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="simpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" fill="url(#simpleGrad)"/>
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="white">H</text>
</svg>`;

// Save SVG files
fs.writeFileSync('favicon.svg', faviconSVG);
fs.writeFileSync('logo.svg', logoSVG);
fs.writeFileSync('apple-touch-icon.svg', appleTouchSVG);
fs.writeFileSync('simple-icon.svg', simpleIconSVG);

console.log('✅ SVG icons created successfully!');
console.log('📁 Created files:');
console.log('   • favicon.svg');
console.log('   • logo.svg');
console.log('   • apple-touch-icon.svg');
console.log('   • simple-icon.svg');

// Create HTML meta tags for the icons
const metaTags = `
<!-- Favicon and Icons -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<!-- Organization Logo for Google Search -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HaveAllPuzzles",
  "description": "Premium collection of 95+ curated puzzle games",
  "url": "https://haveallpuzzles.online",
  "logo": "https://haveallpuzzles.online/organization-logo-512x512.png",
  "image": "https://haveallpuzzles.online/organization-logo-512x512.png",
  "sameAs": [
    "https://github.com/roderickyu/game-haveallpuzzles"
  ]
}
</script>`;

fs.writeFileSync('meta-tags.html', metaTags);

// Create web manifest
const webManifest = {
  "name": "HaveAllPuzzles - Premium Gaming Collection",
  "short_name": "HaveAllPuzzles",
  "description": "Experience the finest collection of 95+ premium puzzle games",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#667eea",
  "theme_color": "#764ba2",
  "icons": [
    {
      "src": "/favicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "/favicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
      "src": "/organization-logo-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};

fs.writeFileSync('site.webmanifest', JSON.stringify(webManifest, null, 2));

console.log('   • meta-tags.html (HTML meta tags)');
console.log('   • site.webmanifest (PWA manifest)');
console.log('');
console.log('🔧 Next steps:');
console.log('1. Convert SVG files to PNG using online converters');
console.log('2. Add meta tags to your HTML files');
console.log('3. Upload all icon files to your website root');
console.log('');
console.log('📐 Recommended PNG sizes to generate:');
console.log('   • favicon-16x16.png (16×16)');
console.log('   • favicon-32x32.png (32×32)');
console.log('   • apple-touch-icon.png (180×180)'); 
console.log('   • organization-logo-512x512.png (512×512)');
console.log('   • favicon.ico (32×32 ICO format)');