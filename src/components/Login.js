import React from "react"

export default function Login() {
    return (
        <div className="flex flex-col gap-2 login justify-center items-center pt-12">
            <h1 className="text-[4rem] font-black">LOGIN</h1>
            <div className="flex flex-col items-start gap-1">
                <label className="text-[1.5rem] font-bold" htmlFor="username">
                    USERNAME
                </label>
                <input className="bg-black text-white font-bold  text-[1.5rem] p-3 h-16 w-96" type="text" name="username"></input>
            </div>
            <div className="flex flex-col items-start gap-1">
                <label className="text-[1.5rem] font-bold" htmlFor="password">
                    PASSWORD
                </label>
                <input className="bg-black text-white font-bold text-[1.5rem] p-3 h-16 w-96" type="password" name="password"></input>
            </div>
            <button className="bg-black text-white h-16 w-96 font-bold text-[1.5rem]"> SUBMIT </button>
        </div>
    )
}