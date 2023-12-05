import React, {useEffect, useState} from 'react';
import './index.less'
import {Avatar, Card, Collapse, Divider, Empty, Image, List, Tabs, TabsProps, Tag, theme} from 'antd';
import StickyBox from "react-sticky-box";
import TabPane from "antd/es/tabs/TabPane";
import {CaretRightFilled, CustomerServiceFilled, LikeOutlined, StarFilled, VideoCameraFilled} from "@ant-design/icons";

const ClassDetail = () => {
    const {token: {colorBgContainer},} = theme.useToken();
    const [activeTab, setActiveTab] = useState<string>("0");
    const [currentTab, setCurrentTab] = useState(0);
    const [timetableTag, setTimetableTag] = useState(0);
    const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
        <StickyBox offsetTop={0} offsetBottom={20} style={{zIndex: 1}}>
            <DefaultTabBar {...props} style={{background: colorBgContainer}}/>
        </StickyBox>
    );
    const changeTag = (index: number) => {
        setCurrentTab(index)
    }
    const changeTimetableTag = (index: number) => {
        setTimetableTag(index)
    }
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    return (
        <div className='detail-container'>
            <Tabs defaultActiveKey="1" centered renderTabBar={renderTabBar}>
                <TabPane tab="详情" key="1">
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
                            <Tag onClick={() => changeTag(0)} className={currentTab == 0 ? 'active' : ''}>免费试听</Tag>
                            <Tag onClick={() => changeTag(1)} className={currentTab == 1 ? 'active' : ''}>7天必冲</Tag>
                        </div>
                    </div>
                    <div className='container-time'>
                        时间 2023-11-30 20:30：00 ｜ 2课时
                    </div>
                    <div className='container-teacher'>
                        <div className='teacher-title'>授课老师</div>
                        <span>
                                    <Card style={{
                                        width: 150,
                                        height: 70,
                                        marginTop: 10,
                                        backgroundColor: 'rgb(246,249,251)'
                                    }}>
                                        <div className='teacher-card'>
                                            <Avatar className='card-avatar'
                                                    src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'/>
                                            <div className='card-name'>
                                                <span>陈宇</span>
                                                 <span>主讲老师</span>
                                            </div>
                                            <div><CaretRightFilled/></div>
                                        </div>
                                    </Card>
                                </span>
                    </div>
                    <div className='container-class'>
                        <div className='class-title'>课程详情</div>
                    </div>

                </TabPane>
                <TabPane tab="评价" key="2">
                    <div className='container-evaluate'>
                        <div className='evaluate-title'>课程评价</div>
                        {
                            data.length == 0 ? <Empty className='empty-style' description={
                                <span>
                                暂无最新评价，来留下宝贵的一条吧～
                            </span>
                            }/> : <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                                                <div>
                                                    <Avatar
                                                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}/>
                                                </div>
                                                <div className='evaluate-info'>
                                                    <div className='info-member'>
                                                        <span>学员成</span>
                                                        <span>11-06</span>
                                                    </div>
                                                    <span style={{color: 'rgb(251,177,43', fontSize: '12px'}}>
                                                    <StarFilled/>
                                                    <StarFilled/>
                                                    <StarFilled/>
                                                    <StarFilled/>
                                                </span>
                                                    <span className='evaluate-content'>讲的不错</span>
                                                </div>
                                            </div>
                                            <div style={{margin: 'auto 0'}}>
                                                <LikeOutlined/>
                                            </div>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        }

                    </div>
                </TabPane>
                <TabPane tab="课程表" key="3">
                    <div className='container-timetable'>
                        <div className='timetable-title'>课程表</div>
                        <Divider/>
                        <div className='top-tags'>
                            <Tag onClick={() => changeTimetableTag(0)}
                                 className={timetableTag == 0 ? 'active' : ''}>课程安排</Tag>
                            <Tag onClick={() => changeTimetableTag(1)}
                                 className={timetableTag == 1 ? 'active' : ''}>微信公众号</Tag>
                            <Tag onClick={() => changeTimetableTag(2)}
                                 className={timetableTag == 2 ? 'active' : ''}>23年留学申请指南</Tag>
                            <Tag onClick={() => changeTimetableTag(3)}
                                 className={timetableTag == 3 ? 'active' : ''}>9月-12月口语新题</Tag>
                        </div>
                        <div className='tag-container'>
                            {timetableTag == 0 && <div>
                                <div className='tag-title'>直播课程</div>

                                <List
                                    className='tag-list'
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <div className='list-container'>
                                            <div>{index + 1}</div>
                                            <div className='list-content'>
                                                <Divider/>
                                                <List.Item>
                                                    <List.Item.Meta
                                                        title={<a href="https://ant.design">{item.title}</a>}
                                                        description={
                                                            <div className='broadcast-desc'>
                                                                <div>
                                                                    <VideoCameraFilled/>
                                                                    <span>直播</span>
                                                                    <span>|</span>
                                                                </div>
                                                                <div>11.04 20:30 - 22:00</div>
                                                                <div>等待直播</div>
                                                            </div>
                                                        }
                                                    />
                                                </List.Item>
                                            </div>
                                        </div>
                                    )}
                                />
                                <Divider/>
                                <div className='tag-title'>入学测试</div>

                                <List
                                    className='tag-list'
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <div className='list-container'>
                                            <div>{index + 1}</div>
                                            <div className='list-content'>
                                                <Divider/>
                                                <List.Item>
                                                    <List.Item.Meta
                                                        title={<a href="https://ant.design">{item.title}</a>}
                                                        description={
                                                            <div className='broadcast-desc'>
                                                                <div>
                                                                    <VideoCameraFilled/>
                                                                    <span>直播</span>
                                                                    <span>|</span>
                                                                </div>
                                                                <div>11.04 20:30 - 22:00</div>
                                                                <div>等待直播</div>
                                                            </div>
                                                        }
                                                    />
                                                </List.Item>
                                            </div>
                                        </div>
                                    )}
                                />
                                <Divider/>
                            </div>}
                        </div>
                    </div>
                </TabPane>
            </Tabs>
            <div className="fixed-bottom">
                {/* 固定在底部的内容 */}
                <div className='bottom-left'>
                    <CustomerServiceFilled/>
                    <div>客服</div>
                </div>
                <button className='bottom-right'>立即报名</button>
            </div>
        </div>
    );
};

export default ClassDetail;