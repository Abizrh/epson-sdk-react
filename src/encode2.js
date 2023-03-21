import EscPosEncoder from "@firdausbaihaqi/esc-pos-encoder";

let encoder = new EscPosEncoder();

encoder
  .initialize()
  .size("medium")
  .align("center")
  .line("PT SAM")
  .line("Jl. Letjend Suprapto no.37 A Ungaran Timur")
  .line("Telp. (024) - 6921813 / (024) 76905650")
  .line("_".repeat(80))
  .newline()
  .table(
    [
      { width: 40, align: "left" },
      { width: 40, align: "right" },
    ],
    [
      [`Dokter: test`, `Ruang: test`],
      [`Pasien: pasien test (Laki-Laki)`, `Tanggal:  01/01/2022`],
      [`Alamat: test`, `No. RM: 00000000`],
      ["", "No. BPJS: -"],
    ]
  )
  .align("center")
  .newline()
  .bold()
  .line("NOTA PEMBAYARAN")
  .bold()
  .newline()
  .line("_".repeat(80))
  //   .newline()
  .table(
    [
      { width: 15, align: "left" },
      { width: 50, align: "left" },
      { width: 15, align: "right" },
    ],
    [["No.", "Administrasi", "Harga"]]
  )

  .line("_".repeat(80))
  //   .newline()
  .table(
    [
      { width: 15, align: "left" },
      { width: 50, align: "left" },
      { width: 15, align: "right" },
    ],
    [
      ["", "", ""],
      ["1.", "Biaya Administrasi", "120.000"],
      ["", "", ""],
      ["2.", "Kartu Pasien", "120.000"],
    ]
  )
  //   .newline()
  .line("_".repeat(80))
  //   .newline()
  .table(
    [
      { width: 15, align: "left" },
      { width: 50, align: "left" },
      { width: 15, align: "right" },
    ],
    [["No.", "Farmasi", "Harga"]]
  )
  .line("_".repeat(80))
  //   .newline()
  .table(
    [
      { width: 15, align: "left" },
      { width: 50, align: "left" },
      { width: 15, align: "right" },
    ],
    [
      ["", "", ""],
      ["1.", "Bodrex Flu dan Batuk PE", "120.000"],
      ["", "", ""],
      ["2.", "Racikan Obat Imun", "120.000"],
      ["", "", ""],
      ["3.", "Amoxylyn (3gram)", "120.000"],
    ]
  )
  //   .newline()
  .line("_".repeat(80))
  //   .newline()
  .table(
    [
      { width: 15, align: "left" },
      { width: 50, align: "left" },
      { width: 15, align: "right" },
    ],
    [["No.", "Tindakan", "Harga"]]
  )
  .line("_".repeat(80))
  //   .newline()
  .table(
    [
      { width: 15, align: "left" },
      { width: 50, align: "left" },
      { width: 15, align: "right" },
    ],
    [
      ["", "", ""],
      ["1.", "Jahit Luka Kecil", "120.000"],
      ["", "", ""],
      ["2.", "Diagnosis ICD X", "120.000"],
    ]
  )
  //   .newline()
  .line("_".repeat(80))
  //   .newline()
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

const resultInvoice = encoder.encode();

export { resultInvoice };
