import EscPosEncoder from "@firdausbaihaqi/esc-pos-encoder";
import numberToWords from "./utils/format";

let encoder = new EscPosEncoder();

const price = 90_000

encoder
  .initialize()
  .size("medium")
  .align("center")
  // .line("_".repeat(80))
  .newline()
  .table(
    [
      { width: 45, align: "right" },
      { width: 20, align: "left" },
      { width: 25, align: "left" },
    ],
    [
      [``, `092323`, "10/20/2023"],
      [``, `Abizarah`, ""],
      [``, `22th 1bl 2hr`, ""],
      ["", "Azure", ""],
      ["", "Abizarah", "Hal 1 / 1"],
    ]
  )
  // .line("_".repeat(80))
  //* header
  .table(
    [
      { width: 10, align: "left" },
      { width: 55, align: "left" },
      { width: 15, align: "right" },
    ],
    [
      ["", "", ""],
      // ["", (encoder) => encoder.bold().text("KWITANSI").bold(), ""],
    ]
  )
  // .line("_".repeat(80))
  .table([{ width: 70, align: "left" }], [
    // ["JENIS PEMERIKSAAN"]
  ])
  .newline()
  .table([{ width: 75, align: "left" }], [
    ["SARS CoV 1 Swab Antigen"],
    [""],
    ["Darah Lengkap"],
    [""],
    ["Analisa Feses (METODE FLOTASI)"],
    [""],
  ])
  .newline()
  .newline()
  .newline()
  .newline()
  .newline()
  //* footer
  // .line("_".repeat(80))
  .table(
    [
      { width: 50, align: "left" },
      { width: 30, align: "left" },
    ],
    [
      [
        "",
        (encoder) =>
          encoder.text("Rp. " + String(price))
      ],
    ]
  )
  .newline()
  .newline()
  .table(
    [
      { width: 10, align: "left" },
      { width: 55, align: "left" },
      { width: 15, align: "left" },
    ],
    [["", `  ${numberToWords(price)}`, ""]]
  )
  // .line("_".repeat(80))
  .table(
    [
      { width: 50, align: "left" },
      { width: 30, align: "left" },
    ],
    [
      // ["", "ULTRA MEDICA"]
    ]
  )
  .newline()
  .newline()

// add newLine to push the paper out
for (let i = 0; i < 35; i++) {
  encoder.newline();
}

encoder.raw(["0C"]).raw(["0D"]).cut("full");

const resultPtsam = encoder.encode();

export { resultPtsam };
