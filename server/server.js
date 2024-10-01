import express from 'express';
import cors from 'cors';
import { readFile, writeFile } from 'fs/promises';
import bcrypt from 'bcrypt'; // Per la cifratura della password

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

let users = [];

// Funzione per caricare gli utenti dal file JSON
const loadUsers = async () => {
  try {
    const data = await readFile('./users.json', 'utf8');
    users = JSON.parse(data);

    // Aggiungi un utente di default se la lista è vuota
    if (users.length === 0) {
      console.log('Nessun utente trovato, aggiungo utente di default');
      await addDefaultUser();
    }
  } catch (error) {
    console.error('Errore nel caricamento degli utenti:', error);
    await addDefaultUser(); // Se il file non esiste, aggiungi l'utente di default
  }
};

// Funzione per aggiungere un utente di default
const addDefaultUser = async () => {
  const defaultEmail = "domenicoascolese0@gmail.com";
  const defaultPassword = await bcrypt.hash("napoli100", 10);

  const defaultUser = {
    email: defaultEmail,
    password: defaultPassword
  };

  users.push(defaultUser);
  await saveUsers();
  console.log('Utente di default aggiunto:', defaultEmail);
};

// Salva gli utenti nel file JSON
const saveUsers = async () => {
  try {
    await writeFile('./users.json', JSON.stringify(users, null, 2));
    console.log('Utenti salvati nel file JSON.');
  } catch (error) {
    console.error('Errore nel salvataggio degli utenti:', error);
  }
};

// Chiama la funzione per caricare gli utenti all'avvio del server
loadUsers();

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

// Endpoint per l'iscrizione
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  // Controlla se l'utente esiste già
  const userExists = users.find(u => u.email === email);

  if (userExists) {
    return res.status(400).json({ message: 'Utente già registrato' });
  }

  try {
    // Cifra la password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea il nuovo utente
    const newUser = { email, password: hashedPassword };

    // Aggiungi il nuovo utente all'array users
    users.push(newUser);

    // Salva gli utenti nel file JSON
    await saveUsers();

    res.status(201).json({ message: 'Registrazione riuscita', user: { email } });
  } catch (error) {
    console.error('Errore nella registrazione:', error);
    res.status(500).json({ message: 'Errore nel server' });
  }
});

// Endpoint per il login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  // Trova l'utente con l'email fornita
  const user = users.find(u => u.email === email);

  if (user) {
    // Confronta la password inserita con quella cifrata
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Login riuscito
      return res.status(200).json({ message: 'Login riuscito', user: { email: user.email } });
    }
  }

  // Credenziali errate
  res.status(401).json({ message: 'Credenziali non valide' });
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});