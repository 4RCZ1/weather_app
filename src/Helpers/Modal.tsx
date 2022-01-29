import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    },
}

interface modalProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    buttonText: string | string[],
    promptText: string,
    buttonAction?: () => void
}

const Modal = ({ showModal, setShowModal, buttonText, promptText, buttonAction }:modalProps) => {
    return (
        <AnimatePresence>
            { showModal && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={()=>setShowModal(false)}
                >
                    <motion.div className="modal"
                                variants={modal}
                    >
                        <p>{promptText}</p>
                        <button onClick={()=>setShowModal(false)}>{buttonText}</button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;
