problema: Rifare l'esercizio della to do list visto a lezione. Create un array di oggetti ( con proprietà text e done )che rappresentano le task e mostratele a schermo. Aggiungete poi le funzionalità di cambio dello stato del task (cambiate il valore di done), eliminazione di una task ed aggiunta di una nuova task.


1- realizzo la parte grafica della pagina
2 - realizzo la parte di logica della pagia
VISUALIZZARE GLI ELEMENTI DELL'ARRAY NEL DOM
 2.1- Collego Vuejs e controllo funzioni correttamente
 2.2- dentro appdata creo un array di oggetti che rappresenta la mia to do list
    2.2.1- ogni oggetto deve avere 2 elementi --> testo e done
2.3- nell'html all'interno del primo li dell'ul realizzo un ciclo v-for dove richiamo gli elementi dell'array
2.4- controllo che gli elementi vengano stampati correttamente nel dom
2.5- richiamo da js l'elemento done e a seconda del suo valore gli associo una classe diversa così da differenziale le task visivamente (ricordarsi di usare un operatore ternario)
MODIFICARE LO STATO DELLA TASK
2.6- Associo al pulsante presente nel li un evento al click che faccia cambiare lo stato di done così da cambiare lo stato di una task.
2.7- Al click associo anche il cambiamento dell'icona visualizzata.

ELIMINAZIONE DI UNA TASK

Aggiunta di una task
