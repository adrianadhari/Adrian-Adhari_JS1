let penghasilanPerBulan = 25_000_000;
let hargaDucatiV4R = 3_000_000_000;
let jumlahTahun = 0;

while (penghasilanPerBulan * 12 * jumlahTahun < hargaDucatiV4R) {
    jumlahTahun++;
}

console.log(`Diperlukan ${jumlahTahun} tahun untuk membeli Ducati V4R dengan penghasilan 25 juta per bulan.`);
