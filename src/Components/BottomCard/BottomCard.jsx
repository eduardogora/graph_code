import { Menu, Affix, Col, Form, Input, Button, Card, message } from "antd"
import { useState } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import logo from "../../Resources/Images/logo.png"

export default function BottomCard() {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };

    const successMessage = () => {
        message.success('Mail Sended Correctly');
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    const onFinish = (values) => {
        form.resetFields();
        successMessage()
      };

    return(
        <div>
            <Card style={{margin: "50px"}}>
                
                <Card.Grid style={{width: "50%"}}>
                    Ingresar Aqui la info
                </Card.Grid>

                <Card.Grid style={{width: "50%"}}>
                    Ingresar Aqui la info
                </Card.Grid>

                <Card.Grid style={{width: "50%"}}>
                    Ingresar Aqui la info
                </Card.Grid>
                
                <Card.Grid style={{width: "50%"}}>
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{ maxWidth: 600 }}
                        validateMessages={validateMessages}
                        form={form}
                    >
                        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </Card.Grid>

            </Card>
        </div>
    )
}