import React from "react";

const Card = (props) => {

    return(
        <div className={`text-center py-2 rounded-md md:rounded-lg ${props.bg} cursor-pointer `}>
            <div className="flex justify-center pt-10">
                <img src={props.image} className={props.imageWidth} />
            </div>
            <div>
                <h4 className="text-sm md:text-base mt-2">{props.title}</h4>
                <div className={`text-sm md:text-base ${props.padding} mt-2`}>{props.des}</div>
            </div>
        </div>
    );
}

export default Card;