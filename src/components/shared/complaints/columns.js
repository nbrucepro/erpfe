import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'complaintCode',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header: 'Client',
    accessor: 'first_name',
    // sticky: 'left'
  },
  {
    Header: 'Complaint Date',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Due Date',
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
