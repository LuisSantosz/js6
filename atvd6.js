/*let emprestimo = parseInt(prompt("Insira o valor do emprestimo: "))
let parcelas = parseInt(prompt("Informe a quantidade de parcelas: "))


{
   let resultado = emprestimo / parcelas;
   console.log("Emprestimo: R$" + emprestimo + " " + "Parcelas: " + parcelas + " " +  "Valor a pagar R$" + resultado)
}
*/

//ATIVIDADE AULA 6, MOSTRA A TABUADA DO VALOR INFORMADO E SO PARA APOS DIGITAR "sair"
let valor = parseInt(prompt ("Inserir um valor: "))


while(valor != "sair"){


    for(let i = 1; i<=10; i++){
        let resultado = valor *i
        console.log(valor + "X" + i + "=" + resultado)
    }

valor = prompt("Inserir um valor")
}
