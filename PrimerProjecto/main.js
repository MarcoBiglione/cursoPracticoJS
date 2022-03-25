const inputC = document.getElementById("lado")
const inputT1 = document.getElementById("lado1")
const inputT2 = document.getElementById("lado2")
const inputTB = document.getElementById("base")
const inputA = document.getElementById("altura")
const inputR = document.getElementById("radio")
// codigo Cuadrado

function perimetroCuadrado()
{
    const lado = inputC.value
    var perimetro = lado * 4 
    alert(perimetro)
}

function areaCuadrado(){
 
    const lado = inputC.value
    var area = lado * lado
    alert(area)
}
// codigo del triangulo




function perimetroTriangulo(){
    const lado1 = parseInt(inputT1.value)
    const lado2 = parseInt(inputT2.value)
    const base = parseInt(inputTB.value)
    var perimetroT = lado1 + lado2 + base
    alert(perimetroT)
}


function areaTriangulo(){
    const base = inputTB.value
    const altura = inputA.value
    var areaT = (base * altura)/2
    alert(areaT)
}


// codigo del Circulo

function diametroCirculo(){
    const radio = inputR.value
    var diametro = radio * 2 
    alert(diametro)
}

const PI = Math.PI

function perimetroCirculo(){
    const radio = inputR.value
    var perimetro = (radio * 2) * PI
    alert(perimetro)
}

function areaCirculo(){
    const radio = inputR.value
    var area = (radio * radio) * PI
    alert(area)
}