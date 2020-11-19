// FUNCIONES
const cotizador = new API ('5a90c0287f03f4a108f7773c751bcf169d783d9c01714ba563f5e97c882d3de9'); // toma la direccion key para entrar al html y pedir el json
const ui = new Interfaz();



// leer el formulario
const formulario = document.querySelector('#formulario');

// eventlistener
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    // leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    
    // leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    
    //comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada ==='' || criptoMonedaSeleccionada ===''){

        //arrojar una alerta de error
        //console.log('seleciona algo')
        
        ui.mostrarMensaje('Ambos campos son Obligatorios','alert bg-danger text-center');

    }else {
            // OPTENER  MONEDA, Y PRESIOS DE MONEDA
           cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada) // busca los datos seleccionados

           .then(data => { // hace cumplir la promesa
                ui.mostrarResultado(data.resultado.RAW ,monedaSeleccionada,criptoMonedaSeleccionada); // PASA LA DIRECCION DE JSON Y LO SELECIONADOS
            
            //console.log(data);
           })
        
        
        //console.log('todo bien!');
    }
        // todo bien consultar la api




})