// bai 7

let inputSoTienVay = prompt('nhap so tien vay');
let inputLaiSuat = prompt('nhap lai suat');
let inputSoNam = prompt('nhap so nam');



let soTienVay = parseInt(inputSoTienVay);
let laiSuat = parseInt(inputLaiSuat) * soTienVay;
let soNam = parseInt(inputSoNam);
let soTienPhaiTra = soTienVay * laiSuat * soNam;
document.write('so tien phai tra la' + soTienPhaiTra);
