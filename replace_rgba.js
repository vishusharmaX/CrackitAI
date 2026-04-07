const fs = require('fs');
const path = require('path');

const filesToProcess = [
    'Frontend/src/features/interview/style/interview.scss',
    'Frontend/src/features/interview/style/home.scss',
    'Frontend/src/features/auth/auth.form.scss'
];

filesToProcess.forEach(file => {
    const fullPath = path.resolve(file);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if we need to add @use "sass:color"
    const hasRgbaVar = /rgba\(\s*(\$[^,]+|#[0-9a-fA-F]+)\s*,\s*([0-9.]+)\s*\)/.test(content);
    if (hasRgbaVar) {
        if (!content.includes('@use "sass:color";')) {
            content = '@use "sass:color";\n' + content;
        }
        
        content = content.replace(/rgba\(\s*(\$[^,]+|#[0-9a-fA-F]+)\s*,\s*([0-9.]+)\s*\)/g, (match, color, alpha) => {
            return `color.change(${color}, $alpha: ${alpha})`;
        });
        
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Processed', file);
    }
});
