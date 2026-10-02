import Button from "../Button/Button"

function Item({ product: { title, price, image, category } }) { 
    return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
    
        <div className="flex h-48 items-center justify-center bg-slate-200">
            {/* imagen */}
            <img src={image} alt={`Imagen de ${title}`} />
            
        </div>

        <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-semibold text-gray-900">
                {title}
            </h3>

            <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-300 px-3 py-1 text-xs font-medium text-white">
                    {category}
                </span>

                <p className="text-xl font-bold text-gray-900">
                    ${price}
                </p>

            </div>

            <div className="mt-auto pt-5">
                <Button className="w-full">Ver detalle</Button>
            </div>
        </div>

    </article>


)
}

export default Item