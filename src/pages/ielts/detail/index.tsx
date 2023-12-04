import React, {useEffect, useState} from 'react';
import './index.less'
import {Avatar, Card, Image, Tabs, TabsProps, Tag, theme} from 'antd';
import StickyBox from "react-sticky-box";
import TabPane from "antd/es/tabs/TabPane";
import {CaretRightFilled} from "@ant-design/icons";

const ClassDetail = () => {
    const {token: {colorBgContainer},} = theme.useToken();
    const [activeTab, setActiveTab] = useState(0);
    const [currentTab, setCurrentTab] = useState(0);

    const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
        <StickyBox offsetTop={0} offsetBottom={20} style={{zIndex: 1}}>
            <DefaultTabBar {...props} style={{background: colorBgContainer}}/>
        </StickyBox>
    );
    const handleScroll = () => {
        const threshold = 500; // 设置触发切换的滚动阈值
        if (window.scrollY > threshold) {
            console.log('00000')
            setActiveTab(1); // 切换到第二个选项卡
            console.log(activeTab)
        } else {
            console.log('1231`2323')
            setActiveTab(0); // 切换回第一个选项卡
            console.log(activeTab)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeTab]);
    const changeTag = (index:number) => {
        setCurrentTab(index)
    }

    return (
        <div className='detail-container'>
            <Tabs defaultActiveKey="1" centered renderTabBar={renderTabBar}>
                <TabPane tab="详情" key="1">
                    {/*{*/}
                    {/*    activeTab === 0 &&*/}
                    {/*    <>*/}
                            <div className='container-top'>
                                <div className='top-image'>
                                    <Image
                                        preview={false}
                                        width={'100%'}
                                        height={300}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                                </div>
                                <div className='top-clickCount'>
                                    <div>免费</div>
                                    <div>已有2023人看过</div>
                                </div>
                                <div className='top-title'>
                                    <Tag className='top-catorgary'>自研</Tag>
                                    <div>雅思小白逆袭</div>
                                    </div>
                                <div className='top-tags'>
                                    <Tag onClick={() => changeTag(0)} className={currentTab==0?'active':''}>免费试听</Tag>
                                    <Tag onClick={() =>changeTag(1)} className={currentTab==1?'active':''}>7天必冲</Tag>
                                </div>
                            </div>
                            <div className='container-time'>
                                时间 2023-11-30 20:30：00 ｜ 2课时
                            </div>
                            <div className='container-teacher'>
                                <span className='teacher-title'>授课老师</span>
                                <span>
                                    <Card style={{ width: 150,height:70,marginTop:10,backgroundColor:'rgb(246,249,251)' }}>
                                        <div className='teacher-card'>
                                            <Avatar className='card-avatar'
                                                    src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'/>
                                            <div className='card-name'>
                                                <span>陈宇</span>
                                                 <span>主讲老师</span>
                                            </div>
                                            <div><CaretRightFilled /></div>
                                        </div>
                                    </Card>
                                </span>
                            </div>
                            <div className='container-class'>
                                <span className='class-title'>课程详情</span>
                            </div>
                    {/*    </>*/}
                    {/*}*/}

                </TabPane>
                <TabPane tab="评价" key="2">
                    {/*{*/}
                    {/*    activeTab === 1 &&*/}
                    {/*    <>*/}
                            <div className='container-top'>
                                <div className='top-image'>
                                    <Image
                                        preview={false}
                                        width={'100%'}
                                        height={300}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                                </div>
                                <div className='top-clickCount'>
                                    <div>免费</div>
                                    <div>已有2023人看过</div>
                                </div>
                                <div className='top-title'>雅思小白逆袭</div>
                                <div className='top-tags'>免费试听</div>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                        {/*</>}*/}
                </TabPane>
                <TabPane tab="课程目录" key="3"></TabPane>
            </Tabs>

        </div>
    );
};

export default ClassDetail;