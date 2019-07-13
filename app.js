const express = require('express');
const router = require('./routes/router');
const db = require('./config/database');

const app = express();

app.use(router);

db.authenticate()
    .then(() => {
        console.log('databse connected');
    })
    .catch(() => {
        console.log('some error occured');
    })

app.listen(3000, () => {
    console.log(`server is running at http://localhost:3000`);
});