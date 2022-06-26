import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

// sidebar nav config
import navigation from './_nav'
import { siderbarShowSlice } from 'src/redux/store'

const TheSidebar = () => {
  const dispatch = useDispatch();

  const { toggle } = siderbarShowSlice.actions;
  const show = useSelector(state => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={() => dispatch(toggle())}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <div>
          Homepage
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
