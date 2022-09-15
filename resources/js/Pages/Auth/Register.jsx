import React from "react";
import FormInput from "@/Components/FormInput";

export default function Register({ auth }) {
    return (
        <>
            <form
                action="/register"
                method="POST"
                className={`${
                    auth === "login" ? "opacity-0 z-[1]" : "opacity-100 z-[2]"
                }`}
            >
                <h2 className="text-3xl font-bold text-[#444] mb-[10px]">
                    Sign Up
                </h2>

                <input type="hidden" name="_token" value={csrf_token} />
                <FormInput placeholder={"Username"} svg={"user"} />
                <FormInput placeholder={"Email"} svg={"user"} />
                <FormInput placeholder={"Password"} svg={"lock"} />

                <button className="px-3 py-2 hover:bg-[#4d84e2] bg-[#5995fd] text-white uppercase font-bold w-[350px] rounded-md mx-auto">
                    Login
                </button>
            </form>
        </>
    )
}
