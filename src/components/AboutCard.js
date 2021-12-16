import React from 'react';
import { connect } from 'react-redux';

const AboutCard = (props) => {

    console.log(props.colors)

    return(
        <section className={'w-full p-12' + ' bg-' + props.colors.background + ' text-' + props.colors.textColor}>
            <div className='h-full flex justify-center items-center'>
                {/* After earning my BofA in Industrial Design at Brigham Young University, I went to work as a draftsman for a custom cabinetry company.  As different technical needs arose in the company, I was able to fill those needs with  */}

                <div className="text-2xl">
                    
                    I've been told I'm "too damn efficient."
                </div>
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