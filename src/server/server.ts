import * as express from "express"
import { RequestHandlerParams } from "express-serve-static-core";
import settings from "./settings";

const app = express();

export default class Server {
  protected addMiddleware(middlewares: RequestHandlerParams) {
    app.use(middlewares);
  }

  public get Port(): number {
    return settings.port;
  }

  public start() {
    app.listen(this.Port, () => {
      console.log(`App listening on port ${this.Port}!\n`);
    });
  }
}