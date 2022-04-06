const formValidator = require("../validators/formValidator.js");

const router = require("express").Router({ mergeParams: true });

const {
  getStars,
  getStarsOfSpecificNumbers,
  postStar,
  validateStar,
} = require("../controllers/starControllers.js");

router.get("/:numberOfStars", getStarsOfSpecificNumbers);
router.get("/", getStars);
router.post("/", formValidator, postStar);
router.post("/validateStar", formValidator, validateStar);

module.exports = router;
// /api/v1/stars
// /api/v1/stars/:numberOfStars
// /api/v1/stars POST
// /api/v1/stars/validateStar
