import axios from 'axios';
import React, { useState } from 'react';
import { FaGoogle, FaTwitter, FaFacebook, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3465/api/v1/employee/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message === "Email not exits") {
                    alert("Email not exits");
                }
                else if (res.data.message === "Login Success") {

                    navigate('/');
                }
                else {
                    alert("Incorrect Email or Password");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }

    }
    const handleSignupClick = () => {
        window.location.href = '/signup';
    };

    const handleCloseClick = () => {
        window.location.href = "/"
    }


    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6 rounded shadow-md w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form onSubmit={login} className="max-w-sm mx-auto">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} placeholder='Enter your mail' required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className='relative'>
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }} placeholder='Enter Password' required />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 top=1/3 px-3 flex items-center"
                                    onClick={togglePasswordVisibility}
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        className="text-gray-400 hover:text-gray-500"
                                    />
                                </button>
                            </div>

                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
                        <button onClick={handleCloseClick} className="absolute top-0 right-0 m-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                            Close
                        </button>
                    </form>

                    <div className='mt-5 grid grid-cols-3 items-center'>
                        <hr className='broder-gray-400' /><p className="text-center text-sm">Or continue with</p>
                        <hr />
                    </div>

                    <div className="mt-4 flex-col items-center">
                        <div className="mt-2 flex flex-col">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 flex items-center justify-center w-full">
                                <FaGoogle className="mr-9" />
                                <div className='mr-4'>Continue with google</div>

                            </button>
                            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mb-2 flex items-center justify-center w-full">
                                <FaTwitter className='mr-8' />
                                <div className='mr-3'>Continue with Twitter</div>

                            </button>
                            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2 flex items-center justify-center w-full">
                                <FaFacebook className='mr-2' />
                                <div className='ml-6'>Continue with Facebook</div>
                            </button>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mb-2 flex items-center justify-center w-full" href="URL_TO_GOOGLE_LOGIN">
                                <FaApple className='mr-8' />
                                <div className='mr-6'>Continue with Apple</div>
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            <Link to="/forgot-password" className="text-gray-800 hover:underline">Forgot your password?</Link>
                        </p>
                        <div className='mt-4'>
                            <p className='text-sm text-gray-900'>I Dont have a account?<button onClick={handleSignupClick} className='text-white hover:underline focus:outline-none m-2'>SignUp</button></p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
};

export default Login;