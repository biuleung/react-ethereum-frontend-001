import { useDispatch } from "react-redux";
import  { FC } from 'react';
import { progressSlice } from "../../../store";

const { setProgress } = progressSlice.actions;

const VideoItem:FC<{videoUrl?: string}> = ({ videoUrl = '' }) => {
    const dispatch = useDispatch();
    function Loaded() {
        dispatch(setProgress({}));
    }
    return (
        <>
            <div className='videos-box'>
                <iframe
                    width="335px"
                    height="250px"
                    onLoad={Loaded}
                    src={videoUrl}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </>
    )
}

export default VideoItem;
