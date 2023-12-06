import React, {useEffect, useState} from 'react';
import {Avatar, Card, Carousel, Divider, Image, List} from "antd";
import {useNavigate} from "react-router-dom";
import {AllClass, Banner, NewClass} from "../../types";
import {addClickClass, getAudibleBanner, getAudibleClassAll, getAudibleClassNew} from "../../services";
import './index.less'

const CollegeEnglish = () => {
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
        // getAudibleBanner().then((res) => {
        //     setBanner(res.data)
        // })
        // getAudibleClassNew().then((res) => {
        //     setNewClass(res.data)
        // })
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
            setPageNum((origin) => {
                return origin + 1
            })
        }
    };

    useEffect(() => {
        // loadData();
    }, [pageNum])

    // const loadData = () => {
    //     console.log(pageNum)
    //     const queryParams = {
    //         pageNum: pageNum,
    //         pageSize: 10
    //     }
    //     // 模拟异步加载数据
    //     setTimeout(() => {
    //         const params = {
    //             ...queryParams
    //         }
    //         // 获取下一页数据
    //         getAudibleClassAll(params).then((res) => {
    //             const nextPageData = res.data;
    //             setAllClass((prevData) => [...prevData, ...nextPageData]);
    //         })
    //     }, 500);
    // };
    const [isFreeActive, setIsFreeActive] = useState(0);
    const [isSprintActive, setIsSprintActive] = useState(0);
    const [isFourActive, setIsFourActive] = useState(0);
    const [isSixActive, setIsSixActive] = useState(0);
    const toggleFreeTriangle = (id:number) => {
        setIsFreeActive(id);
    };
    const toggleSprintTriangle = (id:number) => {
        setIsSprintActive(id);
    };
    const toggleFourTriangle = (id:number) => {
        setIsFourActive(id);
    };
    const toggleSixTriangle = (id:number) => {
        setIsSixActive(id);
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
                <div className="title-container">免费公开课</div>
                <div className='button-container'>
                    <button className={`bubble-button ${isFreeActive==0 ? 'active' : ''}`} onClick={() => toggleFreeTriangle(0)}>四六级{isFreeActive==0 && <span className="triangle"></span>}</button>
                    <button className={`bubble-button ${isFreeActive==1 ? 'active' : ''}`} onClick={() => toggleFreeTriangle(1)}>雅思{isFreeActive==1 && <span className="triangle"></span>}</button>
                </div>
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
                                            <div>{item.clickCount ? item.clickCount : 0}人</div>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className="list-container">
                <div className="title-container">23年12月考前冲刺</div>
                <div className='button-container'>
                    <button className={`bubble-button ${isSprintActive==0 ? 'active' : ''}`} onClick={() => toggleSprintTriangle(0)}>四级冲刺{isSprintActive==0 && <span className="triangle"></span>}</button>
                    <button className={`bubble-button ${isSprintActive==1 ? 'active' : ''}`} onClick={() => toggleSprintTriangle(1)}>六级冲刺{isSprintActive==1 && <span className="triangle"></span>}</button>
                </div>
                <Divider/>
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
                                            <div>{item.clickCount ? item.clickCount : 0}人</div>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className="list-container">
                <div className="title-container">四级</div>
                <div className='button-container'>
                    <button className={`bubble-button ${isFourActive==0 ? 'active' : ''}`} onClick={() => toggleFourTriangle(0)}>23年12月{isFourActive==0 && <span className="triangle"></span>}</button>
                    <button className={`bubble-button ${isFourActive==1 ? 'active' : ''}`} onClick={() => toggleFourTriangle(1)}>24年6月{isFourActive==1 && <span className="triangle"></span>}</button>
                </div>
                <Divider/>
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
                                            <div>{item.clickCount ? item.clickCount : 0}人</div>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className="list-container">
                <div className="title-container">六级</div>
                <div className='button-container'>
                    <button className={`bubble-button ${isSixActive==0 ? 'active' : ''}`} onClick={() => toggleSixTriangle(0)}><span className='button-title'>23年12月30日</span>{isSixActive==0 && <span className="triangle"></span>}</button>
                    <button className={`bubble-button ${isSixActive==1 ? 'active' : ''}`} onClick={() => toggleSixTriangle(1)}>24年6月{isSixActive==1 && <span className="triangle"></span>}</button>
                </div>
                <Divider/>
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
                                            <div>{item.clickCount ? item.clickCount : 0}人</div>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className="list-container">
                <div className="title-container">专升本</div>
                <Divider/>
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
                                            <div>{item.clickCount ? item.clickCount : 0}人</div>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className="list-container">
                <div className="title-container">实用英语</div>
                <Divider/>
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
                                            <div>{item.clickCount ? item.clickCount : 0}人</div>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>

        </div>
    );
};

export default CollegeEnglish;