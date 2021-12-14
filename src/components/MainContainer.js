import React, { useEffect, useRef } from 'react';
import DisplayCard from './DisplayCard';
import InfoCard from './InfoCard';
import useElementOnScreen from '../hooks/useElementOnScreen';
import { setActiveContainer, setColors } from '../actions';
import { connect } from 'react-redux';

const MainContainer = (props) => {
    

    const isVisible = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: .6
      }, props.scrollRef)

    useEffect(() => {

        if (isVisible === true) {
    
            console.log(props.sectionName, isVisible)
            console.log('colors', props.colors)
            props.setActiveContainer(props.sectionName, props.colors)
            // props.setColors(props.colorScheme)
        }

    }, [isVisible])

    return (
        <div
            className={`${props.sectionName} h-screen md:flex snap-start`}
            id={props.sectionName}
            ref={props.scrollRef}
        >

            <InfoCard
                title={props.title}
                colors={props.colors}
            />

            <DisplayCard
                data={props.data}
                component={props.component}
                colors={props.colors}
            />
        </div>
    )
}

export default connect(null, {setActiveContainer, setColors})(MainContainer);