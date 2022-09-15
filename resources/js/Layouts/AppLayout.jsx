import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "./Navbar";

export default function AppLayout({ children, title = "Home" }) {
    return (
        <div className="container relative w-full min-h-screen overflow-hidden bg-white">
            <Head title={title} />
            {/* <Navbar /> */}
            {children}
        </div>
    );
}
