const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    console.log("running validate");
    return next();
  } catch (err) {
    console.log("error in validate ");
    console.log(err);
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.issues.map((curElem) => curElem.message);

    const error = {
      status,
      message,
      extraDetails,
    };
    next(extraDetails);
  }
};

module.exports = validate;
