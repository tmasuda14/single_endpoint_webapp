const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  let date = new Date();
  res.json({
    "message": "My name is Tai Masuda",
    "timestamp": date.getTime()
  });
});

app.listen(PORT, () => {
  console.log(`Liatrio web app listening at http://${HOST}:${PORT}`);
});
