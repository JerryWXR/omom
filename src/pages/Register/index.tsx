import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Space} from 'antd';
import "./index.css"
import { register} from "../../services";
import {Response} from "../../types";
import {RESPONSE_STATUS} from "../../contants";
import {useNavigate} from "react-router-dom";
import {LockOutlined, PhoneOutlined, UserOutlined} from "@ant-design/icons";

type FieldType = {
    username: string;
    password: string;
    phone: string;
    verifyCode: string
};

interface Props {
    setIsRegister: (register: boolean) => void
}

const Register = (props: Props) => {
    let timer: any
    const {setIsRegister} = props
    const [count, setCount] = useState(60);
    const [btnDisabled, setBtnDisabled] = useState(false)
    const navigate = useNavigate();
    // 注册
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const params = {
            ...values
        }
        const res: Response<string> = await register(params)
        console.log(res)
        if (res.retCode == RESPONSE_STATUS.SUCCESS) {
            setIsRegister(true)
            return res.data
        }
    };
    // 初始化定时器
    useEffect(() => {
        clearInterval(timer)
        return () => clearInterval(timer)
    }, [])
    // 发送验证码
    const getCode = () => {
        timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
        // 不可点击
        setBtnDisabled(true)
    };
    // 监听倒计时
    useEffect(() => {
        if (count > 0 && count < 60) {
        } else {
            // 定时器超过时间后，可以重新发送验证码
            clearInterval(timer)
            // 可点击
            setBtnDisabled(false)
            setCount(60)
        }
    }, [count]);
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
                        placeholder="设置密码"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: '请重新输入您的密码'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="确认密码"
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[{required: true, message: '请输入您的手机号'}]}
                >
                    <Input
                        prefix={<PhoneOutlined />}
                        type="phone"
                        placeholder="手机号"
                    />
                </Form.Item>
                <Form.Item
                    name="verifyCode"
                    rules={[{required: true, message: '请输入您的验证码！'}]}
                >
                    <Space.Compact style={{width: '100%'}}>
                        <Input/>
                        <>
                            {!btnDisabled ? (
                                <Button type={"primary"} onClick={getCode}>发送验证码</Button>
                            ) : (
                                <Button disabled>已发送({count}秒)</Button>
                            )}</>
                    </Space.Compact>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        注册
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default Register;