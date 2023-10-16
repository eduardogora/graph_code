import {motion} from "framer-motion"
import { useState } from "react"
import { FrownOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Slider, Row, Col, Card, Image, Carousel, FloatButton  } from 'antd';
import Person_Navbar from "../../Components/Person_Navbar/Person_Navbar";
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import { Padding } from "@mui/icons-material";
import Project_Card from "../../Components/Project_Card/Project_Card";
import "./AboutUs.css";
import ReactECharts from 'echarts-for-react';



export default function AboutUs({data}) {

    /*
    Category - 0 -Art | 1 - Both | 2 - Art
    */
    const handleSelection = (e) => {
        console.log('click ', e.key);
        setCurrentUser(e.key);
      };
    
    const [currentUser, setCurrentUser] = useState('1');

    //Aptitudes
    const dataBJ = [[55, 9, 56, 0.46, 18, 6, 1]];
const dataGZ = [[26, 37, 27, 1.163, 27, 13, 1]];
const dataSH = [[91, 45, 125, 0.82, 34, 23, 1]];
const lineStyle = {
  width: 1,
  opacity: 0.5
};
var option = {
  backgroundColor: '#161627',
  title: {
    text: 'AQI - Radar',
    left: 'center',
    textStyle: {
      color: '#eee'
    }
  },
  legend: {
    bottom: 5,
    data: ['Beijing', 'Shanghai', 'Guangzhou'],
    itemGap: 20,
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    selectedMode: 'single'
  },
  radar: {
    indicator: [
      { name: 'AQI', max: 300 },
      { name: 'PM2.5', max: 250 },
      { name: 'PM10', max: 300 },
      { name: 'CO', max: 5 },
      { name: 'NO2', max: 200 },
      { name: 'SO2', max: 100 }
    ],
    shape: 'circle',
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
      name: 'Beijing',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataBJ,
      symbol: 'none',
      itemStyle: {
        color: '#F9713C'
      },
      areaStyle: {
        opacity: 0.1
      }
    },
    {
      name: 'Shanghai',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataSH,
      symbol: 'none',
      itemStyle: {
        color: '#B3E4A1'
      },
      areaStyle: {
        opacity: 0.05
      }
    },
    {
      name: 'Guangzhou',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataGZ,
      symbol: 'none',
      itemStyle: {
        color: 'rgb(238, 197, 102)'
      },
      areaStyle: {
        opacity: 0.05
      }
    }
  ]
};


    
    //EndAptitudes
    
    return(
        <div>
            <Person_Navbar handleSelection={handleSelection} current={currentUser}/>

            <Card style={{margin: "50px"}}>
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

            <FloatButton.Group
                trigger="hover"
                type="primary"
                style={{ right: 24 }}
                icon={<CustomerServiceOutlined />}
                >
                <FloatButton />
                <FloatButton icon={<CustomerServiceOutlined />} />
            </FloatButton.Group>

            <Card style={{margin: "50px"}}>
                <Card.Grid style={{width: "50%"}}>
                <ReactECharts  
                option={option}
                style={{ height: '400px' }}
                />
                </Card.Grid>
                
                <Card.Grid style={{width: "50%"}}>Ingresar Aqui la info</Card.Grid>
            </Card>



            
            
            
        </div>
    )
}