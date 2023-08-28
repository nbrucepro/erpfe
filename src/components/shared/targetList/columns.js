import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header: 'name',
    accessor: 'first_name',
    // sticky: 'left'
  },
  {
    Header: 'Assigned User',
    accessor: 'email',
    // sticky: 'left'
  },
  {
    Header: 'Type',
    accessor: 'last_name',
    // sticky: 'left'
  },
  {
    Header: 'Description',
    accessor: 'country',
  },
]
