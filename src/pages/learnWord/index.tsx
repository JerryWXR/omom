import React, {useEffect, useState} from 'react';
import "./index.css"
import {withAuth} from "../../hooks/withLogin";
import {Button, Divider} from "antd";
import {World} from "../../types";
import {AlignLeftOutlined} from "@ant-design/icons";

const LearnWord = () => {
    const arrayWorld = [
        {
            index: 0,
            world: 'apple',
            mean: '啊',
            speech: 'v.',
            type: '短语',
            zhSentence: '天天开心',
            enSentence: 'have a good day'
        },
        {
            index: 1,
            world: 'b',
            mean: '啊',
            speech: 'v.',
            type: '短语',
            zhSentence: '天天开心',
            enSentence: 'have a good day'
        },
        {
            index: 2,
            world: 'c',
            mean: '啊',
            speech: 'v.',
            type: '短语',
            zhSentence: '天天开心',
            enSentence: 'have a good day'
        }
    ]
    const [current, setCurrent] = useState({} as World)
    const [index, setIndex] = useState<number>(0)
    const [click, setClick] = useState<boolean>(false)
    console.log(index)
    useEffect(() => {
        setCurrent(arrayWorld[index])
    }, [index])
    const detailShow = () => {
        if (!click) {
            setClick(true)
        }
    }
    // 认识
    const recognize = () => {
        console.log(click)
        if (click) {
            setIndex(index + 1)
            if (index == arrayWorld.length - 1) {
                setIndex(0)
            }
            setClick(false)
            console.log(click)
        }
    }
    // 模糊
    const vague = () => {
        if (click) {
            setIndex(index + 1)
            if (index == arrayWorld.length - 1) {
                setIndex(0)
            }
            setClick(false)
        }
    }
    // 忘记
    const next = () => {
        if (click) {
            setIndex(index + 1)
            if (index == arrayWorld.length - 1) {
                setIndex(0)
            }
            setClick(false)
        }
    }
    return (
        <div className="learnWord">
            <div className="worldArea">
                <div className="areaTop">
                    <div className="title">{current.world}</div>
                    <div className="worldSpeech">｜{current.speech}|</div>
                </div>
                <div style={{minHeight: '50%'}} onClick={detailShow}>
                    {click ?
                        <>
                            <div className="areaFooter">
                                <div className="template">
                                    <span>[{current.type}]{current.mean}</span>
                                </div>
                                <div className="sentenceStyle">
                                    <div style={{width: "98%", display: "flex", justifyContent: "space-between"}}>
                                        <span>例句</span>
                                        <AlignLeftOutlined style={{fontSize: "17px"}}/>
                                    </div>
                                    <Divider className="divider"></Divider>
                                    <div className="sentenceContent">
                                        <div>
                                            {current.zhSentence}
                                        </div>
                                        <div>
                                            {current.enSentence}
                                        </div>
                                    </div>
                                </div>
                                <div className="extendStyle">
                                    <div style={{width: "98%", display: "flex", justifyContent: "space-between"}}>
                                        <span>助记</span>
                                        <AlignLeftOutlined style={{fontSize: "17px"}}/>
                                    </div>

                                    <Divider className="divider"></Divider>
                                    <div className="extendContent">
                                        <div>扩展</div>
                                        <div>
                                            {current.zhSentence}
                                        </div>
                                        <div>
                                            {current.enSentence}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="operationArea">
                                <Button type="primary" size={"large"} onClick={recognize}>认识</Button>
                                <Button type="primary" size={"large"} onClick={vague}>模糊</Button>
                                <Button type="primary" size={"large"} onClick={next}>忘记</Button>
                            </div>
                        </> : <div>
                            <div style={{fontSize: '20px', color: '#aaa'}}>请回忆单词发音和释义</div>
                            <div style={{fontSize: '16px', color: '#aaa'}}>点击屏幕显示答案</div>
                        </div>}
                </div>

            </div>

        </div>
    )
};

export default LearnWord;