# GESTIONE DEI MODELLI #

Gli utenti, una volta registrati e loggati, devono poter caricare degli album fotografici legati ai propri viaggi. I viaggi devono poter avere un nome e una descrizione editabili. Per ogni viaggio è possibile caricare uno o più album fotografici. Per album fotografico si intende una moltitudine di foto. 

L'utente ha uno username e una password. 

Pensa a come struttureresti il database di questa applicazione e carica un'immagine con lo schema del DB che possa supportare questo progetto. Se vuoi puoi caricare anche i file del modello se preferisci utilizzare direttamente un ORM. 


___________________________________________________________________________________________________

- USER -> id_primary / nome / cognome / email / pasword / remember_token /created at / update at
- ALBUM -> id_primary / created at / update at / DESCRIPTION / IMG_PATH
- FOTO -> id_primary / created at / update at / DESCRIPTION / IMG_PATH

(relazion):
-USER * <-> 1 ALBUM
-ALBUM * <-> * FOTO
-TABELLA_PONTE_ALBUM_FOTO



