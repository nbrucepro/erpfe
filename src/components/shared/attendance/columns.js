import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header: 'Employee',
    accessor: 'first_name',
    // sticky: 'left'
  },
  {
    Header: 'Attended',
    accessor: 'attn',
    // sticky: 'left'
  },
  {
    Header: 'Date',
    accessor: 'date_of_birth',
  },

]
