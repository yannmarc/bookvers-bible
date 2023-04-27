import React, { Fragment } from 'react'
import { featureText } from '../../utils/constants/data'

const Features = () => {
  return (
    <Fragment>
        <div className="bg-slate-50">
            <div className="px-6 mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl py-[80px] lg:py-[150px]">
                <div className="mb-[30px] lg:max-w-md">
                    <h2 className="text-[30px] font-bold mb-4 lg:text-[40px]">Here is why you should give it a try<span className="text-[40px] text-blue-400">.</span></h2>
                    <p className="text-[14px] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur beatae dolor!</p>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row mt-[60px]">
                    {featureText.map((text) => (
                        <div key={text.id} className="py-6 px-6 bg-white shadow-md rounded">
                            <h4 className="text-[20px] text-slate-700 font-medium">{text.heading}</h4>
                            <p className="pr-3 mt-4 text-[14px] text-slate-500">{text.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Features