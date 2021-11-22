import React from 'react';
import DisplayCard from './DisplayCard';
import InfoCard from './InfoCard';

const MainContainer = (props) => {
    
    return (
        <div className="h-screen flex bg-yellow-100 snap-start" id={props.sectionName}>
            <InfoCard
                title={props.title}
            />
            <DisplayCard />
        </div>
    )
}

export default MainContainer