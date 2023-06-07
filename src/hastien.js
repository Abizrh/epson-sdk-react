import EscPosEncoder from "@firdausbaihaqi/esc-pos-encoder";
import { data } from "./utils/data";
// import {Image} from 'canvas'
// import { createCanvas } from 'canvas'
// const canvas = createCanvas(100,100)
// const ctx = canvas.getContext('2d')

let encoder = new EscPosEncoder({
  imageMode: 'column'
});

const logo = data.source

let img = new Image()
img.src = logo

console.log('hastien.js : >', img)

encoder
.initialize()
.size("medium")
.newline()
.newline()
.align("center")
.bold()
.line('RS Hastien Rengasdengklok')
.bold()
.line(
 'Jl. Cikangkung Barat II. Kec. Rengasdengklok Utara. Kel. Rengasdengklok. Karawang'
)
.align("center")
.newline()
.bold()
.line("HASIL PEMERIKSAAN LABORATORIUM")
.bold()
.newline()
.table(
 [
   { width: 17, align: "left" },
   { width: 20, align: "left" },
   { width: 6, align: "left" },
   { width: 17, align: "left" },
   { width: 20, align: "left" },
 ],
 [
   ["NO. RM         :", "0032499", "", "Tgl. Registrasi:", "27/05/2023 10:08:41"],
   ["Nama           :", "Dummy", "", "  Tgl. Hasil     : ", "27/05/2023 10:08:41"],
   ["Sex / Tgl Lahir:", "Perempuan/01-01-1990", "", "Unit Pengantar : ", "HCU"],
   ["NO. Lab        :", "1031332323212", "", "Dokter Perujuk : ", "APS"],
   ["Diagnosa       :", "-", "", ""],
   ["Penjamin       :", "BPJS", "", ""],
 ]
)
.align("center")
.line("_".repeat(80))
//   .newline()
.table(
 [
   { width: 20, align: "left" },
   { width: 20, align: "left" },
   { width: 20, align: "left" },
   { width: 20, align: "left" },
 ],
 [["PEMERIKSAAN", "HASIL", "NILAI RUJUKAN", "SATUAN"]]
)

.line("_".repeat(80))
//   .newline()
.table(
 [
   { width: 20, align: "left" },
   { width: 20, align: "left" },
   { width: 20, align: "left" },
   { width: 20, align: "left" },
 ],
 [
   ["","", "", ""],
   ["-".repeat(20), "-".repeat(20), "-".repeat(20), "-".repeat(18)],
   [(encoder) => 
     encoder.bold().text("LAB-Masa Pembekuan").bold() , "", "", ""],
   ["-".repeat(20), "-".repeat(20), "-".repeat(20), "-".repeat(18)],
   ["Masa Pembekuan", "7", "5 - 1", "Menit"],
   ["-".repeat(20), "-".repeat(20), "-".repeat(20), "-".repeat(18)],
   ["Masa Pembekuan", "7", "5 - 1", "Menit"],
   ["-".repeat(20), "-".repeat(20), "-".repeat(20), "-".repeat(18)],
   ["Masa Pembekuan", "7", "5 - 1", "Menit"],
   ["-".repeat(20), "-".repeat(20), "-".repeat(20), "-".repeat(18)],
   ["Masa Pembekuan", "7", "5 - 1", "Menit"],
 ]
)
.line("-".repeat(80))
.newline()
.table(
 [
   { width: 55, align: "left" },
   { width: 10, align: "left" },
   { width: 15, align: "right" },
 ],
 [
   [
     (encoder) =>
       encoder
         .underline()
         .bold()
         .text("Kesan / Saran")
         .bold()
         .underline(),
     "",
     "",
   ],
   [
     "",
     "",
     "",
   ],
 ]
)
.table(
 [
     { width: 55, align: 'left' },
     { width: 10, align: 'left' },
     { width: 15, align: 'left' },
 ],
 [
     [''],
     [(encoder) => encoder.text(' '.repeat(6)).text('KARAWANG, 19-07-2022'), '', ''],
     [(encoder) => encoder.text(' '.repeat(13)).align('left').text('Dokter').align('left'), '', 'Pelaksana'],
     ['', '', ''],
     ['', '', ''],
     ['', '', ''],
     ['', '', ''],
     ['', '', ''],
     [(encoder) => encoder.text('   ').text('Dr. HENDARTO PARWOTO, Sp.PK'),'', 'Abizarah'],

 ]
)

// add newLine to push the paper out
for (let i = 0; i < 35; i++) {
  encoder.newline();
}

encoder.raw(["0C"]).raw(["0D"]).cut("full");

const resultHastien = encoder.encode();

export { resultHastien };
