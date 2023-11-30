import React from 'react';
import {Avatar, Card, Carousel, Divider, List} from "antd";
import "./index.css"
import {useNavigate} from "react-router-dom";

const Audible = () => {
    const navigate = useNavigate();
    // 视频播放
    const relay = () => {
        navigate('/videoDetails')
    }
    const dataNew = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 5',
        },
        {
            title: 'Title 6',
        },
        {
            title: 'Title 5',
        },
        {
            title: 'Title 6',
        },
    ];
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
        <div className="audible-container">
            <Carousel className="carousel-chart" autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
            <div className="list-container">
                <div className="title-container">最新视频</div>
                <List
                    grid={{
                        gutter: 20,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={dataNew}
                    renderItem={(item) => (
                        <List.Item>
                            <Card className='card-container' title={item.title}>
                                <div className='card-info'>
                                    <div>手机摄影高手之路</div>
                                    <div>干货帮</div>
                                    <div className='price-info'>
                                        <div>
                                            <span>¥</span>
                                            <span>39</span>
                                        </div>
                                        <div>817人</div>
                                    </div>
                                </div>
                            </Card>
                        </List.Item>

                    )}
                />
            </div>
            <div className="list-container">
                <div className="title-container">全部</div>
                <Divider/>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <div className='list-info' onClick={relay}>
                                <div>
                                    <Avatar className='video-avatar'
                                            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}/>
                                </div>
                                <div className='video-right'>
                                    <div className="video-info">
                                        <span>12节表达能力提升课</span>
                                        <span>成为一个会说话的人</span>
                                        <span>薛艺</span>
                                    </div>
                                    <div className='price-info'>
                                        <div>
                                            <span>¥</span>
                                            <span>39</span>
                                        </div>
                                        <div>8172人参加</div>
                                    </div>
                                </div>
                            </div>
                        </List.Item>
                    )}
                />
            </div>

        </div>
    );
};

export default Audible;