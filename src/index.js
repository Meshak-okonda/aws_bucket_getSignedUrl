const express = require('express');
const { getS3UrlSigned } = require('./utils');

const app = express();
app.use(express.json());


app.get("/:name", (req, res) => {
  const name = req.params.name;
  const url = getS3UrlSigned(name);

  res.status(200).json({
    url
  });
})

app.listen(5500, () => {
  console.log('app listen in : http://localhost:'+5500 )
})