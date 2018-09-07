import * as express from "express"
import { RequestHandlerParams } from "express-serve-static-core";
const app = express();

export default class Server {
  protected addMiddleware(middlewares: RequestHandlerParams) {
    app.use(middlewares);
  }

  public start() {
    // Serve the files on port 3000.
    app.listen(3000, function () {
      console.log('Example app listening on port 3000!\n');
    });
  }
}