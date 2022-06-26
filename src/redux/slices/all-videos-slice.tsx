import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiService } from 'src/reusable/api-service';

export const fetchAllVideos = createAsyncThunk(
    'allVideos',
    async (req, { rejectWithValue }) => {
        try {
            const response = await ApiService.get('/allVideos');
            return [response?.data];
        } catch (err: any) {
            rejectWithValue(err);
        }
    }
);

export type Tag = { cat: string; key: string };
export type Video = { id: string; url: string; tags: Tag[] };
export type VideosState = {
    loading: boolean;
    selectedVideos: Video[];
    AllVideos: Video[];
    tags: Tag[];
};

const initialState: VideosState = {
    loading: false,
    selectedVideos: [],
    AllVideos: [],
    tags: [],
};

export const AllVideosSlice = createSlice({
    name: 'allVideosInfo',
    initialState: initialState,
    reducers: {
        setSelectedVideos: (state, action) => {
            return (state = {
                ...state,
                selectedVideos: action.payload ?? initialState.AllVideos,
            });
        },
        setTags: (state, action) => {
            return (state = {
                ...state,
                tags: action.payload ?? initialState.tags,
            });
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAllVideos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(
            fetchAllVideos.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.AllVideos = action.payload ?? initialState.AllVideos;
            }
        );
        builder.addCase(fetchAllVideos.rejected, (state, action) => {
            state.loading = false;
        });
    },
});
