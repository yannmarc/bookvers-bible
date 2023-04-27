import React, { Fragment } from 'react'
import { headerImg } from '../../utils/constants/images'

const Header = () => {
  return (
   <Fragment>
    <div className="bg-blue-50 w-full">
        <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:basis-6/12 lg:px-[150px] px-6 py-[80px] order-2 lg:order-[initial] xl:basis-8/12 xl:px-[280px] xl:max-w-6xl">
                <h1 className="text-4xl font-semibold text-slate-800 xl:text-[60px] xl:leading-[70px]">Bookverse, take your bible study life a step futher<span className="text-[40px] text-blue-400">.</span></h1>
                <p className="text-slate-600 mt-8 text-sm xl:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat est optio, eaque nesciunt accusamus ratione saepe ducimus sit atque fugiat unde velit exercitationem, praesentium repellendus nam explicabo eligendi suscipit?</p>
                <div className="flex flex-col items-center xl:w-[50%]">
                    <button className="border-0 w-full mt-8 focus:ring-3 ring-blue-700 py-3 px-5 rounded-[30px] font-semibold bg-blue-400 text-white">Get Started</button>
                    <span className='text-slate-400 block mt-2 text-[12px]'>No credit card required.</span>
                </div>
            </div>
            <div className="w-full lg:basis-6/12 h-[400px] lg:h-[750px]"><img src={headerImg} className="w-full h-full object-cover" alt="landscape house" /></div>
        </div>
    </div>
   </Fragment>
  )
}

export default Header