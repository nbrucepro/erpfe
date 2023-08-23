import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import PromotionTable from '../../components/shared/promotion'
import dynamic from 'next/dynamic'
const DynamicQuillComponent = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading Quill editor...</p>,
  ssr: false,
})
const Promotion = () => {
  const [active, setActive] = useState('logs')

  const [shouldRenderQuill, setShouldRenderQuill] = useState(false)
  const [value,setValue] = useState("")

  useEffect(() => {
    setShouldRenderQuill(true) // This w
  })
  return (
    <Box m="20px">
      <Header title="Promotion" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-48 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Promotion
          </a>
        </li>
        <li
          className={`${
            active === 'newPromotion' && 'bg-gray-300 p-4'
          } w-48 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newPromotion')}>
          New Promotion
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <PromotionTable />
      ) : (
        <div className="w-1/2 py-0 bg-gray-300">
          <div className="w-full bg-gray-300 rounded-full shadow-lg p-8">
            <h1 className="text-2xl font-semibold mb-6">New Promotion</h1>
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
                      <label className="font-semibold" htmlFor="designation">
                         Designation
                      </label>
                      <Field
                        id="designation"
                        name="designation"
                        placeholder="Enter Designation"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="promotionTitle">
                         Promotion Title
                      </label>
                      <Field
                        id="promotionTitle"
                        name="promotionTitle"
                        placeholder="Enter Promotion Title"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold" htmlFor="promotionDate">
                         Promotion Date
                      </label>
                      <Field
                        id="promotionDate"
                        name="promotionDate"
                        placeholder="Enter Promotion Date"
                        type="date"
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
                      New Promotion
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
Promotion.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Promotion
