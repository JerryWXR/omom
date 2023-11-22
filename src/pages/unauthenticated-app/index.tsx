import React, {useEffect, useState} from 'react';
import {Button, Card, Divider, Typography} from "antd";
import Register from "../Register";
import Login from "../Login";
import "./index.css"
import {useAuth} from "../../hooks/withLogin";
import {useNavigate} from "react-router-dom";

const UnauthenticatedApp = () => {
    const [isRegister,setIsRegister] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const auth = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.loginInfo.isLogin) {
            navigate('/')
        }
    }, [])

    return (
        <div className="container">
            <Card>
                {/*{error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}*/}
                {
                    isRegister ? <Register /> : <Login />
                }

                <Divider/>
                <a onClick={() => setIsRegister(!isRegister)}>{isRegister ? '已经有帐号了？直接登录' : '没有账号？注册新账号'}</a>
            </Card>
        </div>
    );
};

export default UnauthenticatedApp;