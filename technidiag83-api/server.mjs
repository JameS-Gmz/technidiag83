import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-devis', (req, res) => {
  const { genre, name, email, phone, bien, address, transaction, diagnostics } = req.body;

  const diagnosticsList = Array.isArray(diagnostics) ? diagnostics.join(', ') : diagnostics || 'Aucun diagnostic sélectionné';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mickidu83@gmail.com',
      pass: 'awul lbjb botg ojyx' // Utilisez le mot de passe d'application ici
    }
  });

  const mailOptions = {
    from: 'mickidu83@gmail.com', // Adresse e-mail de votre compte Gmail authentifié
    replyTo: email, // Adresse e-mail de l'utilisateur
    to: 'mickidu83@gmail.com',
    subject: `Demande de devis de ${genre} ${name}`,
    html: `
      <p>Madame, Monsieur,</p>
      <p>Je vous contacte afin d’obtenir un devis pour la réalisation de diagnostics immobiliers pour un bien situé au <strong>${address}</strong>. Le bien est de type <strong>${bien}</strong>, et je souhaite faire une <strong>${transaction}</strong>.</p>
      <p>Je vous serais reconnaissant de bien vouloir me faire parvenir un devis détaillant les coûts des diagnostics nécessaires, notamment <strong>${diagnosticsList}</strong>.</p>
      <p>Pour plus d’informations, voici mes coordonnées :</p>
      <p><strong>Nom :</strong> ${genre} ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone}</p>
      <p>Je vous remercie par avance pour votre réactivité et vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.</p>
      <p>${name}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, '46.202.173.219', () => {
  console.log(`Node Express server listening on http://46.202.173.219:${port}`);
});