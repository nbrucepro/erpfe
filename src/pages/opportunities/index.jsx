import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import OpportunitiesTable from '../../components/shared/opportunities'
import dynamic from 'next/dynamic'
const DynamicQuillComponent = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading Quill editor...</p>,
  ssr: false,
})
const ProjectOpportunitiess = () => {
  const [active, setActive] = useState('logs')
  const [value, setValue] = useState('')

  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)

  useEffect(() => {
    setShouldRenderQuill(true) // This w
  })
  return (
    <Box m="20px">
      <Header title="Opportunities" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-32 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Opportunities Logs
          </a>
        </li>
        <li
          className={`${
            active === 'newproject' && 'bg-gray-300 p-4'
          } w-32 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newproject')}>
            New Project
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <OpportunitiesTable />
      ) : (
        <div className="max-w-6xl py-0 bg-gray-300">
          <div className="bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">New Project</h1>
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
                      <label className="font-semibold" htmlFor="projectName">
                        Project Name
                      </label>
                      <Field
                        id="projectName"
                        name="projectName"
                        placeholder="Enter Project Name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="projectCategory">
                        Project Category
                      </label>
                      <Field
                        id="projectCategory"
                        name="projectCategory"
                        placeholder="Enter Project Category"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="projectClient">
                        Project Client
                      </label>
                      <Field
                        id="projectClient"
                        name="projectClient"
                        placeholder="Enter Project Client"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="progress">
                        Progress
                      </label>
                      <Field
                        id="progress"
                        name="progress"
                        placeholder="Enter Progress"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="startDate">
                        Start Date
                      </label>
                      <Field
                        id="startDate"
                        name="startDate"
                        placeholder="Enter Start Date"
                        type="Date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="endDate">
                        End Date
                      </label>
                      <Field
                        id="endDate"
                        name="endDate"
                        placeholder="Enter End Date"
                        type="Date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="billingType">
                        Billing Type
                      </label>
                      <Field
                        id="billingType"
                        name="billingType"
                        placeholder="Enter Billing Type"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="fixedPrice">
                        Fixed Price
                      </label>
                      <Field
                        id="fixedPrice"
                        name="fixedPrice"
                        placeholder="Enter Fixed Price"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="hourlyRate">
                        Hourly Rate
                      </label>
                      <Field
                        id="hourlyRate"
                        name="hourlyRate"
                        placeholder="Enter Hourly Rate"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="estimateHours">
                        Estimated Hours
                      </label>
                      <Field
                        id="estimateHours"
                        name="estimateHours"
                        placeholder="Enter Estimated Hours"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="status">
                        status
                      </label>
                      <Field
                        id="status"
                        name="status"
                        placeholder="Enter status"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="demoUrl">
                        Demo Url
                      </label>
                      <Field
                        id="demoUrl"
                        name="demoUrl"
                        placeholder="Enter Demo Url"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="projectDetails">
                        Project Details
                      </label>
                      {shouldRenderQuill && (
                        <DynamicQuillComponent
                          onChange={setValue}
                          className="w-[200%] block border bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                      Create Project
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
Opportunities.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Opportunities
