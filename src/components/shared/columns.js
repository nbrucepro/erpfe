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
    Header: 'Warehouse Name',
    Footer: 'Warehouse Name',
    accessor: 'first_name',
    sticky: 'left',
  },
  {
    Header: 'Date of Creation',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
  },
  {
    Header: 'Address',
    Footer: 'Address',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Code',
    Footer: 'Code',
    accessor: 'age',
  },
]
