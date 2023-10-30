import React from "react"

export default function Header() {
    return (
        <>
            <div className="m-auto flex justify-around items-center gap-2 w-[50%] py-3 flex-wrap">
                <header>
                    <h1 className="text-[2rem] font-bold cursor-pointer">FRIENDS DATABASE</h1>
                </header>
                <nav className="flex gap-2 justify-around items-center flex-wrap">
                    <button className="bg-black text-white font-bold px-2 py-3 hover:bg-gray-400 hover:text-black">LOGIN.</button>
                    <button className="bg-black text-white font-bold px-2 py-3 hover:bg-gray-400 hover:text-black">FRIENDLIST.</button>
                    <button className="bg-black text-white font-bold px-2 py-3 hover:bg-gray-400 hover:text-black">ADDFRIEND.</button>
                    <button className="bg-black text-white font-bold px-2 py-3 hover:bg-gray-400 hover:text-black">LOGIN</button>
                </nav>
            </div>
            <hr className="bg-black w-screen h-1"></hr>
        </>
    )
}