import EscPosEncoder from "@firdausbaihaqi/esc-pos-encoder";
import numberToWords from "./utils/format";

let encoder = new EscPosEncoder();

const price = 90_000;
const ex = [
  {
    id: 1,
    name: "Test Darah",
  },
  {
    id: 2,
    name: "Swab",
  },
  {
    id: 3,
    name: "Antigen",
  },
  {
    id: 4,
    name: "Vaksin",
  },
  {
    id: 5,
    name: "Baru",
  },
  {
    id: 6,
    name: "Test",
  },
];

const MAX_COLS = 4; // Maksimal jumlah kolom per baris

// Membuat array 2D untuk menyimpan hasil konversi data ex
const result = [[]];

// Menggunakan loop untuk mengubah data ex
ex.forEach((item, index) => {
  // Jika jumlah kolom pada baris terakhir sudah mencapai maksimum, maka tambahkan array baru untuk menampung data selanjutnya
  if (result[result.length - 1].length >= MAX_COLS) {
    result.push(['', '', '', '']);

    // Jika jumlah kolom pada baris pertama sudah mencapai maksimum, tambahkan array kosong setelah baris pertama
    if (result.length === 2 && result[0].length === MAX_COLS) {
      result.push([]);
    }
  }

  // Menambahkan item name ke dalam array result
  result[result.length - 1].push(item.name);
});


encoder
  .initialize()
  .size("medium")
  .align("center")
  .newline()
  .newline()
  .newline()
  .table(
    [
      { width: 45, align: "right" },
      { width: 10, align: "left" },
      { width: 20, align: "right" },
    ],
    [
      ["", `092323`, "10/20/2023"],
      ["", `Abizarah`, ""],
      ["", "22th 1bl", ""],
      ["", "Azure", ""],
      ["", `Abizarah`, "Hal 1 / 1"],
    ]
  )
  .newline()
  .newline()
  .newline()
  .table(
    [
      { width: 20, align: "left" },
      { width: 20, align: "left" },
      { width: 20, align: "left" },
      { width: 20, align: "left" },
    ],
    result
  )
  .newline()
  .newline()
  .newline()
  .newline()
  .newline()
  .table(
    [
      { width: 60, align: "left" },
      { width: 15, align: "left" },
    ],
    [["", `Rp. ${String(price)}`]]
  )
  .newline()
  .table(
    [
      { width: 20, align: "left" },
      { width: 55, align: "left" },
      { width: 15, align: "left" },
    ],
    [["", `${numberToWords(price)}`, ""]]
  )
  .newline()
  .newline()
  .newline()
  .newline()
  .table(
    [
      { width: 50, align: "left" },
      { width: 30, align: "left" },
    ],
    [
      [
        "",
        "Qin Shi Huang .mdK"
      ],
    ]
  )

// add newLine to push the paper out
for (let i = 0; i < 35; i++) {
  encoder.newline();
}

encoder.raw(["0C"]).raw(["0D"]).cut("full");

const resultPtsam = encoder.encode();

export { resultPtsam };
