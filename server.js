require("dotenv").config();
const express = require("express");
const configViewEngine = require('./src/config/viewEngine')
const webRoutes = require('./src/route/web')
const connection = require('./src/config/database')

const app = express();
const port = process.env.PORT || 8888; // if PORT not in .env file get 8888
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app)

//khai báo route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}`);
});

// test connection
