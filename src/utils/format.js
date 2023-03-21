 function numberToWords(number) {
    let ones = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
    let result = '';

    // if (isNaN(number) || !number) {
    //   return 'Input is not a number.';
    // }
    
    if (number < 12) {
      result = ones[number];
    } else if (number < 20) {
      result = numberToWords(number - 10) + ' belas';
    } else if (number < 100) {
      result = numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);
    } else if (number < 200) {
      result = 'seratus ' + numberToWords(number - 100);
    } else if (number < 1000) {
      result = numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100);
    } else if (number < 2000) {
      result = 'seribu ' + numberToWords(number - 1000);
    } else if (number < 1000000) {
      result = numberToWords(Math.floor(number / 1000)) + ' ribu rupiah' + numberToWords(number % 1000);
    } else if (number < 1000000000) {
      result = numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);
    } else {
      result = 'Number is too large to convert to words.';
    }
    
    return result;
  }

export default numberToWords