import React from "react";
import Burger from './../assets/Burger.png'

const History = (props) => {
    return(
        <div className="md:mt-36 mt-14" id="history">
            <div>
                <h3 className="text-center text-yellow-600 font-semibold">History of Figo</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4">
                <div>
                    <h2 className="text-3xl font-semibold">We Cook Traditional & Family Recipes</h2>
                    <p className="mt-5 text-base">Quickly predominate standart compliants architectures and prospective interval or "organic" source. Synergistically mesh quality quality vectors for one-to-one leadership. <br /><br /> Quickly predominate standart compliants architectures and prospective interval or "organic" source. Synergistically mesh quality quality vectors for one-to-one leadership.</p>
                    <button className="mt-5 warna-bg p-4 rounded-lg text-sm text-slate-50">
                        Explore Our Story
                    </button>
                </div>
                <div>
                    <img src={Burger} />
                </div>
            </div>
        </div>
    );
}

export default History;