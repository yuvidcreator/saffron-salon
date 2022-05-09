

function admin() {
    return (
        <>
            <div className="overflow-hidden">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
                        <nav className="lg:text-sm lg:leading-6 relative" id="nav">
                            <div className="sticky top-0 -ml-0.5 pointer-events-none">
                                <div className="h-10 bg-white dark:bg-slate-900"></div>

                                <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
                                    <button className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
                                        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
                                        Quick search...
                                    </button>
                                </div>

                                <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
                            </div>

                            <ul>
                                <li>
                                    <a className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400">
                                        <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
                                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" className="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" className="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"></path></svg>
                                        </div>
                                        Documentation
                                    </a>
                                </li>

                                <li>
                                    <a className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400">
                                        <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
                                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" className="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" className="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"></path></svg>
                                        </div>
                                        Documentation
                                    </a>
                                </li>

                                <li>
                                    <a className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400">
                                        <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
                                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" className="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" className="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"></path></svg>
                                        </div>
                                        Documentation
                                    </a>
                                </li>

                                <li>
                                    <a className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400">
                                        <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
                                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" className="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" className="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"></path></svg>
                                        </div>
                                        Documentation
                                    </a>
                                </li>

                                <li className="mt-12 lg:mt-8">
                                    <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                                        Getting Started
                                    </h5>

                                    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Installation
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Editor Setup
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Using Preprocessor
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Optimizing for Production
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="mt-12 lg:mt-8">
                                    <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                                        Getting Started
                                    </h5>

                                    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Installation
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Editor Setup
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Using Preprocessor
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Optimizing for Production
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="mt-12 lg:mt-8">
                                    <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                                        Getting Started
                                    </h5>

                                    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Installation
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Editor Setup
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Using Preprocessor
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Optimizing for Production
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="mt-12 lg:mt-8">
                                    <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                                        Getting Started
                                    </h5>

                                    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Installation
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Editor Setup
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Using Preprocessor
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Optimizing for Production
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="mt-12 lg:mt-8">
                                    <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                                        Getting Started
                                    </h5>

                                    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Installation
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Editor Setup
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Using Preprocessor
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                Optimizing for Production
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
            <div className="flex text-center justify-center p-8">admin</div>

            <div className="text-center justify-center">
                <h3>hello user</h3>
            </div>
        </>
    )
}

export default admin