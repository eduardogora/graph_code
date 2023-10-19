import { useState, useEffect } from "react"
import { LinkedinOutlined, AlertOutlined, InstagramOutlined,GithubOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Image, Carousel, FloatButton, Switch } from 'antd';
import Person_Navbar from "../../Components/Person_Navbar/Person_Navbar";
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import "./AboutUs.css";
import ReactECharts from 'echarts-for-react';
import LoadingAboutusAnim from "../../Components/Loading/LoadingAboutusAnim";
import BottomCard from "../../Components/BottomCard/BottomCard";
import paint from "../../Resources/ProjectsImg/Paint2.jpeg";
import piramide from "../../Resources/ProjectsImg/Piramide.jpg";
import Endepedia from "../../Resources/ProjectsImg/Endepedia.jpg";
import Endep from "../../Resources/ProjectsImg/Endep.jpg";


export default function AboutUs({data}) {

  const [loading, setLoading] = useState(true);
  /*
  Category - 0 -Art | 1 - Both | 2 - Art
  */


  useEffect(() => {
      const timeoutId = setTimeout(() => {
          setLoading(false);

      }, 10000);
  
      return () => clearTimeout(timeoutId);
    }, []);

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
      { name: 'RA', max: 10 },
      { name: 'Videogames', max: 10 },
      { name: 'Web', max: 10 }
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
        
          {!loading 
          ? (
            <div>

            <div style={{position: "fixed", width: "100%", zIndex: "1000", marginTop:"-104px"}}>
                <Person_Navbar handleSelection={handleSelection} current={currentUser}/>
            </div>
            
            <div>

                <Card style={{margin: "100px 50px 50px 50px"}}>
                    <Card.Grid className="Titulo1" style={{width: "50%"}}>{CurrentInfo.Info[0]}</Card.Grid>
                    <Card.Grid style={{width: "50%"}}>
                        <Image  
                        style={{width:"50%"}}
                        src={CurrentInfo.Photos[0]}
                        /> 
                    </Card.Grid>
                </Card>
                <Card style={{margin: "50px"}}>
                    <Card.Grid style={{width: "50%"}}>
                        <Image  
                        style={{width:"50%"}}
                        src={CurrentInfo.Photos[1]}
                        /> 
                    </Card.Grid>
                    
                    <Card.Grid className="Titulo1" style={{width: "50%"}}>{CurrentInfo.Info[1]}</Card.Grid>
                </Card>

                <FloatButton.Group
                    trigger="hover"
                    type="primary"
                    style={{ right: 24}}
                    icon={<MessageOutlined />}
          
                    >
                    <FloatButton icon={<LinkedinOutlined />} href={CurrentInfo.links.linkedin} target="_blank" tooltip="Linkedin"/>
                    <FloatButton icon={<AlertOutlined />} href= {CurrentInfo.links.facebook} target="_blank" tooltip="Extra"/>
                    <FloatButton icon={<InstagramOutlined />} href={CurrentInfo.links.instagram} target="_blank" tooltip="Instagram"/>
                    <FloatButton icon={<GithubOutlined />} href={CurrentInfo.links.github} target="_blank" tooltip="Github"/>
                    <FloatButton icon={<UserOutlined />} href={CurrentInfo.links.cv} target="_blank" tooltip="CV"/>
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
                    
                    <Card.Grid className="Titulo1" style={{width: "50%"}}>{CurrentInfo.Info[2]}</Card.Grid>
                </Card>
                
                <Carousel autoplay>
                    <div>
                    <Image src={paint}/>
                    </div>
                    <div>
                    <Image src={piramide}/>
                    </div>
                    <div>
                    <Image src={Endepedia}/>
                    </div>
                    <div>
                    <Image src={Endep}/>
                    </div>
                </Carousel>
                
                <BottomCard style={{position: "fixed", bottom: "0"}}/>
                
            </div>
        </div>
          ) 
          : <LoadingAboutusAnim/>}
      </div>
    )
}