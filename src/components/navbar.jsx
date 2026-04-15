import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get initials from user name
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(w => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex justify-between items-center p-4 mt-2 text-2xl font-bold">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
        <svg width="32" height="32" viewBox="0 0 32 32" className="inline-block">
          <rect width="32" height="32" rx="6" className="fill-gray-800" />
          <path d="M 10 10 L 14 16 L 10 22" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 22 10 L 18 16 L 22 22" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-gray-800 font-bold">CodeMaster</span>
      </Link>
      {/* Left side */}
      <div className="flex gap-8">
        <Link to='/problemlist'>
          <div>Problems</div>
        </Link>
        <Link to='/problem'>
          <div>Contest</div>
        </Link>
        <Link to='/problem'>
          <div>Interview</div>
        </Link>
      </div>

      {/* Right side */}
      <div className="flex gap-4 items-center">
        {user ? (
          <div className="relative" ref={dropdownRef}>
            {/* User Avatar Button */}
            <button
              id="user-avatar-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center text-sm font-bold cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg border-2 border-transparent hover:border-gray-400"
              title={user.name || 'User'}
            >
              {getInitials(user.name)}
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                {/* User Info Header */}
                <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {getInitials(user.name)}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        {user.name || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email || ''}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button
                    id="dropdown-dashboard-btn"
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate('/dashboard');
                    }}
                    className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="font-medium">Dashboard</span>
                  </button>

                  <button
                    id="dropdown-problems-btn"
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate('/problemlist');
                    }}
                    className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <span className="font-medium">My Problems</span>
                  </button>

                  <button
                    id="dropdown-settings-btn"
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate('/dashboard');
                    }}
                    className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">Settings</span>
                  </button>
                </div>

                {/* Logout */}
                <div className="border-t border-gray-200">
                  <button
                    id="dropdown-logout-btn"
                    onClick={() => {
                      setDropdownOpen(false);
                      logout();
                      navigate('/');
                    }}
                    className="w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="px-4 py-1 border rounded cursor-pointer" onClick={() => navigate('/login')}>Login</button>
            <button className="px-4 py-1 bg-black text-white rounded cursor-pointer" onClick={() => navigate('/register')}>Register</button>
          </>
        )}
      </div>

    </div>
  );
}

export default Navbar;