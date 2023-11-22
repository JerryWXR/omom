import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import "./index.css"
import styled from "@emotion/styled";
import {login} from "../../services";
import {RESPONSE_STATUS} from "../../contants";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
const Login = ()=> {

    const onFinish =async (values: any) => {
        console.log('Success:', values);
        const params = {
            ...values
        }
        const res = await login(params)
        if(res.code==RESPONSE_STATUS.SUCCESS){
            return res.data
        }
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

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 4, span: 16 }}
                >
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <Button type="primary" htmlType="submit">请登录</Button>

            </Form>
        </div>
    );
};

export default Login;

const Title = styled.h2`
    margin-bottom: 2.4rem;
  color: rgba(94,108,132);
`