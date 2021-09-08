const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user.route')

const port = 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { 
    name: 'AAA',
  });
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);;
});