const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click',(e)=>{
  e.preventDefault();
})

let articulos = [
{
nombre: "Unbranded Cotton Shoes",
descripcion:
"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
precio: 15.00,
urlImagen: "./resources/img/UnbrandedCottonShoes.jpg",
id: 4
},
{
nombre: "Modern Frozen Chair",
descripcion:
"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
precio: 300.00,
urlImagen: "./resources/img/ModernFrozenChair.jpg",
id: 5
},
{
nombre: "Oriental Rubber Car",
descripcion:
"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
precio: 80.00,
urlImagen: "./resources/img/OrientalRubberCar.jpg",
id: 6
},
{
nombre: "Awesome Plastic Bacon",
descripcion:
"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
precio: 144.00,
urlImagen: "./resources/img/AwesomePlasticBacon.jpg",
id: 7
},
{
nombre: "Recycled Metal Ball",
descripcion:
"The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
precio: 800.00,
urlImagen: "./resources/img/RecycledMetalBall.jpg",
id: 8
},
{
nombre: "Handcrafted Concrete Towels",
descripcion:
"Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
precio: 605.00,
urlImagen: "./resources/img/HandcraftedConcreteTowels.jpg",
id: 9
},
{
nombre: "Handmade Bronze Salad",
descripcion:
"The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
precio: 566.00,
urlImagen: "./resources/img/HandmadeBronzeSalad.jpg",
id: 11
},
{
nombre: "Bespoke Bronze Keyboard",
descripcion:
"The Football Is Good For Training And Recreational Purposes",
precio: 587.00,
urlImagen: "./resources/img/BespokeBronzeKeyboard.jpg",
id: 12
},
{
nombre: "Awesome Cotton Gloves",
descripcion:
"New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
precio: 391.00,
urlImagen: "./resources/img/AwesomeCottonGloves.jpg",
id: 13,
},
{
nombre: "Handmade Concrete Bacon",
descripcion:
"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
precio: 306.00,
urlImagen: "./resources/img/HandmadeConcreteBacon.jpg",
id: 14
}
];




const ordeBy ={

/////////////////////Inicio Buscar con filter
searchOpen:function (articulos){
//
containerTemplate(articulos);
const searchBox = document.getElementById('search-box');
searchBox.addEventListener('input', () =>
{
const ordePrecio = document.getElementById('orderBy');
ordePrecio.value="none"
const href = searchBox.value;
const params = new URLSearchParams('busqueda='+href);
history.pushState(null,'?',params.toString())

articulosDataSearch = articulos.filter(function(item){
const nombreSearch = item.nombre.toLocaleLowerCase();
const valueSearch = href.toLocaleLowerCase();
return nombreSearch.includes(valueSearch)
})
containerTemplate(articulosDataSearch);
})},
//////////////////////////////////////////////////////////////////
HomePage:function () {

containerTemplate(articulos);
articulosDataSearch = articulos;
////////////////////////Inicio Order by
const ordePrecio = document.getElementById('orderBy');
/////////////////////////// Change orde by
ordePrecio.addEventListener('change', () =>
{
// this.containerTemplate(articulos2)
const valorSeleccionado = ordePrecio.value;  
 articulos = articulosDataSearch.sort((a,b) =>{
  const precioA = a.precio;
  const precioB = b.precio;
if(valorSeleccionado==='mayorPrecio')
{
return precioB - precioA
}
else if(valorSeleccionado==='menorPrecio'){
return precioA - precioB
}
});
containerTemplate(articulos)
});
},
////////////////////////////////////////////////////////


//////////////////////Fin order by desc a ascen
}

containerTemplate(articulos)
ordeBy.HomePage();
ordeBy.searchOpen(articulos); 