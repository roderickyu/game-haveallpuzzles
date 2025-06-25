const fs = require('fs');
const { createCanvas } = require('canvas');

console.log('🎨 Generating favicons and logos for HaveAllPuzzles...');

// Function to create gradient
function createGradient(ctx, width, height) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    return gradient;
}

// Function to draw puzzle piece
function drawPuzzlePiece(ctx, x, y, size) {
    const gradient = createGradient(ctx, size, size);
    
    // Main piece
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, y, size, size);
    
    // Notches and tabs
    ctx.fillStyle = gradient;
    const notchSize = size * 0.25;
    const tabSize = size * 0.375;
    
    // Top notch
    ctx.fillRect(x + size * 0.375, y, notchSize, tabSize);
    
    // Left notch  
    ctx.fillRect(x, y + size * 0.375, tabSize, notchSize);
    
    // Add circular tabs
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x + size/2, y - size * 0.15, size * 0.125, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x - size * 0.15, y + size/2, size * 0.125, 0, Math.PI * 2);
    ctx.fill();
}

// Generate favicon 32x32
function generateFavicon32() {
    const canvas = createCanvas(32, 32);
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = createGradient(ctx, 32, 32);
    ctx.fillRect(0, 0, 32, 32);
    
    // Puzzle piece
    drawPuzzlePiece(ctx, 8, 8, 16);
    
    // Highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(8, 8, 16, 2);
    
    return canvas.toBuffer('image/png');
}

// Generate favicon 16x16
function generateFavicon16() {
    const canvas = createCanvas(16, 16);
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = createGradient(ctx, 16, 16);
    ctx.fillRect(0, 0, 16, 16);
    
    // Simple puzzle piece
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(4, 4, 8, 8);
    
    // Simple notch
    ctx.fillStyle = createGradient(ctx, 16, 16);
    ctx.fillRect(7, 4, 2, 3);
    ctx.fillRect(4, 7, 3, 2);
    
    return canvas.toBuffer('image/png');
}

// Generate organization logo 512x512
function generateLogo512() {
    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext('2d');
    
    // Background with rounded corners
    ctx.fillStyle = createGradient(ctx, 512, 512);
    ctx.beginPath();
    ctx.roundRect(0, 0, 512, 512, 50);
    ctx.fill();
    
    // Large puzzle piece
    drawPuzzlePiece(ctx, 128, 128, 256);
    
    // Add brand text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('H', 256, 450);
    
    // Subtitle
    ctx.font = 'bold 28px Arial';
    ctx.fillText('HaveAllPuzzles', 256, 490);
    
    return canvas.toBuffer('image/png');
}

// Generate Apple Touch Icon 180x180
function generateAppleTouchIcon() {
    const canvas = createCanvas(180, 180);
    const ctx = canvas.getContext('2d');
    
    // Background with iOS style rounded corners
    ctx.fillStyle = createGradient(ctx, 180, 180);
    ctx.beginPath();
    ctx.roundRect(0, 0, 180, 180, 20);
    ctx.fill();
    
    // Puzzle piece
    drawPuzzlePiece(ctx, 45, 45, 90);
    
    // iOS style highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(45, 45, 90, 10);
    
    return canvas.toBuffer('image/png');
}

// Generate ICO file for favicon
function generateICO() {
    // For ICO, we'll create a simple version
    const canvas = createCanvas(32, 32);
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = createGradient(ctx, 32, 32);
    ctx.fillRect(0, 0, 32, 32);
    
    // Simple H letter
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('H', 16, 16);
    
    return canvas.toBuffer('image/png');
}

try {
    // Generate all icons
    console.log('📱 Generating favicon-16x16.png...');
    fs.writeFileSync('favicon-16x16.png', generateFavicon16());
    
    console.log('📱 Generating favicon-32x32.png...');
    fs.writeFileSync('favicon-32x32.png', generateFavicon32());
    
    console.log('🍎 Generating apple-touch-icon.png...');
    fs.writeFileSync('apple-touch-icon.png', generateAppleTouchIcon());
    
    console.log('🏢 Generating organization-logo-512x512.png...');
    fs.writeFileSync('organization-logo-512x512.png', generateLogo512());
    
    console.log('💻 Generating favicon.ico...');
    fs.writeFileSync('favicon.ico', generateICO());
    
    console.log('');
    console.log('✅ All icons generated successfully!');
    console.log('📁 Generated files:');
    console.log('   • favicon-16x16.png');
    console.log('   • favicon-32x32.png'); 
    console.log('   • apple-touch-icon.png');
    console.log('   • organization-logo-512x512.png');
    console.log('   • favicon.ico');
    
} catch (error) {
    console.error('❌ Error generating icons:', error.message);
    console.log('');
    console.log('🔧 To install canvas dependency, run:');
    console.log('   npm install canvas');
}