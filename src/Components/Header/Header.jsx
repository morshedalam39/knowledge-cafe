import React from 'react';

const Header = () => {
    return (
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
      </div>
      <div className="flex-none">

       
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img src="../../../public/145867.png" />
            </div>
          </label>

        </div>
      </div>
    </div>
    );
};

export default Header;


