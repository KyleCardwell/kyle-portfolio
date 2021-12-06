import React, { useState, useEffect } from 'react';

const words = [
    {
        topic:"LEGO",
        message:"Usually spaceships... mostly Star Wars"
    },
    {
        topic:"food",
        message:"commonly known as 'cooking'"
    },
    {
        topic:"websites",
        message:"That's probably why you're at my site..."
    },
]

const Typewriter = (props) => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true); 

    //blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink(!blink)
        }, 500)
        return () => clearTimeout(timeout2)
    }, [blink])

    //typewriting
    useEffect(() => {

        if (index === words.length - 1 && subIndex === 0 && reverse) {
            setReverse(false)
            setIndex(0)
            return
        }

        if (index < words.length && subIndex === words[index].topic.length && !reverse) {
            setTimeout(() => {
                setReverse(true)
            }, 3000)
            return
        }

        if (index < words.length && subIndex === 0 && reverse) {
            setReverse(false)
            setIndex(index + 1)
            return
        }

        const interval = setInterval(() => {
            setSubIndex(subIndex + (reverse ? -1 : 1))
        }, 200)

        return () => clearInterval(interval)
    }, [subIndex, index, reverse])

    return(
        <div className="w-full">

            <div className="flex w-full">
                <div className="w-1/3 text-right">
                    <h2>
                        I build&nbsp;
                    </h2>

                </div>
                <h2>
                    {`${words[index].topic.substring(0, subIndex + 1)}${blink ? "|" : ""}`}
                </h2>
        
            </div>
            <div className="text-center">
                {`(${words[index].message})`}
            </div>
            
        </div>
    )
}

export default Typewriter