import React, { useState } from "react";
import FormInput from "@/Components/FormInput";
import InputOnlyNumber from "@/Components/InputOnlyNumber";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register({ auth }) {
    const [message, setMessage] = useState("");
    const [date, setDate] = useState(new Date());

    const passwordOnChange = (e) => {
        if (e.target.value.length < 8) {
            setMessage("Minimum 8 characters password required");
        } else setMessage("");
    };

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
                <div className=" w-[350px] my-[10px] h-[55px] rounded-md grid px-1 relative ">
                    <input
                        type="text"
                        placeholder="Birth date"
                        className="w-full rounded-md border-none text-base font-semibold bg-gray-100"
                        onFocus={(e) => (e.target.type = "date")}
                        required
                    />
                </div>
                <InputOnlyNumber placeholder="Phone" />
                <FormInput placeholder={"Email"} svg={"user"} type="email" />

                <FormInput
                    placeholder={"Password"}
                    svg={"lock"}
                    type="password"
                    handleOnChange={passwordOnChange}
                />

                {message && (
                    <p className="text-red-500 text-[14px] font-semibold mb-5 text-left -mt-2 w-[340px] ">
                        {message}
                    </p>
                )}

                <ReCAPTCHA
                    sitekey="6LfbQjQiAAAAAI1CRX5jpw3hRWLdID3krVj8lzeW"
                    onChange={(e) => console.log(e.target.value)}
                />
                <button className="px-3 mt-2 py-2 hover:bg-[#4d84e2] bg-[#5995fd] text-white uppercase font-bold w-[350px] rounded-md mx-auto">
                    Register
                </button>
            </form>
        </>
    );
}
