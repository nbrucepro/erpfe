import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import TransactionsTable from '../../components/shared/transactions'
import dynamic from 'next/dynamic'
const DynamicQuillComponent = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading Quill editor...</p>,
  ssr: false,
})
const Transactions = () => {
  const [active, setActive] = useState('logs')
  const [value, setValue] = useState('')

  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)

  useEffect(() => {
    setShouldRenderQuill(true) // This w
  })
  return (
    <Box m="20px">
      <Header title="Transactions" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-32 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Account Logs
          </a>
        </li>
        <li
          className={`${
            active === 'newaccount' && 'bg-gray-300 p-4'
          } w-32 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newaccount')}>
            New Account
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <TransactionsTable />
      ) : (
        <div className="py-0 bg-gray-300">
          <div className="bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">New Bank Account</h1>
            <Formik
              initialValues={{}}
              onSubmit={(values) => {
                // Handle form submission here
                console.log(values)
              }}
            >
              {({ values }) => (
                <Form>
                  <div className="grid md:grid-cols-2 gap-6 grid-cols-1 py-5">
                    <div>
                      <label className="font-semibold" htmlFor="accountName">
                        Account Name
                      </label>
                      <Field
                        id="accountName"
                        name="accountName"
                        placeholder="Enter Bank Account Name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="accountNumber">
                        Account Number
                      </label>
                      <Field
                        id="accountNumber"
                        name="accountNumber"
                        placeholder="Enter Account Number"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="initialBalance">
                        Initial Balance
                      </label>
                      <Field
                        id="initialBalance"
                        name="initialBalance"
                        placeholder="Enter Initial Balance"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="phone">
                        Phone
                      </label>
                      <Field
                        id="phone"
                        name="phone"
                        type="Number"
                        placeholder="Enter Phone Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="bankDetails">
                        Bank Details
                      </label>
                      {shouldRenderQuill && (
                        <DynamicQuillComponent
                          onChange={setValue}
                          className="w-full md:w-[200%] block border bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                      Create Bank Account
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </Box>
  )
}
Transactions.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Transactions
