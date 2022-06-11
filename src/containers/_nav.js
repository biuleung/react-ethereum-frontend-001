import CIcon from '@coreui/icons-react'
import { MdOutlineEmojiPeople } from 'react-icons/md';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: '',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Dances',
    route: '/dances',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Videos',
        to: '/dances/videos',
      },
    ]
  }
]

export default _nav
