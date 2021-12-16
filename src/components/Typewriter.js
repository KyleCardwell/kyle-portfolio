import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const words = [
    {
        topic:"LEGO.",
        message:"Usually spaceships... mostly Star Wars"
    },
    {
        topic:"food.",
        message:"commonly known as 'cooking'"
    },
    {
        topic:"websites.",
        message:"That's probably why you're here, huh?"
    },
]

const Typewriter = (props) => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true); 
    const [messageIndex, setMessageIndex] = useState(0);
    const [mesReverse, setMesReverse] = useState(false)

    //blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink(!blink)
        }, 500)
        return () => clearTimeout(timeout2)
    }, [blink])

    //typewriting
    useEffect(() => {

        if (index === words.length - 1 && subIndex < 0 && reverse) {
            setTimeout(() => {
                setReverse(false)
                setIndex(0)
            }, 300)
            return
        }

        if (index < words.length && subIndex === words[index].topic.length && !reverse) {
            setTimeout(() => {
                setReverse(true)
            }, 2250)
            return
        }

        if (index < words.length && subIndex < 0 && reverse) {
            setTimeout(() => {
                setReverse(false)
                setIndex(index + 1)
            }, 300)
            return
        }

        const interval = setInterval(() => {
            setSubIndex(subIndex + (reverse ? -1 : 1))
        }, Math.random() * (150 - 75) + 75)

        
        return () => clearInterval(interval)

    }, [subIndex, index, reverse])

    
    // useEffect(() => {

        
    //     if (subIndex === words[index].topic.length && messageIndex <= 0 && mesReverse) {
    //         setMesReverse(false)
    //         return
    //     }
        
    //     if (messageIndex === words[index].message.length && !mesReverse) {
    //         setTimeout(() => {

    //             setMesReverse(true)

    //         }, 1000)

    //         return
    //     }

        
    //     const intervalMessage = setInterval(() => {

    //         let counter = 0
    //         let complete = 0

    //         if (reverse && messageIndex === 0) {
    //             counter = 0
    //             complete = 1
    //         } else if (complete !== 1 && messageIndex > 0 && mesReverse) {
    //             counter = -1
    //         } else if (complete !== 1 && messageIndex < words[index].message.length && !mesReverse) {
    //             counter = 1
    //         }
    //         // setMessageIndex(messageIndex + (mesReverse && messageIndex > 0 ? -1 : messageIndex < words[index].message.length ? 1 : 0))
    //         setMessageIndex(messageIndex + counter)
    //     }, 5)
        
    //     return () => clearInterval(intervalMessage)

    // }, [subIndex, messageIndex, mesReverse])


    return(
        <div className={"w-full" + " text-" + props.colorScheme.textColor}>
            <div className="transform -translate-y-28 md:transform-none">
                <div className="flex w-full text-3xl md:text-6xl">
                    <div className="w-1/2 text-right">
                        <h2>
                            I build&nbsp;
                        </h2>

                    </div>
                    <h2>
                        {`${words[index].topic.substring(0, subIndex + 1)}${blink ? "|" : ""}`}
                    </h2>
            
                </div>
                <div className="text-center text-2xl md:text-3xl pt-5 h-2.5">
                    {subIndex === words[index].topic.length ? `(${words[index].message})` : "" }
                    {/* {subIndex === words[index].topic.length ? `(${words[index].message.substring(0, messageIndex + 1)})` : "" } */}
                </div>

            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return({
      colorScheme: state.colorScheme
    })
  }
  
  export default connect(mapStateToProps)(Typewriter);