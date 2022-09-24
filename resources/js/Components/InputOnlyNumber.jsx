import { useRef, useState } from "react";

export default function InputOnlyNumber({ name, placeholder }) {
    const [phoneValue, setPhoneValue] = useState("");
    const [selectValue, setSelectValue] = useState("+62");

    const inputOnChange = (e) => {
        setPhoneValue(e.target.value.replace(/\D/g, ""));
    };
    const selectOnChange = (e) => {
        setSelectValue(e.target.value);
    };

    return (
        <div>
            <div className=" w-[350px] my-[10px] h-[55px] rounded-md grid px-1 relative ">
                <div className="flex space-x-2">
                    <div className="flex space-x-3">
                        <select
                            className=" rounded-md text-[19px] border-none pr-10 font-semibold bg-gray-100"
                            onChange={(e) => selectOnChange(e)}
                        >
                            <option className="" value="+62">
                                &#x1F1EE;&#x1F1E9;
                            </option>
                            <option value="+91">&#x1F1EE;&#x1F1F3;</option>
                            <option value="+1">&#x1F1FA;&#x1F1F8;</option>
                        </select>
                        <input
                            type="text"
                            name="country_code"
                            className="w-[50px] rounded-md border-none text-center text-base font-semibold bg-gray-100"
                            value={selectValue}
                            disabled
                            onChange={(e) => selectOnChange(e)}
                        />
                    </div>
                    <input
                        type="text"
                        name={name || placeholder.toLowerCase()}
                        className="w-full rounded-md border-none text-left text-base font-semibold bg-gray-100"
                        placeholder={placeholder}
                        autoComplete="none"
                        required
                        value={phoneValue}
                        onChange={(e) => inputOnChange(e)}
                    />
                </div>
            </div>
        </div>
    );
}
