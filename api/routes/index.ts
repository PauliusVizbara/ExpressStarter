const fs = require('fs');
const path = require('path');

import bookRoute from './book'


export default (app) => {
    app.use('book', bookRoute)

    // API routes
    // console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////")
    // fs.readdirSync(__dirname ).forEach((file) => {
    //    console.log(path.join(__dirname, file))
    //     const route = require(path.join(__dirname, file))
    //     app.use(file,route)
    // });
};
