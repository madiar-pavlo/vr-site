import React from "react";
import FormInput from "../FormInput/FormInput";
import InputLabel from "./InputLabel";
const InputWrapper = (props) => {
    const { state, setState, item, className = ''} = props
    const { id, title, type, pattern } = item
    return (
        <div className={`form__cell form__cell--${className} form__${id}`}>
            <FormInput 
                type={type ? type : 'text'}
                pattern={pattern ? pattern : ''}
                InputId={id}
                value={state[id]} 
                placeholder={title}
                onChange={e => setState({...state, [id]: e.target.value})}
                required={true}
                />
            <InputLabel>
                {title}
            </InputLabel>
        </div>
    )
}

export default InputWrapper