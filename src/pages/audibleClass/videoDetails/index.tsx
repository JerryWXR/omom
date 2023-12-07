import React, {useEffect, useState} from 'react';
import VideoPlayer from "../../../components/videoPlayer";
import {Avatar, Button, Card, Collapse, Divider, Image, List, Tabs, theme} from "antd";
import type {TabsProps} from 'antd';
import StickyBox from 'react-sticky-box';
import './index.less'
import TabPane from "antd/es/tabs/TabPane";
import {CaretRightFilled, DownOutlined, LikeOutlined, RightOutlined, StarFilled} from "@ant-design/icons";
import {getClassDetail, getClassPart} from "../../../services";
import {useParams} from "react-router-dom";
import {AudibleClassDetail, AudiblePart} from "../../../types";

const CourseItem: React.FC<{ course: AudiblePart }> = ({course}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div onClick={toggleExpand} style={{
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'left',
            marginBottom: '20px',
            backgroundColor: '#fff'
        }}>
            <div style={{display: 'block'}}>
                <span style={{
                    fontSize: '16px',
                    marginRight: '5px'
                }}>{course.partSort < 10 ? '0' + course.partSort : course.partSort}</span>
                <span style={{fontSize: '16px'}}>{course.partTitle}</span>
                {expanded && <p style={{
                    marginTop: '10px',
                    color: 'rgb(143, 143, 143)',
                    fontSize: '12px'
                }}>{course.partDescription}</p>}
            </div>
            <div>
                {expanded ? <DownOutlined/> : <RightOutlined/>}
            </div>

        </div>
    );
};
const VideoDetails = () => {
    const {token: {colorBgContainer},} = theme.useToken();
    const {itemId} = useParams<{ itemId: string }>();
    const courseId = parseInt(itemId as string, 10);
    const [intro, setIntro] = useState<AudibleClassDetail>()
    const [part, setPart] = useState<Array<AudiblePart>>()

    // tab栏吸附
    const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
        <StickyBox offsetTop={0} offsetBottom={20} style={{zIndex: 1}}>
            <DefaultTabBar {...props} style={{background: colorBgContainer}}/>
        </StickyBox>
    );
    useEffect(() => {
        // 课程详情
        getClassDetail(courseId).then((res) => {
            setIntro(res.data)
        })
        // 课程目录
        getClassPart(courseId).then((res) => {
            setPart(res.data)
        })
    }, [])

    return (
        <div className='video-container'>
            <VideoPlayer/>
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
                                    <div style={{display:'flex'}}>
                                        {
                                            intro?.courseCol.courseCollectionList.map((item,index)=> {
                                                return <div key={index} style={{marginRight:'10px'}}>
                                                    <Image preview={false} style={{width: '120px', height: '80px'}} src={item.cover}/>
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
                                    return <CourseItem key={item.id} course={item}/>
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
        </div>
    );
};

export default VideoDetails;