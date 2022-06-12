/* eslint-disable array-callback-return */
import { useEffect, useMemo } from "react";
import './videos.scss'
import videoInfoListData from './videos-mock-api-data.json';
import { progressSlice, SelectedVideo, Tag, videosSlice } from "src/store";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { DropdownSelect } from "src/reusable/base/dropdown-select";
import { Calculate } from "../../../reusable/calculate";
import { v4 } from 'uuid';
import VideoItem from "./video-item";

const { setSelectedVideos, setTags } = videosSlice.actions;
const { setProgress } = progressSlice.actions;

const VideosBlock =  () => {
    const selectedVideos = useSelector((state: RootStateOrAny) => state.videosInfo.selectedVideos);
    const itemList: any = [];
    if(selectedVideos){
        for(let video of selectedVideos){
            itemList.push(
                <VideoItem key={v4()} videoUrl={video.url} />
            )
        }
    }

    return (
        <div className='vedeos-box-container'>
            <div className='vedeos-grid'>
                {/* {itemList} */}
                {selectedVideos && selectedVideos.map((video: SelectedVideo, index: number) =>
                    <VideoItem key={v4()} videoUrl={video.url} />
                )}
            </div>
        </div>
    )
}

const Videos = () => {
    const dispatch = useDispatch();
    let allTags: Tag[] = [];
    let videoList: SelectedVideo[] = [];
    let selectedVideos: SelectedVideo[] = [];
    const numOfSelectedVideos = selectedVideos && selectedVideos.length;

    if (Array.isArray(videoInfoListData) && videoInfoListData.length) {
        videoList = [...videoInfoListData];
        videoList.forEach(v => {
            v.hasOwnProperty('tags') && v.tags.forEach(t => {
                if (!allTags.find(ts => ts.key === t.key)) {
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
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dispatch]);

    useEffect(() => {
        return (() => {
            dispatch(setSelectedVideos([]));
            dispatch(setProgress({ step: 0, fullCount: 0 }));
        })
    });

    useEffect(() => {
        if (numOfSelectedVideos) {
            dispatch(setProgress({ fullCount: numOfSelectedVideos }))
        }
    }, [dispatch, numOfSelectedVideos])

    const onSelectionChange = (event: {key: string, id: number}[]) => {
        dispatch(setProgress({ step: 0, fullCount: 0 }));
        selectedVideos = videoList.filter(v => event.every(e => v.tags.some( t => t.key === e.key)));

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
            <div>
                {videoList && videoList.length && <VideosBlock />}
            </div>
        </>
    )
}

export default Videos
