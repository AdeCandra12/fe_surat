import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel, isiTabelDis } from "../temp/table.js";

export function isiTableSurat(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#NOSURAT#", value.no_surat)
            .replace("#STATUS#", value.status_surat.keterangan)
            .replace("#PERIHAL#", value.perihal)
            .replace("#KDDAERAH#", value.id_pos.kode_daerah)
            .replace("#NDAERAH#", value.id_pos.nama_dareah)
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


export function isi_TabelDis(results) {
    results.forEach(isiRow2);
}
function isiRow2(value) {
    let content = 
    isiTabelDis.replace("#KDDIS#", value.kode_disposisi)
            .replace("#TGLDIS#", value.tgl_disposisi)
            .replace("#NPENERIMA#", value.penerima_surat.nama_penerima)
            .replace("#ALTERIMA", value.penerima_surat.alamat)
            .replace("#TGLTERIMA#", value.penerima_surat.tgl_terima)
            .replace("#STATUS#", value.status_disposisi.keterangan)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabelDis", content);
}
