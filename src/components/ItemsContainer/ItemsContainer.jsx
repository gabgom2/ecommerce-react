import Item from "../Item/Item";
import { useEffect } from "react";
import { useState } from "react";

function ItemsContainer(props) {

    const [listadoProductos, setListadoProductos] = useState([]);
 
    useEffect(() => {
        let timeout

        /**
         * Simulando llamada a API
         * @returns {array} - Productos
         */
        async function simularFetch() {
            try {
                const respuesta = await fetch("/public/data/products.json")
                if (!respuesta.ok) {
                    throw new Error(`HTTP ${respuesta.status}`);
                }

                await new Promise(resolve => {
                    timeout = setTimeout(() => {
                        console.log("Simulando espera de 2 segundos");
                        resolve();
                    }, 2000);
                });
                const data = await respuesta.json();    
                return data

                
            } catch (error) {
                console.log(error, "Error obteniendo productos, base de datos no disponible")
                
            } finally {
                clearTimeout(timeout)
            }
            
        }

        async function cargarProductos() {

            const productos = await simularFetch();
            if (!productos) {
                console.log("No se pudieron cargar los productos");
            return;
            }

            setListadoProductos(productos);
            console.log(productos);
        }

        cargarProductos();

        return () => {
            clearTimeout(timeout)
        };
        }, []
    );



    return (
        <>
            <h1 className="mt-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">{props.greeting}</h1>
            
            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                 
                {listadoProductos.map( product => (
                    <Item key={product.id} product={product}/>
                ))
                }

            </section>
        </>
    )
}

export default ItemsContainer;