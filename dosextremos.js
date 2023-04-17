let producto = prompt(` ingrese numero de producto :
 1:Remeras Unisex
 2:Buzos Unisex
 3:Camperas Unisex
`);

let talle = prompt(` ingrese talle :
 S: Small 
 M: Medium
 L: Large
 XL: Extra Large
`);
switch (talle){
    case "S": 
    console.log( "usted selecciono Small");
    break;
    case "s": 
    console.log( "usted selecciono Small");
    break;
    case "M": 
    console.log( "usted selecciono Medium");
    break;
    case "m": 
    console.log( "usted selecciono Medium");
    break;
    case "L": 
    console.log( "usted selecciono Largue");
    break;
    case "l": 
    console.log( "usted selecciono Largue");
    break;
    case "XL": 
    console.log( "usted selecciono Extra Latgue");
    break;
    case "xl": 
    console.log( "usted selecciono Extra Largue");
    break;
default:
    console.log( "Lo sentimos no tenemos esa opcion");
    break
}

let stock = prompt("ingrese cantidad")
if (stock > 1 )
{ console.log("producto en stock")
}
else  
{  console.log("sin stock ")};

function solicitarDatosdeContacto () { let DatosdeContacto= prompt ( "Ingrese Nombre y Apellido")
let Mail = prompt ("Ingrese Mail")
let telefono = prompt ("Ingrese numero de telefono")
console.log ("Los datos para que te contactemos son : " + DatosdeContacto +" "+  Mail + " " + telefono )

}
solicitarDatosdeContacto();


function saludar() {  
    console.log( "Gracias por su Contacto");
}
saludar()
