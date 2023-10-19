import { useState } from "react"
import { Slider, Row, Col } from 'antd';
import Person_Navbar from "../Components/Person_Navbar/Person_Navbar";
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import Project_Card from "../Components/Project_Card/Project_Card";

export default function Projects({data,person}) {

    /*
    Category - 0 -Art | 1 - Both | 2 - Art
    */
    
    
    const [currentUser, setCurrentUser] = useState(person);
    const [currentData, setCurrentData] = useState(data.team);
    
    const [value, setValue] = useState(1);
    
    const marks = {
        0: "Art",
        1: "Both",
        2: "Tech"
    };

    const handleSelection = (e) => {
        setCurrentUser(e.key);
        if(e.key == 0){
            setCurrentData(data.eduardo)
        }
        if(e.key == 1){
            setCurrentData(data.team)
        }
        if(e.key == 2){
            setCurrentData(data.natalia)
        }
        ;
      };

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
                currentData.map((project) => (
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