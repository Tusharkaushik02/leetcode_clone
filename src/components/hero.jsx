import React from 'react';
import {Link} from 'react-router-dom'
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
      
      <h1 className="text-5xl font-bold mb-4">
        Master Coding Skills
      </h1>

      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Practice problems, participate in contests, and prepare for interviews — all in one place.
      </p>

      <div className="flex gap-4">
        <Link to="/problemList">
        <button className="px-6 py-2 bg-black text-white rounded">
          Get Started
        </button>
        </Link>
        <Link to="/problemList">
        <button className="px-6 py-2 border rounded">
          Explore Problems
        </button>
        </Link>
      </div>

    </div>
  );
}

export default Hero;