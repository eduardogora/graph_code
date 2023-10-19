import "./Header.css";
import React from 'react';
import { Carousel } from 'antd';
import { Button, Image } from 'antd';
import headerHome from "../../Resources/Images/headerHome.png"

export default function Header(){
    return(
        <div>
            <div className='.container main_header-container'>
                <div className='main_header-left'>
                    <h1 className="text">Art & Tecnology</h1>
                    <h4 className="text">Looking for balance?</h4></div>
                <div className='main_header-right'>
                    <header className='main_header-img'>
                        <Image src={headerHome} className='MainHeader' alt="Header img" width={400}/>
                    </header>
                </div>
            </div>
        </div>
    )
}
