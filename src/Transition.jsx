import { motion } from "framer-motion";

const Transiton = (OgComponent) => {
    return () => (
        <>
            <OgComponent/>
            <motion.div
                className="slide-in"
                initial={{opacity: 1}}
                animate={{opacity: 0}}
                exit={{opactiy: 0}}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1]}}
            />
            <motion.div
                className="slide-out"
                initial={{opacity: 1}}
                animate={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1]}}/>
        </>
    )
}

export default Transiton