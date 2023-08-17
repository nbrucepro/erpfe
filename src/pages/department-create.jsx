import { useState } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const DepartmentCreate = () => {
  const [value, setValue] = useState('')
  const [departmentName, setDepartmentName] = useState('')
  const [departmentShortName, setDepartmentShortName] = useState('')
  const [departmentDetails, setDepartmentDetails] = useState('')

  return (
    <div>
      <div className="max-w-7xl mx-auto py-0 bg-gray-300">
        <div className="bg-gray-300 rounded-full shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6">Create Department</h1>
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
                    <label className="font-semibold" htmlFor="departmentName">
                      Department Name
                    </label>
                    <Field
                      id="departmentName"
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                      name="departmentName"
                      placeholder="Enter Department Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="departmentShortName">
                      Department Short Name
                    </label>
                    <Field
                      id="departmentShortName"
                      value={departmentShortName}
                      onChange={(e) => setDepartmentShortName(e.target.value)}
                      name="departmentShortName"
                      placeholder="Enter Department Short Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="departmentDetails">
                      Department Details
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
                      Department Status
                    </label>
                  </div>
                </div>
                <div className="flex justify-start mt-0">
                  <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-green-900"
                  >
                    Add Department
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
DepartmentCreate.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default DepartmentCreate
