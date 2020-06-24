const fs = require('fs');
const path = require('path');

import bookRoute from './book'


export default  (app) => {
    // app.use('book', bookRoute)

    // API routes
    // console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////")
    fs.readdirSync(__dirname).forEach(async (file) => {
        if ( file !== 'index.ts') {
            const route = await import(path.join(__dirname, file));
            app.use('/book', route.default)

        }
        // route.default()
        // app.use(file, route.default())
    });
};
