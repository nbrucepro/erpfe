import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    sticky: 'left'
  },
  {
    Header: 'Task Name',    
    accessor: 'first_name',
    // sticky: 'left'
  },
  {
    Header: 'Start date',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
  },
  {
    Header: 'Due date',
    accessor: 'enddate_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
  },  
  {
    Header: 'Assigned To',    
    accessor: 'last_name',
    // sticky: 'left'
  },
]