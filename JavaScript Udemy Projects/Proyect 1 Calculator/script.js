//constante para visualizar lo que escribamos en la calculadora
const display = document.querySelector("#display") 
//Constante que selecciona todos nuestros botones, hace referencia a todos los elementos button de html
const buttons = document.querySelectorAll("button")

//Este forEach nos permite recorrer a este arreglo de botones 
buttons.forEach((item)=>{ //La función de flecha ()=> {} nos va a permitir sacar toda la información que tengamos a través de los botones y a través de (item) podemos saber quien es el 8 o el -
    item.onclick = ()=>{ 
        if(item.id=="clear"){
            display.innerText=""
        }else if(item.id=="backspace"){
            let string = display.innerText.toString()
            display.innerText = string.substr(0,string.length-1)
        }else if(display.innerText != "" && item.id=="="){
            //la funcion eval va tomar la cadena como una operación aritmetica y va a evaluar el resultado
            display.innerText = eval(display.innerText)
        }else if (display.innerText == "" && item.id == "="){
            display.innerText = "Null"
            //Funcion que ejecuta un fragmento de código de una función en un determinado tiempo
            setTimeout(()=>(display.innerText=""),2000)
        }else{
            display.innerText+=item.id;
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")
const toggleIcon = document.querySelector("toggler-icon")
let isDark = true

themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark = !isDark
}