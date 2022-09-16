import React from "react";
import { Head } from "@inertiajs/inertia-react";
import FormInput from "@/Components/FormInput";
import SubmitButton from "@/Components/SubmitButton";

export default function ForgotPassword(props) {
    return (
        <div>
            <Head title="Forgot Password" />
            <div className="w-1/2 px-5 py-3 flex flex-col items-center border mx-auto mt-5 rounded-md bg-gray-200">
                <div className="font-bold text-2xl">Reset Password Page</div>
                <p
                    className={`${
                        props.email.success
                            ? "text-green-600 text-[16px]"
                            : props.errors.error && "text-red-500"
                    } font-semibold`}
                >
                    {props.email.success || props.errors.error}
                </p>
                <form
                    action="/forgot-password"
                    method="POST"
                    className="flex flex-col w-[500px] mb-2"
                >
                    <input type="hidden" name="_token" value={csrf_token} />
                    <FormInput placeholder={"Email"} svg="user" />
                    <SubmitButton>Send Reset Password Link</SubmitButton>
                </form>
            </div>
        </div>
    );
}
