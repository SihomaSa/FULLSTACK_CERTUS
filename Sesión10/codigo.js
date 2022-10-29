function f01(){
    var m = prompt("Hola");
    document.getElementById("lbl01").value = m;
    console.log(m);
}
function f02(){
    var m= prompt("Ingrese un número: ", "0");
    l=m.length;
    var sub=m.substring(1,3);
    var numero=m*2;
    document.getElementById("lbl01").value=numero;
    console.log(numero);
    alert(numero)
}
function f03(){
    var m= prompt("Ingrese un número: ", "0")
    if(m>0){
        document.getElementById("lbl01").value="Positivo";
    }else if(m<0){
        document.getElementById("lbl01").value="Negativo";
    }else{
        document.getElementById("lbl01").value="Cero";
    }
}
function f04(){
    var resultado;
    var numero1= prompt("Escribe el primer numero");
    var numero2= prompt("Escribe el segundo numero");

    if(numero1%numero2===0 || numero2%numero1===0){
        document.getElementById("lbl01").value="Son  multiplos";
    }else{
        document.getElementById("lbl01").value="No son multiplos";
    }
}
function f05(){
    var m = prompt("Ingrese un numero: ", "0");
    // ver si m es par o impar
    if(m%2==0){
        document.getElementById("lbl01").value = "Par";
    }else{
        document.getElementById("lbl01").value = "Impar";
    }
}
function f06(){
    //asignar sueldo del trabajador segun su categoria
    var m = prompt("Ingrese su categoria: ", "A,B,C o D");
    // para A 1000, B 800, C 600, D 400
    if(m=="A"){
        document.getElementById("lbl01").value = "Su sueldo es: 1000";
    }else if(m=="B"){
        document.getElementById("lbl01").value = "Su sueldo es: 800";
    }else if(m=="C"){
        document.getElementById("lbl01").value = "Su sueldo es: 600";
    }else if(m=="D"){
        document.getElementById("lbl01").value = "Su sueldo es: 400";
    }
}
function f07(){
    //asignar sueldo del trabajador segun su categoria
    var m = prompt("Ingrese su categoria: ", "A,B,C o D");
    // para A 1000, B 800, C 600, D 400
    switch(m){
        case "A": document.getElementById("lbl01").value = "Su sueldo es: 1000"; break;
        case "B": document.getElementById("lbl01").value = "Su sueldo es: 800"; break;
        case "C": document.getElementById("lbl01").value = "Su sueldo es: 600"; break;  
        case "D": document.getElementById("lbl01").value = "Su sueldo es: 400"; break;
        default: document.getElementById("lbl01").value = "Categoria no valida"; break;
    }

}
