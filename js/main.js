//scrivo un ciclo for che inizia da 1 e arriva a 100, incrementando il valore di 1 per ciclo.
for (let i = 1 ; i <= 100; i++){
    //metto la condizione che se un numero è divisibile per 15 (primo numero divisibile sia per 3 che per 5) allora la console mostra "FizzBuzz" 
    if (i % 15 == 0){
        console.log("FizzBuzz");
    //se il numero è divisibile per 3 allora  la console mostra "Fizz" 
    } else if (i % 3 == 0) {
        console.log("Fizz");
    //se il numero è divisibile per 5 allora la console mostra "Buzz"
    } else if (i % 5 == 0) {
        console.log("Buzz");
    //altrimenti console mostra il numero
    } else {
        console.log(i);
    }
}