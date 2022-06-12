import { useDispatch } from "react-redux";
import  { createRef, FC, useEffect, useState } from 'react';
import { progressSlice } from "../../../store";

const { setProgress } = progressSlice.actions;

const VideoItem:FC<{ videoUrl?: string}> = ({ videoUrl = '' }) => {
    const dispatch = useDispatch();
    function Loaded() {
        dispatch(setProgress({}));
    }

    // https://dev.to/daviddalbusco/lazy-load-youtube-video-iframe-2hf9
    const videoObserver = new IntersectionObserver(
        onVideoIntersection, {
      rootMargin: '100px 0px',
      threshold: 0.25
    });

    const [showVideo, setShowVideo] = useState(false);
    const container = createRef<HTMLDivElement>();

    useEffect(() => {
        if (window && 'IntersectionObserver' in window) {
            if (container && container.current) {
                videoObserver.observe(container.current);
            }
        } else {
            setShowVideo(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [container]);

    function onVideoIntersection(entries: any) {
        if (!entries || entries.length <= 0) {
            return;
        }

        if (entries[0].isIntersecting) {
            console.log("videoUrl: ", videoUrl);
            setShowVideo(true);
            videoObserver.disconnect();
        }
    }

    
    return (
        <>
            <div className='videos-box' ref={container as React.RefObject<HTMLDivElement>}>
                {showVideo ? <iframe
                    width="335px"
                    height="250px"
                    onLoad={Loaded}
                    src={videoUrl}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>: undefined
                }
            </div>
        </>
    )
}

export default VideoItem;
