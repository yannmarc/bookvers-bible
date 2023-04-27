import React, { Fragment } from 'react'

const Searchbar = () => {
  return (
    <Fragment>
      <div className="w-full border-l-[3px] border-blue-400 mb-8 px-6 py-0 rounded-lg shadow-md bg-white">
        <div className="flex items-center gap-3">
          <span className="block w-[30px] h-[30px] rounded-full border-2"></span>
          <input className="border-2 text-[14px] placeholder:text-slate-500 py-4 w-full px-2 border-transparent outline-none" type="text" name="" id="" placeholder="Search Verses, Notes..." />
        </div>
      </div>
    </Fragment>
  )
}

export default Searchbar