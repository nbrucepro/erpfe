import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import HolidayTable from '../../components/shared/holiday'
import dynamic from 'next/dynamic'
const DynamicQuillComponent = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading Quill editor...</p>,
  ssr: false,
})
const Holiday = () => {
  const [active, setActive] = useState('logs')

  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)
  const [value,setValue] = useState("")

  useEffect(() => {
    setShouldRenderQuill(true) // This w
  })
  return (
    <Box m="20px">
      <Header title="Holiday" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-48 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Holiday
          </a>
        </li>
        <li
          className={`${
            active === 'newHoliday' && 'bg-gray-300 p-4'
          } w-48 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newHoliday')}>
          New Holiday
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <HolidayTable />
      ) : (
        <div className="w-1/2 py-0 bg-gray-300">
          <div className="w-full bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">New Holiday</h1>
            <Formik
              initialValues={{}}
              onSubmit={(values) => {
                // Handle form submission here
                console.log(values)
              }}
            >
              {({ values }) => (
                <Form>
                  <div className="w-3/4 mx-auto grid gap-6 grid-cols-1 py-5">
                    <div>
                      <label className="font-semibold" htmlFor="eventName">
                        Event Name
                      </label>
                      <Field
                          id="eventName"
                          name="eventName"
                          placeholder="Enter Event Name"
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
                        type="date"
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
                        type="date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="font-semibold" htmlFor="location">
                         Location
                      </label>
                      <Field
                        id="location"
                        name="location"
                        placeholder="Enter location"
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
                          className="w-full block border bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                      )}
                    </div>
                     </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                      New Holiday
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
Holiday.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Holiday
