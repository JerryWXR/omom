import React from 'react';
import VideoPlayer from "../../components/videoPlayer";
import {Button, Collapse, Divider, Tabs, theme} from "antd";
import type {TabsProps} from 'antd';
import StickyBox from 'react-sticky-box';
import './index.css'
import TabPane from "antd/es/tabs/TabPane";

const VideoDetails = () => {
    const {token: {colorBgContainer},} = theme.useToken();
    const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
        <StickyBox offsetTop={0} offsetBottom={20} style={{zIndex: 1}}>
            <DefaultTabBar {...props} style={{background: colorBgContainer}}/>
        </StickyBox>
    );
    return (
        <div className='video-container'>
            <VideoPlayer/>
            <div className='tabs-container'>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <TabPane tab="课程介绍" key="1">
                        <div>
                            <div className='class-info'>
                                <div>
                                    和橘子学AI制图
                                </div>
                                <div>
                                    开课时间：<span>2023年5月31日～2024年10月31日</span>
                                </div>
                                <div>
                                    <span>¥ 299</span>
                                    <span>已有266人参加</span>
                                </div>
                            </div>
                            <Divider></Divider>
                            <div className='class-package'>
                                <div className='package-name'>
                                    <div>橘子老师AI课</div>
                                    <div>图片</div>
                                </div>
                                <div className='package-price'>
                                    <div className='price-info'>
                                        <div>
                                            <span>实付金额:</span>
                                            <span>¥499</span>
                                        </div>
                                        <div>已优惠:¥398</div>
                                    </div>
                                    <Button>购买套餐</Button>
                                </div>
                            </div>
                            <Divider></Divider>
                            <div className='class-desc'>
                                <div>课程概述</div>
                                <div></div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="课程目录" key="2">
                        <Collapse
                            expandIconPosition={"end"}
                            bordered={false}
                            style={{textAlign:'left',marginBottom:'20px',backgroundColor:'#fff'}}
                            items={[
                                { key: '1', label: '01 课程简介', children: <p>目录</p> },
                                { key: '2', label: '02 第一节', children: <p>目录w22</p> },
                                { key: '3', label: '01 课程简介', children: <p>目录</p> },
                                { key: '4', label: '02 第一节', children: <p>目录w22</p> },
                                { key: '5', label: '01 课程简介', children: <p>目录</p> },
                                { key: '6', label: '02 第一节', children: <p>目录w22</p> },
                            ]}
                        />
                    </TabPane>
                    <TabPane tab="课程评价" key="3">
                        我是tab3
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default VideoDetails;