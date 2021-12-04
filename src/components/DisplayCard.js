import React from 'react';

const DisplayCard = (props) => {

    console.log(props)
    return (

        <div className="h-full w-screen md:w-2/3 flex-1 flex overflow-hidden">
            {<props.component data={props.data}/>}
        </div>

        // <div className="flex-1 flex overflow-hidden">

        //     <div className="w-2/3 pt-18 flex-1 flex flex-col overflow-y-scroll items-center bg-green-400 snap snap-y snap-mandatory">

        //         {props.data ? props.data.map(proj => {
        //             return (
        //                 <section className="pt-24 flex-shrink-0 pl-2 text-8xl h-screen bg-red-500 snap-start">
        //                     <div className="w-1/2">
        //                         <img className="object-contain" src={proj.photos[0]}/>                            
        //                     </div>
        //                     <h3 className="text-3xl">{proj.projectName}</h3>
        //                 </section>
        //             )
        //         }) : ""}
                
        //     </div>
        // </div>
    )
}

export default DisplayCard