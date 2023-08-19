import { useState,useEffect } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import ImageUploader from '../../components/shared/imageUpload';

const ShiftCreate = () => {
  const [value, setValue] = useState('')
  const [shiftName, setshiftName] = useState('D5QSFKD')
  const [startTime, setstartTime] = useState('9:40')
  const [minutebeforetheshiftstarts, setminutebeforetheshiftstarts] = useState(30)
  const [lunchTime, setlunchTime] = useState('12:00')
  const [startDate, setstartDate] = useState('19/10/2023');
  const [employeeName, setemployeeName] = useState('employee1')
  const [status, setstatus] = useState('approved');
  const [endTime, setendTime] = useState('12:00')
  const [endDate, setendDate] = useState('19/10/2023');

  return (
    <div>
    <div className="max-w-7xl mx-auto py-0 bg-gray-300">
      <div className="bg-gray-300 rounded-full shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Create/Assign Shift</h1>
        <Formik
          initialValues={{
            departmentName: '',
          }}
          onSubmit={(values) => {
            // Handle form submission here
            console.log(values)
          }}
        >
          {({ values }) => (
            <Form>
              <div className="grid md:grid-cols-1 gap-6 grid-cols-1 py-5">
                <div>
                  <label className="font-semibold" htmlFor="shiftName">
                    Shift Name
                  </label>
                  <Field
                    id="shiftName"
                    value={shiftName}
                    onChange={(e) => setshiftName(e.target.value)}
                    name="shiftName"
                    placeholder="Enter Shift Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold" htmlFor="startTime">
                    Start Time
                  </label>
                  <Field
                    id="startTime"
                    value={startTime}
                    onChange={(e) => setstartTime(e.target.value)}
                    name="startTime"
                    placeholder="Enter Start time"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold" htmlFor="minutebeforetheshiftstarts">
                    Minute before the shift starts
                  </label>
                  <Field
                    id="minutebeforetheshiftstarts"
                    value={minutebeforetheshiftstarts}
                    onChange={(e) => setminutebeforetheshiftstarts(e.target.value)}
                    name="minutebeforetheshiftstarts"
                    placeholder="Enter Minute before the shift starts"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold" htmlFor="lunchTime">
                    Lunch Time
                  </label>
                  <Field
                    id="lunchTime"
                    value={lunchTime}
                    onChange={(e) => setlunchTime(e.target.value)}
                    name="lunchTime"
                    placeholder="Enter Lunch Time"
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
                    value={startDate}
                    onChange={(e) => setstartDate(e.target.value)}
                    name="startDate"
                    placeholder="Enter Start Date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold" htmlFor="employeeName">
                    Employee Name
                  </label>
                  <Field
                    id="employeeName"
                    value={employeeName}
                    onChange={(e) => setemployeeName(e.target.value)}
                    name="employeeName"
                    placeholder="Enter Employee Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold" htmlFor="endTime">
                    End Time
                  </label>
                  <Field
                    id="endTime"
                    value={endTime}
                    onChange={(e) => setendTime(e.target.value)}
                    name="endTime"
                    placeholder="Enter End Time"
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
                    value={endDate}
                    onChange={(e) => setendDate(e.target.value)}
                    name="endDate"
                    placeholder="Enter End Date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div className='px-3 py-2'>
                  <Field type="checkbox" name="status" />
                  <label className="font-semibold" htmlFor="">
                     {status}
                  </label>
                </div>
              </div>
              <div className="flex justify-start mt-0">
                <button
                  type="submit"
                  className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-green-900"
                >
                  Assign Shift
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
  )
}
ShiftCreate.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default ShiftCreate
