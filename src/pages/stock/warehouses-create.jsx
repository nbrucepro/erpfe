import { useState,useEffect } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import ImageUploader from '../../components/shared/imageUpload';

const WarehouseCreate = () => {
  const [value, setValue] = useState('')
  const [warehouseCode, setwarehouseCode] = useState('12345')
  const [warehouseName, setwarehouseName] = useState('warehouse name')
  const [phone, setphone] = useState(0)
  const [email, setemail] = useState('w1@info.com')
  const [address, setaddress] = useState('address');

  return (
    <div>
      <div className="max-w-7xl mx-auto py-0 bg-gray-300">
        <div className="bg-gray-300 rounded-full shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6">Create Warehouse</h1>
          <Formik
            initialValues={{
              warehouseName: '',
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
                    <label className="font-semibold" htmlFor="warehouseCode">
                      Warehouse Code
                    </label>
                    <Field
                      id="warehouseCode"
                      value={warehouseCode}
                      onChange={(e) => setwarehouseCode(e.target.value)}
                      name="warehouseCode"
                      placeholder="Enter Warehouse Code"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="warehouseName">
                      Warehouse Name
                    </label>
                    <Field
                      id="warehouseName"
                      value={warehouseName}
                      onChange={(e) => setwarehouseName(e.target.value)}
                      name="warehouseName"
                      placeholder="Enter Warehouse Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="phone">
                      phone
                    </label>
                    <Field
                      id="phone"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                      name="phone"
                      placeholder="Enter Phone Number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className='px-3 py-2'>
                    <Field type="checkbox" name="status" />
                    <label className="font-semibold" htmlFor="">
                      Status
                    </label>
                  </div>
                </div>
     
                </Form>
            )}
          </Formik>  
          <label className="font-semibold" htmlFor="">
                      Status
                    </label>      
          <ImageUploader/>
          <div className="flex justify-start mt-2">
                  <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-green-900"
                  >
                    Add Warehouse
                  </button>
                </div> 
        </div>
      </div>
    </div>
  )
}
WarehouseCreate.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default WarehouseCreate
