import React from "react";

import Pizza from './../assets/Pizza.png'

const Hero = () => {
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 justify-around gap-4 mt-10">
            <div className="mt-14">
                <h1 className="font-medium text-5xl">All Good Taste Food With Figo.</h1>
                <p className="mt-4 text-sm">Quikly predominate standart compliant architecture and may have prospective internal or organic source</p>
                <div className="flex justify-start mt-5 gap-3">
                    <input placeholder="Input Your Addres" className="p-2 shadow-md border-0 outline outline-offset-1 outline-slate-50 rounded-lg w-64 " />
                    <button className="warna-bg p-3 rounded-lg text-slate-50 font-medium">Get Started</button>
                </div>
            </div>
            <div className="mt-10 md:mt-0">
                <img src={Pizza} />
            </div>
        </div>
    );

}

export default Hero;