import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
} from '@coreui/react'
import ProgressBar from 'react-bootstrap/ProgressBar'
// routes config
import routes from '../routes'

import {
  TheHeaderDropdown,
} from './index'
import { siderbarShowSlice } from 'src/store'

const TheHeader = () => {
  const dispatch = useDispatch();

  const { toggle, toggleMobile } = siderbarShowSlice.actions;
  const progressBar = useSelector(state => state.progressBar);

  let currentPercentage = calPercentage(progressBar);

  function calPercentage(progressBar) {
    let currentPercentage = progressBar.step / progressBar.fullCount * 100;

    return (currentPercentage < 10 && progressBar.fullCount > 0) ?? currentPercentage
      ? 10
      : currentPercentage;
  }

  function toggleSidebar() {
    dispatch(toggle());
  }

  function toggleSidebarMobile() {
    dispatch(toggleMobile());
  }

  return (
    <>
      <CHeader withSubheader>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={toggleSidebarMobile}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={toggleSidebar}
        />
        <CHeaderBrand className="mx-auto d-lg-none" to="/">
          Homepage
        </CHeaderBrand>

        <CHeaderNav className="d-md-down-none mr-auto">
          <CHeaderNavItem className="px-3" >
            <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/users">Users</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink>Settings</CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>

        <CHeaderNav className="px-3">
          <TheHeaderDropdown></TheHeaderDropdown>
        </CHeaderNav>

        <CSubheader className="px-3 justify-content-between">
          <CBreadcrumbRouter
            className="border-0 c-subheader-nav m-0 px-0 px-md-3"
            routes={routes}
          />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
          </div>
        </CSubheader>
      </CHeader>
      <div className='progress-bar-container'>
        <ProgressBar
          animated
          now={currentPercentage}
          hidden={currentPercentage >= 100 || !currentPercentage} />
      </div>
    </>
  )
}

export default TheHeader
