import { Form, Input, Button, Card, message } from "antd"
import { useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function BottomCard() {
    const [form] = Form.useForm();

    const successMessage = () => {
        message.success('Mail Sended Correctly');
    };

    const errorMessage = () => {
      message.error('Mail not sended');
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

    useEffect(() => emailjs.init("irsYpC14MTfxGjhcf"), []);

    const onFinish = (values) => {
        form.resetFields();

        try {
          emailjs.send("service_upy9cye", 'template_ra7dcxd', {
           to_name: values.user.name, 
           email: values.user.email
          });
          successMessage();
        } catch (error) {
          errorMessage();
        }

        
      };

    return(
        <div>
            <Card style={{margin: "50px", }}>

                <Card.Grid style={{width: "50%"}} hoverable={false}>
                    <h1 style={{textAlign: "center"}}>Get in contact with us</h1>
                </Card.Grid>
                
                <Card.Grid 
                  style={{width: "50%", display:"flex", alignItems: 'center', flexDirection:"column", justifyContent:"center"}}
                  hoverable={false}>
                    <Form
                        layout="inline"
                        name="nest-messages"
                        onFinish={onFinish}
                        validateMessages={validateMessages}
                        form={form}
                    >
                        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                        </Form.Item>
                        <Form.Item>
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