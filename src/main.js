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
        let i = 0;
        do{
            if(numero % 2 === 0){
                return false;
            }else if(numero % 2 !== 0 ){
                return true;
            }
            i++;

        }while(i <= numero);
    }
       
    

}

let app = new App();
console.log(app.sumatoriaSerieUno(7));
console.log(app.sumatoriaSerieDos(4));
console.log(app.obtenerMultiplos(10, 25));
console.log(app.esPrimo(17));