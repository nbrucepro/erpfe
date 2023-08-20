import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    sticky: 'left',
  },
  {
    Header: 'Account Name',
    accessor: 'first_name',
    // sticky: 'left'
  },
  {
    Header: 'Account Number',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Initial Balance',
    accessor: 'age',
  },
  {
    Header: 'Contact Person',
    accessor: 'last_name',
    // sticky: 'left'
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Bank Details',
    accessor: 'country',
  },
]
