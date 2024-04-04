import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {

    const [employeename, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3465/api/v1/employee/save", {
                employeename: employeename,
                email: email,
                password: password,
            });
            alert("Employee Registation Successfully");
        } catch (err) {
            alert(err);
        }
    }
    const handleCloseClick = () => {
        window.location.href = '/';
    }

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6 rounded shadow-md w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-4">Employee Registration</h2>
                    <form onSubmit={save} className="max-w-sm mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">User Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={employeename} onChange={(event) => setUserName(event.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={email} onChange={(event) => setEmail(event.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={password} onChange={(event) => setPassword(event.target.value)} required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Signup</button>
                    </form>
                    <button onClick={handleCloseClick} className="absolute top-0 right-0 m-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;