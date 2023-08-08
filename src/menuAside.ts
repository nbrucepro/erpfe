import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href:'/invoic',
    icon:mdiAccountCircle,
    label:'Invoice'
  },
  {
    href: '/employees',
    label: 'Employees',
    icon: mdiTable,
  },
  // {
  //   href: '/forms',
  //   label: 'Forms',
  //   icon: mdiSquareEditOutline,
  // },
  {
    // href: '/dashboard',
    label: 'Sales',
    icon: mdiTelevisionGuide,
  },
  {
    // href: '/dashboard',
    label: 'calendar',
    icon: mdiResponsive,
  },
  // {
  //   href: '/',
  //   label: 'Styles',
  //   icon: mdiPalette,
  // },
  {
    // href: '/dashboard',
    label: 'Profile',
    icon: mdiAccountCircle,
    menu: [
      {
        label: 'Edit',
      },
      {
        label: 'Settings',
      },
    ]
  },
  // {
  //   href: '/login',
  //   label: 'Login',
  //   icon: mdiLock,
  // },
  {
    // href: '/dashboard',
    label: 'Feedbacks',
    icon: mdiAlertCircle,

  },
  {
    href:'/payroll',
    label: 'Payroll',
    icon: mdiViewList,
  },
  // {
  //   href: 'https://github.com/justboil/admin-one-react-tailwind',
  //   label: 'GitHub',
  //   icon: mdiGithub,
  //   target: '_blank',
  // },
  // {
  //   href: 'https://github.com/justboil/admin-one-vue-tailwind',
  //   label: 'Vue version',
  //   icon: mdiVuejs,
  //   target: '_blank',
  // },
]

export default menuAside
