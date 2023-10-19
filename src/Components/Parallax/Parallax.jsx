import React from 'react';
import './Parallax.css';
import { Button } from "antd"
import { Link, Element } from 'react-scroll';
import {  DownOutlined, UpOutlined } from '@ant-design/icons';

const Parallax = ({ image, caption, parNum }) => {
  return (
    <Element name= {"par" + parNum}>
    <div className="parallax-container">
      <div className="parallax" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="triangle-button left"></div>
      <div className="triangle-button right"></div>


      <Link
          to= {parNum == 2 ? "par0" : "par" + (parNum + 2)} // Este debe ser el identificador único de la siguiente sección
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="scroll-down-button"
        >
          {parNum !== 1 ? <Button> {parNum == 2 ? <UpOutlined/> : <DownOutlined/>} </Button> : null}
          
        </Link>

      <div className="caption">{caption}</div>
    </div>
    </Element>
  );
};

export default Parallax;