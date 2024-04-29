const express = require('express');
const app = express();
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.post('/api/data', (req, res) => {
    console.log(req.body); // affiche le corps de la requête dans la console
    res.status(200).send('Requête POST reçue !');
});

app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});

