import {motion} from "framer-motion"
import { useState } from "react"
import LoadingAnim from "../Components/Loading/LoadingAnim"
import Navbar from "../Components/Navbar/Navbar"
import Projects from "./Projects";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home";
import Person_Navbar from "../Components/Person_Navbar/Person_Navbar";
import BottomCard from "../Components/BottomCard/BottomCard";

export default function MainPage() {

    const data = {
        projects: {
            eduardo: [
                {title: "Proyecto 1", description: "Es una descripción1", img: "", category: 0},
                {title: "Proyecto 2", description: "Es una descripción2", img: "", category: 0},
                {title: "Proyecto 5", description: "Es una descripción2", img: "", category: 0},
                {title: "Proyecto 3", description: "Es una descripción1", img: "", category: 2},
                {title: "Proyecto 4", description: "Es una descripción2", img: "", category: 2},
            ],
            team: [
                {title: "Proyecto 1", description: "Es una descripción1", img: "", category: 0},
                {title: "Proyecto 2", description: "Es una descripción2", img: "", category: 2},
            ],
            natalia: [
                {title: "Proyecto 1", description: "Es una descripción1", img: "", category: 2},
                {title: "Proyecto 2", description: "Es una descripción2", img: "", category: 2},
                {title: "Proyecto 5", description: "Es una descripción2", img: "", category: 2},
                {title: "Proyecto 3", description: "Es una descripción1", img: "", category: 2},
                {title: "Proyecto 4", description: "Es una descripción2", img: "", category: 2},
            ],
        },
        information: {
            eduardo: {
                indicators: {art: [[5, 5, 5, 5, 5, 5,]], tech: [[6, 6, 6, 6, 6, 6,]]},
                links: {facebook: "https://www.apple.com",
                              linkedin: "https://www.apple.com",
                              instagram: "https://www.apple.com",
                              github: "https://www.apple.com"
                              },
            },
            team: {
                indicators: {art: [[10, 10, 10, 10, 10, 10,]], tech: [[10, 10, 10, 10, 10, 10,]]},
                links: {facebook: "https://www.google.com",
                        linkedin: "https://www.google.com",
                        instagram: "https://www.google.com",
                        github: "https://www.google.com"
                        }
            },
            natalia: {
                indicators: {art: [[8, 8, 8, 8, 8, 8,]], tech: [[9, 9, 9, 9, 9, 9,]]},
                links: {facebook: "https://www.youtube.com",
                        linkedin: "https://www.youtube.com",
                        instagram: "https://www.youtube.com",
                        github: "https://www.youtube.com"
                        }
            },
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
        {currentSection == 1 ? (<AboutUs data={data.information}/>) : null}
        {currentSection == 2 ? (<Projects data={data.projects}/>) : null}
        {currentSection == 3 ? (<h1>Contact</h1>) : null}
        <BottomCard style={{position: "fixed", bottom: "0"}}/>
        </div>
    )
}