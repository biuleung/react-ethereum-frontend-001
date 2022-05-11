import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useSelector } from 'react-redux'
import Auth from 'src/reusable/auth/auth'

const TheHeaderDropdown = () => {
  const loginInfo = useSelector(state => state.loginInfo);

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <div className='d-flex align-items-center'>
        {loginInfo.isRegistered
          && <CDropdownToggle className="c-header-nav-link" caret={false}>
            <div className="c-avatar">
              <CImg
                src={'avatars/default.jpg'}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
            </div>
          </CDropdownToggle>}
        <Auth />
      </div>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown >
  )
}

export default TheHeaderDropdown
