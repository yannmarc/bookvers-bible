import React, { Fragment } from 'react'

const Testimonial = () => {
  return (
    <Fragment>
        <div className="bg-blue-900 py-[80px] lg:py-[100px]">
            <div className="px-6 lg:max-w-4xl xl:max-w-6xl lg:px-0 mx-auto">
                <div className="lg:max-w-2xl xl:max-w-2xl">
                    <h2 className="text-[30px] mb-4 font-semibold text-slate-50">Take a bold step, with <strong>Bookverse</strong><span className="text-[40px] ml-1 text-blue-400">.</span></h2>
                    <p className="text-slate-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, blanditiis! Illum impedit amet dolorum magnam nobis numquam quod pariatur repudiandae!</p>
                    <div className="flex flex-col items-center lg:items-start ">
                        <button className="border-0 w-full lg:w-[35%] mt-8 focus:ring-3 ring-blue-700 py-3 px-5 rounded-[30px] font-semibold bg-blue-400 text-white">Get Started</button>
                        <span className='text-slate-400 flex justify-center lg:text-center w-[35%] mt-2 text-[12px]'>No credit card required.</span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Testimonial