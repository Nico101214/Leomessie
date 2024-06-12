const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Utiliser body-parser pour parser les requêtes JSON
app.use(bodyParser.json());

// Servir les fichiers statiques du répertoire "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route POST pour recevoir les données du formulaire
app.post('/api/endpoint', (req, res) => {
    const { nom, postNom, preNom, sexe, etatCivil, email } = req.body;

    // Afficher les données reçues dans la console
    console.log('Données reçues :', req.body);

    // Envoyer une réponse au client
    res.status(200).json({ message: 'Données reçues avec succès', data: req.body });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log('Serveur démarré sur le port ${PORT}');
});