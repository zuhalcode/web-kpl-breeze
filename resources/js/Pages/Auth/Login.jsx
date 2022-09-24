import React from "react";
import FormInput from "@/Components/FormInput";

export default function Login({ auth, notify }, props) {
    console.log(props);
    return (
        <>
            <form
                action="/login"
                method="POST"
                className={`${
                    auth === "login" ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
                }`}
            >
                <h2 className="text-3xl font-bold text-[#444] mb-[10px]">
                    Sign In
                </h2>
                <p
                    className={`font-semibold ${
                        notify && notify.split(" ").includes("token")
                            ? "text-red-500"
                            : "text-green-600"
                    }  text-[18px] text-center w-[400px]`}
                >
                    {notify}
                </p>

                <input type="hidden" name="_token" value={csrf_token} />
                <FormInput placeholder={"Email"} svg="user" type="email" />
                <FormInput
                    placeholder={"Password"}
                    svg="lock"
                    type="password"
                />

                <button className="px-3 py-2 hover:bg-[#4d84e2] bg-[#5995fd] text-white uppercase font-bold w-[350px] rounded-md mx-auto">
                    Login
                </button>

                <a
                    href="forgot-password"
                    className="text-blue-600 hover:underline mx-auto mt-1"
                >
                    Forgot Password?
                </a>
            </form>
        </>
    );
}
