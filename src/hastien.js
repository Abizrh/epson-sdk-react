import EscPosEncoder from "@firdausbaihaqi/esc-pos-encoder";

let encoder = new EscPosEncoder();

encoder
  .initialize()
  .size("medium")
  .align("center")
  .line("RS Hastien Rengasdengklok")
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
      { width: 20, align: "right" },
      { width: 20, align: "right" },
    ],
    [
      ["NO. RM: ", "0032499", "Tgl. Registrasi:", "27/05/2023 10:08:41"],
      ["Nama: ", "Dummy", "Tgl. Hasil: ", "27/05/2023 10:08:41"],
      ["Sex / Tgl Lahir: ", "Perempuan/01-01-1990", "Unit Pengantar: ", "HCU"],
      ["NO. Lab: ", "1031332323212", "Dokter Perujuk: ", "APS"],
      ["Diagnosa: ", "-"],
      ["Penjamin: ", "BPJS"],
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
      { width: 35, align: "left" },
      { width: 10, align: "left" },
      { width: 20, align: "right" },
      { width: 20, align: "right" },
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
      [`Kasir: test`, "Total", "240.000"],
      ["", "Diskon (%)", `-`],
      [
        (encoder) =>
          encoder
            .underline()
            .bold()
            .text("Terima Kasih Atas Kepercayaan Anda")
            .bold()
            .underline(),
        "NETTO",
        (encoder) => encoder.bold().text("240.000").bold(),
      ],
      [
        (encoder) => encoder.align("left").text("01/01/2022").align("left"),
        "",
        "",
      ],
    ]
  );

// add newLine to push the paper out
for (let i = 0; i < 35; i++) {
  encoder.newline();
}

encoder.raw(["0C"]).raw(["0D"]).cut("full");

const resultHastien = encoder.encode();

export { resultHastien };
