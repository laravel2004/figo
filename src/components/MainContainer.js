import React, { useState } from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Card from "./Card";
import History from "./History";

import Menu from './../assets/menu.png';
import Star from './../assets/Star.png'

import DBase from './../base/database.json'
import DBase1 from './../base/database1.json'
import DBase2 from './../base/database2.json'
import New from "./New";

const MainContainer = () => {
    const [value, setValue] = useState(DBase);

    const handleBreakfast = (e) => {
        e.preventDefault()
        setValue(DBase1);    
    }

    const handleLunch = (e) => {
        e.preventDefault()
        setValue(DBase2);  
    }

    const handleDefault = (e) => {
        e.preventDefault()
        setValue(DBase);
    }

    return(
        <div className="mx-4 md:mx-10 lg:mx-56">
            <Hero />
            <Welcome />

            <div className="md:mt-36 mt-14" id="service">
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
                        padding = 'pb-5'
                        bg = 'bg-slate-100 shadow-xl'
                    />
                    <Card 
                        image = {Menu}
                        imageWidth = 'w-20'
                        title = 'Various Menu'
                        des = 'etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipnum nec commodo'
                        padding = 'pb-5'
                        bg = 'shadow-xl'
                    />
                    <Card 
                        image = {Menu}
                        imageWidth = 'w-20'
                        title = 'Various Menu'
                        des = 'etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipnum nec commodo'
                        padding = 'pb-5'
                        bg = 'bg-slate-100 shadow-xl'
                    />
                </div>
            </div>
            <div className="md:mt-36 mt-14" id="menu">
                <div className="text-center font-semibold">
                    <h3 className="text-yellow-600">Browse</h3>
                    <h2 className="text-3xl">Explore Our Menu</h2>
                </div>
                <div className="flex mt-10 gap-4">
                    <div>
                        <ul className="md:flex hidden flex-col gap-9">
                            <li><a href="#" onClick={handleBreakfast} className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Breakfast</a></li>
                            <li><a href="#" onClick={handleLunch} className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Lunch</a></li>
                            <li><a href="#" onClick={handleBreakfast} className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Dinner</a></li>
                            <li><a href="#" onClick={handleDefault} className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Desert</a></li>
                            <li><a href="#" onClick={handleLunch} className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Soups</a></li>
                            <li><a href="#" onClick={handleBreakfast} className="p-4 focus:text-yellow-700 focus:border-l-2 focus:border-yellow-700">Drink</a></li>
                        </ul>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 md:gap-4 w-full">
                        <Card 
                            image = {value[0].image}
                            title = {value[0].title}
                            bg = 'bg-slate-50 shadow-xl'
                            des = {
                                <div>
                                    <div className="flex w-full justify-center ">
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
                            image = {value[1].image}
                            title = {value[1].title}
                            bg = 'bg-slate-50 shadow-xl'
                            des = {
                                <div>
                                    <div className="flex w-full justify-center ">
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
                            image = {value[2].image}
                            title = {value[2].title}
                            bg = 'bg-slate-50 shadow-xl'
                            des = {
                                <div>
                                    <div className="flex w-full justify-center ">
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
            <div>
                <History />
            </div>
            <div>
                <New />
            </div>
            <div>
                <div className="text-center mt-28" id="sign-in">
                    <h3 className="text-yellow-600">Subcription</h3>
                    <h2 className="text-3xl">Want to Get Update?</h2>
                </div>
                <div className="flex justify-center mt-14">
                    <input className="p-3 h-14 w-96 " placeholder="Enter Your Email Addres"/>
                    <button className="warna-bg p-4 rounded-lg text-sm text-slate-50">Send!</button>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;