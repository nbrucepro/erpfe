import {
  mdiAccountCircle,
  mdiMonitor,
  mdiTable,
  mdiViewList,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/',
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
    href: '/tasks',
    label: 'Tasks',
    icon: mdiTable,
  },  
  {
    href: '/transactions',
    label: 'Transactions',
    icon: mdiTable,
  },  
  {
    href: '/projects',
    label: 'Projects',
    icon: mdiTable,
  },  
  {
    href: '/opportunities',
    label: 'Opportunities',
    icon: mdiTable,
  },  
  {
    href: '/clients',
    label: 'Clients',
    icon: mdiTable,
  },  
  {
    href: '/deals',
    label: 'Deals',
    icon: mdiTable,
  },  
  {
    href: '/goals',
    label: 'Goals',
    icon: mdiTable,
  }, 
  {
    label:'Shifts',
    icon:mdiTable,
    // href:'/shift/shifts',
    menu:[
      {
        label:'Shifts',
        href:'/shift/shifts',
      },    
      {
      label:'Assign Shift',
      href:'/shift/shift-create',
    },
  ]
  },
  {
    label:'Leave',
    icon:mdiTable,
    // href:'/leave-list',
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
    label:'Stock',
    icon:mdiTable,
    // href:'/stock/warehouses',
    menu:[
      {
        label:'Warehouses',
        href:'/stock/warehouses',
      },    
      {
      label:'New Warehouse',
      href:'/stock/warehouses-create',
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
