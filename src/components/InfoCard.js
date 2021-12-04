import React from 'react';

const InfoCard = (props) => {
    return (
        <div className="w-1/3 fixed h-screen flex justify-end items-center bg-yellow-500 h-full sticky">
            <div className="text-right pr-2 text-8xl">
                {props.title.toUpperCase()}
            </div>
        </div>
    )
}

export default InfoCard