import React from "react";
import Chef from './../assets/Chef.png'

const Welcome = (props) => {
    return(
        <div className="md:mt-36 mt-14" id="home">
            <div>
                <h3 className="text-center text-yellow-600 font-semibold">Welcome</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
                <div>
                    <img src={Chef} />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">Welcome to Figo Restaurant</h2>
                    <p className="mt-5 text-base">Quickly predominate standart compliants architectures and prospective interval or "organic" source. Synergistically mesh quality quality vectors for one-to-one leadership. <br /><br /> Quickly predominate standart compliants architectures and prospective interval or "organic" source. Synergistically mesh quality quality vectors for one-to-one leadership.</p>
                    <button className="mt-5 warna-bg p-4 rounded-lg text-sm text-slate-50" onClick={(e) => {e.preventDefault(); window.location.replace("/#history")}}>
                        Explore Our Story
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Welcome;