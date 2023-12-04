import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import "./index.less"
import styled from "@emotion/styled";
import {getLoginStatus, login} from "../../services";
import {TokenInfo, RESPONSE_STATUS} from "../../contants";
import {useNavigate} from "react-router-dom";
import {Response} from "../../types";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

interface Props {
    getLogin: (isLogin: boolean) => void
}

const Login = (props: Props) => {
    const navigate = useNavigate();
    const {getLogin} = props
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const params = {
            ...values
        }
        const res: Response<string> = await login(params)
        console.log(res)
        if (res.retCode == RESPONSE_STATUS.SUCCESS) {
            sessionStorage.setItem(TokenInfo.AUTHORIZATION, res.data)
            navigate('/')
            getLogin(true)
            return res.data
        }
    };

    return (
        <div className="body-container">
            <Form
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: '请输入您的用户名'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: '请输入您的密码'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <div  className="operateBtn">
                    <div>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>
                    </div>
                    <div>
                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                    </div>
                    </div>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgba(94, 108, 132);
`