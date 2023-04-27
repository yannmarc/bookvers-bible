import React, { Fragment } from 'react'
import { logo } from '../utils/constants/images'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Fragment>
        <div className="w-full h-screen bg-blue-50 flex items-center justify-center">
            <div className="flex h-[400px] items-center">
                <div className="bg-blue-400 h-full flex flex-col justify-center py-[120px] px-[80px]">
                    <span className="w-[200px]"><img className="w-full" src={logo} alt="bookverse" /></span>
                    <p className="text-slate-200">Take your level a step futher...</p>
                </div>
                <div className="px-[40px] bg-slate-50 h-full flex flex-col justify-center">
                    <div className="flex gap-2 mb-8">
                        <span className="py-3 block px-4 bg-white shadow-md rounded-md">Login with Google</span>
                        <span className="py-3 block px-4 bg-black shadow-md text-white rounded-md">Login with Apple</span>
                    </div>
                    <form action="">
                        <div className="w-full">
                            <input className="block w-full px-4 py-5 text-[14px]" placeholder="Your Email" type="text" name="" id="" />
                        </div>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-5 text-[14px]" placeholder="Your Password" type="password" name="" id="" />
                        </div>

                        <div className="w-full"><button className="py-4 rounded-md px-4 bg-blue-400 text-white text-center block w-full mt-4" type="submit">Login</button></div>
                        <span className="font-regular text-center block mt-2 text-[12px]">Dont have and account? <Link to={"/signup"} className="text-slate-600 font-medium text-[12px] inline hover:text-blue-400 transition-all">Sign Up</Link></span>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Login