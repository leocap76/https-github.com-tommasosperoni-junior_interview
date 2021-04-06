# AUTENTICAZIONE #

client deve avere queste pagine:
- /login
- /admin 


alla pagina admin si accedere solo se loggati. Nella pagina admin è presente solo un tasto per poter fare il logout e tornare quindi alla pagina di login. Gestisci il processo di autenticazione in autonomia tramite un form di login che chieda unicamente username e password. 

Provando con co. non php

1) memorizzare nella sessione tutte le informazioni che ci servono, per evitare di dover consultare il database ogni volta:
$_SESSION[“id”] = $user_id ;          
$_SESSION[“name”] = $user_name ;
$_SESSION[“settings”] = $user_settings ;
(user_id e user_name sono valorizzate da una query SQL eseguita durante l’autenticazione.)
___________________________________________________________________________________________
2)CONTROLLER DELL'AUTENTICAZIONE
if (isset($_POST['submit']) && $_POST['submit']=='Entra') checkUser() ;

(ISSET = Determina se una variabile è dichiarata ed è diversa da null)
___________________________________________________________________________________________
3)solamente quando la richiesta arriva effettivamente dalla pagina di login, dove dovrebbe trovarsi un input HTML di nome “Entra”l’azione passa al metodo checkUser, che si occupa dell’autenticazione. Prima di procedere con il confronto tra i dati di autenticazione e quelli presenti nel database, aggiustare i parametri di ingresso:

if (isset($_POST['login'])) $login = mysql_real_escape_string($_POST['login']	) ;
if (isset($_POST['password'])) $password = mysql_real_escape_string($_POST['password']) ;
$_POST['rememberMe'] = (int) $_POST['rememberMe'] ;

___________________________________________________________________________________________
4)verificare che i dati dell’utente siano corretti, confrontandoli con quelli nel database:
$user = getUserData($login) ;
if ( ($user['password'] == md5($password) ) && ($user['id'] > 0)) {
setSessionVars($user['id']) ;
} else {
  // Gestisci errore di login
___________________________________________________________________________________________
 
 impostare un cookie temporaneo al momento dell’autenticazione, con il valore della checkbox associata alla casellina “Ricordami al prossimo accesso”. Ciò permette di riconoscere un utente che abbia spuntato la casellina al collegamento precedente, ad esempio

if (isset($_SESSION['customerID']) && $_SESSION['customerID'] && !isset($_COOKIE['tempRemember']) && !$_SESSION['rememberMe']) {
$_SESSION = array();
session_destroy();
}
in questo caso, se il server trova già l’ID dell’utente memorizzato nella variabile di sessione customerID, ma non trova né il cookie “temporaneo”, né l’opzione “ricordami” nella variabile di sessione rememberMe, si provvede con l’azzeramento della sessione, forzando così l’utente ad effettuare una nuova autenticazione.







