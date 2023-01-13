import React from "react";

const Card = (props) => {

    return(
        <div className="text-center shadow-xl py-2 rounded-lg bg-slate-100">
            <div className="flex justify-center pt-10">
                <img src={props.image} className={props.imageWidth} />
            </div>
            <div>
                <h4>{props.title}</h4>
                <div>{props.des}</div>
            </div>
        </div>
    );
}

export default Card;