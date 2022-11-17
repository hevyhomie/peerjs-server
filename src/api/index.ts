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
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.options('*', cors()); 

  app.get("/", (_, res) => {
    res.send(publicContent);
  });

  app.use("/:key", PublicApi({ config, realm }));

  return app;
};
