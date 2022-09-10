import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                    : "inline-flex items-center px-3 pt-1 mx-2 border-b-2 border-transparent text-base leading-5 text-white hover:text-gray-700 uppercase font-bold hover:border-white focus:outline-none focus:text-gray-700 focus:border-white transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
