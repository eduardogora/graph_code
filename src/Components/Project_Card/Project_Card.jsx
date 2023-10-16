import {motion} from "framer-motion"
import { useState } from "react"
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import { Height, Padding } from "@mui/icons-material";

export default function Project_Card({data}) {
    const {Meta} = Card;

    console.log("Data: ", data)

    return(
        <div>
            <Card
                hoverable
                style={{ width: 240 , margin: "25px"}}
                cover={<img alt={data.title} src= {data.img}  style={{height: "200px"}}/>}
            >
                <Meta title={data.title} description="www.instagram.com" />
            </Card>
                
            
        </div>
    )
}