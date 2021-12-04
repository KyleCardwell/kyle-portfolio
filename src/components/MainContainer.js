import React from 'react';
import DisplayCard from './DisplayCard';
import InfoCard from './InfoCard';

const MainContainer = (props) => {
    
    return (
        <div className="flex-row h-screen md:flex bg-yellow-100 snap-start" id={props.sectionName}>
            <InfoCard
                title={props.title}
            />
            <DisplayCard data={props.data} component={props.component}/>
        </div>
    )
}

export default MainContainer