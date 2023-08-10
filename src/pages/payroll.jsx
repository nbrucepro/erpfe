import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../mockData'
import Header from '../components/Header'
import { useTheme } from '@mui/material'
import LayoutAuthenticated from '../layouts/Authenticated'
import { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'

const Payroll = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  useEffect(() => {
    console.log('This is payroll @here')
  }, [])
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1,
    },
  ]
  const [active, setActive] = useState('logs')
  return (
    <Box m="20px">
      <Header title="Payroll"/>
      <ul className="flex relative">
        <li className={`${active === 'logs' && 'bg-gray-300'} flex justify-center items-center w-32 cursor-pointer`}>
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Payroll Logs
          </a>
        </li>
        <li className={`${active === 'pay' && 'bg-gray-300 p-4'} w-24 flex justify-center items-center cursor-pointer`}>
          <a className="flex flex-col text-center" onClick={() => setActive('pay')}>
            New Pay
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <Box
          className="bg-gray-300"
          // m="40px 0 0 0"
          height="75vh"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      ) : (
        <section className="max-w-6xl py-0 bg-gray-300">
          <div className="bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">New Pay</h1>
            <Formik
              initialValues={{
                invoice_number: '',
                invoice_date: '',
                client_name: '',
                client_email: '',
                description: '',
                amount: '',
                currency: 'USD', // Set the default currency value
              }}
              onSubmit={(values) => {
                // Handle form submission here
                console.log(values)
              }}
            >
              {({ values }) => (
                <Form>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="invoice-number"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Invoice Number
                      </label>
                      <Field
                        id="invoice-number"
                        type="text"
                        name="invoice_number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="invoice-date"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Invoice Date
                      </label>
                      <Field
                        id="invoice-date"
                        type="date"
                        name="invoice_date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="client-name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Client Name
                      </label>
                      <Field
                        id="client-name"
                        type="text"
                        name="client_name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="client-email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Client Email
                      </label>
                      <Field
                        id="client-email"
                        type="email"
                        name="client_email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Description
                      </label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        rows="3"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Amount
                      </label>
                      <Field
                        id="amount"
                        type="number"
                        step="0.01"
                        name="amount"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="currency"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Currency
                      </label>
                      <Field
                        as="select"
                        id="currency"
                        name="currency"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        {/* Add more currency options as needed */}
                      </Field>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                      submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      )}
    </Box>
  )
}
Payroll.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Payroll
