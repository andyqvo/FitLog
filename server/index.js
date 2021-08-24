const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const programRoutes = require('./routes/Program');
const exerciseRoutes = require('./routes/Exercise');
const userRoutes = require('./routes/User');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/program', programRoutes);
app.use('/exercise', exerciseRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});