import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel} from "../temp/table.js";

export function isiTableSurat(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#NOSURAT#", value.no_surat)
            .replace("#STATUS#", value.status_surat.keterangan)
            .replace("#PERIHAL#", value.perihal)
            .replace("#KDDAERAH#", value.id_pos.kode_daerah)
            .replace("#NDAERAH#", value.id_pos.nama_daerah)
            .replace("#NPENGIRIM#", value.pengirim_srt.nama_pengirim)
            .replace("#ALKIRIM#", value.pengirim_srt.alamat)
            .replace("#TGLKIRIM#", value.pengirim_srt.tgl_kirim)
            .replace("#NPENERIMA#", value.penerima_srt.nama_penerima)
            .replace("#ALTERIMA", value.penerima_srt.alamat)
            .replace("#TGLTERIMA#", value.penerima_srt.tgl_terima)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}
