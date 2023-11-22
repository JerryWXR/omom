import React, {useEffect, useState} from 'react';
import "./index.css"
import {withAuth} from "../../hooks/withLogin";
import {Button} from "antd";
import {World} from "../../types";
import {getCurrentWorld} from "../../services";

const LearnWorld = () => {
    const arrayWorld = [
        {
            index:0,
            world:'apple',
            mean:'啊',
            speech:'v.',
            type:'短语',
            zhSentence:'天天开心' ,
            enSentence:'have a good day'
        },
        {
            index:1,
            world:'b',
            mean:'啊',
            speech:'v.',
            type:'短语',
            zhSentence:'天天开心' ,
            enSentence:'have a good day'
        },
        {
            index:2,
            world:'c',
            mean:'啊',
            speech:'v.',
            type:'短语',
            zhSentence:'天天开心' ,
            enSentence:'have a good day'
        }
    ]
    const [current,setCurrent] = useState({} as World)
    const [index,setIndex] = useState<number>(0)
    const [click,setClick] = useState<boolean>(false)
    console.log(index)
    useEffect(() => {
        setCurrent(arrayWorld[index])
    },[index])
    // 认识
    const recognize = ()=>{
        if(click){
            setIndex(index+1)
            if(index==arrayWorld.length-1){
                setIndex(0)
            }
            setClick(false)
        }else{
            setClick(true)
        }

    }
    // 模糊
    const vague = ()=>{
        setIndex(index+1)
        if(index==arrayWorld.length-1){
            setIndex(0)
        }
    }
    // 忘记
    const next = ()=>{
        setIndex(index+1)
        if(index==arrayWorld.length-1){
            setIndex(0)
        }
    }

    return (
        <div className="learnWorld">
            <div className="worldArea">
                <div className="areaTop">
                    <div className="title">{current.world}</div>
                    <div className="worldSpeech">｜{current.speech}|</div>
                </div>
                {click?<div className="areaFooter">

                    <div className="template">
                        <span>[{current.type}]{current.mean}</span>
                    </div>
                    <div className="sentenceStyle">
                        <span>例句</span>
                        <div>
                            {current.zhSentence}
                        </div>
                        <div>
                            {current.enSentence}
                        </div>
                    </div>
                    <div></div>
                </div>:<div></div>}


            </div>
            <div className="operationArea">
                <Button type="primary" size={"large"} onClick={recognize}>认识</Button>
                <Button type="primary" size={"large"} onClick={vague}>模糊</Button>
                <Button type="primary" size={"large"} onClick={next}>忘记</Button>
            </div>
        </div>
    )
};

export default withAuth(LearnWorld);