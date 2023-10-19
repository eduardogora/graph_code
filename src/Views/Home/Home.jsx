import "./Home.css";
import React from 'react';
import {Button, Image, Carousel } from 'antd';
import { useState } from "react"
import Header from "../../Components/HomeHeader/Header"
import img from "../../Resources/Images/persona.png"
import Parallax1 from "../../Resources/Images/Paralax1.png"
import Parallax2 from "../../Resources/Images/Paralax2.png"
import Projects from "../../Views/Projects";
import Parallax from "../../Components/Parallax/Paralax";

import headerHome from "../../Resources/Images/headerHome.png"
import { right } from "@popperjs/core";

export default function Home(){
    
    const [currentSection, setCurrentSection] = useState(0);
    return(
        <div >
            <Header></Header>
            <div>
                <Parallax image={Parallax1} parNum = {0}/>
                <Parallax image={Parallax1} parNum = {1}/>
                <Parallax image={Parallax2} parNum = {2}/>
            </div>
        </div>
    )
}