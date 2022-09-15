import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import Login from "./Auth/Login";
import RegisterMessage from "@/Components/RegisterMessage";
import LoginMessage from "@/Components/LoginMessage";
import Register from "./Auth/Register";

export default function Home() {
    const [state, setState] = useState({ auth: "login" });

    const clickOnSignUp = () => {
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        setState({ auth: "register" });
    };

    const clickOnSignIn = () => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const container = document.querySelector(".container");
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });

        setState({ auth: "login" });
    };

    return (
        <AppLayout>
            <div className="absolute w-full h-full top-0 left-0">
                <div className="absolute top-1/2 left-[75%] w-1/2 transition-all duration-1000 ease-in-out grid z-[5] signin-signup">
                    {/* Login Form */}
                    <Login auth={state.auth} />
                    {/* End Login Form */}

                    {/* Register Form */}
                    <Register auth={state.auth} />
                    {/* End Register Form */}
                </div>
            </div>

            <div className="absolute h-full w-full top-0 left-0 grid panels-container">
                {/* RegisterMessage */}
                <RegisterMessage clickOnSignUp={clickOnSignUp} />
                {/* End RegisterMessage */}

                {/* Login Message */}
                <LoginMessage clickOnSignIn={clickOnSignIn} />
                {/* End Login Message */}
            </div>
        </AppLayout>
    );
}
