import express, { Application, Express } from 'express';

function ExpressConfig(): Application {
  const app: Express = express();
  return app;
}
export default ExpressConfig;
