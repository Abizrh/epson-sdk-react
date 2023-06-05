import EscPosEncoder from "@firdausbaihaqi/esc-pos-encoder";
import logo from './hastien.png'
let encoder = new EscPosEncoder({
    imageMode: 'raster'
});

let img = new Image()
img.src = `${logo}`

img.onload = function(){
    encoder
  .initialize()
  .size("medium")
  .align('left')
  .image(img, 320, 320, 'atkinson')
  .align("center")
  .bold()
  .line("RS Hastien Rengasdengklok")
  .bold()
  .line(
    "Jl. Cikangkung Barat II. Kec. Rengasdengklok Utara. Kel. Rengasdengklok. Karawang"
  )
  .align("center")
  .newline()
  .bold()
  .line("HASIL PEMERIKSAAN LABORATORIUM")
  .bold()
  .newline()
  .table(
    [
      { width: 20, align: "left" },
      { width: 20, align: "left" },
      { width: 20, align: "left" },
      { width: 20, align: "leftt" },
    ],
    [
      ["NO. RM         : ", "0032499", "Tgl. Registrasi            :", "27/05/2023 10:08:41"],
      ["Nama           : ", "Dummy", "  Tgl. Hasil                 : ", "27/05/2023 10:08:41"],
      ["Sex / Tgl Lahir: ", "Perempuan/01-01-1990", "Unit Pengantar: ", "HCU"],
      ["NO. Lab        : ", "1031332323212", "Dokter Perujuk       : ", "APS"],
      ["Diagnosa       : ", "-"],
      ["Penjamin       : ", "BPJS"],
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
      ["", "", ""],
      ["Masa Pembekuan", "7", "5 - 1", "Menit"],
      ["", "", ""],
      ["Masa Pembekuan", "7", "5 - 1", "Menit"],
      ["", "", ""],
      ["Masa Pembekuan", "7", "5 - 1", "Menit"],
      ["", "", ""],
      ["Masa Pembekuan", "7", "5 - 1", "Menit"],
      ["", "", ""],
      ["Masa Pembekuan", "7", "5 - 1", "Menit"],
    ]
  )
  .newline()
  .table(
    [
      { width: 55, align: "left" },
      { width: 10, align: "left" },
      { width: 15, align: "right" },
    ],
    [
      [``, "", ""],
      ["", "", ``],
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
  );

}

// add newLine to push the paper out
for (let i = 0; i < 35; i++) {
  encoder.newline();
}

encoder.raw(["0C"]).raw(["0D"]).cut("full");

const resultHastien = encoder.encode();

export { resultHastien };
