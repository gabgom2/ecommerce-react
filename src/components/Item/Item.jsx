function Item({ product: { title, description, price, stock, image, category } }) { 
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

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-300 px-3 py-1 text-xs font-medium text-white">
                    {category}
                </span>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                        stock > 0
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-700"
                    }`}
                >
                    {stock > 0 ? `${stock} disponibles` : "Sin stock"}
                </span>
            </div>

            <div className="mt-auto pt-5">
                <p className="text-xl font-bold text-gray-900">
                    ${price}
                </p>

                <button
                    disabled={stock === 0}
                    className="mt-3 w-full rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                    Agregar al carrito
                </button>

            </div>
        </div>

    </article>


)
}

export default Item