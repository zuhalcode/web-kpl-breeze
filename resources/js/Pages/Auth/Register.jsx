import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Navbar";

export default function Register() {
    return (
        <>
            <Head title="Register" />
            <Navbar />
            <div className="">Register Page</div>
            <form
                action="/register"
                method="POST"
                className="flex flex-col w-[500px] m-5"
            >
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button className="px-3 py-2 bg-blue-500 text-white uppercase font-semibold">
                    submit
                </button>
            </form>
        </>
    );
}
