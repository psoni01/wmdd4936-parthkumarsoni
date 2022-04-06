const router = require("express").Router({ mergeParams: true });

const starRouter = require("./stars.js");

router.use("/stars", starRouter);

module.exports = router;

// /api/v1/stars
