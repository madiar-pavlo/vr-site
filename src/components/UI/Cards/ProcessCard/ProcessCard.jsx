import React, { useContext } from "react";
import { Context } from "../../../../context/Context";

const ProcessCard = ({card, index, ...props}) => {
    const { isTablet } = useContext(Context)
    const titleElements = card.title.split(' ')
    return (
        <li {...props} className='process__item'>
            <div className="process__number">
                0{++index}
            </div>
            <h3 className={`process__title ${isTablet ? ' process__title--slider' : ''}`}>
                {titleElements.map((element, index) => {
                    return (
                        index === card.break
                        ?
                        <>
                            {element}<br/>
                        </>
                        :
                        `${element} `
                    )
                })}
            </h3>
        </li>
    )
}
export default ProcessCard