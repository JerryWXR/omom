import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./index.css"

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
const Register = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="body-container">
            <Form className="form"
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名！' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码！' }]}
                >
                    <Input.Password />
                </Form.Item>

                {/*<Form.Item wrapperCol={{ offset: 4, span: 16 }}>*/}
                {/*    <Button type="primary" htmlType="submit">*/}
                {/*        注册*/}
                {/*    </Button>*/}
                {/*</Form.Item>*/}
            </Form>
        </div>
    );
};

export default Register;