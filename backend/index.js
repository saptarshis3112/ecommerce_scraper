const { Server } = require("@hapi/hapi");

const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");

const { constants: { Environment: { PORT, HOST } } } = require("./config");

const { authMiddleware, routeLogger } = require("./middlewares");

const routes = require("./routes");

const server = new Server({
  port: PORT,
  host: HOST,
})

const App = async () => {

  const swaggerOptions = {
    info: {
      title: 'Ecommerce Scraper API Documentation',
      version: '1.0.0.0',
    },
    grouping: 'tags',
    basePath: '/api/',
    documentationPath: '/api/documentation',
    jsonPath: '/api/swagger.json',
    swaggerUIPath: '/api/swagger/ui',
    schemes: ['https', 'http'],
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  // Middleware to log requested routes.
  server.ext('onRequest', routeLogger);

  // Auth middleware
  server.auth.scheme("custom", authMiddleware);
  server.auth.strategy("default", "custom");
  server.auth.default("default");

  await server.register(routes, {
    routes: {
      prefix: '/api'
    }
  });

  console.log(`Server on port ${PORT}`);
  await server.start();

};

App();
