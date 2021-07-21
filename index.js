const express = require('express');
var cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./helpers/connectDB.helper')();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', require('./routes/users.route'));
app.use('/courses', require('./routes/courses.route'));
app.use('/categories', require('./routes/categories.route'));
app.use('/promotions', require('./routes/promotions.route'));
app.use('/upload', require('./routes/upload.route'));
app.use('/resources', require('./routes/resources.route'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
