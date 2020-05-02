// console.log("Hello world!")

import AppService from "./modules/app.service";
import "./modules/header.component";
import { config } from "./modules/config";



console.log("config.key", config.key);

const service = new AppService("Hello world!");
service.log();


