import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import AttendanceTable from '../../components/shared/attendance'
const Attendance = () => {
  const [active, setActive] = useState('logs')

  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)

  useEffect(() => {
    setShouldRenderQuill(true) // This w
  })
  return (
    <Box m="20px">
      <Header title="Attendance" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-48 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Attendance
          </a>
        </li>
        <li
          className={`${
            active === 'newattendance' && 'bg-gray-300 p-4'
          } w-48 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newattendance')}>
          Mark Attendance
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <AttendanceTable />
      ) : (
        <div className="w-1/2 py-0 bg-gray-300">
          <div className="w-full bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">Mark Attendance</h1>
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
                      <label className="font-semibold" htmlFor="employee">
                        Employee
                      </label>
                      <Field
                          as="select"
                          id="employee"
                          name="employee"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                          required
                          onChange={(e) => setName(e.target.value)}
                        >
                          <option value="employee1">employee1</option>
                          <option value="employee2">employee2</option>
                          <option value="employee3">employee3</option>
                        </Field>
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="attended">
                      Attended
                      </label>
                      <Field
                          as="select"
                          id="employee"
                          name="employee"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                          required                          
                          onChange={(e) => setName(e.target.value)}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </Field>
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="date">
                         Date
                      </label>
                      <Field
                        id="date"
                        name="date"
                        placeholder="Enter Date"
                        type="Date"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                     </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                      Mark Attendance
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
Attendance.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Attendance
