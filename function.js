function hitungTahunMembeliDucati(penghasilanPerBulan, hargaDucatiV4R) {
    let jumlahTahun = 0;

    while (penghasilanPerBulan * 12 * jumlahTahun < hargaDucatiV4R) {
        jumlahTahun++;
    }

    return jumlahTahun;
}

const penghasilanPerBulan = 25000000;
const hargaDucatiV4R = 1200000000;
const tahunYangDibutuhkan = hitungTahunMembeliDucati(penghasilanPerBulan, hargaDucatiV4R);

console.log(`Diperlukan ${tahunYangDibutuhkan} tahun untuk membeli Ducati V4R dengan penghasilan 25 juta per bulan.`);
