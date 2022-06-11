/* eslint-disable array-callback-return */
import { useCallback, useEffect, useMemo } from "react";
import './videos.scss'
import videoInfoListData from './videos-mock-api-data.json';
import { progressSlice, SelectedVideo, videosSlice } from "src/store";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { DropdownSelect } from "src/reusable/base/dropdown-select";
import { Calculate } from "../../../reusable/calculate";
import { v4 } from 'uuid';
import VideoItem from "./video-item";
//  https://multiselect-react-dropdown.vercel.app/?path=/docs/multiselect-dropdown--grouping

const { setSelectedVideos, setTags } = videosSlice.actions;
const { setProgress } = progressSlice.actions;

const VideosBlock = () => {
    const selectedVideos = useSelector((state: RootStateOrAny) => state.videosInfo.selectedVideos);
    return (
        <div className='vedeos-box-container'>
            <div className='vedeos-grid'>
                {selectedVideos && selectedVideos.map((video: SelectedVideo) =>
                    <VideoItem key={v4()} videoUrl={video.url} />
                )}
            </div>
        </div>
    )
}

const Videos = () => {
    const dispatch = useDispatch();
    let allTags: string[] = [];
    let videoList: SelectedVideo[] = [];
    let selectedVideos: SelectedVideo[] = [];
    const numOfSelectedVideos = selectedVideos && selectedVideos.length;

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

    const allTagsMemo = useMemo(() => {
                dispatch(setTags(allTags));
                return allTags;
    }, [allTags, dispatch]);

    // useEffect(() => {
    //     dispatch(setTags(allTags));
    //     return (() => {
    //         dispatch(setTags([]));
    //     })
    // }, [dispatch, allTags]);

    useEffect(() => {
        return (() => {
            dispatch(setSelectedVideos([]));
            dispatch(setProgress({ step: 0, fullCount: 0 }));
        })
    }, [dispatch, videoList, selectedVideos.length]);

    useEffect(() => {
        if (numOfSelectedVideos) {
            dispatch(setProgress({ fullCount: numOfSelectedVideos }))
        }
    }, [dispatch, numOfSelectedVideos])

    const onSelectionChange = (event: {name: string, id: number}[]) => {
        dispatch(setProgress({ step: 0, fullCount: 0 }));
        selectedVideos = videoList.filter(v => event.every(e => v.tags.includes(e.name)));
        dispatch(setSelectedVideos(selectedVideos));
        dispatch(setProgress({ fullCount: selectedVideos.length }));
    }

    return (
        <>
            <div className="dropdown-list">
                <DropdownSelect
                    itemList={allTagsMemo}
                    onSelect={onSelectionChange}
                    onRemove={onSelectionChange}
                    placeholder="Filter"
                    enabledPreviousSelected={true}
                />
            </div>
            {videoList && videoList.length && <VideosBlock />}
        </>
    )
}

export default Videos
