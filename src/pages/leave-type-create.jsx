import { useState } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const LeaveTypeCreate = () => {
  const [value, setValue] = useState('')
  const [leaveTypeName, setLeaveTypeName] = useState('')
//   const [leaveTypeDetails, setLeaveTypeDetails] = useState('')

  return (
    <div>
      <div className="max-w-7xl mx-auto py-0 bg-gray-300">
        <div className="bg-gray-300 rounded-full shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6">Create Leave Type</h1>
          <Formik
            initialValues={{
                leaveTypeName: '',
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
                    <label className="font-semibold" htmlFor="leaveTypeName">
                      LeaveType Name
                    </label>
                    <Field
                      id="leaveTypeName"
                      value={leaveTypeName}
                      onChange={(e) => setLeaveTypeName(e.target.value)}
                      name="leaveTypeName"
                      placeholder="Enter LeaveType Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="leaveTypeDetails">
                      LeaveType Details
                    </label>
                    <ReactQuill
                      value={value}
                      onChange={setValue}
                      className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div className='px-3 py-2'>
                    <Field type="checkbox" name="status" />
                    <label className="font-semibold" htmlFor="">
                      LeaveType Status
                    </label>
                  </div>
                </div>
                <div className="flex justify-start mt-0">
                  <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-green-900"
                  >
                    Add Leave Type
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
LeaveTypeCreate.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default LeaveTypeCreate
