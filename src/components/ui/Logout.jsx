import React, { Fragment, useState } from 'react'
import LogOutModal from './LogOutModal';

const Logout = () => {
    const [isLoggedOut, setLoggedOut] = useState(false);
    
    const handLogginOut = () => setLoggedOut(true);

  return (
    <Fragment>
        <div className="w-[inherit] translate-y-[-100px] px-2 ">
            <button onClick={handLogginOut} className="px-14 rounded-md py-4 border-2 border-blue-400 bg-blue-100 text-blue-400 font-bold block w-full hover:opacity-90 transition-all">Logout</button>
        </div>
        {isLoggedOut ? <LogOutModal setLoggedOut={setLoggedOut} /> : null}
    </Fragment>
  )
}

export default Logout