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
  res.status(err.status || 500);
  res.json({ message: err.message || 'Unknown error' });
});

app.listen(port, () => console.log(`Server run at ${host}:${port}`));
