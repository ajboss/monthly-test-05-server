const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

var corsOptions = {
  origin: "https://localhost/" + (process.env.CLIENT || 3000)
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./model");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

app.use('/', require('./routes/order.routes'));
app.use('/', require('./routes/tables.routes'));
app.use('/', require('./routes/waiters.routes'));
app.use('/', require('./routes/menu.routes'));

let server = app.listen( process.env.PORT || 5000, () => {
    console.log('Listening on ', server.address().port);
});