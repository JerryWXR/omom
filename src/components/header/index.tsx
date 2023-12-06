import React, {useState} from 'react';
import "./index.less"
// @ts-ignore
import English from "../../assets/images/English.jpg"
// @ts-ignore
import logo from "../../assets/images/logo.jpg"
import {Button, Menu, MenuProps, Modal} from "antd";
import {useNavigate} from "react-router-dom";
import UnauthenticatedApp from "../../pages/unauthenticated-app";

const items: MenuProps['items'] = [
    {
        label: (<div className="headerLogo">
                <img src={logo} alt=""/>
            </div>
        ),
        key: 'alipay',
    },
    {
        label: '有声课堂',
        key: '/audible',

    },
    {
        label: '背单词',
        key: '/learnWord',
    },
    {
        label: '雅思',
        key: '/ielts',
    },
    {
        label: '大学应试英语',
        key: '/collegeEnglish',
    },
    {
        label: '大学生竞赛',
        key: '/',
    },
    {
        label: '期末突击',
        key: '/',
    },
    {
        label: '四六级',
        key: '/',
    },
    {
        label: '考研',
        key: '/',
    },
    {
        label: '我的',
        key: '/mine',
    },

];
const Top = () => {
    const navigate = useNavigate()
    const toLogin = () => {
        // native("/login")
        setIsModalOpen(true);
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const getIsLogin = (data: boolean) => {
        if (data) {
            setIsModalOpen(false);
        }
    }
    const [current, setCurrent] = useState('/audible');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(e.key, {replace: true})
    };
    return (
        <div className="topBar">
            <div className="header">
                <div className="wrapper">
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
                    <div className="LoginBtn">
                        <Button onClick={toLogin} size={"small"} type="primary">登录</Button>
                    </div>
                    <Modal footer={null} centered={true} open={isModalOpen} onCancel={handleCancel}>
                        <div style={{width: "400px", textAlign: "center"}}>
                            <UnauthenticatedApp getIsLogin={getIsLogin}/>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Top;