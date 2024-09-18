import React from "react";
import TitleWithArrow from "../TitleWithArrow/TitleWithArrow";

const Represent = ({info, ...props}) => {
    return (
        <div {...props} className="represent">
            <TitleWithArrow boldText={info.boldText} thinText={info.thinText}/>
            <p>
                {info.text}
            </p>
        </div>
    )
}

export default Represent