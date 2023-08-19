import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left',
  },
  {
    Header: 'Shift Name',
    Footer: 'Warehouse Name',
    accessor: 'first_name',
    sticky: 'left',
  },
  {
    Header:'Employee Name',
    accessor:'last_name',
  },
  {
    Header: 'start Date',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
  },
  {
    Header: 'end Date',
    accessor: 'enddate_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
  },
  
]
