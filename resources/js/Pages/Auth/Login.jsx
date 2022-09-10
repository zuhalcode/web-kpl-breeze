import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Navbar";

export default function Login() {
    const handleOnsubmit = () => {
        console.log("zuhal", csrf_token);
    };
    return (
        <>
            <Head title="Login" />
            <Navbar />
            <div className="">Login Page</div>
            <form
                action="/login"
                method="POST"
                className="flex flex-col w-[500px] m-5"
                onSubmit={handleOnsubmit}
            >
                <input type="hidden" name="_token" value={csrf_token} />
                <input type="text" placeholder="Email" name="email" />
                <input type="text" placeholder="Password" name="password" />
                <button className="px-3 py-2 bg-blue-500 text-white uppercase font-semibold">
                    submit
                </button>
            </form>
        </>
    );
}
