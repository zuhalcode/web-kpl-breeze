import React from "react";

export default function SubmitButton({ children }) {
    return (
        <button className="px-3 py-2 w-full rounded-md bg-blue-500 text-white uppercase font-bold">
            {children}
        </button>
    );
}
