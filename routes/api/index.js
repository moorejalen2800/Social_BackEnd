const router = require('express').Router();
const userRoutes = require("../../models/user-routes");
const thoughtsRoutes = require("../../models/Thoughts-routes");

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
