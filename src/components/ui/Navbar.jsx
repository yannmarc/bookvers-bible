import React, { Fragment } from 'react';

import { logo } from '../../utils/constants/images';

const Navbar = () => {
  return (
    <Fragment>
        <nav className="w-full py-5 px-6 bg-white shadow-md">
            <div className="flex justify-between items-center lg:max-w-4xl mx-auto xl:max-w-6xl">
                <div className="w-[160px] h-auto"><img src={logo} alt="bookverse" className="w-full" /></div>
                <ul className="flex gap-3 items-center text-base">
                    <li><a href="login" className="font-medium text-slate-700 hover:underline">Login</a></li>
                    <li><a href="signup" className="py-3 px-4 rounded-md bg-blue-400 text-white font-semibold hover:opacity-80 transition-all">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </Fragment>
  )
}

export default Navbar