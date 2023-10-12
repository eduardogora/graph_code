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

    //Colors
    const pC = "#a066cc";
    const rC = "#7bb399";
    const oC = "#f0f8ff";
    const jC = "#ff4f61";
    const eC = "#f2cb61";
    const cC = "#ceeb7f";
    const tC = "#8fe3aa";
    const sC = "#e3a3ff";
    const stroke = 15;
    var numLetra = 0;
    return (
        <div>
        <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            initial="hidden"
            animate="visible"
        >

        {/*P*/ numLetra = 0}
        <motion.line
            x1={100 + numLetra * stroke}
            y1="100"
            x2={200 + numLetra * stroke}
            y2="100"
            stroke= {pC}
            variants={draw}
            custom={0}
        />
        <motion.line
            x1={100 + numLetra * stroke}
            y1={200}
            x2={200 + numLetra * stroke}
            y2={200}
            stroke= {pC}
            variants={draw}
            custom={0}
        />

        <motion.line
            x1={100 + numLetra * stroke}
            y1={100}
            x2={100 + numLetra * stroke}
            y2={300}
            stroke= {pC}
            variants={draw}
            custom={0}
        />
        <motion.line
            x1={200 + numLetra * stroke}
            y1={100}
            x2={200 + numLetra * stroke}
            y2={200}
            stroke= {pC}
            variants={draw}
            custom={1}
        />
        {/*R*/ numLetra = 1}
        <motion.line
            x1={200 + numLetra * stroke}
            y1="100"
            x2={300 + numLetra * stroke}
            y2="100"
            stroke={rC}
            variants={draw}
            custom={1}
        />
        <motion.line
            x1={200 + numLetra * stroke}
            y1="200"
            x2={300 + numLetra * stroke}
            y2="200"
            stroke={rC}
            variants={draw}
            custom={1}
        />
        <motion.line
            x1={200 + numLetra * stroke}
            y1="100"
            x2={200 + numLetra * stroke}
            y2="300"
            stroke={rC}
            variants={draw}
            custom={1}
        />
        <motion.line
            x1={300 + numLetra * stroke}
            y1="100"
            x2={300 + numLetra * stroke}
            y2="200"
            stroke={rC}
            variants={draw}
            custom={1}
        />
        <motion.line
            x1={200 + numLetra * stroke}
            y1="200"
            x2={300 + numLetra * stroke}
            y2="300"
            stroke={rC}
            variants={draw}
            custom={1}
        />
        {/*O*/ numLetra = 2}
        <motion.line
            x1={300 + numLetra * stroke}
            y1="100"
            x2={400 + numLetra * stroke}
            y2="100"
            stroke={oC}
            variants={draw}
            custom={2}
        />
        <motion.line
            x1={300 + numLetra * stroke}
            y1="300"
            x2={400 + numLetra * stroke}
            y2="300"
            stroke={oC}
            variants={draw}
            custom={2}
        />
        <motion.line
            x1={300 + numLetra * stroke}
            y1="100"
            x2={300 + numLetra * stroke}
            y2="300"
            stroke={oC}
            variants={draw}
            custom={2}
        />
        <motion.line
            x1={400 + numLetra * stroke}
            y1="100"
            x2={400 + numLetra * stroke}
            y2="300"
            stroke={oC}
            variants={draw}
            custom={2}
        />
        {/*J*/ numLetra = 3}
        <motion.line
            x1={450 + numLetra * stroke}
            y1="100"
            x2={500 + numLetra * stroke}
            y2="100"
            stroke={jC}
            variants={draw}
            custom={3}
        />
        <motion.line
            x1={400 + numLetra * stroke}
            y1="300"
            x2={500 + numLetra * stroke}
            y2="300"
            stroke={jC}
            variants={draw}
            custom={3}
        />
        <motion.line
            x1={400 + numLetra * stroke}
            y1="200"
            x2={400 + numLetra * stroke}
            y2="300"
            stroke={jC}
            variants={draw}
            custom={3}
        />
        <motion.line
            x1={500 + numLetra * stroke}
            y1="100"
            x2={500 + numLetra * stroke}
            y2="300"
            stroke={jC}
            variants={draw}
            custom={3}
        />
        {/*E*/ numLetra = 4}
        <motion.line
            x1={500 + numLetra * stroke}
            y1="100"
            x2={600 + numLetra * stroke}
            y2="100"
            stroke={eC}
            variants={draw}
            custom={4}
        />
        <motion.line
            x1={500 + numLetra * stroke}
            y1="200"
            x2={600 + numLetra * stroke}
            y2="200"
            stroke={eC}
            variants={draw}
            custom={4}
        />
        <motion.line
            x1={500 + numLetra * stroke}
            y1="300"
            x2={600 + numLetra * stroke}
            y2="300"
            stroke={eC}
            variants={draw}
            custom={4}
        />
        {/*C*/ numLetra = 5}
        <motion.line
            x1={600 + numLetra * stroke}
            y1="100"
            x2={700 + numLetra * stroke}
            y2="100"
            stroke={cC}
            variants={draw}
            custom={5}
        />
        <motion.line
            x1={600 + numLetra * stroke}
            y1="300"
            x2={700 + numLetra * stroke}
            y2="300"
            stroke={cC}
            variants={draw}
            custom={5}
        />
        <motion.line
            x1={600 + numLetra * stroke}
            y1="100"
            x2={600 + numLetra * stroke}
            y2="300"
            stroke={cC}
            variants={draw}
            custom={5}
        />
        {/*T*/ numLetra = 6}
        <motion.line
            x1={700 + numLetra * stroke}
            y1="100"
            x2={800 + numLetra * stroke}
            y2="100"
            stroke={tC}
            variants={draw}
            custom={6}
        />
        <motion.line
            x1={750 + numLetra * stroke}
            y1="100"
            x2={750 + numLetra * stroke}
            y2="300"
            stroke={tC}
            variants={draw}
            custom={6}
        />
        {/*S*/ numLetra = 7}
        <motion.line
            x1={900 + numLetra * stroke}
            y1="100"
            x2={800 + numLetra * stroke}
            y2="100"
            stroke={sC}
            variants={draw}
            custom={7}
        />
        <motion.line
            x1={800 + numLetra * stroke}
            y1="200"
            x2={900 + numLetra * stroke}
            y2="200"
            stroke={sC}
            variants={draw}
            custom={7}
        />
        <motion.line
            x1={900 + numLetra * stroke}
            y1="300"
            x2={800 + numLetra * stroke}
            y2="300"
            stroke={sC}
            variants={draw}
            custom={7}
        />
        <motion.line
            x1={800 + numLetra * stroke}
            y1="100"
            x2={800 + numLetra * stroke}
            y2="200"
            stroke={sC}
            variants={draw}
            custom={7}
        />
        <motion.line
            x1={900 + numLetra * stroke}
            y1="200"
            x2={900 + numLetra * stroke}
            y2="300"
            stroke={sC}
            variants={draw}
            custom={7}
        />
        
         
           
            </motion.svg>
        </div>
    )
};