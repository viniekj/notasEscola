let notaA = document.getElementById('notaA');
let notaB = document.getElementById('notaB');
let notaC = document.getElementById('notaC');




function esconderInputTextA(){
notaA.value = '';
}
function esconderInputTextB(){
    notaB.value= '';
    }
    function esconderInputTextC(){
        notaC.value = '';
        }




//Função de calculo

function calcular(){
    let a = Number(notaA.value);
    let b = Number(notaB.value);
    let c = Number(notaC.value);


    resultado = (a + b + c) / 3;
 if(resultado>=8 && resultado <= 10){
   alert ("Você tirou nota A, parabéns !")
 }
 else if( resultado >= 6  && resultado<8){
     alert("Você tirou nota B, Ok!")
 }
 else if(resultado < 6 ) {
     alert("Você tirou nota C, Reprovado")
    }
     else alert("Coloque números de 1 a 10 !")


}





