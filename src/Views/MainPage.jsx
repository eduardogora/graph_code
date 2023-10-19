import { useState } from "react"
import Navbar from "../Components/Navbar/Navbar"
import Projects from "./Projects";
import AboutUs from "./AboutUs/AboutUs";
import BottomCard from "../Components/BottomCard/BottomCard";
import Home from "./Home/Home";
import cve from "../Resources/Docs/cve.pdf"
import cvn from "../Resources/Docs/cvn.jpeg"

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
                              github: "https://www.apple.com",
                              cv: cve
                              },
            },
            team: {
                indicators: {art: [[10, 10, 10, 10, 10, 10,]], tech: [[10, 10, 10, 10, 10, 10,]]},
                links: {facebook: "https://www.google.com",
                        linkedin: "https://www.google.com",
                        instagram: "https://www.google.com",
                        github: "https://www.google.com",
                        cv: cve
                        }
            },
            natalia: {
                indicators: {art: [[8, 8, 8, 8, 8, 8,]], tech: [[9, 9, 9, 9, 9, 9,]]},
                links: {facebook: "https://www.youtube.com",
                        linkedin: "https://www.youtube.com",
                        instagram: "https://www.youtube.com",
                        github: "https://www.youtube.com",
                        cv: cvn
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
        {currentSection == 0 ? (<Home data={data}  handleSelection = {handleSelection}/>) : null}
        {currentSection == 1 ? (<AboutUs data={data.information}/>) : null}
        {currentSection == 2 ? (<Projects data={data.projects} person={'1'}/>) : null}
        {currentSection == 3 ? (<h1>Contact</h1>) : null}
        <BottomCard style={{position: "fixed", bottom: "0"}}/>
        </div>
    )
}