const fs = require('fs');
const path = require('path');

console.log('🔍 Adding Google Analytics to all HTML files...');

// Google Analytics code to insert
const gaCode = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1D9R94R56Q"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-1D9R94R56Q');
    </script>
`;

// Get all HTML files
const files = fs.readdirSync('.').filter(file => 
    file.endsWith('.html') && 
    !file.includes('backup') && 
    !file.includes('template')
);

console.log(`📁 Found ${files.length} HTML files to process`);

let processedCount = 0;
let skippedCount = 0;

files.forEach(filename => {
    try {
        let content = fs.readFileSync(filename, 'utf8');
        
        // Check if GA code already exists
        if (content.includes('gtag.js?id=G-1D9R94R56Q')) {
            console.log(`⏭️  Skipped ${filename} (GA already exists)`);
            skippedCount++;
            return;
        }
        
        // Find the position after <head> tag
        const headMatch = content.match(/<head[^>]*>/i);
        if (!headMatch) {
            console.log(`⚠️  Warning: No <head> tag found in ${filename}`);
            return;
        }
        
        const insertPosition = headMatch.index + headMatch[0].length;
        
        // Insert GA code right after <head>
        const updatedContent = 
            content.slice(0, insertPosition) + 
            '\n' + gaCode + 
            content.slice(insertPosition);
        
        fs.writeFileSync(filename, updatedContent);
        console.log(`✅ Added GA to ${filename}`);
        processedCount++;
        
    } catch (error) {
        console.error(`❌ Error processing ${filename}:`, error.message);
    }
});

console.log('');
console.log('📊 Google Analytics Addition Summary:');
console.log(`✅ Successfully processed: ${processedCount} files`);
console.log(`⏭️  Skipped (already had GA): ${skippedCount} files`);
console.log(`📁 Total files: ${files.length}`);
console.log('');
console.log('🎯 Google Analytics tracking ID: G-1D9R94R56Q');
console.log('🌟 All pages now have analytics tracking!');