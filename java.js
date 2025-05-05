
function init(){
    var card = document.getElementById("card1")
    card = card.innerHTML=
    `
    <div>
        <h1> Lista de productos</h1> 
        <h4>Producto A</h4>
        <input type="number" name="" id="input1">
        <button onclick="agregar()" type="button" class="btn btn-success boton1">Agregar productos al carrito</button>
    </div>
    `
}

function agregar(){
    var carrito=document.getElementById("carrito")
    var cantidad=document.getElementById("input1").value
    carrito=carrito.innerHTML=
    `
    <h1>cantidad: ${cantidad}</h1>
    `
}