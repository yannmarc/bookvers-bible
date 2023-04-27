import React, { Fragment } from 'react'
import { navItems } from '../../utils/constants/data'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const DashSidebar = () => {
  return (
    <Fragment>
      <div className="h-screen bg-slate-50 w-[20%]">
        <div className="py-10 flex flex-col h-full justify-between items-stretch">
          <ul className="px-2">
            {navItems.map((item) => (
              <li key={item.id} className="text-slate-900"><Link className="rounded-md transition-all block px-14 py-4 border-b-[1px] border-blue-100 hover:border-transparent hover:bg-blue-400 hover:text-white" href={item.link ? `${item.link}`: ""}>{item.text}</Link></li>
            ))}
          </ul>

          <Logout />
        </div>
      </div>
    </Fragment>
  )
}

export default DashSidebar