const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const DB_USER = 'root';
const DB_PASSWD = 'example';
mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWD}@mongo:27017`)
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
    res.send('Hello World! everybody woow');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
