// Membuat Segitiga Sama Sisi

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
