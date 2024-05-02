import { Cargar_categorias } from "./Cargar_categorias.js";
import { cargar_producto } from "./Cargar_productos.js";


let DOM = document.querySelector("#root")

DOM.innerHTML = `
    <header class="header"></header>
    <main class="body">
        <section id="div_producto_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer class="footer"></footer>
`





async function obtenerProductos() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        let productos_api = data;
        
        Cargar_categorias()    
        // Mi programa
        cargar_producto(productos_api);
    } catch (error) {
        console.error('Ha ocurrido un error al obtener los productos:', error);
    }
}

obtenerProductos();