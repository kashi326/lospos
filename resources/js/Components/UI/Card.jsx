import React from "react";

function Card({ children }) {
    return (
        <div className="mx-auto sm:px-6 lg:px-8 space-y-6">
            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

export default Card;
