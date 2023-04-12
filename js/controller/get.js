import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel} from "../temp/table.js";
export function isiTableSurat(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#NOSURAT#", value.no_surat)
            .replace("#STATUS#", value.status_surat)
            .replace("#PERIHAL#", value.identitas.no_hp)
            .replace("#KODEPOS#", value.identitas.prodi.nama)
            .replace("#PENGIRIM#", value.identitas.jurusan)
            .replace("#PENERIMA#", value.status_keuangan.total_pembayaran)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}
