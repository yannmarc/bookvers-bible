import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { iconMoon, logo, painter } from '../../utils/constants/images';
import Avatar from './Avatar';

const DashHeader = () => {
  return (
    <Fragment>
        <div className="bg-white">
            <div className="flex items-center px-20 justify-between py-4 shadow-lg">
                <div className="w-[150px]"><Link className="w-full" href="/dashobard"><img className="w-full" src={logo} alt="bookverse" /></Link></div>
                <div className="flex gap-3 items-center">
                    <span className=""><img className="" src={iconMoon} alt="light theme" /></span>
                    <Avatar src={painter} />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default DashHeader