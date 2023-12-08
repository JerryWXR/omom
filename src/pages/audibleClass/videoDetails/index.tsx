import React, {useEffect, useState} from 'react';
import VideoPlayer from "../../../components/videoPlayer";
import {Avatar, Button, Card, Divider, Image, List, Modal, Tabs, theme} from "antd";
import type {TabsProps} from 'antd';
import StickyBox from 'react-sticky-box';
import './index.less'
import TabPane from "antd/es/tabs/TabPane";
import {
    CaretRightFilled,
    CustomerServiceFilled,
    DownOutlined,
    LikeOutlined,
    RightOutlined,
    StarFilled
} from "@ant-design/icons";
import {checkSubscribe, getClassDetail, getClassPart, getLoginStatus, subscribeClass} from "../../../services";
import {useParams} from "react-router-dom";
import {AudibleClassDetail, AudiblePart, Subscribe} from "../../../types";
import UnauthenticatedApp from "../../unauthenticated-app";
import {RESPONSE_STATUS} from "../../../contants";

interface Props {
    course: AudiblePart;
    onValueChange: (value: string) => void;
}

// 封装目录
const CourseItem: React.FC<Props> = ({course, onValueChange}) => {
    const [expanded, setExpanded] = useState(false);
    const [playUrl, setPlayUrl] = useState<string>('')
    const partPlay = (partUrl: string) => {
        setPlayUrl(partUrl)
        onValueChange(partUrl);
    }
    const toggleExpand = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    // 播放小节视频
    return (
        <div className='course-container'>
            <div className='container-left'>
                <div onClick={toggleExpand}>
                    <span className='left-sort'>{course.partSort < 10 ? '0' + course.partSort : course.partSort}</span>
                    <span className='left-title'>{course.partTitle}</span>
                    {
                        course.isTry == 1 ? <span className='left-try'>试看</span> : <></>
                    }
                </div>
                {
                    expanded &&
                    <p className='left-item' onClick={() => {
                        partPlay(course?.partUrl)
                    }}>
                        <span>{course.partDescription}</span>
                        {
                            course.isTry == 1 ? <span className='item-try'>试看</span> : <></>
                        }
                    </p>
                }
            </div>
            <div>
                {expanded ? <DownOutlined/> : <RightOutlined/>}
            </div>
        </div>
    );
};

const VideoDetails = () => {
    const [valueFromChild, setValueFromChild] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [intro, setIntro] = useState<AudibleClassDetail>()
    const [part, setPart] = useState<Array<AudiblePart>>()
    const [isSubscribe, setIsSubscribe] = useState<boolean>()
    const {token: {colorBgContainer},} = theme.useToken();
    const {itemId} = useParams<{ itemId: string }>();
    const courseId = parseInt(itemId as string, 10);
    useEffect(() => {
        // 课程详情
        getClassDetail(courseId).then((res) => {
            setIntro(res.data)
        })
        // 课程目录
        getClassPart(courseId).then((res) => {
            setPart(res.data)
        })
        // 检查订阅
        checkSubscribe(courseId).then((res) => {
            setIsSubscribe(res.data.isSubs)
        })
    }, [])
    const handleValueChange = (value: string) => {
        setValueFromChild(value);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const getIsLogin = (data: boolean) => {
        if (data) {
            setIsModalOpen(false);
        }
    }
    // 订阅
    const subscribe = () => {
        getLoginStatus().then((res) => {
            // 设置登录状态
            if (res.data.isLogin) {
                const params: Subscribe = {
                    courseId: courseId
                }
                subscribeClass(params).then((res) => {
                    if (res.retCode == RESPONSE_STATUS.SUCCESS) {
                        setIsSubscribe(true)
                        return res.data
                    }
                })
            } else if (!res.data.isLogin) {
                setIsModalOpen(true);
            }
        })
    }
    // tab栏吸附
    const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
        <StickyBox offsetTop={0} offsetBottom={20} style={{zIndex: 1}}>
            <DefaultTabBar {...props} style={{background: colorBgContainer}}/>
        </StickyBox>
    );
    return (
        <div className='video-container'>
            <VideoPlayer playUrl={valueFromChild}/>
            <div className='tabs-container'>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <TabPane tab="课程介绍" key="1">
                        <div>
                            <div className='class-info'>
                                <div>
                                    {intro?.title}
                                </div>
                                <div>
                                    <span>{intro?.description}</span>
                                </div>
                                <div>
                                    <span>¥ 299</span>
                                    <span>{intro?.subsCount}</span>
                                </div>
                            </div>
                            <Divider></Divider>
                            <div className='class-package'>
                                <div className='package-name'>
                                    <div>{intro?.courseCol.courseCollectionTitle}</div>
                                    <div style={{display: 'flex'}}>
                                        {
                                            intro?.courseCol.courseCollectionList.map((item, index) => {
                                                return <div key={index} style={{marginRight: '10px'}}>
                                                    <Image preview={false} style={{width: '120px', height: '80px'}}
                                                           src={item.cover}/>
                                                </div>
                                            })
                                        }
                                    </div>
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
                                <div className='container-desc'>
                                    <div className='desc-title'>课程描述</div>
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
                                                    src={intro?.tutorAvatar}/>
                                            <div className='card-name'>
                                                <span>{intro?.tutorName}</span>
                                                 <span>{intro?.tutorTitle}</span>
                                            </div>
                                            <div><CaretRightFilled/></div>
                                        </div>
                                    </Card>
                                </span>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="课程目录" key="2">
                        <>
                            {
                                part?.map((item) => {
                                    return <CourseItem onValueChange={handleValueChange} key={item.id} course={item}/>
                                })
                            }
                        </>
                    </TabPane>
                    <TabPane tab="课程评价" key="3">
                        <List
                            itemLayout="horizontal"
                            // dataSource={dataEvalute}
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
                    </TabPane>
                </Tabs>
            </div>
            <div className="fixed-bottom">
                {/* 固定在底部的内容 */}
                <div className='bottom-left'>
                    <CustomerServiceFilled/>
                    <div>客服</div>
                </div>
                {
                    isSubscribe ?
                        <button disabled={true} className='bottom-right-isSubscribe'
                                onClick={subscribe}>已订阅</button> :
                        <button className='bottom-right' onClick={subscribe}>立即订阅</button>
                }
                <Modal className='modal-container'
                       footer={null}
                       centered={true}
                       open={isModalOpen}
                       onCancel={handleCancel}>
                    <div>
                        <UnauthenticatedApp getIsLogin={getIsLogin}/>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default VideoDetails;