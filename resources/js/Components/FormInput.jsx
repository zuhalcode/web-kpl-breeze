import React from "react";

export default function FormInput({
    svg,
    placeholder,
    type = "text",
    name,
    attr,
}) {
    const lockSVG = (
        <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
    const userSVG = (
        <svg
            className="w-6 h-6 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
    return (
        <>
            <div>
                <div className=" w-[350px] my-[10px] h-[55px] rounded-md grid px-1 relative ">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
                        {svg === "user" ? userSVG : lockSVG}
                    </div>
                    <input
                        type={type}
                        name={name || placeholder.toLowerCase()}
                        className="w-full rounded-md border-none pl-10 pr-12 text-base font-semibold bg-gray-100"
                        placeholder={placeholder}
                        autoComplete="none"
                        required
                        {...attr}
                    />
                </div>
            </div>
        </>
    );
}
