import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableSurat, isiTabelDis } from "./controller/get.js";
import { urlAPISurat, urlAPIDisposisi } from "./config/url.js";
get(urlAPISurat, isiTableSurat);
get(urlAPIDisposisi, isiTabelDis);