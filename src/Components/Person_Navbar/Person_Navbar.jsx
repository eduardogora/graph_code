import { Menu } from "antd"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "./Person_Navbar.css";

export default function Person_Navbar({handleSelection, current}) {

    const items = [
        {
            label: 'Eduardo´s',
            key: '0',
            icon: <MailOutlined />,
        },
        {
            label: 'Team',
            key: '1',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'natalia´s',
            key: '2',
            icon: <SettingOutlined />,
        },
    ]

    return(
        <div>
            <Menu onClick={handleSelection} selectedKeys={[current]} mode="horizontal" items={items} className="navbar-personal"/>
        </div>
    )
}