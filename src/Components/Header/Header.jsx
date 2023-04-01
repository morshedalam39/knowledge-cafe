import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
  <div className="">
    <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
  </div>
  <div className='gap-8 text-lg font-semibold'>
    <a href="">home</a>
    <a href="">home</a>
    <a href="">home</a>
  </div>
  <div className="">
    
    <div className="dropdown dropdown-end">
      <label  className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="../../../public/145867.png" />
        </div>
      </label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;