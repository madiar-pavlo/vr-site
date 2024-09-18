import React from "react";
import Represent from "../../../UI/Represent/Represent";
import MSlider from "../../..//Slider/Slider";
import { motion } from "framer-motion";

const info = {
    boldText: 'HOW WE BUILD',
    thinText: 'WITH HYDRA VR?',
    text: `Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          `
}

const cards = [
    {
        title: '3D Conception & Design',
        break: 1
    },
    {
        title: 'Interaction Design',
        break: 0
    },
    {
        title: 'VR World User Testing',
        break: 2
    },
    {
        title: 'Hydra VR Deploy',
        break: 1
    }
]

const Process = () => {
    return (
        <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true }} className="process">
            <Represent info={info}/>
            <div className="process__slider-wrapper">
                <MSlider
                    listOfCard={cards} 
                    mediaRequest='isTablet' 
                    itemType='process'
                    slidesPerView={1}
                    spaceBetween={0}/>
            </div>
        </motion.section>
    )
}
export default Process