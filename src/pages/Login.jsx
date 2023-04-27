import React, { Fragment } from 'react'
import { logo } from '../utils/constants/images';
import { Link } from 'react-router-dom';

import { painter } from '../utils/constants/images';

const Login = () => {
  return (
    <Fragment>
        <div className="w-full bg-slate-50 h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row lg:px-0 lg:max-w-4xl lg:mx-auto">
                <div className="w-full lg:w-[40%] h-full">
                    <div className="w-[100%] h-full">
                        <img src={painter} alt="man holding brush" className="w-[inherit] h-full object-cover" />
                    </div>
                </div>
                <div className="bg-white w-full lg:w-[60%] flex items-center max-h-[inherit]">
                    <form action="" className="py-[60px] px-10 lg:px-[80px]">
                        <h2 className="text-3xl text-slate-600 font-semibold mb-5">Login to continue <span className="text-[40px] text-blue-400">.</span></h2>
                        <div className="flex flex-col gap-5 lg:gap-8 py-4">
                            <input type="email" name="" id="" placeholder="Your email" className="w-full border-b-2 focus:border-blue-400 outline-none py-3 px-2 "/>
                            <input type="password" name="" id="" placeholder="Password" className="w-full border-b-2 focus:border-blue-400 outline-none py-3 px-2 "/>
                        </div>
                        <div className="w-full mt-8"><button className="py-4 text-white bg-blue-400 block w-full rounded-full font-medium" type="submit">Start my journey</button></div>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Login