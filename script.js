// Inicio, condição e atualização

//exibir numeros de 0 a 9
for(let i = 1; i <10; i++){
    console.log(i)
}

//contar de 2 em 2 - i++
for(let i =1; i<=10; i=i+2){

    console.log(i)
}

//Tabuada
console.log("Tabuada")
 //solictar o valor ao usuario
 let numero = parseInt(prompt("Insira um numero: "))

 for(let i = 1; i<=10; i++){
    let resultado = numero *i
    console.log(numero + "X" + i + "=" + resultado)
 }

 let valor = parseInt(prompt("Inserir numero: "))
 function produtorio(valor){
    let resultado = 1;
    for (let i =1; i <= valor; i++){
resultado = resultado * i;
    }

    console.log("Produtorio de " + valor + "=" + resultado)
 }

 produtorio(valor)

//Atividade em sala
 let numeroMenor = parseInt(prompr("Inserir numero para retornar menor"))

 exibirNumeroMenor(numeroMenor)
 

 function exibirNumeroMenor(numero){

    if(numero < 1 || numero > 10){
        console.log("numero fora do intervalo de 1 a 10")
        return
    }
for(let i = 1; i < numero; i++){
    console.log(i)
}

 }

 