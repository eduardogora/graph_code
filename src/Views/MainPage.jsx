import {motion} from "framer-motion"
import { useState } from "react"
import LoadingAnim from "../Components/Loading/LoadingAnim"
import Navbar from "../Components/Navbar/Navbar"
import Projects from "./Projects";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home";

export default function MainPage() {

    const data = {
        0: {
            projects: [
                {title: "Proyecto 1", description: "Es una descripción1", img: "", category: 0},
                {title: "Proyecto 2", description: "Es una descripción2", img: "", category: 0},
                {title: "Proyecto 5", description: "Es una descripción2", img: "", category: 0},
                {title: "Proyecto 3", description: "Es una descripción1", img: "", category: 2},
                {title: "Proyecto 4", description: "Es una descripción2", img: "", category: 2},
            ]
        },
        1: {
            projects: [
                {title: "Proyecto 1", description: "Es una descripción1", img: "", category: 1},
                {title: "Proyecto 2", description: "Es una descripción2", img: "", category: 1},
            ]
        },
        2: {
            projects: [
                {title: "Proyecto 1", description: "Es una descripción1", img: "", category: 2},
                {title: "Proyecto 2", description: "Es una descripción2", img: "", category: 2},
                {title: "Proyecto 5", description: "Es una descripción2", img: "", category: 2},
                {title: "Proyecto 3", description: "Es una descripción1", img: "", category: 2},
                {title: "Proyecto 4", description: "Es una descripción2", img: "", category: 2},
            ]
        },

    }

    const [currentSection, setCurrentSection] = useState(0);
    
    const handleSelection = (section) =>{
        setCurrentSection(section);
    }

    return(
        <div>
        <Navbar handleSelection = {handleSelection}/>
        {currentSection == 0 ? (<Home/>) : null}
        {currentSection == 1 ? (<AboutUs/>) : null}
        {currentSection == 2 ? (<Projects data={data}/>) : null}
        {currentSection == 3 ? (<h1>Contact</h1>) : null}

        </div>
    )
}