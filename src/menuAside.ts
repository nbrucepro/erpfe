import {
  mdiAccountCircle,
  mdiMonitor,
  mdiTable,
  mdiViewList,
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
  {
    label: 'Department',
    icon: mdiAccountCircle,
    menu: [
      {
        label: 'New Department',
        href: '/department-create',
      },
      {
        label: 'Department List',
        href:'/department-list',
      },
    ]
  },
  {
    href:'/payroll',
    label: 'Payroll',
    icon: mdiViewList,
  },
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
]

export default menuAside
