import Button from "../Button/Button";
import { FiCheck, FiX } from "react-icons/fi";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ producto: { title, description, price, stock, image, category } }) {
    return (
        <article className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[2fr_3fr]">
            <div>
                <img
                    src={image}
                    alt={`Imagen de ${title}`}
                    className="w-full rounded-xl object-cover"
                />
            </div>

            <div className="flex flex-col items-start gap-2 p-3">
                <h1 className="text-6xl font-bold">
                    {title}
                </h1>

                <div className="mt-4 flex w-full items-center justify-between">

                    <span
                        className={`flex items-center gap-1 p-2 mt-3 rounded-2xl ${
                            stock > 0 ? "text-emerald-600 bg-emerald-100" : "text-red-600 bg-red-100"
                        }`}
                    >
                        {stock > 0 ? <FiCheck /> : <FiX />}
                        {stock > 0 ? "Disponible" : "Sin stock"}
                    </span>
                    
                                
                    <span className="rounded-full bg-blue-300 px-3 py-1 font-medium text-white">
                        {category}
                    </span>

                </div>


                <p className="my-4 text-xl font-medium text-gray-600 text-start italic">
                    {description}
                </p>

                <p className="text-base font-bold text-gray-900">
                    Stock: {stock}
                </p>

                <p className="text-3xl my-4 font-bold text-gray-900">
                    ${price}
                </p>
                

                <div className="flex w-full items-center gap-6">
                    <div className="shrink-0">
                        <ItemCount stock={stock} />
                    </div>

                    <div className="flex-1">
                        <Button disabled={stock <= 0}>
                            Agregar al carrito
                        </Button>
                    </div>
                </div>

            </div>

        </article>
    );
}

export default ItemDetail;