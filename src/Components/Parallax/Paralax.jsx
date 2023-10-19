import React from 'react';
import './Paralax.css';
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
          to= {parNum == 2 ? "par0" : "par" + (parNum + 1)} // Este debe ser el identificador único de la siguiente sección
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="scroll-down-button"
        >
          <Button> {parNum == 2 ? <UpOutlined/> : <DownOutlined/>} </Button>
        </Link>

      <div className="caption">{caption}</div>
    </div>
    </Element>
  );
};

export default Parallax;