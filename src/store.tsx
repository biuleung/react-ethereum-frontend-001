import {  configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from "redux";


const initialState = {
  ERCProvider: {
    provider: {}
  },
  login: {
    address: '0x',
    isRegistered: false,
  },
  sidebarShow: false,
  videos: { info: [{}], tags: [] },
  progressBar: {
    step: 0,
    fullCount: 0,
  }
}

export const ERCProviderSlice = createSlice({
  name: "ERCProvider",
  initialState: initialState.ERCProvider,
  reducers: {
    setProvider: (state, action) => {
      return state = {
        ...state,
        provider: action.payload ?? initialState.ERCProvider.provider
      }
    }
  }
})

type SiderbarState = string | boolean;

export const siderbarShowSlice = createSlice({
  name: 'sidebarShow',
  initialState: initialState.sidebarShow as SiderbarState,
  reducers: {
    toggle: (state, action) => {
      return state === 'responsive' ? false : "responsive"
    },
    toggleMobile: (state, action) => {
      return state === 'responsive' ? true : "responsive"
    }
  }
});


export type Login = {
  address: string,
  isRegistered: boolean
}

export const loginInfoSlice = createSlice({
  name: 'loginInfo',
  initialState: initialState.login as Login,
  reducers: {
    updateAddress: (state, action) => {
      return state = {
        ...state,
        address: action.payload.address ?? initialState.login.address,
        isRegistered: action.payload.isRegistered ?? initialState.login.isRegistered
      };
    }
  }
})

export type Tag = {cat: string, key: string};
export type SelectedVideo = { id: string, url: string, tags: Tag[]}
export type VideosState = {selectedVideos?: SelectedVideo[], info: any, tags: Tag[] }

export const videosSlice = createSlice({
  name: 'videosInfo',
  initialState: initialState.videos as VideosState,
  reducers: {
    // setAllVideos: (state, action) => {
    //   return state = {
    //     ...state,
    //     allVideos: action.payload ?? initialState.videos.info
    //   }
    // },
    setSelectedVideos: (state, action) => {
      return state = {
        ...state,
        selectedVideos: action.payload ?? initialState.videos.info
      }
    },
    setTags: (state, action) => {
      return state = {
        ...state,
        tags: action.payload ?? initialState.videos.tags
      }
    }
  }
})

export const progressSlice = createSlice({
  name: 'progressBar',
  initialState: initialState.progressBar,
  reducers: {
    setProgress: (state, action) => {
      return state = {
        ...state,
        step: action.payload?.step ?? state.step + 1,
        fullCount: action.payload?.fullCount ?? state.fullCount
      }
    },
  }
})

const reducer = combineReducers({
  ERCProvider: ERCProviderSlice.reducer,
  sidebarShow: siderbarShowSlice.reducer,
  loginInfo: loginInfoSlice.reducer,
  videosInfo: videosSlice.reducer,
  progressBar: progressSlice.reducer
})

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default store
