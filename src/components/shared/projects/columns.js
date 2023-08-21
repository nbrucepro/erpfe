import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Project No',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header: 'Project Name',
    accessor: 'first_name',
    // sticky: 'left'
  },
  {
    Header: 'Project Clients',
    accessor: 'last_name',
    // sticky: 'left'
  },
  {
    Header: 'Progress',
    accessor: 'age',
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
    Header: 'Billing Type',
    accessor: 'country',
  },
  {
    Header: 'Description',
    accessor: 'email',
  },
]
