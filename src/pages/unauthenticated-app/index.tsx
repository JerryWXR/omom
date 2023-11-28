import React, {useEffect, useState} from 'react';
import { Card, Divider} from "antd";
import Register from "../Register";
import Login from "../Login";
import "./index.css"
import {useAuth} from "../../hooks/withLogin";
import {useNavigate} from "react-router-dom";


interface Props {
    getIsLogin:(isLogin: boolean) => void
}
const UnauthenticatedApp = (props:Props) => {
    const [isRegister,setIsRegister] = useState<boolean>(true)
    const [login,setLogin] = useState<boolean>(true)

    const loginInfo = useAuth()
    const navigate = useNavigate();
    const {getIsLogin} = props
    const getLogin = (data:boolean) => {
        console.log(data)
        getIsLogin(data)
    }

    useEffect(() => {
        if (loginInfo.isLogin) {
            navigate('/')
        }
    }, [])

    return (
        <div className="container">
            <Card>
                {
                    isRegister ?  <Login getLogin={getLogin}></Login> : <Register setIsRegister={setIsRegister}/>
                }

                <Divider/>
                <a onClick={() => setIsRegister(!isRegister)}>{isRegister ? '没有账号？注册新账号' :'已经有帐号了？直接登录' }</a>
            </Card>
        </div>
    );
};

export default UnauthenticatedApp;