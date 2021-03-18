import React from "react";

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="btn btn-primary">
            {children}
        </button>
    );
}

export default Button