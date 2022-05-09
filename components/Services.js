import Image from "next/image"
import Link from "next/link"
import StarRating from "./StarRating"
import StaticStarRating from "./StaticStarRating"

function Services() {
    return (
        <section>
            <h2 className="mt-20 mb-8 text-center justify-center text-3xl font-semibold underline decoration-pink-600 xl:text-4xl">Services</h2>
            
            <section className="text-gray-600 font-body">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/4">
                            <div className="h-full rounded-lg overflow-hidden shadow-2xl ">
                                <Image width={500} height={500} className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:rotate-3 hover:scale-110" src="/images/9.jpeg" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1">Makeup</h2>
                                    <h1 className="title-font text-lg font-bold text-black hover:text-pink-600 mb-3">The Bridal Makeup</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap justify-between">
                                    <Link href="/about">
                                        <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                            Learn More
                                            <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            
                                        </a>
                                    </Link>
                                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span> */}

                                        {/* <div className="p-4 flex items-center text-sm text-gray-600">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <span className="ml-2">34</span>
                                        </div> */}
                                        <StarRating />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4">
                            <div className="h-full rounded-lg overflow-hidden shadow-2xl ">
                                <Image width={500} height={500} className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:rotate-3 hover:scale-110" src="/images/9.jpeg" alt="blog" />
                                <div className="p-6">
                                    <h4 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1">Makeup</h4>
                                    <h3 className="title-font text-lg font-bold text-black hover:text-pink-600 mb-3">The Bridal Makeup</h3>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        <Link href="/about">
                                            <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                                Learn More
                                                <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                                
                                            </a>
                                        </Link>
                                        <StaticStarRating number={4} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4">
                            <div className="h-full rounded-lg overflow-hidden shadow-2xl ">
                                <Image width={500} height={500} className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:rotate-3 hover:scale-110" src="/images/9.jpeg" alt="blog" />
                                <div className="p-6">
                                    <h4 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1">Makeup</h4>
                                    <h3 className="title-font text-lg font-bold text-black hover:text-pink-600 mb-3">The Bridal Makeup</h3>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        <Link href="/about">
                                            <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                                Learn More
                                                <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                                
                                            </a>
                                        </Link>
                                        <StaticStarRating number={5} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4">
                            <div className="h-full rounded-lg overflow-hidden shadow-2xl ">
                                <Image width={500} height={500} className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:rotate-3 hover:scale-110" src="/images/9.jpeg" alt="blog" />
                                <div className="p-6">
                                    <h4 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1">Makeup</h4>
                                    <h3 className="title-font text-lg font-bold text-black hover:text-pink-600 mb-3">The Bridal Makeup</h3>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        <Link href="/about">
                                            <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                                Learn More
                                                <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                                
                                            </a>
                                        </Link>
                                        <StaticStarRating number={3} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4">
                            <div className="h-full rounded-lg overflow-hidden shadow-2xl ">
                                <Image width={500} height={500} className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:rotate-3 hover:scale-110" src="/images/9.jpeg" alt="blog" />
                                <div className="p-6">
                                    <h4 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1">Makeup</h4>
                                    <h3 className="title-font text-lg font-bold text-black hover:text-pink-600 mb-3">The Bridal Makeup</h3>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        <Link href="/about">
                                            <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                                Learn More
                                                <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                                
                                            </a>
                                        </Link>
                                        <StaticStarRating number={4} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4">
                            <div className="h-full rounded-lg overflow-hidden shadow-2xl ">
                                <Image width={500} height={500} className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:rotate-3 hover:scale-110" src="/images/9.jpeg" alt="blog" />
                                <div className="p-6">
                                    <h4 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1">Makeup</h4>
                                    <h3 className="title-font text-lg font-bold text-black hover:text-pink-600 mb-3">The Bridal Makeup</h3>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        <Link href="/about">
                                            <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                                Learn More
                                                <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                                
                                            </a>
                                        </Link>
                                        <StaticStarRating number={4} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4">
                            <div className="h-full rounded-lg overflow-hidden shadow-2xl ">
                                <Image width={500} height={500} className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:rotate-3 hover:scale-110" src="/images/9.jpeg" alt="blog" />
                                <div className="p-6">
                                    <h4 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1">Makeup</h4>
                                    <h3 className="title-font text-lg font-bold text-black hover:text-pink-600 mb-3">The Bridal Makeup</h3>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        <Link href="/about">
                                            <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                                Learn More
                                                <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                                
                                            </a>
                                        </Link>
                                        <StaticStarRating number={3} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4">
                            <div className="h-full rounded-lg overflow-hidden shadow-2xl ">
                                <Image width={500} height={500} className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:rotate-3 hover:scale-110" src="/images/9.jpeg" alt="blog" />
                                <div className="p-6">
                                    <h4 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1">Makeup</h4>
                                    <h3 className="title-font text-lg font-bold text-black hover:text-pink-600 mb-3">The Bridal Makeup</h3>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        <Link href="/about">
                                            <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                                Learn More
                                                <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                                
                                            </a>
                                        </Link>
                                        <StaticStarRating number={5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Services