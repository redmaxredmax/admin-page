import React from 'react'
import clsx from 'clsx'


export const Input = React.forwardRef(
    ({ name, type, id, onChange, placeholder, value, label, error, helperText, className, variant, required, defaultValue, ...resTprop }, ref) => {
        return (
            <div className='flex flex-col'>
                {label && <label className='text-base font-bold ml-2' htmlFor={id}>{label}</label>}
                <input {...resTprop} className={clsx(" outline-none ", {
                    "bg-gray-200 py-3 rounded-xl px-4 w-[300px]": variant === "input",
                    "bg-input_gray w-[764px] rounded-sm p-3": variant === "primary",
                    "bg-input_gray w-[362px] rounded-sm p-3": variant === "input_small",
                    "bg-input_gray w-[248px] rounded-sm p-3": variant === "input_extrasmall",
                    "bg-transparent w-[350px]": variant == "search",
                    "bg-gray-300 py-3 rounded-xl px-4 w-[500px]": variant === "category"
                }, className, error && "border-2 border-red-400")} ref={ref} placeholder={placeholder} defaultValue={defaultValue} id={id} name={name} onChange={onChange} required={required} value={value} type={type} />
                {helperText && <p className='text-red-400 w-[248px] ml-2 font-medium text-sm'>{helperText}</p>}
            </div>
        )
    }

)