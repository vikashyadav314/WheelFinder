import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
        🚗 WheelFinder
      </Link>

      <div className="flex items-center gap-8">
        <ul className="flex gap-8 text-slate-300 font-medium">
          <li 
            onClick={() => scrollToSection('explore')}
            className="cursor-pointer hover:text-blue-500 transition duration-300"
          >
            Explore Cars
          </li>
          <li 
            onClick={() => alert('Compare feature coming soon!')}
            className="cursor-pointer hover:text-blue-500 transition duration-300"
          >
            Compare
          </li>
          {user && (
            <li className="cursor-pointer hover:text-blue-500 transition duration-300">
              Wishlist
            </li>
          )}
          <li 
            onClick={() => scrollToSection('search')}
            className="cursor-pointer hover:text-blue-500 transition duration-300"
          >
            Find My Car
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-slate-200 flex items-center gap-2">
                <User className="h-4 w-4" />
                {user.name}
              </span>
              <button 
                onClick={handleLogout}
                className="bg-slate-800 text-slate-200 px-4 py-2 rounded-lg font-semibold hover:bg-slate-700 transition duration-300 flex items-center gap-2 border border-slate-700"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link 
                to="/login"
                className="text-slate-200 font-semibold hover:text-blue-500 transition duration-300"
              >
                Login
              </Link>
              <Link 
                to="/signup"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;