import React, { Fragment } from 'react'

const Avatar = ({src}) => {
  return (
    <Fragment>
        <div className="rounded-full w-[40px] border-2 border-blue-400 h-[40px] overflow-hidden"><img className="w-full object-cover" src={src} alt="avatar" /></div>
    </Fragment>
  )
}

export default Avatar