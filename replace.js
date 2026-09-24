const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.json') || file.endsWith('.md')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('c:/Users/dell/OneDrive/Desktop/New folder/gupta-jwellery');

files.forEach(file => {
    // skip node_modules and .next
    if (file.includes('node_modules') || file.includes('.next') || file.includes('.git')) return;

    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/GUPTA JWELLERY/g, 'RADHIKA JEWELLERY');
    content = content.replace(/Gupta Jwellery/g, 'Radhika Jewellery');
    content = content.replace(/gupta-jwellery/g, 'radhika-jewellery');
    content = content.replace(/Gupta/g, 'Radhika');
    content = content.replace(/GUPTA/g, 'RADHIKA');
    content = content.replace(/gupta/g, 'radhika');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
