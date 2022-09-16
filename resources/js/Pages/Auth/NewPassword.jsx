import React from "react";
import { Head } from "@inertiajs/inertia-react";
import FormInput from "@/Components/FormInput";
import SubmitButton from "@/Components/SubmitButton";

export default function ResetPassword(props) {
    console.log(props);
    return (
        <div>
            <Head title="Forgot Password" />
            <div className="w-1/2 px-5 py-3 flex flex-col items-center border mx-auto mt-5 rounded-md bg-gray-200">
                <div className="font-bold text-2xl">
                    Confirm Your New Password
                </div>
                <p className={` text-red-500 font-semibold`}>
                    {props.errors.email}
                </p>
                <form
                    action="/confirm-password"
                    method="POST"
                    className="flex flex-col w-[500px] mb-2"
                >
                    <input type="hidden" name="_token" value={csrf_token} />
                    <input
                        type="hidden"
                        name="token"
                        value="2a1a52379dfe948f954e2ebacf95ad83873a62b9047ac0e544e80c59a48a1261"
                    />
                    <input type="hidden" name="email" value={props.email} />

                    <FormInput
                        placeholder={"Current Password"}
                        name="password"
                        svg="lock"
                        type="password"
                    />
                    <FormInput
                        placeholder={"New Password"}
                        svg="lock"
                        type="password"
                    />
                    <SubmitButton>Reset Password</SubmitButton>
                </form>
            </div>
        </div>
    );
}
