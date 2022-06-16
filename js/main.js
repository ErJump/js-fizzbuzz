//riprendo il container tramite id
let rowContainer = document.getElementById('row-container');
//dichiaro il bottone tramite id
const button = document.getElementById("start-button");
button.addEventListener('click', function(){
    //dichiaro la variabile basata sul valore dell'input
    let userInput = parseInt(document.getElementById('input-number').value); 
    //rimuovo la classe d-none per visualizzare il div container
    rowContainer.classList.remove('d-none');
    //scrivo un ciclo for che inizia dal valore dell'input utente e arriva a 100 numeri dopo, incrementando il valore di 1 per ciclo.
    for (let i = userInput ; i <= userInput + 100; i++){
        //creo un div e assegno le classi
        let newDiv = document.createElement('div');
        newDiv.classList.add('col-3' , 'text-center', 'p-2' , 'rounded-5', 'mb-2');
        //dico di aggiungere newDiv
        rowContainer.append(newDiv);
        //metto la condizione che se un numero è divisibile per 15 (primo numero divisibile sia per 3 che per 5) allora il div si riempie con "FizzBuzz" 
        if (i % 15 == 0){
            newDiv.innerHTML = "FizzBuzz";
            //faccio cambiare il colore aggiungendo classi
            newDiv.classList.add('bg-danger' , 'text-white');
        //se il numero è divisibile per 3 allora  il div si riempie con "Fizz" 
        } else if (i % 3 == 0) {
            newDiv.innerHTML = "Fizz";
            //faccio cambiare il colore aggiungendo classi
            newDiv.classList.add('bg-primary' , 'text-white');
        //se il numero è divisibile per 5 allora il div si riempie con "Buzz"
        } else if (i % 5 == 0) {
            newDiv.innerHTML = "Buzz";
            //faccio cambiare il colore aggiungendo classi
            newDiv.classList.add('bg-success' , 'text-white');
        //altrimenti il div si riempie con il numero
        } else {
            newDiv.innerHTML = i;
            newDiv.classList.add('bg-white'); 
        }
    };
});
