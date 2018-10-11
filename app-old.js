const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' })
        let salida = {
            nombre: 'Edgar Morales Araujo',
            edad: '29 años',
            url: req.url
        };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(3000);

console.log('Escuchando por el puerto 8080');