import React, {useEffect, useState} from 'react';
import {Avatar, Card, Carousel, Divider, List, Image} from "antd";
import "./index.less"
import {useNavigate} from "react-router-dom";
import {addClickClass, addClickParams, getAudibleBanner, getAudibleClassAll, getAudibleClassNew} from "../../services";
import {AllClass, Banner, NewClass} from "../../types";


const Audible = () => {
    // const history = useHistory()
    const navigate = useNavigate();
    const [banner, setBanner] = useState<Array<Banner>>([])
    const [newClass, setNewClass] = useState<Array<NewClass>>([])
    const [allClass, setAllClass] = useState<Array<AllClass>>([]); // 保存数据的状态
    const [pageNum, setPageNum] = useState<number>(1); // 当前页数
    // 视频播放
    const relay = (itemId: number) => (event: any) => {
        console.log(itemId)
        navigate(`/videoDetails/${itemId}`);
        addClickClass(itemId).then((res) => {
            console.log(res)
        })
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
        })
        getAudibleClassNew().then((res) => {
            setNewClass(res.data)
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        //loadData();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            data.length
        ) {
            setPageNum((origin)=> {
                return origin + 1
            })
        }
    };

    useEffect(() => {
        loadData();
    }, [pageNum])

    const loadData = () => {
        console.log(pageNum)
        const queryParams = {
            pageNum: pageNum,
            pageSize: 10
        }
        // 模拟异步加载数据
        setTimeout(() => {
            const params = {
                ...queryParams
            }
            // 获取下一页数据
            getAudibleClassAll(params).then((res) => {
                const nextPageData = res.data;
                setAllClass((prevData) => [...prevData, ...nextPageData]);
            })
        }, 500);
    };
    return (
        <div className="audible-container">
            <Carousel className="carousel-chart" autoplay>
                {
                    banner.map((item, index) => {
                        return <div key={index}>
                            <Image preview={false} style={{width: '100vw', height: '100%'}} src={item.bannerUrl}/>
                        </div>
                    })
                }
            </Carousel>
            <div className="list-container">
                <div className="title-container">最新视频</div>
                <div>
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
                                <Card className='card-container'
                                      onClick={relay(item.id)}
                                      title={<Image style={{width: '100%', height: '100%'}} src={item.cover}/>}>
                                    <div className='card-info'>
                                        <div>{item.title}</div>
                                        <div>{item.categoryName}</div>
                                        <div>{item.description}</div>
                                        <div className='price-info'>
                                            <div>{item.clickCount?item.clickCount:0}人</div>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className="list-container">
                <div className="title-container">全部</div>
                <Divider/>
                <List
                    itemLayout="horizontal"
                    dataSource={allClass}
                    renderItem={(item, index) => (
                        <List.Item>
                            <div style={{width: '100%'}}>
                                <div className='list-top'>
                                    <div>
                                        <Avatar className='video-avatar'
                                                src={item.avatar}/>
                                    </div>
                                    <div className='video-right'>
                                        <div className="video-info">
                                            <span>{item.title}</span>
                                            <span>{item.description}</span>
                                            <span>{item.nickname}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='price-detail'>
                                    <div></div>
                                    <div>{item.clickCount?item.clickCount:0}</div>
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