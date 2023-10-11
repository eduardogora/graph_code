import "./LoadingAnim.css";
import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

export default function LoadingProjectAnim() {
    //Animation
    const stroke = 15;
    var numLetra = 0;
    return (
        <div>
        <motion.svg
            width="1000"
            height="450"
            viewBox="0 0 1000 800"
            initial="hidden"
            animate="visible"
        >

        {/*P*/ numLetra = 0}
        <motion.line
                x1={400 + numLetra * stroke}
                y1="100"
                x2={500 + numLetra * stroke}
                y2="100"
                stroke="#70d95b"
                variants={draw}
                custom={0}
            />
            <motion.line
                x1={400 + numLetra * stroke}
                y1="200"
                x2={500 + numLetra * stroke}
                y2="200"
                stroke="#70d95b"
                variants={draw}
                custom={0}
            />
            <motion.line
                x1={400 + numLetra * stroke}
                y1="100"
                x2={400 + numLetra * stroke}
                y2="300"
                stroke="#70d95b"
                variants={draw}
                custom={0}
            />
            <motion.line
                x1={500 + numLetra * stroke}
                y1="100"
                x2={500 + numLetra * stroke}
                y2="200"
                stroke="#70d95b"
                variants={draw}
                custom={0}
            />
            </motion.svg>
        </div>
    )
};