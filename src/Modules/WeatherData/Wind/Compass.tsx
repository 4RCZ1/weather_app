import React from 'react';
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer";
import Arrow from "./Arrow";

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 40,
    mass: 20
};


const Compass = ({deg}: { deg: number }) => {
    const {ref, inView} = useInView({
        threshold: .8
    })

    return (
        <div id="compass">
            <svg width="150" height="150" viewBox="0 0 508 508" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M254 508C394.28 508 508 394.28 508 254C508 113.72 394.28 0 254 0C113.72 0 0 113.72 0 254C0 394.28 113.72 508 254 508Z"
                    fill="#324A5E"/>
                <path
                    d="M254 447.2C360.701 447.2 447.2 360.701 447.2 254C447.2 147.299 360.701 60.8 254 60.8C147.299 60.8 60.8 147.299 60.8 254C60.8 360.701 147.299 447.2 254 447.2Z"
                    fill="#84DBFF"/>
                <path
                    d="M254 420.4C345.9 420.4 420.4 345.9 420.4 254C420.4 162.1 345.9 87.6 254 87.6C162.1 87.6 87.6 162.1 87.6 254C87.6 345.9 162.1 420.4 254 420.4Z"
                    fill="white"/>
                <path
                    d="M250.8 134.4C258.09 134.4 264 128.49 264 121.2C264 113.91 258.09 108 250.8 108C243.51 108 237.6 113.91 237.6 121.2C237.6 128.49 243.51 134.4 250.8 134.4Z"
                    fill="#2C9984"/>
                <path
                    d="M250.8 395.2C258.09 395.2 264 389.29 264 382C264 374.71 258.09 368.8 250.8 368.8C243.51 368.8 237.6 374.71 237.6 382C237.6 389.29 243.51 395.2 250.8 395.2Z"
                    fill="#2C9984"/>
                <path
                    d="M381.6 264.8C388.89 264.8 394.8 258.89 394.8 251.6C394.8 244.31 388.89 238.4 381.6 238.4C374.31 238.4 368.4 244.31 368.4 251.6C368.4 258.89 374.31 264.8 381.6 264.8Z"
                    fill="#2C9984"/>
                <path
                    d="M120.4 264.8C127.69 264.8 133.6 258.89 133.6 251.6C133.6 244.31 127.69 238.4 120.4 238.4C113.11 238.4 107.2 244.31 107.2 251.6C107.2 258.89 113.11 264.8 120.4 264.8Z"
                    fill="#2C9984"/>
            </svg>
            <motion.div
                ref={ref}
                id="arrow"
                transition={spring}
                initial="hidden"
                animate={inView ? "visible" : ''}
                variants={{
                    visible: {rotate: deg},
                    hidden: {rotate: deg - 90}
                }}
            >
                <Arrow/>
            </motion.div>
        </div>
    );
};

export default Compass;
