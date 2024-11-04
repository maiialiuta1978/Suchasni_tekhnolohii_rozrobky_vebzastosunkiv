const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./routes/userRoutes');
const postsRoutes = require('./routes/postsRoutes');
const pagesRoutes = require('./routes/pageRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use('/', pagesRoutes);
app.use('/users', userRoutes);
app.use('/posts', postsRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
