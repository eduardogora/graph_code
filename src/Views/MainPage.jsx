import {motion} from "framer-motion"
import { useState } from "react"
import LoadingAnim from "../Components/Loading/LoadingAnim"
import Navbar from "../Components/Navbar/Navbar"
import Projects from "./Projects";
import AboutUs from "./AboutUs/AboutUs";
import Person_Navbar from "../Components/Person_Navbar/Person_Navbar";

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
        {/*currentSection == 1 || currentSection == 2 ? (<Person_Navbar/>) : null*/}
        {currentSection == 0 ? (<h1>Main Page</h1>) : null}
        {currentSection == 1 ? (<AboutUs/>) : null}
        {currentSection == 2 ? (<Projects data={data}/>) : null}
        {currentSection == 3 ? (<h1>Contact</h1>) : null}
        </div>
    )
}