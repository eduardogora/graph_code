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

export default function LoadingAnim() {

    //Animation
    const stroke = 15;
    var numLetra = 0;
    return (
        <div className="anim1">
        <motion.svg
            width="1000"
            height="450"
            viewBox="0 0 1000 800"
            initial="hidden"
            animate="visible"
        >
        {/*G*/ numLetra = 0}

            <motion.line
                x1="80"
                y1="270"
                x2="150"
                y2="270"
                stroke="#00cc88"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1="80"
                y1="100"
                x2="200"
                y2="100"
                stroke="#00cc88"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1="80"
                y1="100"
                x2="80"
                y2="270"
                stroke="#00cc88"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1="200"
                y1="300"
                x2="200"
                y2="225"
                stroke="#00cc88"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1="150"
                y1="225"
                x2="200"
                y2="225"
                stroke="#00cc88"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1="80"
                y1="300"
                x2="200"
                y2="300"
                stroke="#00cc88"
                variants={draw}
                custom={2}
            />
            {/*R*/ numLetra = 1}
            <motion.line
                x1={215 + numLetra * stroke}
                y1="100"
                x2={300 + numLetra * stroke}
                y2="100"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />

            <motion.line
                x1={200 + numLetra * stroke}
                y1="200"
                x2={300 + numLetra * stroke}
                y2="200"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />

            <motion.line
                x1={200 + numLetra * stroke}
                y1="100"
                x2={200 + numLetra * stroke}
                y2="300"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />

            <motion.line
                x1={300 + numLetra * stroke}
                y1="100"
                x2={300 + numLetra * stroke}
                y2="200"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />

            <motion.line
                x1={200 + numLetra * stroke}
                y1="200"
                x2={300 + numLetra * stroke}
                y2="300"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />
            <motion.line
                x1={200 + numLetra * stroke}
                y1="100"
                x2={300 + numLetra * stroke}
                y2="100"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />

            <motion.line
                x1={200 + numLetra * stroke}
                y1="200"
                x2={300 + numLetra * stroke}
                y2="200"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />

            <motion.line
                x1={200 + numLetra * stroke}
                y1="100"
                x2={200 + numLetra * stroke}
                y2="300"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />

            <motion.line
                x1={300 + numLetra * stroke}
                y1="100"
                x2={300 + numLetra * stroke}
                y2="200"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />

            <motion.line
                x1={200 + numLetra * stroke}
                y1="200"
                x2={300 + numLetra * stroke}
                y2="300"
                stroke="#fcba03"
                variants={draw}
                custom={3}
            />
            {/*A*/ numLetra = 2}
            <motion.line
                x1={350 + numLetra * stroke}
                y1="100"
                x2={300 + numLetra * stroke}
                y2="300"
                stroke="#fc03db"
                variants={draw}
                custom={4}
            />
            <motion.line
                x1={350 + numLetra * stroke}
                y1="100"
                x2={400 + numLetra * stroke}
                y2="300"
                stroke="#fc03db"
                variants={draw}
                custom={4}
            />
            <motion.line
                x1={300 + numLetra * stroke}
                y1="200"
                x2={400 + numLetra * stroke}
                y2="200"
                stroke="#fc03db"
                variants={draw}
                custom={4}
            />
            {/*P*/ numLetra = 3}
            <motion.line
                x1={400 + numLetra * stroke}
                y1="100"
                x2={500 + numLetra * stroke}
                y2="100"
                stroke="#70d95b"
                variants={draw}
                custom={5}
            />
            <motion.line
                x1={400 + numLetra * stroke}
                y1="200"
                x2={500 + numLetra * stroke}
                y2="200"
                stroke="#70d95b"
                variants={draw}
                custom={5}
            />
            <motion.line
                x1={400 + numLetra * stroke}
                y1="100"
                x2={400 + numLetra * stroke}
                y2="300"
                stroke="#70d95b"
                variants={draw}
                custom={5}
            />
            <motion.line
                x1={500 + numLetra * stroke}
                y1="100"
                x2={500 + numLetra * stroke}
                y2="200"
                stroke="#70d95b"
                variants={draw}
                custom={5}
            />
            {/*H*/ numLetra = 4}
            <motion.line
                x1={500 + numLetra * stroke}
                y1="200"
                x2={600 + numLetra * stroke}
                y2="200"
                stroke="#00ffb7"
                variants={draw}
                custom={6}
            />
            <motion.line
                x1={500 + numLetra * stroke}
                y1="100"
                x2={500 + numLetra * stroke}
                y2="300"
                stroke="#00ffb7"
                variants={draw}
                custom={6}
            />
            <motion.line
                x1={600 + numLetra * stroke}
                y1="100"
                x2={600 + numLetra * stroke}
                y2="300"
                stroke="#00ffb7"
                variants={draw}
                custom={6}
            />
            {/*C*/ numLetra = 0}
            <motion.line
                x1={150 + numLetra * stroke}
                y1={300 + stroke}
                x2={250 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#00ffb7"
                variants={draw}
                custom={6}
            />
            <motion.line
                x1={150 + numLetra * stroke}
                y1={300 + stroke}
                x2={150 + numLetra * stroke}
                y2={500 + stroke}
                stroke="#00ffb7"
                variants={draw}
                custom={6}
            />
            <motion.line
                x1={150 + numLetra * stroke}
                y1={500 + stroke}
                x2={250 + numLetra * stroke}
                y2={500 + stroke}
                stroke="#00ffb7"
                variants={draw}
                custom={6}
            />
            {/*O*/ numLetra = 1}
            <motion.line
                x1={250 + numLetra * stroke}
                y1={300 + stroke}
                x2={350 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={250 + numLetra * stroke}
                y1={500 + stroke}
                x2={350 + numLetra * stroke}
                y2={500 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={250 + numLetra * stroke}
                y1={300 + stroke}
                x2={250 + numLetra * stroke}
                y2={500 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />
            <motion.line
                x1={350 + numLetra * stroke}
                y1={500 + stroke}
                x2={350 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#405178"
                variants={draw}
                custom={7}
            />
            {/*D*/ numLetra = 2}
            <motion.line
                x1={350 + numLetra * stroke}
                y1={300 + stroke}
                x2={350 + numLetra * stroke}
                y2={500 + stroke}
                stroke="#ad1066"
                variants={draw}
                custom={8}
            />
            <motion.line
                x1={450 + numLetra * stroke}
                y1={400 + stroke}
                x2={350 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#ad1066"
                variants={draw}
                custom={8}
            />
            <motion.line
                x1={450 + numLetra * stroke}
                y1={400 + stroke}
                x2={350 + numLetra * stroke}
                y2={500 + stroke}
                stroke="#ad1066"
                variants={draw}
                custom={8}
            />
            {/*E*/ numLetra = 3}
            <motion.line
                x1={450 + numLetra * stroke}
                y1={300 + stroke}
                x2={550 + numLetra * stroke}
                y2={300 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
            />
            <motion.line
                x1={450 + numLetra * stroke}
                y1={400 + stroke}
                x2={550 + numLetra * stroke}
                y2={400 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
            />
            <motion.line
                x1={450 + numLetra * stroke}
                y1={500 + stroke}
                x2={550 + numLetra * stroke}
                y2={500 + stroke}
                stroke="#ff5100"
                variants={draw}
                custom={9}
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
