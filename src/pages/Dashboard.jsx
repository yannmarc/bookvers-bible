import React, { Fragment } from 'react'
import { DashContent, DashHeader, DashSidebar } from '../components/ui'

const Dashboard = () => {
  return (
    <Fragment>
        <Fragment>
          <DashHeader />
          <main className="flex">
            <DashSidebar />
            <DashContent />
          </main>
        </Fragment>
    </Fragment>
  )
}

export default Dashboard