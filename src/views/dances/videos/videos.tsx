/* eslint-disable array-callback-return */
import { useEffect, useMemo, useState } from 'react';
import './videos.scss';
import { progressSlice } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import { DropdownSelect } from 'src/reusable/base/dropdown-select';
import { Calculate } from '../../../reusable/calculate';
import { HorizontalVideos } from './horizontal-videos';

import {
    AllVideosSlice,
    fetchAllVideos,
    Tag,
    Video,
} from 'src/redux/slices/all-videos-slice';
import store from 'src/redux/store';
import VideosBlock from './videos-block';

const { setSelectedVideos, setTags } = AllVideosSlice.actions;
const { setProgress } = progressSlice.actions;

const Videos = () => {
    const dispatch = useDispatch();
    const [videoList, setVideoList] = useState<Video[]>([]);

    let allTags: Tag[] = [];
    let shuffledVideoList: Video[] = [];
    let selectedVideos: Video[] = [];
    const numOfSelectedVideos = selectedVideos && selectedVideos.length;

    useEffect(() => {
        const action = fetchAllVideos();

        const loadVideos = async () => {
            const result = await store.dispatch(action);
            setVideoList(
                Array.isArray(result.payload) && result.payload[0].data
            );
        };

        loadVideos();
        return () => {
            dispatch(setSelectedVideos([]));
            dispatch(setProgress({ step: 0, fullCount: 0 }));
        };
    }, [dispatch]);

    if (Array.isArray(videoList) && videoList.length) {
        videoList.forEach((v) => {
            v.hasOwnProperty('tags') &&
                v.tags.forEach((t: any) => {
                    if (allTags && !allTags.find((ts) => ts.key === t.key)) {
                        allTags.push(t);
                    }
                });
        });
        shuffledVideoList = [...Calculate.shuffle(videoList)];
    }

    const allTagsMemo = useMemo(() => {
        dispatch(setTags(allTags));
        return allTags;
    }, [allTags, dispatch]);

    useEffect(() => {
        if (numOfSelectedVideos) {
            dispatch(setProgress({ fullCount: numOfSelectedVideos }));
        }
    }, [dispatch, numOfSelectedVideos]);

    const onSelectionChange = (event: { key: string; id: number }[]) => {
        dispatch(setProgress({ step: 0, fullCount: 0 }));
        selectedVideos =
            videoList &&
            videoList.filter((v) =>
                event.every((e) => v.tags.some((t) => t.key === e.key))
            );

        dispatch(setSelectedVideos(selectedVideos));
        dispatch(setProgress({ fullCount: selectedVideos.length }));
    };

    return (
        <>
            <HorizontalVideos itemList={shuffledVideoList} />
            <div className="mt-5">
                <div>
                    <h2>All videos</h2>
                </div>
                <div className="dropdown-list">
                    <DropdownSelect
                        itemList={allTagsMemo}
                        onSelect={onSelectionChange}
                        onRemove={onSelectionChange}
                        placeholder="Filter"
                        enabledPreviousSelected={true}
                    />
                </div>
                <div>{videoList && videoList.length && <VideosBlock />}</div>
            </div>
        </>
    );
};

export default Videos;
