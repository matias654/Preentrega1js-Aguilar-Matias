/* let producto = prompt(` ingrese numero de producto :
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
saludar(); */

/*  Comienzo preentrega 2 *****************************/



const articulo = [
    { producto : "remera", precio: 4999 },
    { producto:"buzo", precio: 8300 },
    { producto:"campera", precio: 10500 },
];


let seleccionproducto = prompt(` ingrese  producto :
Remeras Unisex
Buzos Unisex
Camperas Unisex
`);


let selecciontalle = prompt(`ingrese talle :
 S: Small 
 M: Medium
 L: Large
 XL: Extra Large
`);

switch (selecciontalle)
 {
    case "S": 
    console.log( "usted selecciono talle Small");
    break;
    case "s": 
    console.log( "usted selecciono talle Small");
    break;
    case "M": 
    console.log( "usted selecciono talle Medium");
    break;
    case "m": 
    console.log( "usted selecciono talle Medium");
    break;
    case "L": 
    console.log( "usted selecciono talle Largue");
    break;
    case "l": 
    console.log( "usted selecciono talle Largue");
    break;
    case "XL": 
    console.log( "usted selecciono talle Extra Large");
    break;
    case "xl": 
    console.log( "usted selecciono talle Extra Large");
    break;
default:
    console.log( "Lo sentimos no tenemos esa opcion");
    break; 


}


    if (seleccionproducto == "remera" || seleccionproducto== "buzo" || seleccionproducto== "campera") {
 switch (seleccionproducto)
  {
         case "remera" :
            precio= 4999 ;
            console.log( "usted selecciono Remera");
            break ;
            case "buzo" :
                precio= 8500 ;
                console.log( "usted selecciono buzo");
                break ;
                case "campera" :
                    precio= 10500 ;
                    console.log( "usted selecciono campera");
                    break ;
                    default : 
                    console.log( "Lo sentimos no tenemos esa opcion");
                    break 


 }

 let carrito =[];


 let pedido = parseInt (prompt (" ingrese cantidad de pedido" )) ;
carrito.push({seleccionproducto,pedido,selecciontalle  });
console.log(carrito)



carrito.forEach((carritoTotal) => { 
    console.log(`pedido : ${carritoTotal.pedido}, total a pagar : ${precio * carritoTotal.pedido},
    
 `)
})


};


function solicitarDatosdeContacto () { let DatosdeContacto= prompt ( "Ingrese Nombre y Apellido")
let Mail = prompt ("Ingrese Mail")
let telefono = prompt ("Ingrese numero de telefono")
console.log ("Los datos para que te contactemos son : " + DatosdeContacto +" "+  Mail + " " + telefono )

}
solicitarDatosdeContacto();


function saludar() {  
    alert( "Gracias por tu compra, en la brevedad te estaremos contactando para confirmar pedido y  plazos de entrega. ");
}
saludar();


 
 