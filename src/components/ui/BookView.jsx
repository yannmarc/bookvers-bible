import React, { Fragment } from 'react'
import { bibleVerse } from '../../utils/constants/data'

const BookView = () => {
  return (
    <Fragment>
      <div className="bg-white rounded-lg max-h-[700px] overflow-y-scroll">
        <div className="">
          {bibleVerse.map((verse) => (
            <div className="flex items-center px-6 gap-3 bg-white border-b-2 border-gray-50 py-4 rounded-md hover:bg-zinc-50 transition-all" key={verse.id}>
              <span className="block w-[30px] h-[30px] rounded-full border-2"></span>
              <div className="flex justify-between w-full">
                <p>{verse.book}</p>
                <span className="text-slate-400">{verse.chapCount} chapters</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default BookView