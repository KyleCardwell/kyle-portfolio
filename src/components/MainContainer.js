import React, { useRef } from 'react';
import DisplayCard from './DisplayCard';
import InfoCard from './InfoCard';
import useElementOnScreen from '../hooks/useElementOnScreen';

const MainContainer = (props) => {

    const isVisible = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: .2
      }, props.scrollRef)

    console.log(props.sectionName, isVisible)

    return (
        <div className={`${props.sectionName} flex-row h-screen md:flex bg-yellow-100 snap-start`} id={props.sectionName} ref={props.scrollRef}>
            <InfoCard
                title={props.title}
            />
            <DisplayCard data={props.data} component={props.component}/>
        </div>
    )
}

export default MainContainer