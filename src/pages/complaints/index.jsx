import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import ComplaintsTable from '../../components/shared/complaints'
import dynamic from 'next/dynamic'
const DynamicQuillComponent = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading Quill editor...</p>,
  ssr: false,
})
const Complaints = () => {
  const [active, setActive] = useState('logs')
  const [value, setValue] = useState('')

  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)

  useEffect(() => {
    setShouldRenderQuill(true) // This w
  })
  return (
    <Box m="20px">
      <Header title="Complaints" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-32 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Complaints
          </a>
        </li>
        <li
          className={`${
            active === 'newcomplaint' && 'bg-gray-300 p-4'
          } w-36 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newcomplaint')}>
            New Complaint
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <ComplaintsTable />
      ) : (
        <div className="py-0 bg-gray-300">
          <div className="bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">New Complaint</h1>
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
                      <label className="font-semibold" htmlFor="client">
                        Client Name
                      </label>
                      <Field
                        id="client"
                        name="client"
                        placeholder="Enter Client Name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="complaintType">
                        Complaint Type
                      </label>
                      <Field
                        id="complaintType"
                        name="complaintType"
                        placeholder="Enter Complaint Type"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="complaintDate">
                        Complaint Date
                      </label>
                      <Field
                        id="complaintDate"
                        name="complaintDate"
                        type="Date"
                        placeholder="Enter Complaint Date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="dueDate">
                        Due Date
                      </label>
                      <Field
                        id="dueDate"
                        name="dueDate"
                        type="Date"
                        placeholder="Enter Due Date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="procedureToSolve">
                        Procedure To Solve
                      </label>
                      <Field
                        id="procedureToSolve"
                        name="procedureToSolve"
                        placeholder="Enter Procedure To Solve"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="status">
                        Status
                      </label>
                      <Field
                        id="status"
                        name="status"
                        placeholder="Enter Status"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="description">
                        Description
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
                      New Complaint
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
Complaints.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Complaints
