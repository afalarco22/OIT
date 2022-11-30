
    //Variables
    var operandoa;
    var operandob;
    var operacion;
    var resul = document.querySelector('#result');
    var reset= document.querySelector('#reset');

    var reset = document.querySelector('#reset');
    var suma = document.querySelector('#plus');
    var resta = document.querySelector('#minus');
    var mult = document.querySelector('#mult');
    var divi = document.querySelector('#divi');
    var igual = document.querySelector('#equal');
    var uno = document.querySelector('#one');
    var dos = document.querySelector('#two');
    var tres = document.querySelector('#three');
    var cuatro = document.querySelector('#four');
    var cinco = document.querySelector('#five');
    var seis = document.querySelector('#six');
    var siete = document.querySelector('#seven');
    var ocho = document.querySelector('#eight');
    var nueve = document.querySelector('#nine');
    var cero = document.querySelector('#zero');


// asignación numeros
uno.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "1";

});

dos.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "2";

});

tres.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "3";

});

cuatro.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "4";

});

cinco.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "5";

});

seis.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "6";

});

siete.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "7";

});

ocho.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "8";

});

nueve.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "9";

});

cero.addEventListener('click', (e) =>{
    resul.textContent = resul.textContent + "0";

});

suma.addEventListener('click', (e)=>{
    operandoa = resul.textContent;
    operacion = "+";
    limpiar();
});

resta.addEventListener('click', (e)=>{
    operandoa = resul.textContent;
    operacion = "-";
    limpiar();
});

mult.addEventListener('click', (e)=>{
    operandoa = resul.textContent;
    operacion = "*";
    limpiar();
});

divi.addEventListener('click', (e)=>{
    operandoa = resul.textContent;
    operacion = "/";
    limpiar();
});


igual.addEventListener('click', (e)=>{
    operandob = resul.textContent;
    resultado();
   
    
});


reset.addEventListener('click', (e)=>{
    resetear();

});


function limpiar(){
    resul.textContent =""
}

function resetear(){
    resul.textContent =""
    operandoa = 0;
    operandob = 0;
    operacion = 0;


}

function resultado(){
    let total = 0;
    switch(operacion){
        case "+":
            total = parseFloat(operandoa)+parseFloat(operandob);
            break;

        case "-":
            total = parseFloat(operandoa)-parseFloat(operandob);
            break;

        case "*":
            total = parseFloat(operandoa)*parseFloat(operandob);
            break;
        
        case "/":
            total = parseFloat(operandoa)/parseFloat(operandob);
            break;

    }

    resetear();
    resul.textContent = total;
}