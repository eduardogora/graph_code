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

export default function LoadingAboutusAnim() {

    //Animation
    const stroke = 15;
    var numLetra = 0;

    const col1 = "#00cc88";
    const col2 = "#fcba03";
    const col3 = "#00cc88";
    const col4 = "#00cc88";
    const col5 = "#00cc88";
    const col6 = "#00cc88";
    const col7 = "#00cc88";

    return (
        <div className="anim1">
        <motion.svg
            width="1000"
            height="450"
            viewBox="0 0 1000 800"
            initial="hidden"
            animate="visible"
        >
        {/*A*/ numLetra = 0}

            <motion.line
                x1="100"
                y1="100"
                x2="200"
                y2="100"
                stroke= {col1}
                variants={draw}
                custom={2}
            />
            <motion.line
            x1="100"
            y1="200"
            x2="200"
            y2="200"
            stroke= {col1}
            variants={draw}
            custom={2}
            />
            <motion.line
            x1="100"
            y1="100"
            x2="100"
            y2="300"
            stroke= {col1}
            variants={draw}
            custom={2}
            />
            <motion.line
            x1="200"
            y1="100"
            x2="200"
            y2="300"
            stroke= {col1}
            variants={draw}
            custom={2}
            />

            {/*B*/ numLetra = 1}
            <motion.line
                x1={200 + numLetra * stroke}
                y1="100"
                x2={300 + numLetra * stroke}
                y2="100"
                stroke= {col2}
                variants={draw}
                custom={3}
            />
            <motion.line
                x1={200 + numLetra * stroke}
                y1="200"
                x2={300 + numLetra * stroke}
                y2="200"
                stroke= {col2}
                variants={draw}
                custom={3}
            />
            <motion.line
                x1={200 + numLetra * stroke}
                y1="300"
                x2={300 + numLetra * stroke}
                y2="300"
                stroke= {col2}
                variants={draw}
                custom={3}
            />
            <motion.line
                x1={200 + numLetra * stroke}
                y1="100"
                x2={200 + numLetra * stroke}
                y2="300"
                stroke= {col2}
                variants={draw}
                custom={3}
            />
            <motion.line
                x1={300 + numLetra * stroke}
                y1="100"
                x2={300 + numLetra * stroke}
                y2="300"
                stroke= {col2}
                variants={draw}
                custom={3}
            />

            {/*O*/ numLetra = 2}
            <motion.line
                x1={300 + numLetra * stroke}
                y1="100"
                x2={400 + numLetra * stroke}
                y2="100"
                stroke= {col3}
                variants={draw}
                custom={4}
            />
            <motion.line
                x1={300 + numLetra * stroke}
                y1="300"
                x2={400 + numLetra * stroke}
                y2="300"
                stroke= {col3}
                variants={draw}
                custom={4}
            />
            <motion.line
                x1={300 + numLetra * stroke}
                y1="100"
                x2={300 + numLetra * stroke}
                y2="300"
                stroke= {col3}
                variants={draw}
                custom={4}
            />
            <motion.line
                x1={400 + numLetra * stroke}
                y1="100"
                x2={400 + numLetra * stroke}
                y2="300"
                stroke={col3}
                variants={draw}
                custom={4}
            />
            {/*U*/ numLetra = 3}
            <motion.line
                x1={400 + numLetra * stroke}
                y1="300"
                x2={500 + numLetra * stroke}
                y2="300"
                stroke= {col4}
                variants={draw}
                custom={5}
            />
            <motion.line
                x1={400 + numLetra * stroke}
                y1="100"
                x2={400 + numLetra * stroke}
                y2="300"
                stroke= {col4}
                variants={draw}
                custom={5}
            />
            <motion.line
                x1={500 + numLetra * stroke}
                y1="100"
                x2={500 + numLetra * stroke}
                y2="300"
                stroke= {col4}
                variants={draw}
                custom={5}
            />
            {/*H*/ numLetra = 4}
            <motion.line
                x1={500 + numLetra * stroke}
                y1="100"
                x2={600 + numLetra * stroke}
                y2="100"
                stroke={col5}
                variants={draw}
                custom={6}
            />
            <motion.line
                x1={550 + numLetra * stroke}
                y1="100"
                x2={550 + numLetra * stroke}
                y2="300"
                stroke={col5}
                variants={draw}
                custom={6}
            />
            {/*U*/ numLetra = 0}
            <motion.line
                x1={250 + numLetra * stroke}
                y1={500 + stroke}
                x2={350 + numLetra * stroke}
                y2={500 + stroke}
                stroke={col6}
                variants={draw}
                custom={6}
            />
            <motion.line
                x1={250 + numLetra * stroke}
                y1={300 + stroke}
                x2={250 + numLetra * stroke}
                y2={500 + stroke}
                stroke={col6}
                variants={draw}
                custom={6}
            />
            <motion.line
                x1={350 + numLetra * stroke}
                y1={300 + stroke}
                x2={350 + numLetra * stroke}
                y2={500 + stroke}
                stroke={col6}
                variants={draw}
                custom={6}
            />
            {/*S*/ numLetra = 1}
            <motion.line
                x1={450 + numLetra * stroke}
                y1={300 + stroke}
                x2={350 + numLetra * stroke}
                y2={300 + stroke}
                stroke={col7}
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={350 + numLetra * stroke}
                y1={400 + stroke}
                x2={450 + numLetra * stroke}
                y2={400 + stroke}
                stroke={col7}
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={450 + numLetra * stroke}
                y1={500 + stroke}
                x2={350 + numLetra * stroke}
                y2={500 + stroke}
                stroke={col7}
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={350 + numLetra * stroke}
                y1={300 + stroke}
                x2={350 + numLetra * stroke}
                y2={400 + stroke}
                stroke={col7}
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={450 + numLetra * stroke}
                y1={400 + stroke}
                x2={450 + numLetra * stroke}
                y2={500 + stroke}
                stroke={col7}
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
                custom={10}
                style={{strokeWidth: "5px"}}
            />
            <motion.line
                x1={800 + numLetra * stroke}
                y1={625 + stroke}
                x2={825 + numLetra * stroke}
                y2={625 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={10}
                style={{strokeWidth: "5px"}}
            />
            <motion.line
                x1={800 + numLetra * stroke}
                y1={650 + stroke}
                x2={825 + numLetra * stroke}
                y2={650 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={10}
                style={{strokeWidth: "5px"}}
            />

            <motion.line
                x1={825 + numLetra * stroke}
                y1={600 + stroke}
                x2={825 + numLetra * stroke}
                y2={650 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={10}
                style={{strokeWidth: "5px"}}
            />
            <motion.line
                x1={825 + numLetra * stroke}
                y1={650 + stroke}
                x2={850 + numLetra * stroke}
                y2={600 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={10}
                style={{strokeWidth: "5px"}}
            />
            <motion.line
                x1={850 + numLetra * stroke}
                y1={600 + stroke}
                x2={850 + numLetra * stroke}
                y2={650 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={10}
                style={{strokeWidth: "5px"}}
            />

        </motion.svg>
        </div>


    );
}
