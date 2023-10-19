import "./Home.css";
import React from 'react';
import { useState } from "react"
import Header from "../../Components/HomeHeader/Header"
import Parallax1 from "../../Resources/Images/Paralax1.png"
import Parallax2 from "../../Resources/Images/Paralax2.png"
import Parallax from "../../Components/Parallax/Parallax";

export default function Home(){
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