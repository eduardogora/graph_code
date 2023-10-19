import { Card } from 'antd';

export default function Project_Card({data}) {
    const {Meta} = Card;

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