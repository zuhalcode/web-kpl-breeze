import React from "react";

export default function RegisterMessage({ auth = "", clickOnSignUp }) {
    return (
        <>
            <div className="flex flex-col items-end justify-around text-center z-[6] left-panel">
                <div className="content space-y-2">
                    <h3 className="font-bold leading-none text-xl">
                        New here ?
                    </h3>
                    <p className="text-base px-2 py-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Debitis, ex ratione. Aliquid!
                    </p>
                    <button
                        className="m-0 bg-none border-white border-2 w-[130px] h-[41px] font-semibold text-base"
                        id="sign-up-btn"
                        onClick={clickOnSignUp}
                    >
                        Sign up
                    </button>
                </div>
                <img src="rocket.svg" className="image w-full -mt-10" alt="" />
            </div>
        </>
    );
}
