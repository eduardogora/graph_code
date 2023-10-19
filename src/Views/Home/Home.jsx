import "./Home.css";
import React from 'react';
import {Button, Image, Carousel } from 'antd';
import { useState } from "react"
import Header from "../../Components/HomeHeader/Header"
import img from "../../Resources/Images/persona.png"
import Parallax1 from "../../Resources/Images/Paralax1.png"
import Parallax2 from "../../Resources/Images/Paralax2.png"
import Projects from "../../Views/Projects";
import Parallax from "../../Components/Parallax/paralax";

import headerHome from "../../Resources/Images/headerHome.png"
import { right } from "@popperjs/core";

export default function Home({data},{handleSelection}){
    
    const [currentSection, setCurrentSection] = useState(0);
    return(
        <div >
            <Header></Header>
            <div>
                <Parallax image={Parallax1}/>
                <Parallax image={Parallax1}/>
                <Parallax image={Parallax2}/>
            </div>
        </div>
    )
}