import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'info', href: './info', current: "" },
  { name: 'achievements', href: './achievements', current: "" },
  { name: 'message board', href: './messageBoard', current: "" },
];

function Header() {
  localStorage.getItem('access_token')
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [user, setUser] = useState();
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleAnonymousLogin = async () => {

    const email = "anonymous@example.com";
    const password = "password";

    try {
      const response = await axios.post('http://localhost:8000/api/auth/login/', {
        email,
        password,
      });

      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('user_data', response.data);
      console.log('匿名:', response.data);
      console.log('匿名token:', localStorage.getItem('access_token'));
      setIsLoggedIn(false);
    } catch (error) {
      console.error('error', error.response.data);
    }
  };

  const getMe = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/me', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      setIsLoggedIn(true);
      setUser(response.data);
      console.log('使用者資料：', response.data);
    } catch (error) {
      handleAnonymousLogin();
      setIsLoggedIn(false);
      console.log('isLoggedIn:', isLoggedIn);
      console.error('使用者未登入:', error.response.data);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/auth/logout',
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      handleAnonymousLogin();
      setIsLoggedIn(false);
      console.log('已登出:', response.data);
    } catch (error) {
      console.error('登出失敗:', error.response.data);
    }
  };

  useEffect(() => {
    // handleAnonymousLogin();
    getMe();
  }, []);

  return (
    <div className="App font-poppins m-0 p-0 fixed top-0 left-0 right-0 z-50">
      <Disclosure as="div" className="bg-yellow-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-stone-400 hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href='./'>
                      <img
                        className="block h-8 w-8 lg:hidden rounded-lg"
                        src='./img/bear-rect.webp'
                        alt="plum logo"
                      />
                      <img
                        className="hidden h-8 w-8 lg:block rounded-lg"
                        src='./img/bear-rect.webp'
                        alt="plum logo"
                      />
                    </a>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map(item => (
                        <a
                          key={item.href}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-yellow-900 text-white' : 'text-stone-300 hover:bg-yellow-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {isLoggedIn && user.id != 99999 ? (
                  <div className="flex justify-end space-x-2 hover:animate-swing hover:bg-red-500/50 py-2 px-3 rounded transition-colors">
                    <a onClick={handleAnonymousLogin} className="text-sm font-semibold leading-6 dark:text-white text-amber-600 cursor-pointer">
                      {user.name}
                    </a>
                    <div className='w-6 h-6 text-white'>
                      <ArrowRightOnRectangleIcon />
                    </div>
                  </div>
                ) : (
                  <div className=" space-x-2 flex justify-end">
                    <a href="/login" className="text-sm font-semibold leading-6 dark:text-white text-amber-600 hover:bg-amber-600/30 py-2 px-3 rounded transition-colors">
                      Login
                    </a>
                    <div className="flex items-center space-x-1 text-sm font-semibold leading-6 text-amber-800 hover:text-amber-700 bg-white/75 hover:bg-white py-2 px-3 rounded transition-colors">
                      <a href="/register">
                        Register
                      </a>
                      <div className='w-4 h-4 text-amber-600'>
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-yellow-900 text-white' : 'text-stone-300 hover:bg-yellow-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
export default Header;
