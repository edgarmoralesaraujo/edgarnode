const express = require('express')
const app = express()

app.use(express.static(__dirname + "/public"));

//Express HBS Engine
app.set(`view engine`, `hbs`);

app.get('/', (req, res) => {
    /*let salida = {
        nombre: 'Edgar Morales Araujo',
        edad: '29 años',
        url: req.url
    };

    res.send(salida);*/
    res.render(`home`, {
        nombre: `Edgar`
    });
});

app.listen(3000, () => console.log(`Escuchando peticiones en el puerto 3000`));