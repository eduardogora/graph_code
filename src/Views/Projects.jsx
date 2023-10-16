import {motion} from "framer-motion"
import { useState } from "react"
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider, Row, Col } from 'antd';
import Person_Navbar from "../Components/Person_Navbar/Person_Navbar";
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import { Padding } from "@mui/icons-material";
import Project_Card from "../Components/Project_Card/Project_Card";

export default function Projects({data}) {

    /*
    Category - 0 -Art | 1 - Both | 2 - Art
    */
    
    
    const [currentUser, setCurrentUser] = useState('1');
    const [currentData, setCurrentData] = useState(data.team);
    
    const [value, setValue] = useState(1);
    const max = 2;
    const min = 0;
    
    const marks = {
        0: "Art",
        1: "Both",
        2: "Tech"
    };

    const handleSelection = (e) => {
        console.log('click ', e.key);
        setCurrentUser(e.key);
        setCurrentData(data[e.key]);
      };

      console.log(currentData)

    return(
        <div>
            <Person_Navbar handleSelection={handleSelection} current={currentUser}/>
            <div className="icon-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
                <BrushIcon style={{margin: "7px"}}/>
                    <Slider onChange={setValue} 
                            value={value} marks={marks} 
                            step={null} 
                            defaultValue={1} 
                            min={0} 
                            max={2} 
                            range={true} 
                            included={false}
                            style={{width: "10%", alignContent:"center"}}
                            tooltip={{ formatter: null }}/>
                <ComputerIcon style={{margin: "7px"}}/>
            </div>
            <Row>
            {value !== 1 ? (
                currentData.projects.map((project) => (
                project.category == value ? ( 
                <Col key={project.title} span={4}>
                    <Project_Card data={project}/>
                </Col>) 
                : value == 1 ?
                (<Col key={project.title} span={4}>
                <Project_Card data={project}/>
                </Col>)  
                 : null
                
            ))
            )
            : null   
            }
            </Row>
            
        </div>
    )
}

/*
{value === 0 ? (
                data.projects.map((project) => (
                project.category == value ? ( 
                <Col key={project.title} span={4}>
                    <Project_Card data={project}/>
                </Col>) 
                : null
            ))
            )
            : (
                data.projects.map((project) => (
                <Col key={project.title} span={4}>
                    <Project_Card data={project}/>
                </Col>
                
            )))}
*/