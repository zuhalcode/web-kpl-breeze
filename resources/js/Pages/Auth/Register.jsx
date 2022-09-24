import React from "react";
import FormInput from "@/Components/FormInput";
import InputOnlyNumber from "@/Components/InputOnlyNumber";

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
                <FormInput placeholder={"Name"} svg={"user"} />
                <InputOnlyNumber placeholder="Phone" />
                <FormInput placeholder={"Email"} svg={"user"} type="email" />
                <FormInput
                    placeholder={"Password"}
                    svg={"lock"}
                    type="password"
                />

                <button className="px-3 py-2 hover:bg-[#4d84e2] bg-[#5995fd] text-white uppercase font-bold w-[350px] rounded-md mx-auto">
                    Register
                </button>
            </form>
        </>
    );
}
