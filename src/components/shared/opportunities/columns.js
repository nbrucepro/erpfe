import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header: 'Opportunity Name',
    accessor: 'first_name',
    // sticky: 'left'
  },
  {
    Header: 'Probability Of Winning',
    accessor: 'last_name',
    // sticky: 'left'
  },
  {
    Header: 'Current State',
    accessor: 'country',
  },
  {
    Header: 'Expected Revenue',
    accessor: 'age',
  },
  {
    Header: 'Next Action',
    accessor: 'email',
  },
  {
    Header: 'Forecast Close Date',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Next Action Date',
    accessor: 'enddate_of_birth',
  },
]
