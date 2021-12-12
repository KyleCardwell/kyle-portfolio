import React from 'react';

const DisplayCard = (props) => {

    return (

        <div className="h-full w-screen md:w-2/3 flex-1 flex overflow-hidden">
            {<props.component data={props.data} colors={props.colors}/>}
        </div>

    )
}

export default DisplayCard