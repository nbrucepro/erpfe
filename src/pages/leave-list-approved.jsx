import { mdiTableBorder, mdiAccountPlusOutline} from '@mdi/js'
import Head from 'next/head'
import React, {  } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'
import IconRounded from '../components/Icon/Rounded'

const LeaveListApproved = () => {
    
  return (
    <>    
      <Head>
        <title>{getPageTitle('LeaveList Approved')}</title>
      </Head>
      <SectionMain>
      <section className={`mb-6 flex items-center justify-between`}>
      <div className="flex items-center justify-start">
        <IconRounded icon={mdiTableBorder} color="light" className="mr-3" bg />
        <h1 className={`leading-tight text-3xl`}>Leave List Approved</h1>
      </div>
      <Button icon={mdiAccountPlusOutline} color="whiteDark" className='h-12 w-12 bg-gray-600'/>
    </section>
        
        <CardBox className="mb-6" hasTable>
          <TableSampleClients />
        </CardBox>
      </SectionMain>
    </>
  )
}

LeaveListApproved.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default LeaveListApproved
