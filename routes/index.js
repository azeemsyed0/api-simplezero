const userRoutes = require('./signupRoutes');

const routes = (app) => {
  app.use(`/`, userRoutes());
}

module.exports = routes;