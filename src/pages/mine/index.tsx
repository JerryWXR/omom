import React from 'react';
import {withAuth} from "../../hooks/withLogin";
// @ts-ignore
import avatar from "../../assets/images/avatar.jpeg";
import "./index.css"
import {Divider, Input} from "antd";

const Mine = () => {
    return (
        <div className="mineContainer">
                <div className="containerTop">
                    <div className="personalInfo">
                        <img style={{width: '80px', height: '80px', borderRadius: '10px'}} src={avatar} alt=""/>
                        <div className="nameContainer">
                            <div className="nickName">今天全背完</div>
                            <div className="otherInfo">
                                <span>LV12</span>
                                <span>UID 13865608</span>
                            </div>
                        </div>
                    </div>
                    <div className="signIn">
                        <div className="signInDetail">
                            <span>1</span>
                            <span>连续签到</span>
                        </div>
                        <div className="signInDetail">
                            <span>1</span>
                            <span>累计签到</span>
                        </div>
                        <div className="signInDetail">
                            <span>1m</span>
                            <span>累计学习分钟</span>
                        </div>
                    </div>
                    <div className="countContainer">
                        <div className="countInfo">
                            <div className="countInfo-per">
                                <span>每日学习量</span>
                                <span style={{fontSize: '12px', color: '#aaa'}}>当日复习的单词量+当日新学单词量</span>
                            </div>
                            <div>
                                <Input></Input>
                            </div>
                        </div>
                        <Divider className="dividerStyle"></Divider>
                        <div className="countInfo">
                            <div className="countInfo-per">
                                <span>每日学习量</span>
                                <span style={{fontSize: '12px', color: '#aaa'}}>当日复习的单词量+当日新学单词量</span>
                            </div>
                            <div>
                                <Input></Input>
                            </div>
                        </div>
                        <Divider className="dividerStyle"></Divider>
                    </div>
                </div>
                <div>单词设置部分</div>
                <div>已记忆单词量</div>
        </div>
    );
};

export default withAuth(Mine);