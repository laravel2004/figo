import React from "react";
import Card from "./Card";

import Food1 from './../assets/Food1.png'
import Food2 from './../assets/Food2.png'
import Food3 from './../assets/Food3.png'

const New = () => {
    return(
        <div className="mt-28" id="beli">
            <div className="text-center">
                <h3 className="text-yellow-600">News</h3>
                <h2 className="text-3xl">Laters News</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <Card 
                    image = {Food3}
                    imageWidth = 'w-full'
                    title = 'Spains Appetizer'
                    bg = 'bg-transparent'
                    des = {
                        <div className="w-full">
                            <p className="text-base text-start">Quikly predominate standart compliant architecture</p>
                            <div className="flex justify-start">
                                <a href="#" className="text-start text-yellow-700 font-semibold">Read More</a>
                            </div>
                        </div>
                    }
                />
                <Card 
                    image = {Food1}
                    imageWidth = 'w-full'
                    title = 'Spains Appetizer'
                    bg = 'bg-transparent'
                    des = {
                        <div className="w-full">
                            <p className="text-base text-start">Quikly predominate standart compliant architecture</p>
                            <div className="flex justify-start">
                                <a href="#" className="text-start text-yellow-700 font-semibold">Read More</a>
                            </div>
                        </div>
                    }
                />
                <Card 
                    image = {Food2}
                    imageWidth = 'w-full'
                    title = 'Spains Appetizer'
                    bg = 'bg-transparent'
                    des = {
                        <div className="w-full">
                            <p className="text-base text-start">Quikly predominate standart compliant architecture</p>
                            <div className="flex justify-start">
                                <a href="#" className="text-start text-yellow-700 font-semibold">Read More</a>
                            </div>
                        </div>
                    }
                />

            </div>
        </div>
    );
}

export default New;