import React from "react";

const FormInput = ({InputId, classes = '', ...props}) => {
    return (
        <input className={`form__input input ${classes}`} id={InputId} {...props}/>
    )
}
export default FormInput