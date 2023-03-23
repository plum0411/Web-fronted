// import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './App.css';
import './tailwind.css';

const navigation = [
  { name: 'achievements', href: '/achievements', current: "" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <div className="App font-poppins bg-white dark:bg-stone-900 h-full m-0 p-0">
      <Disclosure as="div" className="bg-yellow-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                            item.current ? 'bg-yellow-900 text-white' : 'text-gray-300 hover:bg-yellow-700 hover:text-white',
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
                      item.current ? 'bg-yellow-900 text-white' : 'text-gray-300 hover:bg-yellow-700 hover:text-white',
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


      <div className="text-left p-12 sm:p-24 relative overflow-hidden bg-white dark:bg-stone-900">
        <p className="text-2xl my-4 font-black dark:text-white text-center">About Achievements</p>
        <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>
        <br></br>
        <div className='grid grid-cols-6 gap-x-12 mt-8'>

          <div className="relative border-l border-stone-200 dark:border-stone-700 sm:ml-32 ml-4 col-span-6">
            <div className='grid grid-cols-2 sm:grid-cols-7'>
              <div className="sm:mb-24 my-0 ml-6 col-span-2 sm:col-span-4">
                <div className="absolute sm:w-40 sm:h-40 h-16 w-16 bg-stone-200 rounded-full mt-2 sm:-left-20 -left-8 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/record.webp' className='h-full w-full' alt='record'></img>
                </div>
                <div className='sm:ml-28 ml-8'>
                  <h3 className="flex items-center mb-1 sm:text-lg text-sm font-semibold text-stone-900 dark:text-white">
                    實習專案-樹梅派溫溼度感測網頁
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 ml-3">Latest</span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-stone-400">
                    Released on 2023
                  </time>
                  <p className="mb-4 sm:text-base text-xs font-normal text-stone-500 dark:text-stone-400">
                    專五的專題過後的寒假我進入了創科股份有限公司開始實習，
                    開始學習更好管理與維護的<span className='text-yellow-600'>React框架</span>，
                    並用其與<span className='text-yellow-600'>ant-Design</span>搭配來撰寫溫溼度感測網頁，
                    我在其中負責了<span className='text-yellow-600'>LOGO</span>與<span className='text-yellow-600'>網頁介面設計</span>、前端刻板及感測變化圖表，
                    過程中我除了了解如何使用<span className='text-yellow-600'>Figma</span>設計頁面與<span className='text-yellow-600'>Prototype</span>的操作外，
                    也學會如何依需求建立圖表及連接至<span className='text-yellow-600'>Firebase</span>，
                    並開始使用<span className='text-yellow-600'>GitLab</span>進行專案的版本控制。
                  </p>


                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <a href="https://gitlab.com/trunk-yo/raspberry_backend" className="inline-flex items-center px-4 py-2 sm:text-sm text-xs font-medium text-stone-900 bg-white border border-stone-200 rounded-l-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                      ☚ 看看後端
                    </a>
                    <a href="https://gitlab.com/trunk-yo/raspberry_frontend" className="inline-flex items-center px-4 py-2 sm:text-sm text-xs font-medium text-stone-900 bg-white border border-stone-200 rounded-r-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                      看看前端 ☛
                    </a>
                  </div>
                </div>
              </div>
              <img className="h-auto sm:max-w-sm max-w-[175%] mt-4 mb-16 sm:mt-0 sm:mb-0 mx-8 rounded-lg col-span-1" src="./img/record-rect.webp" alt="description" />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-7'>
              <div className="sm:mb-24 my-0 ml-6 col-span-2 sm:col-span-4">
                <div className="absolute sm:w-40 sm:h-40 h-16 w-16 bg-stone-200 rounded-full mt-2 sm:-left-20 -left-8 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/mouji.webp' className='h-full w-full' alt='record'></img>
                </div>
                <div className='sm:ml-28 ml-8'>
                  <h3 className="flex items-center mb-1 sm:text-lg text-sm font-semibold text-stone-900 dark:text-white">
                    自行進修-3D建模∕
                    <a href='https://www.instagram.com/plum_friends/' className='text-amber-600'>@plum_friends</a>
                  </h3>
                  <time className="block mb-2 sm:text-sm text-xs font-normal leading-none text-stone-400">
                    Released on 2022
                  </time>
                  <p className="mb-4 sm:text-base text-xs font-normal text-stone-500 dark:text-stone-400">
                    我在專五的專題過程中接觸了<span className='text-yellow-600'>3D建模</span>並從中學習如何創建一個角色的完整流程，
                    包括規劃2D的角色、建立3D模型、使用3D列印印出實體再翻模、為其上色、
                    <span className='text-yellow-600'>創建社群軟體帳號</span>並<span className='text-yellow-600'>參與展覽</span>提高社群關注，在社群平台的方面，
                    我額外去修習了<span className='text-yellow-600'>品牌經營</span>的課程，學習更系統化的經營方式，
                    而後期接了與其他模型作者的<span className='text-yellow-600'>聯名製作</span>更讓我加強與其他工作者合作時所需的溝通能力與細節。
                  </p>


                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <a href="https://www.instagram.com/plum_friends/" className="inline-flex items-center px-4 py-2 sm:text-sm text-xs font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                      看看哞吉 ➜
                    </a>
                  </div>
                </div>
              </div>

              {/* <img className="h-auto sm:max-w-sm max-w-[175%] mt-4 mb-16 sm:mt-0 sm:mb-0 mx-8 rounded-lg col-span-1" src="./img/mouji-rect.webp" alt="description" /> */}

              <div className='grid grid-cols-2 gap-4'>
                <img className="sm:h-64 h-36 sm:max-w-sm max-w-[175%] mt-4 mb-16 sm:mt-12 sm:mb-12 mx-8 rounded-lg" src="./img/mouji-rect3.webp" alt="description" />
                <img className="sm:h-64 h-36 sm:max-w-sm max-w-[205%] mt-4 mb-16 sm:mt-12 sm:mb-12 sm:mx-36 mx-20 rounded-lg" src="./img/mouji-rect2.webp" alt="description" />
              </div>
            </div>
            {/* <div className='grid grid-cols-4'>
              <li className="mb-24 ml-6 col-span-3">
                <div className="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/mouji.webp' className='h-full w-full' alt='mouji'></img>
                </div>
                <div className='ml-28'>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                    自行進修-3D建模∕
                    <a href='https://www.instagram.com/plum_friends/' className='text-amber-700'>@plum_friends</a>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-stone-400">
                    Released 2022
                  </time>
                  <p className="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                    我在專五的專題過程中接觸了<span className='text-yellow-600'>3D建模</span>並從中學習如何創建一個角色的完整流程，
                    包括規劃2D的角色、建立3D模型、使用3D列印印出實體再翻模、為其上色、
                    <span className='text-yellow-600'>創建社群軟體帳號</span>並<span className='text-yellow-600'>參與展覽</span>提高社群關注，在社群平台的方面，
                    我額外去修習了<span className='text-yellow-600'>品牌經營</span>的課程，學習更系統化的經營方式，
                    而後期接了與其他模型作者的<span className='text-yellow-600'>聯名製作</span>更讓我加強與其他工作者合作時所需的溝通能力與細節。
                  </p>

                  <a href="https://www.instagram.com/plum_friends/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                    看看哞吉 ➜
                  </a>
                </div>
              </li>
              <div className='grid grid-cols-2 gap-4'>
                <img className="h-64 max-w-xs mx-8 rounded-lg col" src="./img/mouji-rect3.webp" alt="description" />
                <img className="h-64 max-w-xs mx-20 rounded-lg" src="./img/mouji-rect2.webp" alt="description" />
              </div>
            </div> */}
            <div className='grid grid-cols-2 sm:grid-cols-7'>
              <div className="sm:mb-24 my-0 ml-6 col-span-2 sm:col-span-4">
                <div className="absolute sm:w-40 sm:h-40 h-16 w-16 bg-stone-200 rounded-full mt-2 sm:-left-20 -left-8 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/fire.webp' className='h-full w-full' alt='record'></img>
                </div>
                <div className='sm:ml-28 ml-8'>
                  <h3 className="flex items-center mb-1 sm:text-lg text-sm font-semibold text-stone-900 dark:text-white">
                    專題-火場逃生VR模擬
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-stone-400">
                    Released on 2022
                  </time>
                  <p className="mb-4 sm:text-base text-xs font-normal text-stone-500 dark:text-stone-400">
                    專五的專題製作[火場的逃生VR模擬]，
                    我們採用了<span className='text-yellow-600'>Unreal虛幻引擎</span>結合arduino來模擬火場情境，
                    我在其中擔任了<span className='text-yellow-600'>場景美術</span>的製作，
                    並從中學習到了如何使用<span className='text-yellow-600'>3D建模軟體</span>的操作以及在
                    <span className='text-yellow-600'>3DsMax</span>與<span className='text-yellow-600'>Unreal</span>間模型的匯入與整合。
                  </p>


                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <a href="http://imtopic.nutc.edu.tw/2022/achievements/B25" className="inline-flex items-center px-4 py-2 sm:text-sm text-xs font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                      相關檔案 ➜
                    </a>
                  </div>
                </div>
              </div>
              <img className="h-auto sm:max-w-sm max-w-[175%] mt-4 mb-16 sm:mt-0 sm:mb-0 mx-8 rounded-lg col-span-1" src="./img/fire-rect.webp" alt="description" />
            </div>
            {/* <div className='grid grid-cols-4'>
              <li className="mb-24 ml-6 col-span-3">
                <div className="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/fire.webp' className='h-full w-full' alt='fire'></img>
                </div>
                <div className='ml-28'>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                    專題-火場逃生VR模擬
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-stone-400">
                    Released on 2022
                  </time>
                  <p className="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                    專五的專題製作[火場的逃生VR模擬]，
                    我們採用了<span className='text-yellow-600'>Unreal虛幻引擎</span>結合arduino來模擬火場情境，
                    我在其中擔任了<span className='text-yellow-600'>場景美術</span>的製作，
                    並從中學習到了如何使用<span className='text-yellow-600'>3D建模軟體</span>的操作以及在
                    <span className='text-yellow-600'>3DsMax</span>與<span className='text-yellow-600'>Unreal</span>間模型的匯入與整合。
                  </p>

                  <a href="http://imtopic.nutc.edu.tw/2022/achievements/B25" className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                    相關檔案 ➜
                  </a>
                </div>
              </li>
              <img className="h-auto max-w-sm mx-8 rounded-lg" src="./img/fire-rect.webp" alt="description" />
            </div> */}
            <div className='grid grid-cols-2 sm:grid-cols-7'>
              <div className="sm:mb-24 my-0 ml-6 col-span-2 sm:col-span-4">
                <div className="absolute sm:w-40 sm:h-40 h-16 w-16 bg-stone-200 rounded-full mt-2 sm:-left-20 -left-8 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/rapputappu.webp' className='h-full w-full' alt='record'></img>
                </div>
                <div className='sm:ml-28 ml-8'>
                  <h3 className="flex items-center mb-1 sm:text-lg text-sm font-semibold text-stone-900 dark:text-white">
                    專題-比價網站
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-stone-400">
                    Released on 2021
                  </time>
                  <p className="mb-4 sm:text-base text-xs font-normal text-stone-500 dark:text-stone-400">
                    專四的專題是電腦比價[RappuTappu]網站利用爬蟲(web crawler)爬取電腦網站的資料，
                    並且按照筆電的各項規格提供查詢與排序，我在其中負責網頁的<span className='text-yellow-600'>前端設計</span>，
                    學習到了<span className='text-yellow-600'>網頁建構</span>基礎知識與
                    <span className='text-yellow-600'>網頁前端開發</span>與<span className='text-yellow-600'>藍圖設計</span>、<span className='text-yellow-600'>LOGO設計的經驗</span>，
                    並且利用<span className='text-yellow-600'>Bootstrap</span>插件建構網頁功能。
                  </p>


                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <a href="https://drive.google.com/drive/folders/1BtX68XOitvJz0C7AUZgP5H4vHe0UNbPZ?usp=share_link" className="inline-flex items-center px-4 py-2 sm:text-sm text-xs font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                      相關檔案 ➜
                    </a>
                  </div>
                </div>
              </div>
              <img className="h-auto sm:max-w-sm max-w-[175%] mt-4 mb-16 sm:mt-0 sm:mb-0 mx-8 rounded-lg col-span-1" src="./img/rapputappu-rect.webp" alt="description" />
            </div>
            {/* <div className='grid grid-cols-4'>
              <li className="mb-24 ml-6 col-span-3">
                <div className="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/rapputappu.webp' className='h-full w-full' alt='rapputappu'></img>
                </div>
                <div className='ml-28'>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                    專題-比價網站
                  </h3><time className="block mb-2 text-sm font-normal leading-none text-stone-400">
                    Released on 2021
                  </time>
                  <p className="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                    專四的專題是電腦比價[RappuTappu]網站利用爬蟲(web crawler)爬取電腦網站的資料，
                    並且按照筆電的各項規格提供查詢與排序，我在其中負責網頁的<span className='text-yellow-600'>前端設計</span>，
                    學習到了<span className='text-yellow-600'>網頁建構</span>基礎知識與
                    <span className='text-yellow-600'>網頁前端開發</span>與<span className='text-yellow-600'>藍圖設計</span>、<span className='text-yellow-600'>LOGO設計的經驗</span>，
                    並且利用<span className='text-yellow-600'>Bootstrap</span>插件建構網頁功能。
                  </p>

                  <a href="https://drive.google.com/drive/folders/1BtX68XOitvJz0C7AUZgP5H4vHe0UNbPZ?usp=share_link" className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                    相關檔案 ➜
                  </a>
                </div>
              </li>
              <img className="h-auto max-w-sm mx-8 rounded-lg" src="./img/rapputappu-rect.webp" alt="description" />
            </div> */}
            <div className='grid grid-cols-2 sm:grid-cols-7'>
              <div className="sm:mb-24 my-0 ml-6 col-span-2 sm:col-span-4">
                <div className="absolute sm:w-40 sm:h-40 h-16 w-16 bg-stone-200 rounded-full mt-2 sm:-left-20 -left-8 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/bear-round.webp' className='h-full w-full' alt='record'></img>
                </div>
                <div className='sm:ml-28 ml-8'>
                  <h3 className="flex items-center mb-1 sm:text-lg text-sm font-semibold text-stone-900 dark:text-white">
                    國文組長
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-stone-400">
                    Released on 2020
                  </time>
                  <p className="mb-4 sm:text-base text-xs font-normal text-stone-500 dark:text-stone-400">
                    我在專三的國文課擔任了分組報告的組長，當時的上課方式為每週各組都各自報告一個題目，
                    在當時擔任組長的過程中學習到了<span className='text-yellow-600'>妥善分配工作</span>以及<span className='text-yellow-600'>定期審視進度</span>的重要，
                    其中一周一次的報告不僅加強了我將<span className='text-yellow-600'>複雜資料統整</span>並以淺顯易讀的<span className='text-yellow-600'>簡報呈現</span>之能力，
                    也提升了我與合作伙伴<span className='text-yellow-600'>溝通協作的效率</span>。
                  </p>


                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <a href="https://drive.google.com/drive/folders/1GoIMOxerT3X8QEwnDKNv_ca5_DywtOV7?usp=share_link" className="inline-flex items-center px-4 py-2 sm:text-sm text-xs font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                      相關檔案 ➜
                    </a>
                  </div>
                </div>
              </div>
              <img className="h-auto sm:max-w-sm max-w-[175%] mt-4 mb-16 sm:mt-0 sm:mb-0 mx-8 rounded-lg col-span-1" src="./img/chinese-rect.webp" alt="description" />
            </div>
            {/* <div className='grid sm:grid-cols-4 '>
              <li className="mb-24 ml-6 sm:col-span-3 col-span-1">
                <div className="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                  <img src='./img/bear-round.webp' className='h-full w-full' alt='bear round'></img>
                </div>
                <div className='ml-28'>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                    國文組長
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-stone-400">
                    Released on 2020
                  </time>
                  <p className="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                    我在專三的國文課擔任了分組報告的組長，當時的上課方式為每週各組都各自報告一個題目，
                    在當時擔任組長的過程中學習到了<span className='text-yellow-600'>妥善分配工作</span>以及<span className='text-yellow-600'>定期審視進度</span>的重要，
                    其中一周一次的報告不僅加強了我將<span className='text-yellow-600'>複雜資料統整</span>並以淺顯易讀的<span className='text-yellow-600'>簡報呈現</span>之能力，
                    也提升了我與合作伙伴<span className='text-yellow-600'>溝通協作的效率</span>。
                  </p>

                  <a href="https://drive.google.com/drive/folders/1GoIMOxerT3X8QEwnDKNv_ca5_DywtOV7?usp=share_link" className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                    相關檔案 ➜
                  </a>
                </div>
              </li>
              <img className="h-auto max-w-sm mx-8 rounded-lg" src="./img/chinese-rect.webp" alt="description" />
            </div> */}

          </div>

        </div>
        <br></br>
        <br></br>
        <hr className="w-full h-1 mx-auto mt-4 mb-8 bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

        <br></br>
        <br></br>
        <p className="text-2xl sm:mx-24 mx-0 font-black dark:text-white text-center">Epilogue
          <hr className="w-full h-0.5 mx-auto mb-8 mt-4 bg-stone-200 border-0 rounded md:my-10 dark:bg-stone-800"></hr>
        </p>
        <p className="sm:text-lg text-base my-4 sm:mx-24 mx-0 dark:text-white">
          一直以來的專題都是在專題老師的帶領下與同儕共同研究開發，未能有機會接觸真正貼近職場的環境與機會，偶然契機下得知了創科資訊的Monosprata培訓計畫，並且初步了解後，對該公司的公司文化與工作氛圍感到嚮往，於是在專五專題展結束後我便進入了該公司實習

          希望未來能在實習的過程中配合公司的工作指派並且完成任務。也希望能在實習中累積個人的經驗，提升與同事和睦相處共同協作的能力，同時摸索自己對未來更明確的道路。
        </p>
      </div>


    </div>
  );
}

export default App;
