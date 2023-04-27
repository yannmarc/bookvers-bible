import React, { Fragment } from 'react'
import { BookView, Searchbar } from '../ui'

const DashContent = () => {
  return (
    <Fragment>
        <div className="w-full bg-slate-100">
          <div className="xl:max-w-7xl mx-auto mt-[50px]">
            <Searchbar />
            <BookView />
          </div>
        </div>
    </Fragment>
  )
}

export default DashContent