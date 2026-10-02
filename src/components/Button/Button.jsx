import { Link } from "react-router-dom";

function Button({
    children,
    disabled = false,
    to,
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
        ${className}
    `;

    if (to) {
        return (
            <Link to={to} className={styles}>
                {children}
            </Link>
        );
    }

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














