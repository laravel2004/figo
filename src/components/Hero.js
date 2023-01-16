import React, { useState } from "react";
import MyModal from "./Modal";

import Pizza from './../assets/Pizza.png'

const Hero = (props) => {

    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 justify-around gap-4 md:mt-14 mt-5" id="hero">
            <div className="mt-14">
                <h1 className="font-medium text-5xl">All Good Taste Food With Figo.</h1>
                <p className="mt-4 text-sm">Quikly predominate standart compliant architecture and may have prospective internal or organic source</p>
                <MyModal
                    title =" You're Welcome!"
                    body = {`welcome to in Figo. in there you will buy food and drink with price low budget`}
                />
            </div>
            <div className="mt-10 md:mt-0">
                <img src={Pizza} />
            </div>
        </div>
    );

}

export default Hero;