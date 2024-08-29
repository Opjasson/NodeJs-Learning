// Core module
// File system

const fs = require('fs');
const { stdout } = require('process');

// Menuliskan string ke file secara asynchrouns
// try {
//     fs.writeFileSync('data/test.txt', 'Hello jasson sang programer fullstack terkenal')

// } catch(e) {
//     console.log(e)
// }

// Menuliskan string ke file secara asynchronous
// fs.writeFile('data/test.txt','Hello world testing menggunakan asynchrous', (err) => {
//     console.log(err);
// })

// Membaca file string (syncrhonous)
// const data = fs.readFileSync('data/test.txt', 'utf-8')
// console.log(data)

// Membaca isi file (asynchroous)
// const data = fs.readFile('data/test.txt','utf-8' ,(err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// Read line core module
const readLine = require('readline');

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('Masukan nama anda : ', (nama) => {
    rl.question('Masukan nomor Hp : ', (noHp) => {
        const contact = { nama, noHp }
        const file= fs.readFileSync('data/contact.json', 'utf-8');
        const contacts = JSON.parse(file)

        contacts.push(contact);
        fs.writeFileSync('data/contact.json',JSON.stringify(contacts))
        console.log(contacts)
        rl.close()
    })
})
