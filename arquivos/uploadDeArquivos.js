const fs = require('fs')

fs.createReadStream('../assets/salchicha.jpg')
    .pipe(fs.createWriteStream('../assets/salchicha3.jpg'))
    .on('finish', () => {
        console.log("Salchicha imagem escrita com sucesso")
    })