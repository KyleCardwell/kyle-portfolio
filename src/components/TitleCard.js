import React from "react";
import Typewriter from "./Typewriter";

const TitleCard = (props) => {

  return (
    <div className={'flex-1 flex flex-col justify-center items-center ' + 'bg-' + props.colors.background}>
      <Typewriter />
    </div>
  );
};


export default TitleCard;
