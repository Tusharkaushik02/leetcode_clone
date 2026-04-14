import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 mt-6 text-2xl font-bold">
      
      {/* Left side */}
      <div className="flex gap-8">
        <Link to='/problemList'><button className="cursor-pointer">Problems</button></Link>
        <Link to='/contest'><button className="cursor-pointer">Contest</button></Link>
        <Link to='/interview'><button className="cursor-pointer">Interview</button></Link>
      </div>

      {/* Right side */}
      <div className="flex gap-4">
        <Link to='/login'><button className="px-4 py-1 border rounded cursor-pointer">Login</button></Link>
        <Link to='/register'>
        <button className="px-4 py-1 bg-black text-white rounded cursor-pointer">Register</button>
        </Link>
      </div>

    </div>
  );
}

export default Navbar;