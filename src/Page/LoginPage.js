import { useState, Route } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Header from '../component/Header';


function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleRememberMeChange = (event) => {
  //   setRememberMe(event.target.checked);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 在這裡處理登入邏輯，例如使用 Axios 發送 POST 請求到登入 API
    // 傳遞 email、password 和 rememberMe 參數
    console.log("email:", email)
    console.log("password:", password)

    try {
      // 發送 POST 請求到註冊 API
      const response = await axios.post('http://localhost:8000/api/auth/login/', {
        email,
        password,
      });

      // 根據回應處理登入成功的情況
      console.log('登入成功:', response.data);
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.getItem('access_token');
      localStorage.setItem('user_data', response.data);
      console.log('token:', localStorage.getItem('access_token'));
      navigate('/messageBoard');
    } catch (error) {
      // 根據錯誤回應處理登入失敗的情況
      console.error('登入失敗:', error.response.data);
      console.log('email:', email);
      console.log('password:', password);
    }
  };

  return (
    <div className="App font-poppins bg-white dark:bg-stone-900 h-full m-0 p-0 pt-16">
      <Header />
      <div className='sm:mx-40 mx-8 my-20 md:mx-auto md:w-1/2 lg:w-1/3 p-12 dark:bg-black bg-white rounded-lg shadow-2xl'>
        <label className='text-amber-500 flex justify-center items-start text-2xl font-bold text-center pb-12'>Login</label>
        {/* Session Status */}
        {/* 在 React 中可以使用 state 或 props 來處理 session status 的顯示 */}
        {/* <x-auth-session-status class="mb-4" :status="session('status')" /> */}

        <form onSubmit={handleSubmit}>
          {/* @csrf */}
          {/* 在 React 中不需要使用 CSRF token，因為 React 是單頁應用，不同於 Laravel 的多頁應用 */}
          {/* 你可以在登入 API 中處理身份驗證和安全性驗證 */}

          {/* Email Address */}
          <div>
            {/* <x-input-label for="email" :value="__('Email')" /> */}
            <label htmlFor="email" className='text-gray-700 dark:text-white flex justify-start items-start '>Email</label>
            <input
              id="email"
              className="block mt-1 w-full rounded py-2 px-3"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              autoFocus
              autoComplete="username"
            />
            {/* <x-input-error :messages="$errors->get('email')" class="mt-2" /> */}
            {/* 在 React 中你可以使用條件判斷和狀態變數來顯示錯誤訊息 */}
          </div>

          {/* Password */}
          <div className="mt-4">
            {/* <x-input-label for="password" :value="__('Password')" /> */}
            <label htmlFor="password" className='text-gray-700 dark:text-white flex justify-start items-start '>Password</label>
            <input
              id="password"
              className="block mt-1 w-full rounded py-2 px-3"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="current-password"
            />
            {/* <x-input-error :messages="$errors->get('password')" class="mt-2" /> */}
            {/* 在 React 中你可以使用條件判斷和狀態變數來顯示錯誤訊息 */}
          </div>

          {/* Remember Me */}
          <div className="block mt-4">
            {/* <label htmlFor="remember_me" className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                name="remember"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label> */}
          </div>
          <div className="flex items-center justify-between mt-8">
            {/* @if (Route::has('password.request')) */}
            {/* 在 React 中，你可以使用 Link 元件來處理路由連結 */}
            {/* {<Link
              to="/password/request"
              className= "underline text-sm dark:text-white dark:hover:text-gray-300 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Forgot your password?
            </Link>} */}
            <a
              href="./register"
              className="underline text-sm dark:text-gray-600 dark:hover:text-gray-400 text-gray-600 hover:text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Haven't register yet?
            </a>
            {/* <x-primary-button class="ml-3"> */}
            {/* 在 React 中你可以使用一般的按鈕元素來處理表單提交 */}
            <button type="submit" className=" bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;