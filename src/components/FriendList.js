import React from "react"

export default function FriendList() {
    return (
        <div className=" m-auto w-[50%] pt-12">
            <h1 className="text-[4rem] font-black">FRIENDS LIST</h1>
            <div className="flex flex-col gap-2 login justify-center items-start">
                <h2 className="text-[2rem] font-bold">-JOEY TRIBBIANI - JOEY@FRIENDS.COM</h2>
                <h2 className="text-[2rem] font-bold">-RACHEL GREEN - RACHEL@FRIENDS.COM</h2>
                <h2 className="text-[2rem] font-bold">-CHANDLER BING - CHANDLER@FRIENDS.COM</h2>
                <h2 className="text-[2rem] font-bold">-ROSS GELLER - ROSS@FRIENDS.COM</h2>
            </div>
        </div>
    )
}