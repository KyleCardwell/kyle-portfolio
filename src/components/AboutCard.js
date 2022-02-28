import React from 'react';
import { connect } from 'react-redux';

const AboutCard = (props) => {

    console.log(props.colors)

    return(
        <section className={'w-full p-10 md:p-36 ' + ' bg-' + props.colors.background + ' text-' + props.colors.textColor}>
            <div className='flex flex-col h-full flex items-center'>


                <p className="text-xl md:text-2xl whitespace-pre-wrap">

                    {`I'm a full-stack web developer with a background in furniture manufacturing. I have always kept the attitude and belief that, "If I can think it, I can make it!" That's the mindset I had while playing with LEGO as a kid (and, let's be real, probably yesterday). It's the same mindset that carried me through the Industrial Design program at BYU. And it's the mindset that motivated me to actually become a full-stack web developer.`}

                    <br />
                    <br />
                                        
                    {`I have always liked making useful things.  Now I do that with code.`}
                </p>
                                        
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return({
        colorScheme: state.colorScheme
    })
}

export default connect(mapStateToProps)(AboutCard)