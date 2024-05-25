import { useContext, useState } from "react"


import "./Header.css"


export default function Header({logo,arrow,moon}){
   

    return(
        <header className="pb-5 mt-3">
            <div className="flex justify-between items-center ">
        <div>
            <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-around gap-16">
            {/* <div>
                <select name="fonts" id="fontbox" value={fontValue} onChange={(e)=>setFontValue(e.target.value)}>
                    <option value="Fraunces">Fraunces</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Poppins">Poppins</option>
                </select>
            </div> */}
            <img src={moon} alt="" />
        </div>
        </div>
        </header>
    )
}