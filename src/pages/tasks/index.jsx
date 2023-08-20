import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import TaskTable from '../../components/shared/taskTable'
import dynamic from 'next/dynamic'
const DynamicQuillComponent = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading Quill editor...</p>,
  ssr: false,
})

const Tasks = () => {
  const [active, setActive] = useState('logs')
  const [value, setValue] = useState('')

  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)

  useEffect(() => {
    setShouldRenderQuill(true) // This w
  })
  return (
    <Box m="20px">
      <Header title="Tasks" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-32 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Tasks Logs
          </a>
        </li>
        <li
          className={`${
            active === 'newtask' && 'bg-gray-300 p-4'
          }  flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newtask')}>
            New Task
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <TaskTable />
      ) : (
        <div className="max-w-6xl py-0 bg-gray-300">
          <div className="bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">New Task</h1>
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
                      <label className="font-semibold" htmlFor="taskName">
                        Task Name
                      </label>
                      <Field
                        id="taskName"
                        name="taskName"
                        placeholder="Enter Task Name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Start-date"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Start Date
                      </label>
                      <Field
                        id="Start-date"
                        type="date"
                        name="Start_date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Due-date"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Due Date
                      </label>
                      <Field
                        id="Due-date"
                        type="date"
                        name="Due_date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="assignedTo">
                        Assigned Name
                      </label>
                      <Field
                        id="assignedTo"
                        name="assignedTo"
                        placeholder="Enter Assigned To"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="hourlRate">
                        Hour Rate
                      </label>
                      <Field
                        id="hourlRate"
                        name="hourlRate"
                        placeholder="Enter Hour Rate"
                        type="Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="estimatedHour">
                        Estimated Hour
                      </label>
                      <Field
                        id="estimatedHour"
                        name="estimatedHour"
                        placeholder="Enter Estimated Hour"
                        type="Number"
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
                      <label className="font-semibold" htmlFor="tags">
                        Tags
                      </label>
                      <Field
                        id="tags"
                        name="tags"
                        placeholder="Enter Tags People"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="taskDescription">
                        Tasks Details
                      </label>
                      {shouldRenderQuill && (
                        <DynamicQuillComponent
                          onChange={setValue}
                          className="w-[200%] border bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                      Create Task
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
Tasks.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Tasks
