import React from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Card from "./Card";

import Menu from './../assets/menu.png';
import Salmon from './../assets/Salmon.png'
import Star from './../assets/Star.png'

const MainContainer = () => {

    return(
        <div className="mx-4 md:mx-10 lg:mx-56">
            <Hero />
            <Welcome />

            <div className="md:mt-36 mt-14">
                <div className="text-center font-semibold">
                    <h3 className="text-yellow-600">Reason</h3>
                    <h2 className="text-3xl">Why Choose Us?</h2>
                </div>
                <div className="grid md:grid-cols-3 mt-4 gap-6">
                    <Card 
                        image = {Menu}
                        imageWidth = 'w-20'
                        title = 'Various Menu'
                        des = 'etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipnum nec commodo'
                    />
                    <Card 
                        image = {Menu}
                        imageWidth = 'w-20'
                        title = 'Various Menu'
                        des = 'etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipnum nec commodo'
                    />
                    <Card 
                        image = {Menu}
                        imageWidth = 'w-20'
                        title = 'Various Menu'
                        des = 'etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipnum nec commodo'
                    />
                </div>
            </div>
            <div className="md:mt-36 mt-14">
                <div className="text-center font-semibold">
                    <h3 className="text-yellow-600">Browse</h3>
                    <h2 className="text-3xl">Explore Our Menu</h2>
                </div>
                <div className="flex mt-10 gap-4">
                    <div>
                        <ul className="md:flex hidden flex-col gap-9">
                            <li><a href="#" className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Breakfast</a></li>
                            <li><a href="#" className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Breakfast</a></li>
                            <li><a href="#" className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Breakfast</a></li>
                            <li><a href="#" className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Breakfast</a></li>
                            <li><a href="#" className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Breakfast</a></li>
                            <li><a href="#" className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Breakfast</a></li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-2 md:gap-4">
                        <Card 
                            image = {Salmon}
                            title = 'Salmon Steak'
                            des = {
                                <div>
                                    <div className="flex w-full justify-center ">
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                    </div>
                                    <p>$ 100.00</p>
                                </div>
                            }
                        />
                        <Card 
                            image = {Salmon}
                            title = 'Salmon Steak'
                            des = {
                                <div>
                                    <div className="flex w-full justify-center ">
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                    </div>
                                    <p>$ 100.00</p>
                                </div>
                            }
                        />
                        <Card 
                            image = {Salmon}
                            title = 'Salmon Steak'
                            des = {
                                <div>
                                    <div className="flex w-full justify-center ">
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                        <img src={Star} className='w-3 md:w-5' />
                                    </div>
                                    <p>$ 100.00</p>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;