import React, {useEffect, useState} from 'react';
import { Card, Divider} from "antd";
import Register from "../Register";
import Login from "../Login";
import "./index.css"
import {useAuth} from "../../hooks/withLogin";
import {useNavigate} from "react-router-dom";

const UnauthenticatedApp = () => {
    const [isRegister,setIsRegister] = useState<boolean>(true)
    const loginInfo = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (loginInfo.isLogin) {
            navigate('/')
        }
    }, [])

    return (
        <div className="container">
            <Card>
                {
                    isRegister ?  <Login /> : <Register setIsRegister={setIsRegister}/>
                }

                <Divider/>
                <a onClick={() => setIsRegister(!isRegister)}>{isRegister ? '已经有帐号了？直接登录' : '没有账号？注册新账号'}</a>
            </Card>
        </div>
    );
};

export default UnauthenticatedApp;