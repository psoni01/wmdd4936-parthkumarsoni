const Ajv = require("ajv");
const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true,
  useDefaults: "empty",
});

require("ajv-keywords")(ajv);
require("ajv-formats")(ajv);
require("ajv-errors")(ajv);

let starSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      maxLength: 30,
      errorMessage: {
        maxLength: "Name is too long. Please enter nickname.",
      },
    },

    weight: {
      type: "number",
    },

    height: {
      type: "number",
    },

    matches: { type: "number" },

    wins: { type: "number" },

    defeats: { type: "number" },
  },
  required: ["title", "weight", "height", "matches", "wins", "defeats"],
  errorMessage: {
    required: {
      name: "Please provide WWE Star Name",
      weight: "Please enter weight",
      height: "Please enter height",
      matches: "Please enter matches",
      wins: "Please enter wins",
      defeats: "Please enter defeats",
    },
  },
};

const validate = ajv.compile(starSchema);

const formValidator = function (req, res, next) {
  validate(req.body);
  const errArray = [];
  if (validate.errors != null) {
    validate.errors.forEach((e) => {
      errArray.push(`${e.instancePath.substring(1)} ${e.message}`);
    });
  }
  res.locals.errors = [...errArray];

  if (parseInt(req.body.wins) > parseInt(req.body.matches)) {
    res.locals.errors = [...res.locals.errors, "Wins are greater than matches"];
    res.status(409).json({ errors: res.locals.errors });
  } else if (parseInt(req.body.defeats) > parseInt(req.body.matches)) {
    res.locals.errors = [
      ...res.locals.errors,
      "Defeats greater than total matches",
    ];

    res.status(409).json({ errors: res.locals.errors });
  } else if (
    parseInt(req.body.wins) + parseInt(req.body.defeats) >
    parseInt(req.body.matches)
  ) {
    res.locals.errors = [
      ...res.locals.errors,
      "Wins + defeats greater than total matches played",
    ];

    res.status(409).json({ errors: res.locals.errors });
  } else {
    next();
  }
};

module.exports = formValidator;
