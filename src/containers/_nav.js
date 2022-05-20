const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    badge: {
      color: 'info',
      text: '',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Dances',
    route: '/dances',
    icon: '',
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
