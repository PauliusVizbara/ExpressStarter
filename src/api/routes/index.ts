const fs = require('fs');
const path = require('path');

export default  (app) => {
    fs.readdirSync(__dirname).forEach(async (file) => {
        if ( file !== 'index.ts') {
            const route = await import(path.join(__dirname, file));
            app.use('/book', route.default)
        }
    });
};
