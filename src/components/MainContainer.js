import React from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";

const MainContainer = () => {

    return(
        <div className="mx-4 md:mx-10 lg:mx-56">
            <Hero />
            <Welcome />
        </div>
    );
}

export default MainContainer;