import express from 'express';
import cors from 'cors';
import { readFile, writeFile } from 'fs/promises';

const app = express();
const port = 3002;

// Configura CORS per consentire richieste da http://localhost:5173
app.use(cors());

app.use(express.json());

const users = [
  {
    name: 'Domenico Ascolese',
    email: 'domenicoascolese0@gmail.com',
    password: 'napoli100',
  },
  {
    name: 'Giulia Bianchi',
    email: 'giulia.bianchi@example.com',
    password: 'mypassword',
  },
];

app.get('/api/data', async (req, res) => {
  try {
    const data = await readFile('./ricette.json', 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Errore nel leggere il file JSON:', error);
    res.status(500).json({ message: 'Errore nel server' });
  }
});

app.get('/api/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params; // Recupera l'ID dai parametri dell'URL
    const data = await readFile('./ricette.json', 'utf8');
    const recipes = JSON.parse(data);

    // Trova la ricetta che corrisponde all'ID
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Ricetta non trovata' });
    }
  } catch (error) {
    console.error('Errore nel leggere il file JSON:', error);
    res.status(500).json({ message: 'Errore nel server' });
  }
});

// Endpoint per il login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Trova l'utente con l'email fornita
  const user = users.find(u => u.email === email);

  if (user && user.password === password) {
    // Login riuscito
    res.status(200).json({ message: 'Login riuscito', user: { name: user.name, email: user.email } });
  } else {
    // Credenziali errate
    res.status(401).json({ message: 'Credenziali non valide' });
  }
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});