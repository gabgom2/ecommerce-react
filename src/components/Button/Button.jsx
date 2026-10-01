


function Button({children, disabled = false}) {
    return ( <button disabled={disabled}
        className="mt-3 w-full rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-gray-300">
        {children}
    </button> );
}

export default Button;















