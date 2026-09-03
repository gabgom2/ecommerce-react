function Item({ product: { title, description, price, stock } }) { 
    return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
    
        <div className="flex h-48 items-center justify-center bg-slate-200">
            {/* imagen */}
            <span className="text-gray-400">Sin imagen</span>
        </div>

        <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-semibold text-gray-900">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {description}
            </p>

            <strong className="mt-2 text-sm italic text-gray-600">
                Stock: {stock}
            </strong>

            <div className="mt-auto pt-5">
                <p className="text-xl font-bold text-gray-900">
                    ${price}
                </p>

                <button className="mt-3 w-full rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-emerald-600">
                    Agregar al carrito
                </button>
            </div>
        </div>

    </article>


)
}

export default Item