import React from 'react'
import clsx from 'clsx'


export const Button = ({ type, variant, children, onClick, icon1: startIcon, icon2: endIcon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(" outline-none active:scale-[0.8]", {
        "flex items-center p-[12px] font-bold text-base gap-4 rounded-lg hover:bg-gray-200 bg-button_bg": variant == "logout",
        "bg-blue-400 text-base font-bold hover:text-white hover:bg-blue-700 py-2 px-2 w-[300px] rounded-xl": variant === "login",
        "bg-green_btn py-[10px] px-[20px] font-extrabold text-white rounded-lg hover:bg-green-800 text-end ml-[400px]": variant === "save_btn",
        "bg-green_btn py-[10px] px-[20px] font-extrabold text-white rounded-lg hover:bg-green-800 text-end":variant==="category_btn"
      })}
    >
      {startIcon ? startIcon : ""}
      <span> {children}</span>
      {endIcon ? endIcon : ""}
    </button >
  )
}
