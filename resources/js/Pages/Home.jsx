import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Navbar";

export default function Home() {
    return (
        <>
            <Head title="Home Guest" />
            <Navbar />
            <div className="">Home Guest</div>
        </>
    );
}
