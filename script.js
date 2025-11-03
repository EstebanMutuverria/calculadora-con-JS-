    let suma = 0;
    let promedio = 0;
    let operacion = prompt("Ingrese la operación a realizar (sumar'+', restar'-', multiplicar'*', dividir'/', promediar, iva):");
    while (operacion !== '+' && operacion !=='sumar' && operacion !== '-' && operacion !== 'restar' && operacion !== '*' && operacion !== 'multiplicar' && operacion !== '/' && operacion !=='dividir' && operacion !== 'iva' && operacion !== 'promediar') {
        operacion = prompt("Operación inválida. Ingrese una operación válida (sumar'+', restar'-', multiplicar'*', dividir'/', promediar, iva):");
    }
    if(operacion !== 'iva' && operacion !== 'promediar'){
        let numero1 = prompt("ingrese el primer numero: ");
        while(isNaN(numero1) || !numero1){
            numero1 = prompt("Entrada invalida. Ingrese un numero valido para el primer número:");
        }
        let numero2 = prompt("ingrese el segundo numero: ");
        while(isNaN(numero2) || !numero2){
            numero2 = prompt("Entrada inválida. Ingrese un número válido para el segundo número:");
        }
        let resultado = 0;
        if (operacion === '+' || operacion === 'sumar') {
            resultado = Number(numero1) + Number(numero2);
            alert(numero1 + " + " + numero2 + " = " + resultado);
        } else if (operacion === '-') {
            resultado = Number(numero1) - Number(numero2);
            alert(numero1 + " - " + numero2 + " = " + resultado);
        } else if (operacion === '*') {
            resultado = Number(numero1) * Number(numero2);
            alert(numero1 + " * " + numero2 + " = " + resultado);
        } else if (operacion === '/') {
            if (Number(numero2) === 0 || Number(numero1) === 0) {
                alert("Error: No se puede dividir por cero.");
            } else {
                resultado = Number(numero1) / Number(numero2);
                alert(numero1 + " / " + numero2 + " = " + resultado);
            }
        }
    }else if(operacion === 'promediar'){
        let cantidadDeNumeros = prompt("Ingrese la cantidad de numeros que desea promediar: ");
        if(isNaN(cantidadDeNumeros) || !cantidadDeNumeros || cantidadDeNumeros <= 0){
            cantidadDeNumeros = prompt("Ingrese una cantidad valida de numeros a promediar: ");
        }
        else{
            
            for(let i = 0; i<cantidadDeNumeros; i++){
                let numero = prompt("Ingrese el numero " + (i+1) + ": ");
                while(!numero || isNaN(numero)){
                    numero = prompt("valor incorrecto. Ingrese nuevamente el numero " + (i+1) + ": ");
                }
                suma += Number(numero);
            }
        }
        promedio = suma / cantidadDeNumeros;
        alert("El promedio de los numeros ingresados es: " + promedio);
    }else if(operacion === 'iva'){
        let numero = prompt("Ingrese un numero: ");
        while(isNaN(numero) || !numero){
            numero = prompt("Ingrese un numero valido: ");
        }
        let iva = numero*0.21;
        alert("El valor de IVA de ese numero es igual a: " + iva);
    }
