# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


Questo progetto è un'applicazione React che consente agli utenti di esplorare ricette, contattare il supporto, e registrarsi per un account. Utilizza React Router per la navigazione e un contesto di autenticazione per gestire l'accesso degli utenti.

## Tecnologie utilizzate

- React
- React Router
- CSS
- JavaScript

## Struttura del progetto

- `componenti/`: Contiene tutti i componenti React utilizzati nell'applicazione.
  - `Home.js`: Componente per la pagina principale.
  - `Contact.js`: Componente per la pagina di contatto.
  - `Support.js`: Componente per la pagina di supporto.
  - `LayoutMenu.js`: Componente per il layout generale dell'app.
  - `Recipes.js`: Componente per visualizzare l'elenco delle ricette.
  - `RecipeDetail.js`: Componente per visualizzare i dettagli di una ricetta specifica.
  - `ErrorPage.js`: Componente per gestire errori di routing.
  - `Login.js`: Componente per la pagina di accesso.
  - `Iscrizione.js`: Componente per la pagina di registrazione.
  - `Page1.js`: Componente per una pagina protetta accessibile solo dopo il login.
  - `Auth.js`: Componente per gestire l'autenticazione.
  
- `loader.js`: Contiene le funzioni per caricare le ricette e i dettagli delle ricette.
- `recipeAction.js`: Contiene le azioni per gestire le ricette sul server.
- `AuthContext.js`: Contiene il contesto di autenticazione per gestire lo stato di accesso ell'utente.

## Componenti

-------------------------------------

### Home
Il componente `Home` rappresenta la pagina principale dell'applicazione. Mostra una presentazione delle ricette suddivise per categoria e fornisce informazioni sull'Academy.

#### Funzionalità
- Mostra un'introduzione con un titolo e una descrizione dell'Academy.
- Presenta le ricette suddivise in categorie (Antipasti, Primi Piatti, Dolci) e fornisce link per vedere tutte le ricette.
- Utilizza il componente `Card` per visualizzare le informazioni relative a ciascuna ricetta.

#### Dati
- Utilizza `useLoaderData` per recuperare le ricette da un caricamento precedente.

#### Navigazione
- Utilizza `Link` di React Router per navigare tra le varie categorie di ricette e per accedere ai dettagli di ogni ricetta.


---------------------------------------

### LayoutMenu
Il componente `LayoutMenu` funge da layout principale dell'applicazione, gestendo la navigazione e la visualizzazione del contenuto. Include un header con un menu di navigazione, una sezione per il contenuto principale e un footer.

#### Funzionalità
- Mostra il titolo dell'applicazione "MasterChef" e fornisce link di navigazione a diverse sezioni dell'app, come Home, Ricette, Contatti e About us.
- Include un'area personale accessibile solo agli utenti autenticati.
- Gestisce lo stato di autenticazione dell'utente, mostrando i pulsanti di Login e Iscriviti quando l'utente non è autenticato, e un pulsante Logout quando è autenticato.

#### Dati
- Utilizza `useContext` per accedere al contesto di autenticazione e determinare lo stato di autenticazione dell'utente.

#### Navigazione
- Utilizza `NavLink` di React Router per gestire la navigazione tra le varie pagine.
- Gli stili di navigazione cambiano in base all'attivazione della rotta (utilizzando la classe `link-active`).


-----------------------------------------

### Recipes
Il componente `Recipes` è responsabile della visualizzazione delle ricette. Utilizza i seguenti hook e funzionalità:

- **useLoaderData**: Carica i dati delle ricette.
- **useSearchParams**: Gestisce i parametri di ricerca per filtrare le ricette per tipo.
- **useDeferredValue**: Implementa un input di ricerca con valore ritardato per migliorare le prestazioni.

#### Funzionalità
- Visualizzazione di un elenco di ricette con filtri per tipo (Antipasto, Primo, Secondo, Dolce).
- Ricerca delle ricette tramite una barra di ricerca.
- Navigazione tra le pagine delle ricette con pulsanti per sfogliare le ricette.

#### Props
- **name**: Nome della ricetta.
- **imgUrl**: URL dell'immagine della ricetta.


--------------------------------------------


### RecipeDetail
Il componente `RecipeDetail` è responsabile della visualizzazione dei dettagli di una singola ricetta. Utilizza i seguenti hook e funzionalità:

- **useParams**: Ottiene i parametri dall'URL per identificare quale ricetta visualizzare.
- **useLoaderData**: Carica i dati relativi a tutte le ricette e a quella singola ricetta.
- **useEffect**: Imposta lo stato della ricetta solo quando i dati della ricetta singola sono disponibili per evitare rendering inutili.

#### Funzionalità
- Visualizzazione del nome, degli ingredienti, delle note, dei tempi di preparazione e cottura, delle istruzioni e dell'immagine della ricetta.
- Mostra un elenco di ricette simili basate sul tipo della ricetta corrente.
- Fornisce un link per ciascuna ricetta simile, permettendo la navigazione fluida.

#### Props
- **singleRecipe**: Oggetto contenente i dettagli della ricetta selezionata.
- **allRecipes**: Array di tutte le ricette disponibili.

------------------------------------------

### ErrorPage
Il componente `ErrorPage` è una pagina di errore personalizzata che viene visualizzata quando l'utente cerca di accedere a una rotta non valida (404). Questo componente fornisce un messaggio chiaro all'utente e un collegamento per tornare alla home.

#### Funzionalità
- Mostra un messaggio di errore con il codice di stato 404 e una descrizione che informa l'utente che la pagina non è stata trovata.
- Include un collegamento per tornare alla home dell'applicazione, facilitando la navigazione per l'utente.

#### Struttura della Pagina
- **Messaggio di Errore**: Presenta il codice di errore e una descrizione testuale.
- **Immagine**: Un'immagine illustrativa che accompagna il messaggio di errore.

-----------------------------------------

### Login
Il componente `Login` gestisce l'autenticazione degli utenti. Consente agli utenti di accedere al sistema utilizzando le proprie credenziali.

#### Stato
- **formData**: Un oggetto contenente l'email e la password inserite dall'utente.

#### Funzioni
- **handleChange**: Funzione che aggiorna lo stato di `formData` in base ai valori dei campi di input.
- **handleSubmit**: Funzione che gestisce l'invio del modulo. Invia una richiesta POST all'API per autenticare l'utente. Se il login ha successo, reindirizza l'utente alla home e chiama la funzione `login` dal contesto.

#### Props
Nessuna.

#### Componenti utilizzati
- **FontAwesomeIcon**: Usato per visualizzare l'icona del pulsante "Indietro".

#### Navigazione
- Utilizza `useNavigate` di React Router per gestire la navigazione tra le pagine.

-----------------------------------------

### Iscrizione
Il componente `Iscrizione` permette agli utenti di registrarsi nel sistema. Dopo la registrazione, l'utente viene automaticamente autenticato e reindirizzato alla home dell'applicazione.

#### Funzionalità
- **Form di Registrazione**: Consente agli utenti di inserire email e password per la registrazione.
- **Gestione degli Errori**: Informa l'utente in caso di errori durante la registrazione.
- **Navigazione**: Permette di tornare alla pagina precedente tramite un pulsante.

#### Stato
Utilizza lo stato locale per gestire i dati del modulo di registrazione.

#### Funzioni Principali
- `handleChange`: Aggiorna lo stato del modulo quando l'utente digita nel campo email o password.
- `handleSubmit`: Invia i dati di registrazione a un'API e gestisce la risposta. Se la registrazione è riuscita, l'utente viene autenticato e reindirizzato.

-----------------------------------------

### PersonalArea
Il componente `PersonalArea` consente agli utenti di creare e caricare le proprie ricette. Include un modulo che raccoglie informazioni dettagliate sulla ricetta, come ingredienti, istruzioni, tempi di preparazione e cottura.

#### Funzionalità
- **Modulo di Creazione Ricetta**: Gli utenti possono inserire dettagli sulla ricetta, tra cui titolo, tipo, ingredienti e istruzioni.
- **Gestione delle Immagini**: Permette di caricare un'immagine della ricetta.
- **Validazione dei Dati**: Controlla che tutti i campi obbligatori siano compilati e che i formati siano corretti.
- **Visualizzazione dei Dati**: Mostra informazioni relative alla ricetta, insieme a un messaggio di benvenuto.

#### Stato
Utilizza lo stato locale per gestire i dati della ricetta.

#### Funzioni Principali
- `handleChange`: Aggiorna lo stato della ricetta quando l'utente digita nei campi del modulo.
- `handleImageChange`: Aggiorna lo stato per gestire il file dell'immagine selezionata.
- `handleSubmit`: Gestisce l'invio del modulo, valida i dati e prepara la ricetta per essere inviata al backend.


------------------------------------------

**###Auth**
-Il componente `Auth` è responsabile della gestione dell'autenticazione per le rotte protette. Utilizza i seguenti hook e funzionalità:

- **useContext**: Ottiene il contesto di autenticazione per verificare lo stato di autenticazione dell'utente.

#### Funzionalità
- Se l'utente non è autenticato (`auth === 'not-auth'`), il componente reindirizza l'utente alla pagina di login utilizzando `Navigate`.
- Se l'utente è autenticato, il componente rende l'`Outlet`, permettendo l'accesso alle rotte protette.

#### Props
- **auth**: Stato di autenticazione dell'utente, che può essere `'not-auth'` o altro valore che indica un'utente autenticato.


------------------------------------------

#### AuthContext
`AuthContext` è un contesto React creato per gestire lo stato di autenticazione degli utenti nell'applicazione. Fornisce un modo semplice per accedere e modificare lo stato di autenticazione da qualsiasi componente discendente.

##### Funzionalità
- **Stato di Autenticazione**: Tiene traccia se l'utente è autenticato o meno tramite il valore `auth`, che può essere `'auth'` o `'not-auth'`.
- **Funzioni di Login e Logout**:
  - `login()`: Modifica lo stato di autenticazione in `'auth'`.
  - `logout()`: Modifica lo stato di autenticazione in `'not-auth'`.




---------------------------------------------

### Funzioni per la Gestione delle Ricette

#### getRecipes
Questa funzione è responsabile del recupero di tutte le ricette disponibili dal server. Effettua una richiesta GET all'endpoint `/api/data`.

##### Funzionalità
- **Fetch delle Ricette**: Invia una richiesta al server per ottenere i dati delle ricette.
- **Gestione degli Errori**: Se la richiesta non ha successo, lancia un'eccezione con il messaggio di errore, lo stato e il testo dello stato.


-----------------------------------------------



#### recipeAction
`recipeAction` è una funzione asincrona che gestisce l'azione di creazione di una nuova ricetta. Questa funzione si occupa di raccogliere i dati del modulo, preparare i dati per l'invio e interagire con l'API per salvare la nuova ricetta nel database.

##### Funzionalità
- **Raccolta Dati**: Utilizza l'oggetto `FormData` per raccogliere i dati del modulo, inclusi i file di immagine.
- **Invio Dati**: Invia i dati al server utilizzando una richiesta `POST` a un endpoint API.
- **Gestione degli Errori**: Gestisce eventuali errori durante la richiesta e fornisce un feedback appropriato.

##### Esempio di Utilizzo
Puoi utilizzare `recipeAction` all'interno della tua applicazione come parte della gestione delle azioni di creazione di ricette. La funzione si aspetta che venga passata un oggetto `request` che contenga i dati del modulo.


**##server.js**

- **Node.js**: Ambiente di esecuzione JavaScript.
- **Express**: Framework per applicazioni web.
- **Multer**: Middleware per la gestione del caricamento di file.
- **CORS**: Middleware per la gestione delle richieste cross-origin.
- **Bcrypt**: Libreria per la cifratura delle password.
- **fs/promises**: Modulo per la gestione dei file con Promises.



--------------------------------------------------

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Per avviare il programma: 
-cd .\Riceps\
-cd .\server\
-node server.js

-cd .\Riceps\
-npm run dev