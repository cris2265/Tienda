import { Cargar_categorias } from "./Cargar_categorias.js";
import { cargar_producto } from "./Cargar_productos.js";


let DOM = document.querySelector("#root")

DOM.innerHTML = `
    <header></header>
    <main class="body">
        <section id="div_producto_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer></footer>
`





fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let productos_api = data;
        
        
        //Mi programa
        cargar_producto(productos_api)
   
    });

Cargar_categorias()    