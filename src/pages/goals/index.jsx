import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import GoalsTable from '../../components/shared/goals'
import dynamic from 'next/dynamic'
const DynamicQuillComponent = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading Quill editor...</p>,
  ssr: false,
})
const Goals = () => {
  const [active, setActive] = useState('logs')
  const [value, setValue] = useState('')

  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)

  useEffect(() => {
    setShouldRenderQuill(true) // This w
  })
  return (
    <Box m="20px">
      <Header title="Goals" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-48 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Goals
          </a>
        </li>
        <li
          className={`${
            active === 'newgoal' && 'bg-gray-300 p-4'
          } w-48 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newgoal')}>
            New Goal
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <GoalsTable />
      ) : (
        <div className="max-w-6xl py-0 bg-gray-300">
          <div className="bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">New Goal</h1>
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
                      <label className="font-semibold" htmlFor="subject">
                        Subject
                      </label>
                      <Field
                        id="subject"
                        name="subject"
                        placeholder="Enter goal subject"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="goalType">
                      Goal Type
                      </label>
                      <Field
                        id="goalType"
                        name="goalType"
                        placeholder="Enter Goal Type"
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
                      <label className="font-semibold" htmlFor="targetAchievement">
                        Target Achievement
                      </label>
                      <Field
                        id="targetAchievement"
                        name="targetAchievement"
                        placeholder="Enter Target Achievement"
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
                          className="block border bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                      )}
                    </div>
                    </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                      New Goal
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
Goals.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Goals
