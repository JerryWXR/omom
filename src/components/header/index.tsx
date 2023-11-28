import React, {useState} from 'react';
import "./index.css"
// @ts-ignore
import English from "../../assets/images/English.jpg"
// @ts-ignore
import logo from "../../assets/images/logo.jpg"
import {Button, Modal} from "antd";
import {useNavigate} from "react-router-dom";
import UnauthenticatedApp from "../../pages/unauthenticated-app";



const Header = () => {
    const native = useNavigate()
    const toLogin = () => {
        // native("/login")
        setIsModalOpen(true);
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const showModal = () => {
    //     setIsModalOpen(true);
    // };


    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const getIsLogin = (data:boolean) => {
        if(data){
            setIsModalOpen(false);
        }
    }
    return (
        <div className="topBar">
            <div className="header">
                <div className="wrapper">
                    <div className="headerLogo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="headerMenu">
                        <div className="module">
                            <div>
                                <a href="/">首页</a>
                            </div>
                            <div>
                                <a href="/learnWord">背单词</a>
                            </div>
                            <div>
                                <a href="/reStudy">复习</a>
                            </div>
                            <div>
                                <a href="/mine">我的</a>
                            </div>
                        </div>
                        <div className="LoginBtn">
                            <Button onClick={toLogin} size={"small"} type="primary">登录</Button>
                        </div>
                    </div>
                    <Modal footer={null} centered={true} open={isModalOpen} onCancel={handleCancel}>
                        <div style={{width:"500px",textAlign:"center"}}>
                            {/*<span style={{margin:"0 auto"}}>123</span>*/}
                            <UnauthenticatedApp getIsLogin={getIsLogin}/>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Header;