//ejercicio 1

function devolverCadena(str) {
  console.log("la cadena provista : " + str )
    
}
devolverCadena("string")

// ejercicio 2


function sumar(a , b){
    const suma = a + b 
     return suma ;
   }
   console.log(sumar(5,5))

 // ejercicio 3  

function restar(a , b){
    let resta = a - b ;
    return resta;
    
}   
console.log(restar(10 , 8))

// ejercicio 4

function multiplicar( x , y){
    const multiplica = x * y ;
    return multiplica
}
console.log(multiplicar(10 , 30))

// ejercicio 5

function dividir( x , y){
    const divide = x / y ;
    return divide
}
console.log(dividir(100 , 30))

// ejercicio 6

function hijoIguales(x, y){
    if (x === y){
        console.log(true)
    }else{
        console.log(false)
    }
}
hijoIguales(5,5)
  
// ejercicio 7

function tienenMismaLongitud(str1, str2){
    
    
    if(str1.length === str2.length){
        console.log(true)
    }else{
        console.log(false)
    }
}
console.log(tienenMismaLongitud("hola" , "hola"))

// ejercicio 8

function menosQueNoventa(num) {
    if(num < 90){
      console.log(true)
    }else{
      console.log(false)
    }
  }
  menosQueNoventa(50)

  // ejercicio 9

  function mayorQueCincuenta(num){
    if( num > 50){
      console.log(true)
  
    }else{
      console.log(false)
    }
  }
  
  mayorQueCincuenta(40)  


  // ejercicio 10 


  function obtenerResto(x, y) {
    let resto = x % y;
     return resto
   }
   
   console.log(obtenerResto(5,3))


  // ejercicio 11

   
function esPar(num){
    if(num % 2 ===0){
      return true
    }else{
      return false
    }
    
   }
   console.log(esPar(4))

   // ejercicio 12


   function esImpar(num){
    if(num % 2 !== 0){
      return true
    }else{
      return false
    }
    
   }
   console.log(esImpar(3))

   // ejercicio 13

   
   function elevarAlCuadrado(num){
    let cuadrado = num * num
     return cuadrado
   }
   console.log(elevarAlCuadrado(5))

   // ejercicio 14


   function elevarAlCubo(num){
    let cubo = num*num*num;
    return cubo
  }
  
  console.log(elevarAlCubo(5))

  // ejercicio 15

   function elevar(num,exponente){
    let resultado = 1;
    for(let i= 1 ; i <= exponente;i++ ){
      resultado *= num;
    }
    return resultado;
    }
    console.log(elevar(2,3))

    // ejercicio 16

    function redondearNumero(num) {

      let numero = Math.round(num)
      return numero
     }
     console.log(redondearNumero(17.2))

     // ejercicio 17

     function redondearNumero(num) {

      let numero = Math.ceil(num)
      return numero
     }
     console.log(redondearNumero(13.1))

     // ejercicio 18

    
  function agregarSimboloExclamacion(str) {
        let cadena ="hola mundo"
        return (cadena + "!" )
      }
      console.log(agregarSimboloExclamacion())

     // ejercicio 19
  
  
  function combinarNombres(nombre, apellido){
    let juntos= nombre + apellido
    return juntos
  }
  console.log(combinarNombres( "Alejandro " , "Cassan ."))

  // ejercicio 20


  function obtenerSaludo(nombre){
    let cadena= "Martin"
   console.log(" ¡ Hola " + cadena )
  }
  obtenerSaludo()
  
  // ejercicio 21


function obtenerAreaRectangulo(alto, ancho){
    let area = alto * ancho
    return area
}

console.log(obtenerAreaRectangulo(7,15))

// ejercicio 22



function obtenerMayor(x, y){
  if (x > y){ 
  return x
 } else if(y > x){
  return y
 } else{
  return x || y
 }
}

console.log(obtenerMayor(5,5))


// ejercicio 23

function saludo(idioma){
  if( idioma  === "aleman" ){
    console.log("Guten Tag!")
 }else if(idioma === "mandarín"){
    console.log("Ni Hao!")
 }else if(idioma ==="ingles"){
    console.log("hello !")
 }else{
   console.log("hola!")
 }
  
}
saludo("mandarin")

// ejercicio 24

function esDiezOCinco(numero) {
  if(numero=== 10 || numero === 5){
     return true
  }else{
    return false
  }
}
console.log(esDiezOCinco(12))

// ejercicio 25


function estaEnRango(numero){
  if(numero <= 50 && numero >= 30 ){
    return true 
  }else{
    return false
  }
  
}
console.log(estaEnRango(50))
// ejercicio 26 


function esEntero(numero) {
  let resultado = (numero - Math.floor(numero))
  return resultado === 0;
}
console.log(esEntero(11.5))

// ejercicio 27

function fizzBuzz(numero) {
  if(numero % 3 === 0){
  return "fizz"
 } else if(numero % 5 === 0){
  return "buzz"
 } else if(numero % 3 === 0 && numero % 5 === 0){
  return "fizzBuzz" 
 }else{
   return numero 
 }
}

console.log(fizzBuzz(97))


