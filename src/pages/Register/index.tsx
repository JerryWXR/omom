import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form, Input, Space} from 'antd';
import "./index.css"

type FieldType = {
    username: string;
    password: string;
    confirmPassword: string;
    remember?: string;
    iphone: number;
    code: number
};
const Register = () => {
    let timer: any
    const [count, setCount] = useState(60);
    const [btnDisabled, setBtnDisabled] = useState(false)
    // 注册
    const onFinish = (values: any) => {
        console.log('Success:', values);
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
            <Form className="form"
                  name="basic"
                  labelCol={{span: 8}}
                  wrapperCol={{span: 16}}
                  initialValues={{remember: true}}
                  onFinish={onFinish}
                  autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="用户名"
                    name="username"
                    rules={[{required: true, message: '请输入用户名！'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="设置密码"
                    name="password"
                    rules={[{required: true, message: '请输入您的密码！'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="确认密码"
                    name="confirmPassword"
                    rules={[{required: true, message: '请重新输入您的密码！'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="手机号码"
                    name="iphone"
                    rules={[
                        {required: true, message: '请输入您的手机号！'},
                        {
                            pattern: /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/,
                            message: '请输入正确的手机号'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="短信验证码"
                    name="code"
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

                        {/*<Button style={{backgroundColor: "#ccc"}} onClick={getCode}>获取验证码</Button>*/}
                    </Space.Compact>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 4, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;