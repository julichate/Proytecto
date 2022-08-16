
/*------------------------------ DECLARACION DE ARRAYS---------------------------------*/


let flota = [{locomotora: "8231", eot: "44000"},
{locomotora: "8232", eot: "44001" },
{locomotora: "8233", eot: "44002"}]



/* -------------------------------DECLARACION DE VARIABLES---------------------------------- */

let jSon = JSON.stringify(flota)
localStorage.setItem(`flota`, jSon)



let agregarLoc = 0
let agregarEot = 0
let solo = 0
let seleccion = 0

const resultadoLoc = 0

/* --------------------------FUNCIONES------------------------- */

   function agregar() { // Funcion para agregar un nuevo objeto a la flota     
                             
           
      let flota = JSON.parse(localStorage.getItem(`flota`)) || []         
                                       
         let divLista = document.querySelector(".listaAgregar")          
          
       
         divLista.innerHTML = `
         <div class="formAgregar">
         <H2 id="etiquetaLoc">Ingrese número de locomotora que  desea agregar</H2>
         <input type="number" id ="inputEtiquetaLoc">
         <H2 id="etiquetaEot">Ingrese número de EOT que desea asignar</H2>
         <input type="number" id ="inputEtiquetaEot">
         <button  class ="enviarButton">ENVIAR</button>
         </div>`
         
         let inputEtiquetaLoc = document.querySelector(`#inputEtiquetaLoc`)
         let inputEtiquetaEot = document.querySelector(`#inputEtiquetaEot`)
         let enviarButton = document.querySelector(`.enviarButton`)
         
       enviarButton.onclick = () => {

          agregarLoc = inputEtiquetaLoc.value
                                        
                   const resultadoLoc = flota.some((i) => i.locomotora == agregarLoc)
                   const resultadoObj = flota.find((i) => i.locomotora == agregarLoc)               
                   
                   resultadoLoc == true ? sweetAlertErrorLoc() : masEot() // Verifica si la Loc ingresada se encuentra en la base de datos
                                                                     
                                   
       } 
      }

//---------------------------------------------------------Función masEot-------------------------------------------------------------
    
        function masEot(){
         
            agregarEot = inputEtiquetaEot.value
            
            const resultado = flota.some((el) => el.eot == agregarEot)

            // Verifica si el EOT ingresado ya existe en la base de datos
            resultado == true ?  sweetAlertErrorEot() :  sweetAlertAlta() + flota.push({locomotora: agregarLoc, eot: agregarEot })
           
                       
           let jSon = JSON.stringify(flota)
           localStorage.setItem(`flota`, jSon)

           let finAgregar = document.querySelector(".formAgregar") 
          
        }
        
// --------------------------------------------------------------------Función modificar -------------------------------------------------------------------------

        function modificar(){ //modifica un EOT a una locomotora existente
                                    
          
         

         let flota = JSON.parse(localStorage.getItem(`flota`)) || []

           let divLista = document.querySelector(".listaAgregar")          
          
       
         divLista.innerHTML = `
         <div class="formAgregar">
         <H2 id="etiquetaLoc">Ingrese número de locomotora  a la que desea modificarle el número de eot</H2>
         <input type="number" id ="inputEtiquetaLoc">
         <H2 id="etiquetaEot">Ingrese número de EOT que desea asignar</H2>
         <input type="number" id ="inputEtiquetaEot">
         <button  class ="enviarButton">ENVIAR</button>
         </div>`
        
   

         let inputEtiquetaLoc = document.querySelector(`#inputEtiquetaLoc`)
         let inputEtiquetaEot = document.querySelector(`#inputEtiquetaEot`)
         let enviarButton = document.querySelector(`.enviarButton`)
         
       

        enviarButton.onclick = () => {

         let busquedaEot = inputEtiquetaEot.value
         let busquedaLoc = inputEtiquetaLoc.value
         const resultadoEot = flota.some( (el) => el.eot == busquedaEot) // true o false
          
         if (resultadoEot == true){  // Verifica si el EOT ingresado ya está cargado
         
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'El EOT ingresado ya se encuentra en la base de datos',
               
             })

          const resultado = flota.find((i) => i.eot == busquedaEot) // Busca el elemento para mostrar a que locomotora está asignado el EOT ingresado

          let numeroEot = resultado.eot // Número de Eot a buscar
            
          console.log(resultado)}

            else if (resultadoEot != true){ // Verifica si la locomotora está cargada para ser modificada
          
               agregarLoc = inputEtiquetaLoc.value                                         
        
                                    
                   const resultadoLoc = flota.some((i) => i.locomotora == agregarLoc)
                   const resultadoObj = flota.find((i) => i.locomotora == agregarLoc)                                  
                                                                     
                   if ( resultadoLoc != true) { // Verifica si la Loc ingresada se encuentra en la base de datos
                     Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Loc: ' + agregarLoc + 'No figura en la base de datos',
                        
                      }) 
                  
                   
                   
                   }                 
                               
                                    
                   else if(resultadoLoc == true){
                                  
         let posicion

          for (let i = 0; i < flota.length; i++){
            if(flota[i].locomotora == busquedaLoc){
               posicion = i
               break
            }
          }

          Swal.fire({
            icon: 'info',
            title: 'Atención',
            text: 'Se modificará la lista con los valores cargados',
            
          }) 
      

          
          flota.splice(posicion, 1) // Elimina el objeteo de la posición obtenida anteriormente
          flota.push({locomotora: busquedaLoc, eot: busquedaEot }) //agrega el objeto ingresado por el usuario
          let jSon = JSON.stringify(flota)
           localStorage.setItem(`flota`, jSon)
          
         }}
         let finAgregar = document.querySelector(".formAgregar") 
         finAgregar.remove()}
      
      }
         

      // ---------------------------------------------Función Eliminar ---------------------------------------------


         function eliminar(){ // Elimina un objeto de la lista
           // let flota = JSON.parse(localStorage.getItem(`flota`))
           let flota = JSON.parse(localStorage.getItem(`flota`)) || []

            let divLista = document.querySelector(".listaAgregar")          
          
       
            divLista.innerHTML = `
            <div class="formAgregar">
            <H2 id="etiquetaLoc">Ingrese el número de locomotora que  desea eliminar</H2>
            <input type="number" id ="inputEtiquetaLoc">
            
            <button  class ="enviarButton">ENVIAR</button>
            </div>`
           
      
   
            let inputEtiquetaLoc = document.querySelector(`#inputEtiquetaLoc`)
            
            let enviarButton = document.querySelector(`.enviarButton`)
            
          
   
           enviarButton.onclick = () => {
                 
         let busquedaLoc = inputEtiquetaLoc.value  
           
         const ubicacion = flota.some((i) => i.locomotora == busquedaLoc)

         if(ubicacion == true){ // Verifica si existe la Loc ingresada en la base de datos

            let posicion

             for (let i = 0; i < flota.length; i++){
               if(flota[i].locomotora == busquedaLoc){
                  posicion = i
                  break
               }
             }
             const resultado = flota.find((i) => i.locomotora == busquedaLoc) 
             
             

             flota.splice(posicion, 1) // Elimina el objeteo de la posición obtenida anteriormente
             let jSon = JSON.stringify(flota)
          
             localStorage.setItem(`flota`, jSon)   
             let finAgregar = document.querySelector(".formAgregar") 
             finAgregar.remove()       
             
            }
         else if(ubicacion != true){
            
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'La locomotora ingresada no está registrada en el sistema',
               
             })
            
         }
         
      }
         }


         function sweetAlertErrorLoc(){

            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'La locomotora ingresada ya se encuentra en la base de datos',
               
             })
         }
         
         function sweetAlertErrorEot(){
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'EOT N°: ' + agregarEot  + ' ya está asignado',
               
             })
         }

         function sweetAlertAlta(){
            Swal.fire({
               icon: 'info',
               title: 'Atención',
               text: 'Se dará de alta en el registro: Locomotora: ' + agregarLoc + ';' + 'Telémetro N°: ' + agregarEot,
               
             })
         }
    /*-----------------------------PROGRAMA PRINCIPAL---------------------------------------*/
   
   
    
         let agregarB = document.querySelector(".botonAgregar")
         let modificarB = document.querySelector(".botonModificar")
         let eliminarB =  document.querySelector(".botonEliminar")
         let verB =  document.querySelector(".botonVer")
      
      agregarB.onclick = () =>{agregar()}
      modificarB.onclick = () =>{ modificar()}
      eliminarB.onclick = () =>{ eliminar() }
      
      
      verB.onclick = () => { 

           
         esta()  
         
      }              
     
        function esta (){
         
         let flota = JSON.parse(localStorage.getItem(`flota`)) || []
         divLista=document.querySelector(".listaAgregar")
         
        

      
            divLista.innerHTML=`
               <div class="divFlota">
                  <ul class="ulFlota"></ul>
                  <ul class="ulEot"></ul>
               </div>
               
               `
         
         for (const flotas of flota) {
           
            let ulFlota = document.querySelector(".ulFlota")
            
            let liFlota = document.createElement("li")
            ulFlota.appendChild(liFlota)

            liFlota.className = "liFlotaLoc"
           
           liFlota.innerText = `${flotas.locomotora}                          
                              `                       
                                 
         }

         for (const eots of flota) {
            let ulEot = document.querySelector(".ulEot")
            let liEot = document.createElement("li")
            ulEot.appendChild(liEot)
            liEot.className = "loEot"
            liEot.innerText = `${eots.eot}`
         }
        
      }

      
         

        
            
         
         
         

      
       
        
            
         
         
            
            
         

            
             
       

    
        

      
      
      
      
      
      
