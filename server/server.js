import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises';

const app = express();
const port = 3002;

// Configura CORS per consentire richieste da http://localhost:5173
app.use(cors());

app.use(express.json());

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

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});