// If Else
console.log('Program If Else')
let speed = 150

if (speed > 80) {
    console.log("Hati-hati, kurangi kecepatan!")
} else {
    console.log("Kecepatan normal")
}
console.log('\n')


// Nested If
console.log('Program Nested If')
let suhuProsesor = 120

if (suhuProsesor < 70) {
    console.log('Suhu prosesor normal dan bekerja secara optimal')
} else if (suhuProsesor < 90) {
    console.log('Suhu prosesor panas, sebaiknya bersihkan debu atau kotoran')
} else {
    console.log('Suhu prosesor sangat panas dan berbahaya, sebaiknya bongkar PC/laptop anda, bersihkan debu atau kotoran dan beri thermal pasta ulang')
}
console.log('\n')


// Switch Case
console.log('Program Switch Case')
let cuaca = 'Hujan';
switch (cuaca) {
    case 'Cerah':
        console.log('Hari ini cuacanya cerah, saya akan pergi riding dengan teman-teman saya');
        break;
    case 'Mendung':
        console.log('Hari ini cuacanya mendung, saya akan tidur saja dan tidak pergi kemana-mana');
        break;
    case 'Hujan':
        console.log('Hari ini cuacanya hujan, saya akan masak ind*mie rebus + telor mantaaap jos');
        break;
    default:
        console.log('Cuaca tidak dikenali');
}
console.log('\n')


// For Statement
// Membuat Segitiga Sama Sisi
console.log('Program For Statement')
let tinggiSegitiga = 6;

for (let i = 1; i <= tinggiSegitiga; i++) {
    let spasi = '';
    let bintang = '';

    // Tambahkan spasi sebelum bintang
    for (let j = 1; j <= tinggiSegitiga - i; j++) {
        spasi += ' ';
    }

    // Tambahkan bintang
    for (let k = 1; k <= i * 2 - 1; k++) {
        bintang += '*';
    }

    console.log(spasi + bintang);
}
console.log('\n')


// While
console.log('Program While')
let penghasilan = 25_000_000;
let hargaPorscheGT3RS = 8_000_000_000;
let jumlahTahun = 0;

while (penghasilan * 12 * jumlahTahun < hargaPorscheGT3RS) {
    jumlahTahun++;
}

console.log(`Diperlukan ${jumlahTahun} tahun untuk membeli Porsche GT3 RS dengan penghasilan 25 juta per bulan.`);
console.log('\n')


//  Do While
// Mencetak Bilangan Ganjil 1-31
console.log('Program Do While')
console.log('Bilangan Ganjil 1-31')
let angkaBilanganGanjil = 1
do {
    console.log(angkaBilanganGanjil)
    angkaBilanganGanjil += 2
} while (angkaBilanganGanjil <= 31)
console.log('\n')

// Mencetak Bilangan Genap 2-30
console.log('Bilangan Genap 2-30')
let angkaBilanganGenap = 2
do {
    console.log(angkaBilanganGenap)
    angkaBilanganGenap += 2
} while (angkaBilanganGenap <= 30)
console.log('\n')


// Function
console.log('Program Function')
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

