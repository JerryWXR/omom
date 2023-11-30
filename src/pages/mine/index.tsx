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
                            <div style={{height:"60px",lineHeight:"60px"}}>
                                <Input className="inputStyle"></Input>
                            </div>
                        </div>
                        <Divider style={{width:'98%',marginBottom:'0'}}></Divider>
                        <div className="countInfo">
                            <div className="countInfo-per">
                                <span>记忆模式：看英文回忆中文</span>
                                <span style={{fontSize: '12px', color: '#aaa'}}>当日复习的单词量+当日新学单词量</span>
                            </div>
                            <div style={{height:"60px",lineHeight:"60px"}}>
                                <Input className="inputStyle"></Input>
                            </div>
                        </div>
                    </div>
                    <div className="wordContainer">
                        <div className="wordInfo">
                            <div>
                                单词上限总量
                            </div>
                            <div>
                                <Input className="inputStyle"></Input>
                            </div>
                        </div>
                        <Divider style={{width:'98%',marginBottom:'0'}}></Divider>
                        <div className="wordInfo">
                            <div>
                                免费获取单词上限
                            </div>
                            <div>
                                <Input className="inputStyle"></Input>
                            </div>
                        </div>
                        <Divider style={{width:'98%',marginBottom:'0'}}></Divider>
                        <div className="wordInfo">
                            <div>
                                购买单词上限
                            </div>
                            <div>
                                <Input className="inputStyle"></Input>
                            </div>
                        </div>
                    </div>
                    <div className="wordContainer">
                        <div className="wordInfo">
                            <div>
                                已记忆的单词量
                            </div>
                            <div>
                                <Input className="inputStyle"></Input>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Mine;