/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import './videos.scss'
import videoInfoListData from './videos-mock-api-data.json';
import { progressSlice, videosSlice } from "src/store";
import { useDispatch, useSelector } from "react-redux";
import { DropdownSelect } from "src/reusable/base/dropdown-select";
import { Calculate } from "../../../reusable/calculate";
import { v4 } from 'uuid';
//  https://multiselect-react-dropdown.vercel.app/?path=/docs/multiselect-dropdown--grouping

const { setSelectedVideos, setTags } = videosSlice.actions;
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

const VideosBlock = () => {
    const dispatch = useDispatch();
    const selectedVideos = useSelector(state => state.videosInfo.selectedVideos);
    const numOfSelectedVideos = selectedVideos && selectedVideos.length;

    useEffect(() => {
        if (numOfSelectedVideos) {
            dispatch(setProgress({ fullCount: numOfSelectedVideos }))
        }
    }, [dispatch, numOfSelectedVideos])

    return (
        <div className='vedeos-box-container'>
            <div className='vedeos-grid'>
                {selectedVideos && selectedVideos.map((video, index) =>
                    <VideoItem key={v4()} videoUrl={video.url} />
                )}
            </div>
        </div>
    )
}

const Videos = () => {
    const allTags = [];
    let videoList;
    if (Array.isArray(videoInfoListData) && videoInfoListData.length) {
        videoList = [...videoInfoListData];
        videoList.forEach(v => {
            v.hasOwnProperty('tags') && v.tags.forEach(t => {
                if (!allTags.find(ts => ts === t)) {
                    allTags.push(t);
                }
            })
        });
        videoList = [...Calculate.shuffle(videoList)];
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTags(allTags));

        return (() => {
            dispatch(setTags([]));
        })
    }, [dispatch, allTags])

    useEffect(() => {
        dispatch(setSelectedVideos(videoList));
        dispatch(setProgress({ fullCount: videoList.length }))

        return (() => {
            dispatch(setSelectedVideos([]));
            dispatch(setProgress({ step: 0, fullCount: 0 }));
        })
    }, [dispatch, videoList])

    const onSelectionChange = (event) => {
        dispatch(setProgress({ step: 0, fullCount: 0 }));
        const selectedVideos = videoList.filter(v => event.every(e => v.tags.includes(e.name)));
        dispatch(setSelectedVideos(selectedVideos));
    }

    return (
        <>
            <div className="dropdown-list">
                <DropdownSelect
                    itemList={allTags}
                    onSelect={onSelectionChange}
                    onRemove={onSelectionChange}
                    placeholder="Filter"
                />
            </div>
            {videoList && videoList.length && <VideosBlock />}
        </>
    )
}

export default Videos
