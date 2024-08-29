console.log('hello world')
console.log('Hallo bosquhhh')

function cetakNama(nama) {
    return `Hallo nama saya ${nama}`
}

const PI = 3.14;

const mahasiswa = {
    nama : 'jasson nurmgomedove',
    kelas : 'FUllstack developer',
    cetakMhs() {
        return `Hallo, nama saya ${this.nama} dan saya adalah ${this.kelas}.`
    }
}

class Orang {
    constructor() {
        console.log(`Objek orang sudah dibuat`)
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.MHS = mahasiswa;
// module.exports.Orang = Orang;

module.exports = { cetakNama, PI, mahasiswa, Orang}