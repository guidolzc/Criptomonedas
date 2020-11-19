class API {
    constructor(apikey){
    this.apikey = apikey;

    }

    //obtener todas las api

    async obtenerMonedasApi(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`; // ingresa a pagina con una key


        // fetch a la api
        const urlObtenerMonedas = await fetch(url); //espera la pagina 

        // respuesta en json
        const monedas = await urlObtenerMonedas.json(); //busca el json  y espera q carge todo 

       
        
        return{
            monedas
        }
    }
    
    // OBTIENE todos valores de todas la MONEDAS

    async obtenerValores(moneda, criptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;
        // consultar rest api

        const urlConvertir = await fetch(url); // lo pasa a url  y espera el fetch

        const resultado = await urlConvertir.json(); // lo transforma en JSON  y esperar q devuelva 

        return{
            resultado
        }
    }

}