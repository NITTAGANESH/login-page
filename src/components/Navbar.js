import React from 'react';

const Navbar = ({ onLoginClick }) => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-pink-300 shadow-md">
            <h1 className='text-xl text-yellow-50 font-semibold'>Course</h1>
            <button onClick={onLoginClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </nav>
    );
};

export default Navbar;