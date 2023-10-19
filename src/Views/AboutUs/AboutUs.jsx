import {motion} from "framer-motion"
import { useState } from "react"
import { LinkedinOutlined, FacebookOutlined, InstagramOutlined,GithubOutlined, MessageOutlined, } from '@ant-design/icons';
import { Slider, Row, Col, Card, Image, Carousel, FloatButton, Switch, Affix  } from 'antd';
import Person_Navbar from "../../Components/Person_Navbar/Person_Navbar";
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import {Padding } from "@mui/icons-material";
import Project_Card from "../../Components/Project_Card/Project_Card";
import "./AboutUs.css";
import ReactECharts from 'echarts-for-react';



export default function AboutUs({data}) {

    /*
    Category - 0 -Art | 1 - Both | 2 - Art
    */

    const handleSelection = (e) => {
        setCurrentUser(e.key);
        if(e.key == 0){
          setCurrentInfo(data.eduardo)
          setIndicatorsData(CurrentInfo.tech)
        }
        if(e.key == 1){
          setCurrentInfo(data.team)
          setIndicatorsData(CurrentInfo.tech)
        }
        if(e.key == 2){
          
          setCurrentInfo(data.natalia)
          setIndicatorsData(CurrentInfo.tech)
        }
        
      };

    const handleIndicatorsChange = (params) => {
      if(params){
        setCurrentIndicators(techIndicators)
        setColor("#B3E4A1")
        setIndicatorName("Tech")
      }else{
        setCurrentIndicators(artIndicators);
        setColor("#F9713C")
        setIndicatorName("Art")
      }
      if(currentUser == 0){
        params ? setIndicatorsData(data.eduardo.indicators.tech) : setIndicatorsData(data.eduardo.indicators.art)
      }
      if(currentUser == 1){
        params ? setIndicatorsData(data.team.indicators.tech) : setIndicatorsData(data.team.indicators.art)
      }
      if(currentUser == 2){
        params ? setIndicatorsData(data.natalia.indicators.tech) : setIndicatorsData(data.natalia.indicators.art)
      }
    }

    
    const artIndicators = [
      { name: 'Poetry', max: 10 },
      { name: 'Art', max: 10 },
      { name: 'Literature', max: 10 },
      { name: 'Photography', max: 10 },
      { name: 'Painting', max: 10 },
      { name: 'Music', max: 10 }
    ];

    const techIndicators = [
      { name: 'Coding', max: 10 },
      { name: 'Adobe', max: 10 },
      { name: '3D modeling', max: 10 },
      { name: 'Name 1', max: 10 },
      { name: 'Name 2', max: 10 },
      { name: 'Name 3', max: 10 }
    ];
    
      const [currentUser, setCurrentUser] = useState('1');
      const [CurrentInfo, setCurrentInfo] = useState(data.team);
      const [indicatorsData, setIndicatorsData] = useState(data.team.indicators.art);
      const [indicatorName, setIndicatorName] = useState("Art");
      const [color, setColor] = useState("#F9713C");
      const [CurrentIndicators, setCurrentIndicators] = useState(artIndicators);
    
                     
    //Aptitudes
    const lineStyle = {
      width: 1,
      opacity: 0.5
    };
    var option = {
      backgroundColor: '#161627',
      title: {
        text: 'Aptitudes',
        left: 'center',
        textStyle: {
          color: '#eee'
        }
      },
      legend: {
        bottom: 5,
        data: [indicatorName,],
        itemGap: 20,
        textStyle: {
          color: '#fff',
          fontSize: 14
        },
        selectedMode: 'single'
      },
      radar: {
        indicator: CurrentIndicators,
        //shape: 'circle',
        splitNumber: 5,
        axisName: {
          color: 'rgb(238, 197, 102)'
        },
        splitLine: {
          lineStyle: {
            color: [
              'rgba(238, 197, 102, 0.1)',
              'rgba(238, 197, 102, 0.2)',
              'rgba(238, 197, 102, 0.4)',
              'rgba(238, 197, 102, 0.6)',
              'rgba(238, 197, 102, 0.8)',
              'rgba(238, 197, 102, 1)'
            ].reverse()
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.5)'
          }
        }
  },
  series: [
    {
      name: indicatorName,
      type: 'radar',
      lineStyle: lineStyle,
      data: indicatorsData,
      symbol: 'none',
      itemStyle: {
        color: color
      },
      areaStyle: {
        opacity: 0.1
      },
    },
  ]
};

    //EndAptitudes
    
    return(
        <div>

        <div style={{position: "fixed", width: "100%", zIndex: "1000", marginTop:"-104px"}}>
            <Person_Navbar handleSelection={handleSelection} current={currentUser}/>
        </div>
        
        <div>

            <Card style={{margin: "100px 50px 50px 50px"}}>
                <Card.Grid style={{width: "50%"}}>Ingresar Aqui la info</Card.Grid>
                <Card.Grid style={{width: "50%"}}>
                    <Image  
                    style={{width:"50%"}}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    /> 
                </Card.Grid>
            </Card>
            <Card style={{margin: "50px"}}>
                <Card.Grid style={{width: "50%"}}>
                    <Image  
                    style={{width:"50%"}}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    /> 
                </Card.Grid>
                
                <Card.Grid style={{width: "50%"}}>Ingresar Aqui la info</Card.Grid>
            </Card>

            <FloatButton.Group
                trigger="hover"
                type="primary"
                style={{ right: 24 }}
                icon={<MessageOutlined />}
                >
                <FloatButton icon={<LinkedinOutlined />} href={CurrentInfo.links.linkedin} target="_blank"/>
                <FloatButton icon={<FacebookOutlined />} href= {CurrentInfo.links.facebook} target="_blank"/>
                <FloatButton icon={<InstagramOutlined />} href={CurrentInfo.links.instagram} target="_blank"/>
                <FloatButton icon={<GithubOutlined />} href={CurrentInfo.links.github} target="_blank"/>
            </FloatButton.Group>

            <Card style={{margin: "50px"}}>
                <Card.Grid style={{width: "50%"}}>
                  <ReactECharts  
                  option={option}
                  style={{ height: '500px' }}
                  />
                  <div className="icon-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
                    <BrushIcon style={{margin: "10px 10px 0px 0px"}}/>
                      <Switch onChange={handleIndicatorsChange} style={{marginTop: "10px"}}/>
                    <ComputerIcon style={{margin: "10px 0px 0px 10px"}}/>

                  </div>
                </Card.Grid>
                
                <Card.Grid style={{width: "50%"}}>Ingresar Aqui la info</Card.Grid>
            </Card>
            
            <Carousel autoplay>
                <div>
                <h3 className="content-style" >1</h3>
                </div>
                <div>
                <h3 className="content-style">2</h3>
                </div>
                <div>
                <h3 className="content-style">3</h3>
                </div>
                <div>
                <h3 className="content-style">4</h3>
                </div>
            </Carousel>
            
        </div>
      </div>
    )
}