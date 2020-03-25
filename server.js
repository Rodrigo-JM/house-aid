const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const app = express();
const apiRouter = require('./api')
const db = require('./api/db/db')

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', apiRouter);

app.use((err, req, res, next) => {
    console.error(err)
});

db.sync()

app.listen(8000)