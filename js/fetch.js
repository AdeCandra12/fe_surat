import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableSurat } from "./controller/get.js";
import { urlAPISurat } from "./config/url.js";
get(urlAPISurat, isiTableSurat);