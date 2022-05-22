import { useDispatch } from "react-redux";
import { progressSlice } from "src/store";

const { setProgress } = progressSlice.actions;

const VideoItem = ({ videoUrl }) => {
    const dispatch = useDispatch();

    function Loaded() {
        dispatch(setProgress())
    }
    return (
        <>
            <div className='videos-box' >
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
