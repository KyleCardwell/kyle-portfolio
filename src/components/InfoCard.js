import React from 'react';

const InfoCard = (props) => {
    return (
        <div className="fixed w-screen h-12 md:w-24 md:h-screen flex justify-end items-center pr-2.5 bg-yellow-500 sticky">
            <div className="sectionTitle ">
                <h3 className="sectionTitleText text-right">
                    {props.title.toUpperCase()}
                    
                </h3>
            </div>
        </div>
    )
}

export default InfoCard