import { Menu, Affix, Col } from "antd"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import logo from "../../Resources/Images/logo2.png"
import ImgName from "../../Resources/Images/name.png"
import "./Navbar.css";

export default function Navbar({handleSelection}) {
    const items = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
          }
    ]

    return(
        <Affix offsetTop={0}>
            <Col span={24}>
                <Menu  className="aligneNav" 
                    mode="horizontal" 
                    style={{position: "relative", top: "0px", width:"100%", background: "rgba(0,109,103,255)", height:"100px"}}>
                    <Menu.Item key="logo" style={{width:"10%"}} onClick={() => handleSelection(0)}>
                        <img src={logo} className="logo" style={{width: "60%", height: "60%", position: "center"}}></img>
                    </Menu.Item>
                    <Menu.Item key="name" disabled="true" style={{width:"45%"}}>
                        <h1 className="Title">GraphCode</h1>                    </Menu.Item>
                    <Menu.Item key="about-us" className="navbar-button" onClick={() => handleSelection(1)}>
                        <h1 className="Title1">About Us</h1>
                    </Menu.Item>
                    <Menu.Item key="projects" className="navbar-button" onClick={() => handleSelection(2)}>
                        <h1 className="Title1">Projects</h1>
                    </Menu.Item>
                </Menu>
            </Col>

        </Affix>
    )
}