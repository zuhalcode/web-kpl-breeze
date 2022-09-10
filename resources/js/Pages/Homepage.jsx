import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Navbar";

export default function Homepage(props) {
    const capitalize = (string) => {
        return string
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
            .join(" ");
    };
    return (
        <>
            <Head title="Homepage" />
            <Navbar />
            <div className="">Welcome, {capitalize(props.auth.user.name)}</div>
            <form action="/logout" method="get">
                <input type="hidden" name="_token" value={csrf_token} />
                <button className="px-3 py-2 bg-blue-500 text-white uppercase">
                    Logout
                </button>
            </form>
        </>
    );
}
