const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.status(404).send('Wrong Route');
});

module.exports = router;
