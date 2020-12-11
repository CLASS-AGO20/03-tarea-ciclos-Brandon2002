export default class App {

    sumatoriaSerieUno(numero) {

        let suma = 1;
        for(let i = 2; i <= numero; i++){
            suma = suma + 1/ i;
        }
        return suma;
    }
    sumatoriaSerieDos(numero){

        let i = 2;
        let suma = 1;
        while(i <= numero){
            if(i % 2 === 0){ 
                suma = suma + 1 / i;
            }else{
                suma = suma - 1 / i;
            }
            i++;
        }
        return suma;
    }
    obtenerMultiplos(inicio, fin){
        let i = inicio;
        let numerosMultiplos = '';
        do{
            if(i % 3 === 0){
                numerosMultiplos = numerosMultiplos + i;
            }
            i++;
            
        } while(i <= fin);
        return numerosMultiplos;
        
        
    }
    esPrimo(numero){
        let i = 1;
        let suma = 0;
        do{
            if(numero % i === 0){
                suma++;
                i++;
            }else{
                i++;
            }

        }while(i <= numero);
        if(suma === 2){
            return true;
        }else{
            return false;
        }
    }
    obtenerImpares(numero1, numero2){
       if(numero1 > numero2){
           let nuevoNumero1 = numero1;
           numero1 = numero2;
           numero2 = nuevoNumero1;
       }else{

       }
       let i = numero1;
       let impares = '';
        do{
            if(i % 2 !== 0){
                impares = String(i) + "," + impares;
                
            }else{

            }
            i++;
        }while(i <= numero2);
        return impares;
    }
    

       
    

}

let app = new App();
console.log(app.sumatoriaSerieUno(7));
console.log(app.sumatoriaSerieDos(4));
console.log(app.obtenerMultiplos(10, 25));
console.log(app.esPrimo(2));
console.log(app.obtenerImpares(5, 20));