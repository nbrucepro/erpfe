import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header:'subject',
    accessor:'phone',
  },
  {
    Header: 'Client',
    accessor: 'first_name',
    // sticky: 'left'
  },
  {
    Header: 'Start Date',
    accessor: 'date_of_birth',
  },
  {
    Header: 'End Date',
    accessor: 'enddate_of_birth',
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
