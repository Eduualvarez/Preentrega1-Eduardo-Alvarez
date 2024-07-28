//Simulador de prestamos



let intereses = 1;
let resultado = 0;
let monto = 0;
let cuotas = 0;
let resultadoTotal = 0;
let edad = 0;

function validarEdad(){
 edad;
    do
    {
        edad = parseInt(prompt("Ingrese su edad: "))
        if (edad<18){
            alert("Usted es menor de edad, ingrese una edad mayor o igual a 18")
        }
    }
    while(edad<18);
    return edad
} 


function validarMonto(){
   monto;
    do
    {
        monto = parseInt(prompt("ingrese su monto: "))
        if (monto<=0){
            alert("Ingrese un monto mayor a 0")
        }
    }
    while(monto<=0);
    return monto
} 
function calculadora(){
    edad = validarEdad();
    monto = validarMonto()
    cuotas = parseFloat(prompt("nro de cuotas:6 12 18"))
   

    if (cuotas === 6){
        intereses = 1.20;
      
    }
    else if(cuotas === 12){   
        intereses = 1.30;
     
    }
    else if(cuotas === 18){
        intereses = 1.40;
     
    }else{   
       alert("introduzca un nro de cuotas valido")
       cuotas = parseFloat(prompt("nro de cuotas:6 12 18"))
    
       
        return; // para salir de la calculadora
    }
    
    resultado = monto * intereses;
    resultado = resultado / cuotas;
    resultadoTotal = resultado * cuotas;
 
    return console.log("La couta mensual seria: ", resultado, " por los siguientes: ", cuotas,
        " meses. siendo un total de: ", resultadoTotal, " pesos con un interes de: ", ((intereses-1)*100)," % sobre el monto inicial")
}


calculadora()
