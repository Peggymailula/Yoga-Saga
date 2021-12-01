const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboard cat5 run all 0v3r',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'handlebars');
app.engine('handlebars', engine({ defaultLayout: 'main' }));

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 3010;

app.listen(PORT, function () {
    console.log('started on: ', this.address().port);
});
