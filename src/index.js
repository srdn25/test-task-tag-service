const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = 3000;
const host = '0.0.0.0';

app.use(bodyParser.json({
  limit: '3mb',
}));

app.use('/api', router);
require('./routes/api')(router);

// Error handler
app.use((err, req, res, next) => {
  let message = err.message;
  if (err.errors && Array.isArray(err.errors)) {
    err.errors.forEach((e) => {
      if (e.message) message = `${message},\n ${e.message}`;
    })
  }

  if (!message) message = 'Unknown error';

  res.status(err.status || 500);
  res.json({ message });
});

app.listen(port, () => console.log(`Server run at ${host}:${port}`));
