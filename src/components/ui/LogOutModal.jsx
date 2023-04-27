import React, { Fragment } from 'react';

import { useNavigate } from 'react-router-dom';

const LogOutModal = ({ setLoggedOut }) => {
    const navigate = useNavigate();
    
    const redirectLogOut = () => {
        navigate('/');
    }
  return (
    <Fragment>
        <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 bg-[#0000003b]">
            <div className="py-10 px-10 bg-white shadow-lg w-[400px] animate-intro antialiased">
                <h3 className="text-[20px] px-10 text-center text-slate-800 font-semibold">Are you sure you want to log out?</h3>
                <div className="flex justify-between pt-4">
                    <button onClick={redirectLogOut} className="py-2 px-8 rounded-md font-medium bg-slate-200 text-blue-400">Yes</button>
                    <button onClick={() => setLoggedOut(false)} className="py-2 px-8 bg-blue-400 rounded-md font-medium text-white">No</button>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default LogOutModal