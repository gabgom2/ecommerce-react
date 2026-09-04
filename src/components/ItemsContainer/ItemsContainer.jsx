import Item from "../Item/Item";
import { useEffect } from "react";

function ItemsContainer() {
 

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

        console.log(productos);
    }

    cargarProductos();

    return () => {
        clearTimeout(timeout)
    };
    }, []);



    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            



            {/* <h3>{props.greeting}</h3> */}
        
            {/* {products.map( product => (
                <Item product={product}/>
            )

            )
            } */}



          


        </section>
    )
}

export default ItemsContainer;