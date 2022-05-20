import Image from 'next/image';
import { DotsCircleHorizontalIcon, PhotographIcon, FolderIcon, HomeIcon, PlusIcon, SearchIcon, ServerIcon, StarIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from 'react';
import Link from 'next/link';



function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    const router = useRouter();

    return (
        <>
            <div className={`absolute top-0 left-0 h-screen w-screen bg-black text-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
                <div className="flex items-center filter drop-shadow-md bg-black h-20 ml-4"> 
                {/*logo container*/}
                    <Image 
                    src="/0002.png" 
                    alt="" 
                    width={180} 
                    height={57} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/")}
                    />
                </div>
                <div className="flex sticky flex-col ml-6 my-4 space-y-4">
                    <Link href="/">
                        <a className="text-md font-medium inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <HomeIcon className="h-4 mr-2" />
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <UserGroupIcon className="h-4 mr-2" />
                            About
                        </a>
                    </Link>
                    <Link href="/services">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <ServerIcon className="h-4 mr-2" />
                            Services
                        </a>
                    </Link>
                    {/* <Link href="/classes">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <FolderIcon className="h-4 mr-2" />
                            Classes
                        </a>
                    </Link> */}
                    <Link href="/gallery">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <PhotographIcon className="h-4 mr-2" />
                            Gallery
                        </a>
                    </Link>
                    <Link href="tel:+91-7038298223">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <DotsCircleHorizontalIcon className="h-4 mr-2" />
                            Contact us
                        </a>
                    </Link>
                    

                    {/* <div className="flex text-white mt-8 space-x-4">
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button> 
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div> */}
                </div>

                <Link href="https://wa.me/917208875838/" passHref>
                    <button className="uppercase mt-8 border px-4 py-1 ml-6 rounded font-medium text-white tracking-wide hover:bg-white hover:text-black transition duration-200">
                        Appointments
                    </button>
                </Link>
            </div>
        </>
    )
}



function Header() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="px-4 py-1 bg-pink-500 text-white">
                <p className="text-xs md:text-md text-center">
                    We are raising prices on all services by Rs.50 by today in support of the planet.{' '}
                    <a href='#' className="underline">
                    Learn more
                    </a>
                </p>
            </div>
            <header className="sticky bg-black top-0 z-[1000] flex items-center px-2 h-[63px] lg:px-12 shadow-md">
                <Image 
                    src="/0002.png" 
                    alt="" 
                    width={180} 
                    height={57} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/")}
                />

                {/* <button className="text-white ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
                <button className="uppercase border px-4 py-1 rounded font-medium text-white tracking-wide hover:bg-white hover:text-black transition duration-200">
                    Login
                </button> */}

                <div className="w-10/12 flex justify-end items-center">
                    <MobileNav open={open} setOpen={setOpen} />
                    <div className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden mr-4" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-0.5 w-8 bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-0.5 w-8 bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-0.5 w-8 bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>

                    <div className="hidden md:flex ml-auto">
                        <div className="hidden ml-4 md:flex items-center space-x-4 text-white">
                            <Link href={"/"}>
                                <a className="header-link group">
                                    <HomeIcon className="h-4 group-hover:animate-bounce" />
                                    <span className="span">Home</span>
                                </a>
                            </Link>

                            <Link href={"/about"}>
                                <a className="header-link group">
                                    <UserGroupIcon className="h-4 group-hover:animate-bounce" />
                                    <span className="span">About</span>
                                </a>
                            </Link>

                            <Link href={"/services"}>
                                <a className="header-link group">
                                    <SearchIcon className="h-4 group-hover:animate-bounce" />
                                    <span className="span">Services</span>
                                </a>
                            </Link>

                            {/* <Link href={"/classes"}>
                                <a className="header-link group">
                                    <FolderIcon className="h-4 group-hover:animate-bounce" />
                                    <span className="span">Classes</span>
                                </a>
                            </Link> */}

                            <Link href="/gallery">
                                <a className="header-link group">
                                    <PhotographIcon className="h-4 mr-2" />
                                    <span className="span">Gallery</span>
                                </a>
                            </Link>

                            <Link href={"tel:+91-7038298223"}>
                                <a className="header-link group">
                                    <DotsCircleHorizontalIcon className="h-4 group-hover:animate-bounce" />
                                    <span className="span">Contact us</span>
                                </a>
                            </Link>
                        </div>

                        <div className="flex space-x-4">
                            {/* <button className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button> */}

                            {/* <button className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button> */}

                            {/* <button className="uppercase border px-4 py-1 ml-6 rounded font-medium text-white tracking-wide hover:bg-white hover:text-black transition duration-200">
                                Appointments
                            </button> */}
                        </div>
                    </div>
                </div>

            </header>
        </>
        
    )
}

export default Header