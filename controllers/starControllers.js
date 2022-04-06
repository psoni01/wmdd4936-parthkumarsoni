const Star = require("../models/Star");

const getStarsOfSpecificNumbers = (req, res, next) => {
  Star.find({})
    .then((results) => {
      const resultArray = [];
      for (i = 0; i < req.params.numberOfStars; i++) {
        const rand = Math.floor(Math.random() * results.length);
        resultArray.push(results[rand]);
      }

      res.status(200).json(resultArray);
    })
    .catch((error) => res.status(500).send(error));
};

const getStars = (req, res, next) => {
  Star.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => res.status(500).send(error));
};

const postStar = (req, res, next) => {
  let star = new Star(req.body);
  star
    .save()
    .then((result) => {
      res.status(201).json({
        data: star,
      });
    })
    .catch((error) => {
      res.status(409).json({ errors: res.locals.errors });
    });
};

const validateStar = (req, res, next) => {
  if (res.locals.errors[0] == null) {
    res.status(200).json({ errors: [] });
  } else {
    res.status(409).json({ errors: res.locals.errors });
  }
};

module.exports = {
  getStars,
  getStarsOfSpecificNumbers,
  postStar,
  validateStar,
};
