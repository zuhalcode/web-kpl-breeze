import React from "react";

export default function LoginMessage({ auth = "", clickOnSignIn }) {
    return (
        <>
            <div className="flex flex-col items-end justify-around text-center z-[6] right-panel">
                <div className="content space-y-2 mt-5">
                    <h3 className="font-bold leading-none text-xl">
                        One of us ?
                    </h3>
                    <p className="text-base px-2 py-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum laboriosam ad deleniti.
                    </p>
                    <button
                        className="m-0 bg-none border-white border-2 w-[130px] h-[41px] font-semibold text-base "
                        id="sign-in-btn"
                        onClick={clickOnSignIn}
                    >
                        Sign in
                    </button>
                </div>
                <img
                    src="med-player.svg"
                    className="image w-[420px] mt-5 "
                    alt=""
                />
            </div>
        </>
    );
}
