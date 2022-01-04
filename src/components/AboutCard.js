import React from 'react';
import { connect } from 'react-redux';

const AboutCard = (props) => {

    console.log(props.colors)

    return(
        <section className={'w-full p-10 md:p-36 ' + ' bg-' + props.colors.background + ' text-' + props.colors.textColor}>
            <div className='flex flex-col h-full flex items-center'>
                {/* After earning my BofA in Industrial Design at Brigham Young University, I went to work as a draftsman for a custom cabinetry company.  As different technical needs arose in the company, I was able to fill those needs with  */}

                <p className="text-xl md:text-2xl whitespace-pre-wrap">

                    {`If I can think it, I can make it!  That's the mindset I had while playing with LEGO as a kid (and, let's be real, probably yesterday).  It's the same mindset that carried me through earning my degree in Industrial Design from BYU.  And it's the same mindset that's motivated me to become a full-stack web developer.`}

                    <br />
                    <br />
                                        
                    {`I like making useful things.  Now I do that with code.`}
                </p>
 
                    {/* I've been told I'm "too damn efficient." */}
                                        
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