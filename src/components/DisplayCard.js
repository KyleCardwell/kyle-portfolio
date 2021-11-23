import React from 'react';

const DisplayCard = (props) => {
    return (
        <div className="flex-1 flex overflow-hidden">
            
            <div className="w-2/3 pt-18 flex-1 flex flex-col overflow-y-scroll items-center bg-green-400 snap snap-y snap-mandatory">
                <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-blue-500 snap-start">
                    full-stack
                    <br />
                    web developer
                </section>

                {props.data.map(proj => {
                    return (
                        <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-blue-500 snap-start">
                            <img src={proj.photos[0]}/>
                            <h3 className="">{proj.projectName}</h3>
                            <p>{proj.showcase}</p>
                        </section>
                    )
                })}
                {/* <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-white snap-start">
                    full-stack
                    <br />
                    web developer
                </section>
                <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-red-500 snap-start">
                    full-stack
                    <br />
                    web developer
                </section>
                <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-yellow-500 snap-start">
                    full-stack
                    <br />
                    web developer
                </section>

                <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-white snap-start">
                    full-stack
                    <br />
                    web developer
                </section>
                <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-red-500 snap-start">
                    full-stack
                    <br />
                    web developer
                </section>
                <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-yellow-500 snap-start">
                    full-stack
                    <br />
                    web developer
                </section>
                <section className="pt-96 flex-shrink-0 pl-2 text-8xl h-screen bg-white snap-start">
                    full-stack
                    <br />
                    web developer
                </section> */}
                
            </div>
        </div>
    )
}

export default DisplayCard