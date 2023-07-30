  function displayProductDetails(productIndex) {
  // Obtener referencias a los elementos del DOM
  const productNameElement = document.getElementById("product-name");
    const productPriceElement = document.getElementById("product-price");
    const productStockElement = document.getElementById("product-stock");
  const productDescriptionElement = document.getElementById("product-description");

  // Actualizar la información del producto según el índice
  switch (productIndex) {
    case 1:
      productNameElement.textContent = "Nombre del Producto 1";
      productPriceElement.textContent = "Precio: $99.99";
      productStockElement.textContent = "Stock: 5";
      productDescriptionElement.textContent = "Descripción del Producto 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      break;
    case 2:
      productNameElement.textContent = "Nombre del Producto 2";
      productPriceElement.textContent = "Precio: $149.99";
      productStockElement.textContent = "Stock: 6";
      productDescriptionElement.textContent = "Descripción del Producto 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco.";
      break;
    case 3:
      productNameElement.textContent = "Nombre del Producto 3";
      productPriceElement.textContent = "Precio: $199.99";
      productStockElement.textContent = "Stock: 8";
      productDescriptionElement.textContent = "Descripción del Producto 3: Duis aute irure dolor in reprehenderit in voluptate velit.";
      break;
    default:
      productNameElement.textContent = "Nombre del Producto";
      productPriceElement.textContent = "Precio: $99.99";
      productStockElement.textContent = "Stock: 5";
      productDescriptionElement.textContent = "Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam dui at turpis fringilla, id viverra risus eleifend.";
  }
}
/* let edad = 20
console.log("operadorTernario");
let eresMayor = (edad >= 18)
  ? "eres mayor de edad"
  : "eres menor de edad";
console.log(eresMayor);
let dia = 2
  switch (dia) {
    case 0:
      console.log("Domingos");
      break;
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miercoles");
      break;
    case 4:
      console.log("Juves");
      break;
    case 5:
      console.log("Viernes");
      break;
  
    default:
      console.log("Sabados");
      break;
  }
/* esto lo relaciono para la parte del html que quiero que aparezca */  
/* let datos = document.querySelector(".container"); */

 
/* y aca le pongo lo que quiero que aparezca */
 /*    datos.innerHTML += eresMayor ;

 
 */ 