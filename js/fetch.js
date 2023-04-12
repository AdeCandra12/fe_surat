import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableSurat, isi_TabelDis } from "./controller/get.js";
import { urlAPISurat, urlAPIDisposisi } from "./config/url.js";
get(urlAPISurat, isiTableSurat);
get(urlAPIDisposisi, isi_TabelDis);