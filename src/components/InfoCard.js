import React from 'react';

const InfoCard = (props) => {
    return (
        <div className="fixed w-screen h-12 md:w-1/3 md:h-screen flex justify-end items-center bg-yellow-500 sticky">
            <div className="text-center md:text-right pr-2 text-2xl md:text-8xl">
                {props.title.toUpperCase()}
            </div>
        </div>
    )
}

export default InfoCard