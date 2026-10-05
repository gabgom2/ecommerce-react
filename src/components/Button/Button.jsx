function Button({
    children,
    disabled = false,
    
    className = "",
    color = "default"
}) {
    let colorStyles;

    switch (color) {
        case "green":
            colorStyles = `
                bg-emerald-500
                hover:bg-emerald-600
            `;
            break;

        case "red":
            colorStyles = `
                bg-red-700
                hover:bg-red-600
            `;
            break;

        case "blue":
            colorStyles = `
                bg-blue-800
                hover:bg-blue-600
            `;
            break;

        case "yellow":
            colorStyles = `
                bg-yellow-500
                hover:bg-yellow-600
            `;
            break;

        default:
            colorStyles = `
                bg-emerald-500
                hover:bg-emerald-600
            `;
    }
    const styles = `
        rounded-lg
        ${colorStyles}
        px-4
        py-2
        font-semibold
        text-white
        transition-colors
        
        disabled:cursor-not-allowed
        disabled:bg-gray-300
        cursor-pointer
        ${className}
    `;

    return (
        <button
            disabled={disabled}
            className={styles}
        >
            {children}
        </button>
    );
}

export default Button;














