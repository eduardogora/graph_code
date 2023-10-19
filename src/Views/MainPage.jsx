import { useState } from "react"
import Navbar from "../Components/Navbar/Navbar"
import Projects from "./Projects";
import AboutUs from "./AboutUs/AboutUs";
import BottomCard from "../Components/BottomCard/BottomCard";
import Home from "./Home/Home";
import cve from "../Resources/Docs/cve.pdf"
import cvt from "../Resources/Docs/cvt.png"
import cvn from "../Resources/Docs/cvn.jpeg"

import PerfilE from "../Resources/About/PerfilE.jpeg"
import SkillsE from "../Resources/About/SkillsE.jpeg"
import PerfilT from "../Resources/About/PerfilT.jpeg"
import SkillsT from "../Resources/About/SkillsT.jpeg"
import PerfilN from "../Resources/About/PerfilN.jpeg"
import SkillsN from "../Resources/About/SkillsN.jpeg"

import Escritor from "../Resources/ProjectsImg/Escritor.jpg";
import rayT from "../Resources/ProjectsImg/rayT.jpg";
import MediaNoche from "../Resources/ProjectsImg/MediaNoche.png";

import paint from "../Resources/ProjectsImg/Paint.jpg";
import cv from "../Resources/ProjectsImg/cv.jpg";
import Dual from "../Resources/ProjectsImg/Dual.png";
import Endepedia from "../Resources/ProjectsImg/EndepediaApp.jpg";
import Endep from "../Resources/ProjectsImg/Endep.jpg";
import Ayc from "../Resources/ProjectsImg/Ayc.png";

import Precepto from "../Resources/ProjectsImg/Precepto.png";
import Agape from "../Resources/ProjectsImg/Agape.png";
import CharacterD from "../Resources/ProjectsImg/Character.png";
import Monster from "../Resources/ProjectsImg/monster.png";
import GongCha from "../Resources/ProjectsImg/GongCha.png";
import Model from "../Resources/ProjectsImg/Model.png";
import Anura from "../Resources/ProjectsImg/Anura.png";
import Medusa from "../Resources/ProjectsImg/Medusa.png";
import Snow from "../Resources/ProjectsImg/Snow.png";



export default function MainPage() {

    const data = {
        projects: {
            eduardo: [
                {title: "El joven gran escritor", description: " contest Participation", img: Escritor, category: 0},
                {title: "Raytracer", description: "Project Made in Java", img: rayT, category: 2},
                {title: "Midnight thoughts", description: "Book of poetry", img: MediaNoche, category: 0},
                {title: "Proyecto 3", description: "Es una descripción1", img: "", category: 2},
                {title: "Proyecto 4", description: "Es una descripción2", img: "", category: 2},
            ],
            team: [
                {title: "Endepedia", description: "Appe with RA that informs about the species of animals in danger of extinction and how to help, is interactive and fun to use.", img: Endepedia, category: 2},
                {title: "AyC site", description: "Development and design of the web page from the Art and Culture department, the users are all the people that work in the department. They can register the work, looking for information about the department and teams.", img: Ayc, category: 2},
                {title: "Endepedia Box", description: "RA project, based on the app we create, we develop an interactive cube with the same information of the app.", img: Endep, category: 2},
                {title: "Web Portfolio", description: "Web design for the presentation of our work has a team. a portafolio of our projects together.", img: cv, category: 2},
                {title: "Dualidad", description: "Dualidad is our most important project, a book on process. It's about the duality of human life, a compilation of many texts and poems each one related with the rest of the book.", img: {Dual}, category: 0},
                {title: "Piramide", description: "An artistic project we develop for Lead UP, it's a hologram made for the opening of the event collaboration with the Art and Culture department.", img: SkillsT, category: 0},
                {title: "Painting", description: "This is a painting made by the two of us, based on a poem. This specific project was the start of the graphic part of Dualidad (the book we are writing).", img: paint, category: 0},
            ],
            natalia: [
                {title: "Precepto", description: "Brand redesign for Precepto's new product: Crystal Clear tequila with flavor ", img: Precepto, category: 0},
                {title: "Agape", description: "Brand Book and digital marketing design for a brand call Agape, a digital gift store for couples.", img: Agape, category: 0},
                {title: "CharacterDesign", description: "Character design practice, different styles for animation", img: CharacterD, category: 0},
                {title: "Monster's house on christmas eve", description: "Matte Painting of the concept art that combines the christmas and the monsters", img: Monster, category: 0},
                {title: "GongCha Marketing", description: "Digital Marketing proposal for Gong Cha, publications for Instagram and Facebook.", img: GongCha, category: 0},
                {title: "3D Model", description: "3d modeling of characters for a personal videogame call Medusa's Crypt", img: Model, category: 2},
                {title: "Anura", description: "Video Game design and prototype, 2d Platformer, adventure and puzzle.", img: Anura, category: 2},
                {title: "Medusa's Crypt", description: "Video Game design and programing, unity 3D maze.", img: Medusa, category: 2},
                {title: "Snow Globe", description: "VFX project, develop snow and clouds in realflow", img: Snow, category: 2},
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
                Photos: {0: PerfilE, 1:SkillsE},
            },
            team: {
                indicators: {art: [[10, 10, 10, 10, 10, 10,]], tech: [[10, 10, 10, 10, 10, 10,]]},
                links: {facebook: "https://www.google.com",
                        linkedin: "https://www.google.com",
                        instagram: "https://www.google.com",
                        github: "https://www.google.com",
                        cv: cvt
                        },
                Photos: {0: PerfilT, 1:SkillsT},
            },
            natalia: {
                indicators: {art: [[8, 8, 8, 8, 8, 8,]], tech: [[9, 9, 9, 9, 9, 9,]]},
                links: {facebook: "https://www.behance.net/nataliaorozcoIAD",
                        linkedin: "https://www.linkedin.com/in/natalia-orozco-alvarado-407319271/",
                        instagram: "https://www.instagram.com/natalia.digital.art/",
                        github: "https://github.com/NataliaOrozcoA?tab=repositories",
                        cv: cvn
                        },
                Photos: {0: PerfilN, 1:SkillsN},
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
        </div>
    )
}