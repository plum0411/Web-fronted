// import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './App.css';
import './tailwind.css';
import Header from './component/Header';

const navigation = [
  { name: 'info', href: './info', current: "" },
  { name: 'achievements', href: '/achievements', current: "" },
  { name: 'about bear', href: '/aboutBear', current: "" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <div className="App font-poppins bg-white dark:bg-stone-900 h-full m-0 p-0 pt-16">
      <Header />

      <div className="relative overflow-hidden bg-white dark:bg-stone-900">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-0 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg sm:m-0 mx-12">
              <h1 className="font sm:text-4xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl text-left">
                Mayble Chang
              </h1>
              <br></br>
              <h1 className="font sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-left">
                哈嘍ヾ(๑•̀∀•́๑)ツ，我是張郁梅
              </h1>
              <p className="mt-4 sm:text-xl text-base text-gray-500 dark:text-yellow-600 text-left">
                這是我做的自我介紹網站，瀏覽看看來認識我吧！
              </p>
            </div>
            <div>
              <div className="mt-10 justify-start flex">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">

                    <img
                      src="./img/bear-sacrifice-sm.webp"
                      alt="古埃及熊麻獻祭圖"
                      className="h-full w-full bg-cover transition-all duration-300 cursor-pointer filter scale-100 grayscale hover:grayscale-0 hover:scale-95"
                    // className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                    />
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-96 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          
                        </div>
                      </div> */}
                      {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <button className="z-10 sm:m-0 mx-28 my-36 justify-center items-center inline-block rounded-md border border-transparent bg-yellow-400 py-3 px-8 text-center font-medium hover:bg-yellow-500">
                  <a href="./info">
                    開始吧！
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
