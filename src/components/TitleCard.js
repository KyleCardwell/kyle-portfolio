import React from "react";
import Typewriter from "./Typewriter";

const TitleCard = (props) => {

  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-green-400">
      <Typewriter />
      {/* <div className="flex">
                <h2>I build

                <span>LEGO</span>
                </h2>
                
            </div> */}
    </div>
  );
};

export default TitleCard;
