function Button({
    children,
    disabled = false,
    
    className = "",
}) {
    const styles = `
        rounded-lg
        bg-emerald-500
        px-4
        py-2
        font-semibold
        text-white
        transition-colors
        hover:bg-emerald-600
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














