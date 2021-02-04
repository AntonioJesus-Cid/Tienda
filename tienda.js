let productos = [];
let totalProductos = 0;
let precioFinal = 0;
let nSudaderas = 0;
let nZapatos = 0;
let nCamisas = 0;
let nCalcetines = 0;
let nPantalones = 0;
let nCamisetas = 0;

function anadir(nombre, precio){
    let producto = {
        nombre : nombre,
        precio : precio
    }
    productos.push(producto);
    totalProductos += 1;
    precioFinal = precioFinal + producto.precio;

    document.getElementById("carrito1").innerHTML = "Total productos: " + totalProductos.toString();
    document.getElementById("carrito2").innerHTML = "Precio total: " + precioFinal.toString() + "€";

    if(nombre == "sudadera"){
        document.getElementById("nSudaderas").innerHTML = nSudaderas += 1;
    }
    else if(nombre == "zapatos"){
        document.getElementById("nZapatos").innerHTML = nZapatos += 1;
    }
    else if(nombre == "camisa"){
        document.getElementById("nCamisas").innerHTML = nCamisas += 1;
    }
    else if(nombre == "calcetines"){
        document.getElementById("nCalcetines").innerHTML = nCalcetines += 1;
    }
    else if(nombre == "pantalon"){
        document.getElementById("nPantalones").innerHTML = nPantalones += 1;
    }
    else if(nombre == "camiseta"){
        document.getElementById("nCamisetas").innerHTML = nCamisetas += 1;
    }

    console.log("Productos: " + productos);
    console.log("Total productos: " + totalProductos);
    console.log("Precio total: " + precioFinal);
}

function quitar(nombre, precio){
    
    if(totalProductos > 0 && precioFinal > 0 && nombre == nombre){
        totalProductos -= 1;
        precioFinal = precioFinal - precio;
    }

    document.getElementById("carrito1").innerHTML = "Total productos: " + totalProductos.toString();
    document.getElementById("carrito2").innerHTML = "Precio total: " + precioFinal.toString();

    if(nombre == "sudadera" && nSudaderas > 0){
        document.getElementById("nSudaderas").innerHTML = nSudaderas -= 1;
    }
    else if(nombre == "zapatos" && nZapatos > 0){
        document.getElementById("nZapatos").innerHTML = nZapatos -= 1;
    }
    else if(nombre == "camisa" && nCamisas > 0){
        document.getElementById("nCamisas").innerHTML = nCamisas -= 1;
    }
    else if(nombre == "calcetines" && nCalcetines > 0){
        document.getElementById("nCalcetines").innerHTML = nCalcetines -= 1;
    }
    else if(nombre == "pantalon" && nPantalones > 0){
        document.getElementById("nPantalones").innerHTML = nPantalones -= 1;
    }
    else if(nombre == "camiseta" && nCamisetas > 0){
        document.getElementById("nCamisetas").innerHTML = nCamisetas -= 1;
    }

    console.log("Productos: " + productos);
    console.log("Total productos: " + totalProductos);
    console.log("Precio total: " + precioFinal);
}
