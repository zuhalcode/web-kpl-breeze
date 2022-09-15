import React from "react";

export default function ContainerCircle({ className = "" }) {
    return (
        <div
            id="container"
            className={`w-[2000px] h-[2000px] rounded-full absolute top-[-10%] right-[48%] translate-y-[-50%] transition-all duration-[2000ms] bg-blue-700 ${className}`}
        />
    );
}
