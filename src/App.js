// import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './App.css';
import './tailwind.css';

const navigation = [
  { name: 'achievements', href: '/achievements', current: "" }
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
      <div className="grid sm:grid-cols-6 grid-cols-1 p-12 sm:p-24 relative overflow-hidden bg-white dark:bg-stone-900">
        <div className='col-span-1'>
          <div className='flex justify-center'>
            <img className="rounded-full border-8 border-stone-400 mb-4 sm:w-auto w-40 justify-center" src="./img/me.webp" alt="description" />
          </div>
          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <p className="text-2xl my-4 font-black dark:text-white">Expertise</p>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            資料文檔統整
          </li>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            前端Logo設計
          </li>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            簡報製作
          </li>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            自我思辨
          </li>

          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <p className="text-2xl my-4 font-black dark:text-white">Contact</p>


          <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/phone-call.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='phone-call'></img>
            0966-326329
          </li>
          {/* <li className="flex text-sm my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            台中市西屯區漢翔路127號8F-1
          </li> */}
          <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/email.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='email'></img>
            mayble0411@gmail.com
          </li>
          <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/instagram.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='instagram'></img>
            <a href='https://www.instagram.com/plum_0411/'>@plum_0411</a>
          </li>
          <li className="flex text-sm my-4 dark:text-white items-center">
            {/* <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
            <img src='./img/linkedin.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='linkedin'></img>
            <a href='https://www.linkedin.com/in/%E9%83%81%E6%A2%85-%E5%BC%B5-768085212/details/certifications/'>@張郁梅</a>
          </li>

          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <p className="text-2xl my-4 font-black dark:text-white">Recreation</p>

          <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/img-solid.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='solid'></img>
            {/* <img src='./img/instagram.svg' className="w-4 h-4 mr-1.5 flex-shrink-0"></img> */}
            <a href='https://photos.app.goo.gl/aCCxXUJyc1jcuykGA'>My clay creation</a>
          </li>
          
          <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/instagram.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='instagram'></img>
            <a href='https://www.instagram.com/plum_friends/'>@plum_friends</a>
          </li>
          
          <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/instagram.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='instagram'></img>
            <a href='https://www.instagram.com/abiju_bear_ma/'>@abiju_bear_ma</a>
          </li>

          {/* <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/instagram.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='instagram'></img>
            <a href='https://www.instagram.com/melon_seed.word/'>@melon_seed.word</a>
          </li> */}

          <hr className="w-full h-1 mx-auto mt-4 mb-8 bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

        </div>


        <div className="sm:col-span-5 col-span-1 text-left sm:pl-24">
          <p className="text-4xl font-black dark:text-white">張郁梅</p>
          <p className="text-lg my-4 dark:text-white">ＳＥＬＦ　ＩＮＴＲＯ</p>
          <p className="sm:text-base text-sm my-4 dark:text-white">
            我是張郁梅，國中畢業後就讀於國立台中科技大學的資訊應用菁英班五專部，
            在求學過程中學習了各項語言(Kotlin、Java、C等)的程式設計基礎以及各式程式開發工具，
            出生於台中的小康家庭，家中成員有四人，我則是長女，在父母開明幽默的教導下，
            成就了我能理性思考的特質以及適時換位思考的能力，不僅讓我能夠判斷事情的關鍵點即時應對，
            也幫助我再專案中從不同視角優化使用者體驗並更好的與合作夥伴溝通。</p>
          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <p className="text-3xl my-4 font-black dark:text-white">Education</p>
          {/* <hr className="w-full h-0.5 mx-auto bg-stone-200 border-0 rounded md:mb-10 dark:bg-stone-800"></hr> */}
          <div className='grid sm:grid-cols-2 mt-8 justify-center items-center'>
            <img src="./img/ia.webp" className='sm:w-48 w-36 items-center' alt='ia'></img>
            <p className="sm:text-lg text-base my-4 dark:text-white align-middle sm:pt-16">
              國立台中科技大學<br></br>
              <b className="sm:text-3xl text-2xl">資訊應用菁英班</b>
              <br></br>五專部
            </p>
          </div>
          <hr className="w-full h-0.5 mx-auto mb-8 mt-4 bg-stone-200 border-0 rounded md:my-10 dark:bg-stone-800"></hr>
          <ol className="items-center sm:flex grid sm:grid-cols-3">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full ring-0 ring-white dark:bg-amber-900 sm:ring-8 dark:ring-stone-800 shrink-0">
                  <img src='./img/school1-1.webp' className='w-full h-full' alt='yonann'></img>
                </div>
                <div className="hidden sm:flex w-full bg-stone-200 h-0.5 dark:bg-stone-800"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-black text-stone-900 dark:text-white">
                  國立永安國民小學
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  畢業於2015
                </time>
                <p className="sm:text-sm text-xs font-normal text-stone-500 dark:text-stone-300">
                  {/* 407台中市西屯區西屯路三段133號<br></br> */}
                  「鐵肩擔教育，笑臉看兒童」，秉持「學生第一」「教學為先」及「多元適性」的原則，創造學生學習
                  高峰經驗，適性揚才，培養學生身心及五育均衡發展，以實現全人教育，創
                  造一個教師用心、學生開心、家長放心的「全是贏家的學校」。
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full ring-0 ring-white dark:bg-amber-900 sm:ring-8 dark:ring-stone-800 shrink-0">
                  {/* <svg aria-hidden="true" className="w-3 h-3 text-amber-800 dark:text-amber-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg> */}
                  <img src='./img/school2-1.webp' className='w-full h-full' alt='fcjh'></img>
                </div>
                <div className="hidden sm:flex w-full bg-stone-200 h-0.5 dark:bg-stone-800"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-black text-stone-900 dark:text-white">
                  國立福科國民中學
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  畢業於2018
                </time>
                <p className="sm:text-sm text-xs font-normal text-stone-500 dark:text-stone-300">
                  {/* 407台中市西屯區福林路333號<br></br> */}
                  因應未來多元社會的發展，本校教學目標為開展學生多元智慧，教師教學多元生動，輔以班級經營策略，
                  結合科學、英語、資訊科技學習環境，強調因材施教，將每一個孩子帶上來，期許學生立足福科、放眼未來。
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-16 h-16 bg-amber-200 rounded-full ring-0 ring-white dark:bg-amber-900 sm:ring-8 dark:ring-stone-800 shrink-0">
                  {/* <svg aria-hidden="true" className="w-3 h-3 text-amber-900 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg> */}
                  <img src='./img/school3-1.webp' className='w-full h-full' alt=""></img>
                </div>
                <div className="hidden sm:flex w-full bg-stone-200 h-0.5 dark:bg-stone-800"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-black text-stone-900 dark:text-white">
                  國立台中科技大學
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  就讀中
                </time>
                <p className="sm:text-sm text-xs font-normal text-stone-500 dark:text-stone-300">
                  {/* 404台中市北區三民路三段129號<br></br> */}
                  國立臺中科技大學，簡稱臺中科大、中科大、NTCUST、NUTC，是一所位於中華民國臺中市的國立科技大學，
                  現有四大學制：日間部、進修部、空中學院、進修學院。
                  共有六大學院：商學院、設計學院、語文學院、資訊與流通學院、中護健康學院、智慧產業學院。
                </p>
              </div>
            </li>
          </ol>

          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>
          <p className="sm:text-3xl text-2-xl my-4 font-black dark:text-white">Program Language</p>
          {/* <hr className="w-full h-0.5 mx-auto bg-stone-200 border-0 rounded md:mb-10 dark:bg-stone-800"></hr> */}

          <div className='sm:text-lg sm:mb-0 mb-4 text-sm grid sm:grid-cols-3 grid-cols-2 gap-4'>
            <p className="dark:text-white">HTML5</p>
            <p className="dark:text-white">CSS</p>
            <p className="dark:text-white">JavaScript</p>
            <p className="dark:text-white">SQL</p>
            <p className="dark:text-white">PHP</p>
            <p className="dark:text-white">Python</p>
          </div>

          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>
          <p className="sm:text-3xl text-2-xl my-4 font-black dark:text-white">Software</p>
          {/* <hr className="w-full h-0.5 mx-auto bg-stone-200 border-0 rounded md:mb-10 dark:bg-stone-800"></hr> */}

          <div className='sm:text-lg sm:mb-0 mb-4 text-sm grid sm:grid-cols-3 grid-cols-2 gap-4'>
            <p className="dark:text-white">Zbrush</p>
            <p className="dark:text-white">3DsMax</p>
            <p className="dark:text-white">Blender</p>
            <p className="dark:text-white">Photoshop</p>
            <p className="dark:text-white">PowerPoint</p>
            <p className="dark:text-white">Canva</p>
            <p className="dark:text-white">Illustrator</p>
            <p className="dark:text-white">Visual Studio Code</p>
          </div>

          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>
          <p className="sm:text-3xl text-2-xl my-4 font-black dark:text-white">Plugin Tool</p>
          {/* <hr className="w-full h-0.5 mx-auto bg-stone-200 border-0 rounded md:mb-10 dark:bg-stone-800"></hr> */}

          <div className='sm:text-lg sm:mb-0 mb-4 text-sm grid sm:grid-cols-3 grid-cols-2 gap-4'>
            <p className="dark:text-white">TailwindCSS</p>
            <p className="dark:text-white">ant-Design</p>
            <p className="dark:text-white">Bootstrap</p>
            <p className="dark:text-white">FlowBite</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
