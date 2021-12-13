import React from 'react';

const InfoCard = (props) => {
    return (
        <div className={"fixed w-screen h-12 text-3xl md:w-24 md:h-screen flex justify-end items-end pr-8 sticky" + " bg-" + props.colors.textColor}>
            <div className="sectionTitle ">
                <h3 className={"sectionTitleText text-right " +  "text-" + props.colors.background}>
                    {props.title.toUpperCase()}
                    
                </h3>
            </div>
        </div>
    )
}

export default InfoCard