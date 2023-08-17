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
    label: 'Department',
    icon: mdiTable,
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
    label: 'Leave Type',
    icon: mdiTable,
    menu: [
      {
        label: 'New Leave Type',
        href: '/leave-type-create',
      },
      {
        label: 'Leave Type List',
        href:'/leave-type-list',
      },
    ]
  },
  {
    href: '/employees',
    label: 'Employees',
    icon: mdiTable,
  },
  {
    label:'Leave',
    icon:mdiTable,
    menu:[
      {
      label:'Leave List',
      href:'/leave-list',
    },{
      label:'Leave List Pending',
      href:'/leave-list-pending',
    },
      {
      label:'Leave List Approved',
      href:'/leave-list-approved',
    },{
      label:'Leave List Rejected',
      href:'/leave-list-rejected',
    }
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
