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
            x1={-100 + numLetra * stroke}
            y1="100"
            x2={1 + numLetra * stroke}
            y2="100"
            stroke="#70d95b"
            variants={draw}
            custom={0}
        />
        <motion.line
            x1={-100 + numLetra * stroke}
            y1={200 + stroke}
            x2={100 + numLetra * stroke}
            y2={200 + stroke}
            stroke="#70d95b"
            variants={draw}
            custom={1}
        />

        <motion.line
            x1={-100 + numLetra * stroke}
            y1={90 + stroke}
            x2={-100 + numLetra * stroke}
            y2={300 + stroke}
            stroke="#70d95b"
            variants={draw}
            custom={1}
        />
            {/*R*/ numLetra = 0}
            <motion.line
                x1={1 + numLetra * stroke}
                y1={90 + stroke}
                x2={100 + numLetra * stroke}
                y2={90 + stroke}
                stroke="#fcba03"
                variants={draw}
                custom={1}
            />

            <motion.line
                x1={1 + numLetra * stroke}
                y1={200 + stroke}
                x2={100 + numLetra * stroke}
                y2={200 + stroke}
                stroke="#fcba03"
                variants={draw}
                custom={1}
            />

            <motion.line
                x1={1 + numLetra * stroke}
                y1={90 + stroke}
                x2={1 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#fcba03"
                variants={draw}
                custom={1}
            />

            <motion.line
                x1={1 + numLetra * stroke}
                y1={200 + stroke}
                x2={100 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#fcba03"
                variants={draw}
                custom={1}
            />

            <motion.line
                x1={100 + numLetra * stroke}
                y1={90 + stroke}
                x2={100 + numLetra * stroke}
                y2={200 + stroke}
                stroke="#fcba03"
                variants={draw}
                custom={1}
            />
            {/*O*/ numLetra = 0}
            <motion.line
                x1={120 + numLetra * stroke}
                y1={90 + stroke}
                x2={220 + numLetra * stroke}
                y2={90 + stroke}
                stroke="#405178"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1={120 + numLetra * stroke}
                y1={290 + stroke}
                x2={220 + numLetra * stroke}
                y2={290 + stroke}
                stroke="#405178"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1={120 + numLetra * stroke}
                y1={90 + stroke}
                x2={120 + numLetra * stroke}
                y2={290 + stroke}
                stroke="#405178"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1={220 + numLetra * stroke}
                y1={290 + stroke}
                x2={220 + numLetra * stroke}
                y2={90 + stroke}
                stroke="#405178"
                variants={draw}
                custom={2}
            />
            {/*J*/ numLetra = 1}
            <motion.line
                x1={280 + numLetra * stroke}
                y1={90 + stroke}
                x2={350 + numLetra * stroke}
                y2={90 + stroke}
                stroke="#00ffb7"
                variants={draw}
                custom={3}
            />
            <motion.line
                x1={350 + numLetra * stroke}
                y1={90 + stroke}
                x2={350 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#00ffb7"
                variants={draw}
                custom={3}
            />
            <motion.line
                x1={230 + numLetra * stroke}
                y1={300 + stroke}
                x2={350 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#00ffb7"
                variants={draw}
                custom={3}
            />
            <motion.line
                x1={230 + numLetra * stroke}
                y1={300 + stroke}
                x2={230 + numLetra * stroke}
                y2={230 + stroke}
                stroke="#00ffb7"
                variants={draw}
                custom={3}
            />
            {/*E*/ numLetra = 1}
            <motion.line
                x1={350 + numLetra * stroke}
                y1={100 + stroke}
                x2={450 + numLetra * stroke}
                y2={100 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={4}
            />
            <motion.line
                x1={350 + numLetra * stroke}
                y1={200 + stroke}
                x2={450 + numLetra * stroke}
                y2={200 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={4}
            />
            <motion.line
                x1={350 + numLetra * stroke}
                y1={300 + stroke}
                x2={450 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={4}
            />
            {/*C*/ numLetra = 2}
            <motion.line
                x1={470 + numLetra * stroke}
                y1={300 + stroke}
                x2={570 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#fc03db"
                variants={draw}
                custom={5}
            />
            <motion.line
                x1={470 + numLetra * stroke}
                y1={100 + stroke}
                x2={470 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#fc03db"
                variants={draw}
                custom={5}
            />
            <motion.line
                x1={470 + numLetra * stroke}
                y1={90 + stroke}
                x2={570 + numLetra * stroke}
                y2={90 + stroke}
                stroke="#fc03db"
                variants={draw}
                custom={5}
            />
            {/*T*/ numLetra = 1}
            <motion.line
                x1={570 + numLetra * stroke}
                y1={90 + stroke}
                x2={770 + numLetra * stroke}
                y2={90 + stroke}
                stroke="#FC8903"
                variants={draw}
                custom={6}
            />
            <motion.line
                x1={670 + numLetra * stroke}
                y1={90 + stroke}
                x2={670 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#FC8903"
                variants={draw}
                custom={6}
            />
            {/*S*/ numLetra = 2}
            <motion.line
                x1={770 + numLetra * stroke}
                y1={90 + stroke}
                x2={900 + numLetra * stroke}
                y2={90 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={770 + numLetra * stroke}
                y1={200 + stroke}
                x2={900 + numLetra * stroke}
                y2={200 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={770 + numLetra * stroke}
                y1={300 + stroke}
                x2={900 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={770 + numLetra * stroke}
                y1={90 + stroke}
                x2={770 + numLetra * stroke}
                y2={200 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={900 + numLetra * stroke}
                y1={200 + stroke}
                x2={900 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />

            {/*BY EN*/}
            <motion.line
                x1={800 + numLetra * stroke}
                y1={600 + stroke}
                x2={825 + numLetra * stroke}
                y2={600 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
                style={{strokeWidth: "5px"}}
            />
            <motion.line
                x1={800 + numLetra * stroke}
                y1={625 + stroke}
                x2={825 + numLetra * stroke}
                y2={625 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
                style={{strokeWidth: "5px"}}
            />
            <motion.line
                x1={800 + numLetra * stroke}
                y1={650 + stroke}
                x2={825 + numLetra * stroke}
                y2={650 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
                style={{strokeWidth: "5px"}}
            />

            <motion.line
                x1={825 + numLetra * stroke}
                y1={600 + stroke}
                x2={825 + numLetra * stroke}
                y2={650 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
                style={{strokeWidth: "5px"}}
            />
            <motion.line
                x1={825 + numLetra * stroke}
                y1={650 + stroke}
                x2={850 + numLetra * stroke}
                y2={600 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
                style={{strokeWidth: "5px"}}
            />
            <motion.line
                x1={850 + numLetra * stroke}
                y1={600 + stroke}
                x2={850 + numLetra * stroke}
                y2={650 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
                style={{strokeWidth: "5px"}}
            />
            </motion.svg>
        </div>
    )
};