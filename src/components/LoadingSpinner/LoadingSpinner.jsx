function LoadingSpinner( { message = "Cargando..." }) {
    return ( <div className="col-span-full flex flex-col items-center justify-center py-10">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                <p className="mt-4 text-gray-600"> {message} </p>
            </div> );
}

export default LoadingSpinner;