import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Navbar";
import { capitalize } from "@/Utils/function";

export default function Homepage(props) {
    return (
        <>
            <Head title="Homepage" />
            <div className="mx-auto w-1/2 mt-10 space-y-4">
                <div className="text-center font-bold text-2xl">
                    Welcome, {capitalize(props.auth.user.name)}
                </div>
                <form action="/logout" method="get">
                    <input type="hidden" name="_token" value={csrf_token} />
                    <button className=" bg-blue-500 rounded-md text-white w-[130px] h-[41px] font-semibold text-base ">
                        Logout
                    </button>
                </form>
            </div>
        </>
    );
}
