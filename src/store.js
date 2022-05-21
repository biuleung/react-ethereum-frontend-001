import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

const initialState = {
  ERCProvider: {
    provider: {}
  },
  login: {
    address: '0x',
    isRegistered: false,
  },
  sidebarShow: 'responsive',
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

export const siderbarShowSlice = createSlice({
  name: 'sidebarShow',
  initialState: initialState.sidebarShow,
  reducers: {
    toggle: (state, action) => {
      return state === 'responsive' ? false : "responsive"
    },
    toggleMobile: (state, action) => {
      return state === 'responsive' ? true : "responsive"
    }
  }
});

export const loginInfoSlice = createSlice({
  name: 'loginInfo',
  initialState: initialState.login,
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

export const videosSlice = createSlice({
  name: 'videosInfo',
  initialState: initialState.videos,
  reducers: {
    setAllVideos: (state, action) => {
      return state = {
        ...state,
        allVideos: action.payload ?? initialState.videos.info
      }
    },
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
