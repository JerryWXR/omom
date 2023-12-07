/**
 * @description 视频组件
 * @param {string} src 视频地址
 * @param {number} width 视频宽度
 * @param {number} height 视频高度
 * @param {string} className 自定义类名
 * @returns {JSX.Element}
 * @example
 *   import Video from '@/components/Video';
 *   <Video src="<https://www.w3schools.com/html/mov_bbb.mp4>" />
 */
import React, { useRef, useEffect } from "react";
import './index.css'
interface VideoProps {
    // src: string;
    width?: number | string;
    height?: number | string;
    className?: string;
}
const VideoPlayer: React.FC<VideoProps> = ({
                                         // src='https://haokan.baidu.com/v?pd=wisenatural&vid=16956352271853885370',
                                         width = 400,
                                         height = 300,
                                         className,
                                     }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const video = videoRef.current;
        const options = {
            rootMargin: "0px", // 用于指定目标元素与根元素（视口）的边缘间的偏移量，以便确定何时触发回调函数。
            threshold: 0.5, // 指定交叉比例为 50% 时触发回调函数
        };
        // 创建 IntersectionObserver 实例
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // 当视频进入视口时，开始播放视频
                if (video?.readyState === 4) {
                    // 视频已经加载完毕
                    video?.play();
                } else {
                    // 监听视频加载完成事件
                    if (video?.dataset.src) {
                        // 将 data-src 的值赋给 src 属性
                        video.src = video.dataset.src;
                        delete video.dataset.src;
                        video?.addEventListener("loadedmetadata", () => {
                            video?.play();
                        });
                    }
                }
            } else {
                // 当视频离开视口时，暂停视频播放
                video?.pause();
            }
        }, options);
        // 监听 video 元素
        if (video) {
            observer.observe(video);
        }
        // 组件卸载时取消监听
        return () => {
            observer.unobserve(video as Element);
        };
    }, []);
    return (
        <video
            loop
            muted
            controls
            playsInline
            width={width}
            ref={videoRef}
            data-src={'https://haokan.baidu.com/v?pd=wisenatural&vid=16956352271853885370'} // 添加 data-src 属性
            height={height}
            className='video-player'
        />
    );
};
export default VideoPlayer