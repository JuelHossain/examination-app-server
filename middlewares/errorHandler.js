const notFoundHandler = (req, res, next) => {
  next({
    status: 404,
    message: "Not Found",
  });
};

const errorHandler = (err, req, res, next) => {
  if (err.status === 404) {
    return res.status(400).send("Your Page is not found");
  }

  if (err.status === 500) {
    return res.status(500).render("500");
  }

  next();
};

module.exports = { notFoundHandler, errorHandler };
