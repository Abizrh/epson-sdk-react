// import EscPosEncoder from '@firdausbaihaqi/esc-pos-encoder'

// let encoder = new EscPosEncoder();



// encoder
//     .initialize()
//     .line('NALA MEDICAL CENTER')
//     .line('Jl. Letjend Suprapto no.37 A Ungaran Timur')
//     .line('Telp. (024) - 6921813 / (024) 76905650')
//     .newline()
//     .align('center')
//     .bold()
//     .line('LAPORAN OMSET LABORAT')
//     .bold()
//     .line('Tanggal : 00/00/2022 s/d 00/00/2022')
//     .newline()
//     .line('-'.repeat(130))
//     .table(
//         [
//             { width: 5, align: 'center' },
//             { width: 15, align: 'center' },
//             { width: 20, align: 'center' },
//             { width: 15, align: 'center' },
//             { width: 15, align: 'center' },
//             { width: 25, align: 'center' },
//             { width: 10, align: 'center' },
//             { width: 10, align: 'center' },
//             { width: 10, align: 'center' },
//         ],
//         [
//             ['No', 'No RM', 'Pasien', 'Dokter', 'Pemeriksa', 'Paket Pemeriksaan', 'Total', 'Diskon', 'Netto'],
//         ]
//     )
//     .line('-'.repeat(130))
//     .table(
//         [
//             { width: 5, align: 'center' },
//             { width: 15, align: 'center' },
//             { width: 20, align: 'center' },
//             { width: 15, align: 'center' },
//             { width: 15, align: 'center' },
//             { width: 25, align: 'center' },
//             { width: 10, align: 'center' },
//             { width: 10, align: 'center' },
//             { width: 10, align: 'center' },
//         ],
//         [
//             ['1', '221005.001', 'M ZAKI ABDULLAH', 'APS', 'PEMERIKSA1', 'DARAH LENGKAP, URIN LENGKAP', '241.000', '-', '241.000'],
//             ['1', '221005.001', 'M ZAKI ABDULLAH', 'APS', 'PEMERIKSA1', 'DARAH LENGKAP, URIN LENGKAP', '241.000', '-', '241.000'],
//             ['1', '221005.001', 'M ZAKI ABDULLAH', 'APS', 'PEMERIKSA1', 'DARAH LENGKAP, URIN LENGKAP', '241.000', '-', '241.000'],
//         ]
//     )
//     .line('-'.repeat(130))

// // add newLine to push the paper out
// for (let i = 0; i < 35; i++) {
//     encoder.newline()
// }

// encoder.raw(['0C'])
//     .raw(['0D'])
//     .cut('full')

// const resultOmzet = encoder.encode();

// // eslint-disable-next-line
// let resultCutAutoAdjustPaper = [
//     '\x1B' + '\x69' + '\x61' + '\x00' + '\x1B' + '\x40', // set printer to ESC/P mode and clear memory buffer
//     '\x1B' + '\x69' + '\x4C' + '\x01', // set landscape mode
//     '\x1B' + '\x55' + '\x02', '\x1B' + '\x33' + '\x0F', // set margin (02) and line feed (0F) values
//     '\x1B' + '\x6B' + '\x0B' + '\x1B' + '\x58' + '\x00' + '\x3A' + '\x00', // set font and font size 
//     'Printed by ', // "Printed by "
//     'QZ-Tray', // "QZ-Tray"
//     '\x0A' + '\x0A',// line feed 2 times
//     '\x1B' + '\x69' + '\x74' + '\x30', // set to code39 barcode
//     '\x72' + '\x31', // characters below barcode
//     '\x65' + '\x30' + '\x68' + '\x65' + '\x00' + '\x77' + '\x34' + '\x7A' + '\x32', // parentheses y/n, height, width of barcode, 2:1 ratio wide to narrow bars
//     '\x42' + '1234567890' + '\x5C', // begin barcode data, data, end barcode data
//     '\x0A' + '\x0A', // line feed 2x
//     '\x0C' // <--- Tells the printer to print 
// ]
// // eslint-disable-next-line
// const toHexString = (buffer) => {
//     return [...new Uint8Array(buffer)]
//         .map((x) => '\\x' + x.toString(16).padStart(2, '0'))
//         .join(' + ');

//     // let b = buffer.map((buffer) => '\\x' + buffer.toString(16).padStart(2, '0'))
//     // let a = Array.from(b)
//     // return a;
// }
// // const resultConvert = resultCutAutoAdjustPaper.map((x) => toHexString(x))
// // console.log(resultConvert);
// // const resultConvert = toHexString(result)
// // console.log(Array.from(result));
// // console.log(Array.from(resultConvert));
// export { resultOmzet };