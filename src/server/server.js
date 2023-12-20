const express = require('express');
const cors = require('cors');
const router = require('./routes.js')
require('./db')
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());

// app.use(express.static(path.resolve(__dirname, '../src/client')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
