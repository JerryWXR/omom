import React, {useEffect, useState} from 'react';
import {Avatar, Card, Carousel, Divider, List,Image} from "antd";
import "./index.css"
import {useNavigate} from "react-router-dom";
import {getAudibleBanner, getAudibleClassNew} from "../../services";
import {Banner, NewClass} from "../../types";


const Audible = () => {
    const navigate = useNavigate();
    const [banner, setBanner] = useState<Array<Banner>>([])
    const [newClass, setNewClass] = useState<Array<NewClass>>([])

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
    useEffect(() => {
        getAudibleBanner().then((res) => {
            setBanner(res.data)
            console.log(banner)
        })
        getAudibleClassNew().then((res) => {
            console.log(res)
            setNewClass(res.data)
        })
    }, [])
    return (
        <div className="audible-container">
            <Carousel className="carousel-chart" autoplay>
                {
                    banner.map((item, index) => {
                        return <div key={index}>
                            <Image preview={false} style={{width:'100vw',height:'100%'}} src={item.bannerUrl}/>
                        </div>
                    })
                }
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
                    dataSource={newClass}
                    renderItem={(item) => (
                        <List.Item>
                            <Card className='card-container' title={<Image style={{width:'100%',height:'100%'}} src={item.cover}/>}>
                                <div className='card-info'>
                                    <div>{item.title}</div>
                                    <div>{item.categoryName}</div>
                                    <div>{item.description}</div>
                                    <div className='price-info'>
                                        <div>{item.clickCount}人</div>
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
                            <div className='list-top' onClick={relay}>
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
                                </div>
                            </div>
                            <div className='price-detail'>
                                <div>
                                    ¥ 39
                                    {/*<span>39</span>*/}
                                </div>
                                <div>8172人参加</div>
                            </div>
                        </List.Item>
                    )}
                />
            </div>

        </div>
    );
};

export default Audible;