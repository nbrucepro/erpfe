import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header: 'Employee Name',
    accessor: 'first_name',
    // sticky: 'left'
  },

  {
    Header: 'Designation',
    accessor: 'last_name',
    // sticky: 'left'
  },

  {
    Header: 'Promotion Title',
    accessor: 'country',
  },
  {
    Header: 'Promotion Date',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Description',
    accessor: 'email',
    // sticky: 'left'
  },
]
