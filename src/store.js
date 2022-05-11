import { configureStore, createListenerMiddleware, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

const listenerMiddleware = createListenerMiddleware();

const initialState = {
  login: {
    address: '0x',
    isRegistered: false,
  },
  sidebarShow: 'responsive'
}

export const loginInfoSlice = createSlice({
  name: 'loginInfo',
  initialState: initialState.login,
  reducers: {
    updateAddress: (state, action) => {
      return state = {
        ...state,
        address: action.payload.address || initialState.login.address,
        isRegistered: action.payload.isRegistered || initialState.login.isRegistered
      };
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


const reducer = combineReducers({
  sidebarShow: siderbarShowSlice.reducer,
  loginInfo: loginInfoSlice.reducer
})

const store = configureStore({
  reducer: reducer
});

export default store
