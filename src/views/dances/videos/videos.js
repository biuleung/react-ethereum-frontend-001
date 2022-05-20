/* eslint-disable array-callback-return */
import React from "react";
import './videos.scss'
import videoInfoListData from './videos-mock-api-data.json';
import { videosSlice } from "src/store";
import { useDispatch, useSelector } from "react-redux";
import { DropdownSelect } from "src/reusable/base/dropdown-select";
import { v4 } from 'uuid';
//  https://multiselect-react-dropdown.vercel.app/?path=/docs/multiselect-dropdown--grouping

const { setAllVideos, setSelectedVideos, setTags } = videosSlice.actions;

const VideoItem = () => {
    let selectedVideos = useSelector(state => state.videosInfo.selectedVideos);
    return (
        <>
            {selectedVideos && selectedVideos.map(element => {
                return <div className='videos-box' key={v4()} >
                    <iframe
                        key={v4()}
                        width="335px"
                        height="250px"
                        src={element.url}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            })
            }
        </>
    )
}

const VideosBlock = () => {
    return (
        <div className='vedeos-box-container'>
            <div className='vedeos-grid'>
                <VideoItem key={v4()} />
            </div>
        </div>

    )
}

const Videos = () => {
    const allTags = [];

    if (Array.isArray(videoInfoListData) && videoInfoListData.length) {
        videoInfoListData.forEach(v => {
            v.hasOwnProperty('tags') && v.tags.forEach(t => {
                if (!allTags.find(ts => ts === t)) {
                    allTags.push(t);
                }
            })
        })
    }

    const dispatch = useDispatch();
    dispatch(setAllVideos(videoInfoListData));
    dispatch(setSelectedVideos(videoInfoListData));
    dispatch(setTags(allTags))

    const allVideos = useSelector(state => state.videosInfo.allVideos);

    const onSelectionChange = (event) => {
        const selectedVideos = allVideos.filter(v => event.every(e => v.tags.includes(e.name)));
        dispatch(setSelectedVideos(selectedVideos));
    }

    return (
        <>
            <div className="dropdown-list">
                <DropdownSelect
                    itemList={allTags}
                    onSelect={onSelectionChange}
                    onRemove={onSelectionChange} />
            </div>
            <VideosBlock />
        </>
    )
}

export default Videos
