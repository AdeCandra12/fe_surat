import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableSurat, isiTabelDis } from "./controller/get.js";
import { urlAPISurat } from "./config/url.js";
get(urlAPISurat, isiTabelDis);