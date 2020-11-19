class Interfaz{ // MUESTRA POR CONSOLA
        
    constructor(){
        this.init();
    }
    init(){
        this.construiSelect();
    }
    

     construiSelect(){
        cotizador.obtenerMonedasApi()
        .then(monedas =>{
            console.log(monedas);
            // crear un selec de opciones 
            const select = document.querySelector('#criptomoneda');
            
            //iterar por los resultados de la api
            for(const [key, value] of Object.entries(monedas.monedas.Data)){
                // añadir el SYBOL Y EL NOMBRE COMO OPCIONES
                const opcion = document.createElement('option');
                opcion.value = value.Symbol;
                opcion.appendChild(document.createTextNode(value.CoinName))

                select.appendChild(opcion);
                //console.log(value);
                //console.log(key); // nos envia la llave del objeto que es el Key 
            }

           //console.log(Object.entries(monedas.monedas.Data)); // TOMA EL OBJETO Y LOS CONVIERTE EN UN ARREGLO 
        
        //console.log(monedas.monedas.Data); // obtiene los datos json
    })
    }

    
    mostrarMensaje ( mensaje,clases){

        const div = document.createElement('div');
        div.className = clases;

        div.appendChild(document.createTextNode(mensaje)); // crea el div consola

        //console.log(div);
        // seleccionar mensaje
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div); // ingresa el mensaje en HTML

        // mostrar contenido

        setTimeout(() =>{
            document.querySelector('.mensajes div').remove();
        },3000);
    }
  

    // IMPRIME EL RESULTADO DE LA COTIZACION

    mostrarResultado(resultado, moneda , crypto){ // trae LOS 3 RESULTADOS DE MOSTRARRESULTADOS
        //console.log(resultado[crypto][moneda]);
        
  // IMPRIME RESULTADO Y OCULTAR RESULTADOS  
    const resultadosAnterior = document.querySelector('#resultado > div')

        if(resultadosAnterior){
            resultadosAnterior.remove();
        }


        // construir el template
        const datosMoneda = resultado[crypto] [moneda];
        
        
        //console.log(datosMoneda);

          // RECORTAR DIGITOS DE PRECIOS
          let precio = datosMoneda.PRICE.toFixed(2),
          porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
          actualizado = new Date (datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR');

          
            let templateHTML = `<div class= "card bg-warning">
                                    <div class= "card-body text-light">
                                    <h2 class = "cacrd-title">Resultado:</h2>
                                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda 
                                    ${datosMoneda.TOSYMBOL}es de : $ ${precio}</p>
                                    <p>Variacion Ultimo dia:% ${porcentaje}</p>
                                    <p>Ultima Actualizacion ${actualizado}</p>
                                    </div>            
            </div>
            `;
        this.mostrarocultarSpinner('block');
        setTimeout(() => {

            document.querySelector('#resultado').innerHTML = templateHTML;
            this.mostrarocultarSpinner('none');
        },3000);


    }

  // MOSTRAR SPINER DE CARGA AL ENVIAR LA COTIZACION
  mostrarocultarSpinner(vista){
    const spinner = document.querySelector('.contenido-spinner');
    spinner.style.display = vista;
  }

}