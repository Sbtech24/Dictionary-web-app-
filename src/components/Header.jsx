import { useContext, useState } from "react"


import "./Header.css"
import { ThemeContext } from "./ThemeContext"



export default function Header({logo,arrow,moon}){
    const {toggleTheme} = useContext(ThemeContext)
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
            <img src={moon} onClick={toggleTheme} alt="" />
        </div>
        </div>
        </header>
    )
}