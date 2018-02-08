const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Back end server for Student Grade Table is running.</h1>');
});

app.listen(PORT, () => {
  console.log('Server is running on PORT: ', PORT);
});
