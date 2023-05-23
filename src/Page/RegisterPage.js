import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Header from '../component/Header';

function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [token, setToken] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 發送 POST 請求到註冊 API
      const response = await axios.post('http://localhost:8000/api/auth/register', {
        name,
        email,
        password,
        password_confirmation,
      });

      // 根據回應處理註冊成功的情況
      console.log('註冊成功:', response.data);
      navigate('/messageBoard');
      console.log('name:', name);
      console.log('email:', email);
      console.log('password:', password);
      console.log('passwordConfirmation:', password_confirmation);

      try {
        // 發送 POST 請求到註冊 API
        const response = await axios.post('http://localhost:8000/api/auth/login/', {
          email,
          password,
        });

        // 根據回應處理登入成功的情況
        console.log('已登入:', response.data);
        setToken(response.data.access_token);
        console.log('token:', token);
        navigate('/messageBoard');
      } catch (error) {
        // 根據錯誤回應處理登入失敗的情況
        console.error('登入失敗:', error.response.data);
      }

    } catch (error) {
      // 根據錯誤回應處理註冊失敗的情況
      console.error('註冊失敗:', error.response.data);
      console.log('name:', name);
      console.log('email:', email);
      console.log('password:', password);
      console.log('passwordConfirmation:', password_confirmation);
    }
  };

  return (
    <div className="App font-poppins bg-white dark:bg-stone-900 h-full m-0 p-0 pt-16">
      <Header />
      {/* 在這裡放置頁面的標題或導航列等元件 */}

      <div className="sm:mx-40 mx-8 my-20 md:mx-auto md:w-1/2 lg:w-1/3 p-12 dark:bg-black bg-white rounded-lg shadow-2xl">
        <label className="text-amber-500 flex justify-center items-start text-2xl font-bold text-center pb-12">Register</label>

        <form onSubmit={handleSubmit}>
          {/* Name Address */}
          <div>
            <label htmlFor="name" className="text-stone-700 dark:text-white flex justify-start items-start">
              Name
            </label>
            <input
              id="name"
              className="block mt-1 w-full rounded py-2 px-3"
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              autoFocus
              autoComplete="username"
            />
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <label htmlFor="email" className="text-stone-700 dark:text-white flex justify-start items-start">
              Email
            </label>
            <input
              id="email"
              className="block mt-1 w-full rounded py-2 px-3"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              autoFocus
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label htmlFor="password" className="text-stone-700 dark:text-white flex justify-start items-start">
              Password
            </label>
            <input
              id="password"
              className="block mt-1 w-full rounded py-2 px-3"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="new-password"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label htmlFor="password_confirmation" className="text-stone-700 dark:text-white flex justify-start items-start">
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              className="block mt-1 w-full rounded py-2 px-3"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={handlePasswordConfirmationChange}
              required
              autoComplete="confirmed-password"
            />
          </div>

          <div className="flex items-center justify-between mt-8">
            {/* @if (Route::has('password.request')) */}
            {/* 在 React 中，你可以使用 Link 元件來處理路由連結 */}
            {/* {<Link
              to="/password/request"
              className= "underline text-sm dark:text-white dark:hover:text-stone-300 text-stone-600 hover:text-stone-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Forgot your password?
            </Link>} */}
            <a
              href="/login"
              className="underline text-sm dark:text-stone-600 dark:hover:text-stone-400 text-stone-600 hover:text-stone-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Already have an account?
            </a>
            {/* <x-primary-button class="ml-3"> */}
            {/* 在 React 中你可以使用一般的按鈕元素來處理表單提交 */}
            <button type="submit" className=" bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;