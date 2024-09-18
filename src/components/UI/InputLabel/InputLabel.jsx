import React from "react";

const InputLabel = ({InputId, ...props}) => {
    return (
        <label className='visually-hidden' htmlFor={InputId} {...props}>
            {props.children}
        </label>
    )
} 
export default InputLabel