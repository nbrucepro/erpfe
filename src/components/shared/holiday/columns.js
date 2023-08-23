import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header: 'Event Name',
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
    Header: 'Location',
    accessor: 'country',
  },
  {
    Header: 'Description',
    accessor: 'email',
    // sticky: 'left'
  },
]
