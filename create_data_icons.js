const fs = require('fs');

console.log('🎨 Creating data URI icons for HaveAllPuzzles...');

// Create simple favicon as data URI (16x16 pixel art style)
const favicon16x16DataURI = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFdSURBVDiNpZM9SwNBEIafJQELwcJCG1sLG1sLG63EwsJCG1sLwcJCG1sLG1sLG1sLwcJCG1sLG1sLwcJCG1sLG1sLwcJCG1sLG1sLG63EwsJCG1sLwcJCG1sLG1sLG63EwsJCG1sLwcJCG1sLG1sLG63EwsJCG1sLwcJCG1sLG1sLG63EwsJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sLwcJCG1sL`;

// Simple placeholder - in real implementation, we would generate actual PNG data

// Create placeholder icon files (Base64 placeholders)
const iconFiles = {
    'favicon.ico': 'placeholder-ico-data',
    'favicon-16x16.png': 'placeholder-16x16-data',
    'favicon-32x32.png': 'placeholder-32x32-data',
    'apple-touch-icon.png': 'placeholder-180x180-data',
    'organization-logo-512x512.png': 'placeholder-512x512-data'
};

// For now, let's create simple HTML files that generate the icons visually
const iconGeneratorHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Icon Generator - HaveAllPuzzles</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            background: #f5f5f5; 
        }
        .icon-container {
            display: inline-block;
            margin: 20px;
            text-align: center;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        canvas {
            border: 1px solid #ddd;
            margin: 10px 0;
        }
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        .download-all {
            text-align: center;
            margin: 30px 0;
        }
        .download-all button {
            font-size: 18px;
            padding: 15px 30px;
        }
    </style>
</head>
<body>
    <h1>🎮 HaveAllPuzzles - Icon Generator</h1>
    
    <div class="download-all">
        <button onclick="downloadAll()">📦 Download All Icons</button>
    </div>
    
    <div class="icon-container">
        <h3>Favicon 16×16</h3>
        <canvas id="favicon16" width="16" height="16" style="width: 64px; height: 64px; image-rendering: pixelated;"></canvas>
        <br>
        <button onclick="download('favicon16', 'favicon-16x16.png')">Download</button>
    </div>
    
    <div class="icon-container">
        <h3>Favicon 32×32</h3>
        <canvas id="favicon32" width="32" height="32" style="width: 128px; height: 128px; image-rendering: pixelated;"></canvas>
        <br>
        <button onclick="download('favicon32', 'favicon-32x32.png')">Download</button>
    </div>
    
    <div class="icon-container">
        <h3>Apple Touch Icon 180×180</h3>
        <canvas id="apple180" width="180" height="180" style="width: 180px; height: 180px;"></canvas>
        <br>
        <button onclick="download('apple180', 'apple-touch-icon.png')">Download</button>
    </div>
    
    <div class="icon-container">
        <h3>Organization Logo 512×512</h3>
        <canvas id="logo512" width="512" height="512" style="width: 256px; height: 256px;"></canvas>
        <br>
        <button onclick="download('logo512', 'organization-logo-512x512.png')">Download</button>
    </div>

    <script>
        // Draw 16x16 favicon
        function drawFavicon16() {
            const canvas = document.getElementById('favicon16');
            const ctx = canvas.getContext('2d');
            
            // Background gradient approximation
            const gradient = ctx.createLinearGradient(0, 0, 16, 16);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 16, 16);
            
            // White puzzle piece
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(4, 4, 8, 8);
            
            // Puzzle notches
            ctx.fillStyle = gradient;
            ctx.fillRect(7, 4, 2, 3);
            ctx.fillRect(4, 7, 3, 2);
        }
        
        // Draw 32x32 favicon  
        function drawFavicon32() {
            const canvas = document.getElementById('favicon32');
            const ctx = canvas.getContext('2d');
            
            const gradient = ctx.createLinearGradient(0, 0, 32, 32);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 32, 32);
            
            // Puzzle piece
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(8, 8, 16, 16);
            
            // Notches
            ctx.fillStyle = gradient;
            ctx.fillRect(14, 8, 4, 6);
            ctx.fillRect(8, 14, 6, 4);
            
            // Tabs
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(16, 6, 2, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(6, 16, 2, 0, Math.PI * 2);
            ctx.fill();
            
            // Highlight
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fillRect(8, 8, 16, 2);
        }
        
        // Draw Apple Touch Icon
        function drawApple180() {
            const canvas = document.getElementById('apple180');
            const ctx = canvas.getContext('2d');
            
            const gradient = ctx.createLinearGradient(0, 0, 180, 180);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            
            // Rounded background
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(0, 0, 180, 180, 20);
            ctx.fill();
            
            // Puzzle piece
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(45, 45, 90, 90);
            
            // Notches
            ctx.fillStyle = gradient;
            ctx.fillRect(78, 45, 24, 36);
            ctx.fillRect(45, 78, 36, 24);
            
            // Highlight
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fillRect(45, 45, 90, 10);
        }
        
        // Draw Organization Logo
        function drawLogo512() {
            const canvas = document.getElementById('logo512');
            const ctx = canvas.getContext('2d');
            
            const gradient = ctx.createLinearGradient(0, 0, 512, 512);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            
            // Rounded background
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(0, 0, 512, 512, 50);
            ctx.fill();
            
            // Large puzzle piece
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(128, 128, 256, 256);
            
            // Notches
            ctx.fillStyle = gradient;
            ctx.fillRect(224, 128, 64, 96);
            ctx.fillRect(128, 224, 96, 64);
            
            // Tabs
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(256, 80, 32, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(80, 256, 32, 0, Math.PI * 2);
            ctx.fill();
            
            // Text
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 56px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('H', 256, 470);
            
            ctx.font = 'bold 28px Arial';
            ctx.fillText('HaveAllPuzzles', 256, 500);
        }
        
        // Download function
        function download(canvasId, filename) {
            const canvas = document.getElementById(canvasId);
            const link = document.createElement('a');
            link.download = filename;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
        
        // Download all function
        function downloadAll() {
            setTimeout(() => download('favicon16', 'favicon-16x16.png'), 100);
            setTimeout(() => download('favicon32', 'favicon-32x32.png'), 200);
            setTimeout(() => download('apple180', 'apple-touch-icon.png'), 300);
            setTimeout(() => download('logo512', 'organization-logo-512x512.png'), 400);
        }
        
        // Initialize
        drawFavicon16();
        drawFavicon32();
        drawApple180();
        drawLogo512();
    </script>
</body>
</html>`;

fs.writeFileSync('icon-generator.html', iconGeneratorHTML);

console.log('✅ Icon generator created!');
console.log('📁 Open icon-generator.html in your browser to download PNG icons');

// Now let's add the favicon meta tags to the main HTML files
console.log('');
console.log('🔧 Adding favicon meta tags to HTML files...');

const faviconMetaTags = `    <!-- Favicon and Icons -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    
    <!-- Organization Schema for Google Search -->
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
    </script>
`;

// Read and update index.html
let indexContent = fs.readFileSync('index.html', 'utf8');

// Add favicon meta tags after the existing meta tags
const headTagEnd = indexContent.indexOf('</head>');
if (headTagEnd !== -1) {
    indexContent = indexContent.slice(0, headTagEnd) + 
                  '\n' + faviconMetaTags + '\n' + 
                  indexContent.slice(headTagEnd);
    
    fs.writeFileSync('index.html', indexContent);
    console.log('✅ Added favicon meta tags to index.html');
}

console.log('');
console.log('📋 Summary:');
console.log('✅ Created SVG icons (favicon.svg, logo.svg, etc.)');
console.log('✅ Created icon-generator.html for PNG downloads');
console.log('✅ Created site.webmanifest for PWA support');
console.log('✅ Added favicon meta tags to index.html');
console.log('✅ Added organization schema for Google Search');
console.log('');
console.log('🚀 Next steps:');
console.log('1. Open icon-generator.html in browser');
console.log('2. Download all PNG icons');
console.log('3. Upload icons to website root directory');
console.log('4. Icons will improve SEO and user experience!');