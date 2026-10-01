import { useState } from "react";

function ItemCount({stock}) {

    const [contador, setContador] = useState(1)

    const increaseCounter = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decreaseCounter = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }


    return (         
        <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
            <button
                className="px-3 py-2 text-lg hover:bg-gray-100" onClick={decreaseCounter}
            >
                −
            </button>

            <span className="min-w-10 px-3 py-2 text-center">
                {contador}
            </span>

            <button
                className="px-3 py-2 text-lg hover:bg-gray-100" onClick={increaseCounter}
            >
                +
            </button>
        </div>
 );
}

export default ItemCount;
