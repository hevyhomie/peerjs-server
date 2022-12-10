import cors from "cors";
import express from "express";
import publicContent from "../../app.json";
import { IConfig } from "../config";
import { IRealm } from "../models/realm";
import PublicApi from "./v1/public";

export const Api = ({ config, realm }: {
  config: IConfig;
  realm: IRealm;
}): express.Router => {
  const app = express.Router();
  
  // app.use(function(_req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });
  
  // app.use(cors({ origin: 'https://9000-hevyhomie-peerjsserver-yeprtstt9sy.ws-us74.gitpod.io' }));
  // const corsOptions ={
  //   origin:'*', 
  //   // credentials:true,            //access-control-allow-credentials:true
  //   optionSuccessStatus:200,
  // }
 
  // app.use(cors(corsOptions))
  
  // app.use(function(_req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*"); // Update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  // var corsOptions = {
  //   origin: '*',
  //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  // }

  // app.use(cors({credentials: true, origin: true, exposedHeaders: '*'}));
    // app.use(cors());
  
    var corsOptions = {
      origin: '*',
      credentials: true };
  
    app.use(cors(corsOptions));
  // app.options('*', cors()); 
  // app.use(cors({origin: 'https://demoit.live'}));
  // app.all('/*', function(_req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   next();
  // });
  // app.all('/*', function (_req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
  //   next();
  // });

  app.get("/", (_, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(publicContent);
  });

  app.use("/:key", PublicApi({ config, realm }));

  return app;
};
