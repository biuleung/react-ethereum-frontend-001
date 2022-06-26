import { RootStateOrAny, useSelector } from 'react-redux';
import { Video } from 'src/redux/slices/all-videos-slice';
import VideoItem from './video-item';
import { v4 } from 'uuid';

const VideosBlock = () => {
    const selectedVideos = useSelector(
        (state: RootStateOrAny) => state.allVideosInfo.selectedVideos
    );

    return (
        <div className="all-vedeos-box-container">
            <div className="vedeos-grid">
                {selectedVideos &&
                    selectedVideos.map((video: Video) => (
                        <VideoItem
                            type="all-video"
                            key={v4()}
                            videoUrl={video.url}
                            videoHeight="250px"
                            videoWidth="335px"
                        />
                    ))}
            </div>
        </div>
    );
};

export default VideosBlock;
