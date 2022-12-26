const errorHandler = (err, req, res, next) => {
  // statusCode will be set to whichever status code we put in our controller at res.status()
  // If no res.status() has been set then it will throw a 500 status (server error)
  const statusCode = res.statusCode ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

module.exports = {errorHandler}