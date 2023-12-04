import React from 'react';
import './index.css'
import {Avatar, List, Space, Tag} from "antd";
import {useNavigate} from "react-router-dom";

const IELTS = () => {
    const navigate = useNavigate()
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
    const toDetail = () => {
        navigate('/ieltsDetail')
    }
    return (
        <div className='ielts-container'>
            <div className='container-top'>
                <span className='top-title'>免费公开课</span>
                <div className='top-freeClass'>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}

                        renderItem={(item, index) => (
                            <List.Item onClick={toDetail}>
                                <div className='list-info'>
                                    <div className='info-left'>
                                        <div>
                                            <Avatar className='list-avatar'
                                                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}/>
                                        </div>
                                        <div className='list-desc'>
                                                <span className='desc-title'>雅思小白逆袭秘籍</span>
                                                <span>有道雅思-陈宇老师</span>
                                                <span className='tag'>
                                                    <Tag>备考计划</Tag>
                                                    <Tag>2天入门雅思</Tag>
                                                </span>
                                                <span>免费</span>
                                        </div>
                                    </div>
                                    <div className='info-right'>8172人参加</div>
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className='container-bottom'>
                <span className='top-title'>雅思</span>
                <div className='top-freeClass'>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <div className='list-info'>
                                    <div className='info-left'>
                                        <div>
                                            <Avatar className='list-avatar'
                                                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}/>
                                        </div>
                                        <div className='list-desc'>
                                            <span className='desc-title'>雅思小白逆袭秘籍</span>
                                            <span>有道雅思-陈宇老师</span>
                                            <span className='tag'>
                                                    <Tag>备考计划</Tag>
                                                    <Tag>2天入门雅思</Tag>
                                                </span>
                                            <span>免费</span>
                                        </div>
                                    </div>
                                    <div className='info-right'>8172人参加</div>
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default IELTS;