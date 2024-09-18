import { fromDownAnimation, showAnimation } from "/src/animations/animations";
import { motion } from "framer-motion";
import React from "react";

const TitleWithArrow = ({boldText, thinText}) => {
    return (
        <div className={`title-with-arrow`}>
            <motion.h2 custom={1} variants={fromDownAnimation} className={`title-with-arrow__title`}>
                {boldText}<br/>
                <motion.span custom={2} variants={showAnimation} className={`title-with-arrow__thin title--thin`}>
                    {thinText}
                </motion.span>
            </motion.h2>
        </div>
    )
}

export default TitleWithArrow