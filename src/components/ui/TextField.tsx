import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface TextFieldProps {
    list?: string
    id?: string
    type?: React.HTMLInputTypeAttribute | string | undefined
    label?: string;
    name?: string;
    hintText?: string;
    required?: boolean;
    defaultValue?: string | number | readonly string[] | undefined
    readonly?: boolean;
    register?: UseFormRegister<FieldValues>;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    autocomplete?: string;
    prefixIcon?: string;
    value?: string | number;
    onClick?: (e: any) => void
}

interface TextFieldTypes {
    options: TextFieldProps
}
const TextField: React.FC<TextFieldTypes> = (
    { options }
) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        options.onChange && options.onChange(e)
    }

    const handleClick = (e: any) => {
        options.onClick && options.onClick(e)
    }


    return (
        <label htmlFor={options.label}>
            <h3 className="text-slate-300 font-semibold">{options.label}</h3>
            <div className="flex items-center outline-0 focus-within:shadow-blue-900 focus-within:shadow-lg border transition-all duration-300 border-slate-300 rounded-md w-full bg-white py-2 px-2">
                <i className={`${options.prefixIcon} text-slate-400`}></i>
                {options.type === "textarea" ? <textarea
                    className="w-full outline-none ml-2" placeholder={options.hintText} minLength={3} /> : <input
                    id={options.id}
                    type={options.type}
                    placeholder={options.hintText}
                    required={options.required}
                    defaultValue={options?.defaultValue}
                    className="w-full outline-none bg-transparent ml-2"
                    readOnly={options.readonly}
                    list={options.list}
                    {...(options.register && options.name && options.register(options.name))}
                    onChange={(e) => handleChange(e)}
                    autoComplete={options.autocomplete}
                    onClick={(e) => handleClick(e)}

                />}
            </div>
        </label>
    );
};

export default TextField;
