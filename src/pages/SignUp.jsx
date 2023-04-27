import React, { Fragment } from 'react'
import { painter } from '../utils/constants/images'

const SignUp = () => {
  return (
    <Fragment>
        <div className="w-full bg-slate-50 h-screen flex items-center justify-center">
            <div className="flex lg:max-w-4xl mx-auto">
                <div className="w-[40%] h-full">
                    <div className="w-[inherite]">
                        <img src={painter} alt="man holding brush" />
                    </div>
                </div>
                <div className="bg-white w-[60%]">
                    <form action="" className="py-[60px] px-[80px]">
                        <h2 className="text-3xl text-slate-600 font-semibold mb-5">Sign Up to kick off</h2>
                        <div className="flex flex-col gap-3">
                            <input type="text" name="" id="" placeholder="Your name" className="w-full border-b-2 focus:border-blue-400 outline-none py-3 px-2 "/>
                            <input type="email" name="" id="" placeholder="Your email" className="w-full border-b-2 focus:border-blue-400 outline-none py-3 px-2 "/>
                            <input type="password" name="" id="" placeholder="Password" className="w-full border-b-2 focus:border-blue-400 outline-none py-3 px-2 "/>
                            <input type="password" name="" id="" placeholder="Confirm password" className="w-full border-b-2 focus:border-blue-400 outline-none py-3 px-2 "/>
                        </div>
                        <div className="w-full"><button className="py-4 text-white bg-blue-400 block w-full mt-[50px] rounded-full font-medium" type="submit">Start my journey</button></div>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SignUp