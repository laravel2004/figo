import React, { useState } from "react";
import {TbMenu2} from 'react-icons/tb'
import {ImCancelCircle} from 'react-icons/im'

const Navbar = (props) => {

    const [menu, setMenu] = useState(false);

    const handleMenu = (e) => {
        e.preventDefault();
        setMenu(!menu)
    }

    return(
        <div className="flex justify-around md:h-14 fixed w-full pb-2 shadow-md backdrop-blur-sm">
            <div className="w-14 mt-2">
                {props.childrenLogo}
            </div>
            <div className="absolute md:relative text-white md:text-slate-800">
                <ul className={`flex  gap-4 justify-center md:justify-around items-center flex-col md:flex-row ease-in duration-300 md:w-full md:h-full w-screen h-screen md:translate-y-0 warna-bg opacity-60 md:bg-transparent ${menu ? 'translate-y-0' : '-translate-y-[1000px]'}`}>
                    {props.children}
                </ul>
            </div>
                <button onClick={handleMenu} className='z-50 md:hidden w-10 flex items-center justify-center'>
                    {menu ? <ImCancelCircle /> : <TbMenu2 />}
                </button>
        </div>
    );

}

export default Navbar