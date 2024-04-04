import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <nav className="flex items-center justify-between bg-green-300 p-4">
                <h1 className="text-white text-2xl font-bold">Spy DTech</h1>
                <div>
                    <Link to="/login" className="text-white mr-5">Login</Link>
                    <Link to="/signup" className="text-white">Signup</Link>
                </div>
            </nav>
            <div className="container mx-auto mt-4">
                <h2 className="text-2xl font-bold mb-4">Welcome to My App!</h2>
                <p className="text-lg">This is the homepage content.</p>
            </div>
        </div>
    );
};

export default HomePage;
