import React from 'react';
import "./index.css"
// @ts-ignore
import English from "../../assets/images/English.jpg"
// @ts-ignore
import logo from "../../assets/images/logo.jpg"
import {withAuth} from "../../hooks/withLogin";

const Header = () => {
    return (
        <div className="topBar">
            <div className="header">
                <div className="wrapper">
                    <div className="headerLogo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="headerMenu">
                        <div>
                            <a href="/">首页</a>
                        </div>
                        <div>
                            <a href="/learnWorld">背单词</a>
                        </div>
                        <div>
                            <a href="/reStudy">复习</a>
                        </div>
                        <div>
                            <a href="/mine">我的</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(Header);