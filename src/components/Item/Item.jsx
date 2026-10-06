import Button from "../Button/Button"
import { Link } from "react-router-dom"

function Item({ product: { title, price, image, id, categoryName = "Sin categoría" } }) { 
    return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
    
        <div className="flex h-48 items-center justify-center bg-slate-200">
            {/* imagen */}
            <img src={image} alt={`Imagen de ${title}`} className="h-full w-full object-cover" />
            
        </div>

        <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-semibold text-gray-900">
                {title}
            </h3>

            <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-300 px-3 py-1 text-xs font-medium text-white">
                    {categoryName}
                </span>

                <p className="text-xl font-bold text-gray-900">
                    ${price}
                </p>

            </div>
    
            <Link to={`/item/${id}`}>
                <div className="mt-auto pt-5">
                    <Button className="w-full">Ver detalle</Button>
                </div>
            </Link>
        </div>
            

    </article>


)
}

export default Item