import { Menu, Affix, Col } from "antd"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import logo from "../../Resources/Images/logo.png"
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
                <Menu /*onClick={onClick} selectedKeys={[current]}*/ 
                    mode="horizontal" 
                    style={{position: "relative", top: "0px", width:"100%", background: "rgba(0,109,103,255)", height:"100px"}}>
                    <Menu.Item key="logo" style={{width:"10%"}} onClick={() => handleSelection(0)}>
                        <img src={logo} className="logo" style={{width: "50%"}}></img>
                    </Menu.Item>
                    <Menu.Item key="name" disabled="true" style={{width:"45%"}}>
                        <h1 style={{textAlign: "center"}}>GRAPH CODE</h1>
                    </Menu.Item>
                    <Menu.Item key="about-us" className="navbar-button" onClick={() => handleSelection(1)}>
                        <h1>About Us</h1>
                    </Menu.Item>
                    <Menu.Item key="projects" className="navbar-button" onClick={() => handleSelection(2)}>
                        <h1>Projects</h1>
                    </Menu.Item>
                    {/*
                    <Menu.Item key="contact" className="navbar-button" onClick={() => handleSelection(3)}>
                        <h1>Contact</h1>
                    </Menu.Item>*/}
                </Menu>
            </Col>

        </Affix>
    )
}