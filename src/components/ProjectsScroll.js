import React from "react";
import { connect } from "react-redux";

const ProjectsScroll = (props) => {
  return (
    <div className="mt-18 pb-28 md:pb-0 flex-1 flex flex-col overflow-y-scroll items-center snap snap-y snap-mandatory">

      {props.data
        ? props.data.map((proj) => {
            return (
              <section className={"flex-shrink-0 pl-2 text-8xl snap-start" + " bg-" + props.colors.background} key={proj.projectID}>
                <div className={"m-12 flex flex-col lg:flex-row text-" + props.colors.textColor}>

                  <div className="w-full lg:w-1/3">
                    <div className="overflow-hidden">
                      <a className="" href={proj.externalLink} target="_blank" rel="noreferrer">
                        <img className="object-contain transform transition duration-500 hover:scale-125" src={proj.photos[0]} alt={"image of " + props.projectName}/>
                      </a>
                    </div>
                      
                    <h4 className="text-sm text-right">Click the image to visit the site</h4>

                  </div>


                  <div className="lg:pl-3 lg:w-1/3">
                    <h3 className="text-3xl">{proj.projectName}</h3>
                    <h4 className="text-lg">{proj.languages}</h4>
                    <h5 className="text-sm">{proj.about}</h5>

                  </div>

                </div>
              </section>
            );
          })
        : ""}
    </div>
  );
};

const mapStateToProps = state => {
  return({
    colorScheme: state.colorScheme
  })
}

export default connect(mapStateToProps)(ProjectsScroll);

