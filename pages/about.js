import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaStore, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import Gallery from '../components/Gallery'


function About() {
    return (
        <>
        <Head>
            <title>About Saffron Beauty Salon</title>
            <meta name="description" content="Saffron Beauty Salon, Beauty Parlour in dhanori, Makeup, Bridal makeup, Nails and Nail extensions, Waxing, hair smoothening, full body massage" />
            <meta name="description" content="Get styled by Saffron Beauty Salon. We gives you the best experience with high quality professionals in Beauty & Hair Services, Makeup, Nails & Female Full Body Massages." />
        </Head>

        <main>
            <section>
                <div className="relative min-h-[calc(100vh-72px)]">
                    <Image src="/images/saffron-iinner-baner.jpg" layout="fill" objectFit="cover" alt="hero background image" className="contrast-125" />
                    <div className="flex justify-center items-center">
                        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">

                            {/* <Image src="/0002.png" width="600" height="150" objectFit="contain" alt="logo" /> */}
                            <h3 className="text-white">Welcome to</h3>
                            <div className="text-6xl text-center text-white justify-center font-extrabold"><h1>About<br /> <span className=" text-pink-500">us</span></h1></div>
                            
                            {/* <button className="bg-blue-600 uppercase text-m tracking-wide font-extrabold py-4 px-6 rounded hover:bg-[#0485ee]">
                                Book An Appointment
                            </button> */}

                            {/* <button className="bg-gradient-to-r from-blue-600 to-purple-800 hover:bg-gradient-to-l uppercase text-medium tracking-wide text-white font-extrabold py-4 px-6 rounded-lg">Book an Appointment</button> */}

                            {/* <Image src="/images/1.jpeg" width="600" height="150" objectFit="contain" alt="logo" /> */}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl mx-6 lg:mx-0">
                        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-center mb-12">
                            {/* <Image alt="vidya lengar" width={300} height={400} src="https://source.unsplash.com/MP0IUfwrn0A" className="" /> */}
                            <Image alt="vidya lengar" width={300} height={300} src="/images/vidya-madam.jpg" className="" />

                        </div>
                        <div className="mr-4 ml-4 md:p-12 text-center lg:text-left">
                            <h2 className="text-3xl font-bold lg:pt-0">
                                Vidya Lengare
                            </h2>
                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-pink-500 opacity-25"></div>
                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                    <svg className="h-4 fill-current text-purple-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"></path>
                                    </svg>
                                    Experienced Makeup artist and Makeup educator
                                </p>
                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                    <svg className="h-4 fill-current text-purple-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"></path>
                                    </svg>
                                    https://saffronbeautysalon.com
                                </p>
                                <p className="pt-8 text-sm">
                                    Vidya Lengare was born & brought up in Pune, has a degree in Professional Beauty Therapy Diploma Intenational. She recognized her passion for makeup in 2007. She always plumped for makeup during her college days. she leaned towards this field and then started her journey as makeup artist. And that makes her very experienced in this industry. The transformation that was brought after every look and hairstyles in that short term caught her fascination.
                                </p>
                                <div className="flex pt-12 pb-8 justify-center">
                                    <Link href={"tel:+91-7208875838/"} passHref>
                                        <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                            Get Consultation
                                            <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            
                                        </a>
                                    </Link>
                                </div>

                                <div className="flex mb-6 justify-center">
                                    <a href="#!" type="button" className="rounded-full border-2 border-blue-800 text-blue-800 leading-normal uppercase hover:bg-blue-800 hover:border-blue-800 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                                        <FaFacebook className="ml-2 mt-2 mx-auto" />
                                    </a>

                                    <a href="#!" type="button" className="rounded-full border-2 border-blue-400 text-blue-400 leading-normal uppercase hover:bg-blue-400 hover:border-blue-400 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                                        <FaTwitter className="ml-2 mt-2 mx-auto" />
                                        
                                    </a>

                                    <a href="https://wa.me/917208875838/" type="button" className="rounded-full border-2 border-green-700 text-green-700 leading-normal uppercase hover:bg-green-500 hover:border-green-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                                        <FaWhatsapp className="ml-2 mt-2 mx-auto" />
                                    </a>

                                    <a href="#!" type="button" className="rounded-full border-2 border-fuchsia-600 text-fuchsia-600 leading-normal uppercase hover:bg-gradient-to-tr from-fuchsia-600 to-orange-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                                        <FaInstagram className="ml-2 mt-2 mx-auto" />
                                    </a>

                                    <a href="#!" type="button" className="rounded-full border-2 border-blue-500 text-blue-500 leading-normal uppercase hover:bg-blue-600 hover:border-blue-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                                        <FaLinkedinIn className="ml-2 mt-2 mx-auto" />
                                    </a>
                                </div>
                        </div>
                    </div>

                    <div className="lg:w-2/5 hidden lg:block">
                        <Image alt="vidya lengar" width={300} height={300} src="/images/vidya-madam.jpg" className="rounded-none lg:rounded-lg shadow-2xl" />
                    </div>
                </div>

                {/* Cerificates Sections */}
                <h2 className="mt-4 mb-8 text-center justify-center text-3xl font-semibold underline decoration-pink-600 xl:text-4xl">Certificates</h2>
                <div className="overflow-hidden text-gray-700 mb-20">
                    <div className="container px-5 py-2 mx-auto lg:pt-8 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap md:w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery" width={600} height={400} className="block object-cover object-center w-full h-full rounded-lg" src="/images/cert.jpeg" />
                                </div>
                            </div>
                            <div className="flex flex-wrap md:w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery" width={600} height={400} className="block object-cover object-center w-full h-full rounded-lg"src="/images/cert1.jpeg" />
                                </div>
                            </div>
                            <div className="flex flex-wrap md:w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery" width={600} height={400} className="block object-cover object-center w-full h-full rounded-lg" src="/images/cert2.jpeg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto m-8">
                    <h3 className="mt-4 mb-8 text-center justify-center text-xl font-semibold underline decoration-pink-600 xl:text-3xl">Why us?</h3>

                    <p className="text-sm text-black text-center ml-6 mr-6">
                        {" "}
                        With over 17 years of experience in the beauty and wellness industry, we give you an exclusive pampering experience in beauty and wellness. We want you to feel at home when you come to our salon. If you want to talk – we will listen. If you crave peace and quiet – we can offer you that as well. Saffron Beauty Salon is situated in an easily locatable part of Dhanori, Viman Nagar, Vishranwadi and Lohegaon, (Pune) but away from the noise, offering you quietness, peace, and tranquility in a relaxing and private atmosphere.
                    </p>

                    <div className="flex flex-wrap md:text-center">
                        <div className="w-5/6 sm:w-1/2 p-6 mt-20">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Beauty Services Experties
                            </h3>
                            <p className="text-gray-600 md:mb-8">We have been serving our clients over 15 years with our professional skills. We want our clients to escape from the busy life and tiredness at here Saffron Beauty Salon. We've been delivering the most professional & modernist Beauty Services to our clients with our best effort.</p>
                        </div>

                        <div className="w-full sm:w-1/2 sm:p-6">
                            <Image alt="beauty banner" width={700} height={500} src="/images/parlour.webp" className="" />
                        </div>
                    </div>
                    
                    {/* For Desktop view */}
                    <div className="hidden md:block ">
                        <div className="flex flex-wrap">
                            <div className="w-5/6 sm:w-1/2 p-6">
                            <Image alt="beauty banner" width={700} height={700} src="/images/hair.jpg" className="" />
                            </div>

                            <div className="w-full sm:w-1/2 p-6 mt-36">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Hair Services
                                </h3>
                                <p className="text-gray-600 mb-8">State ot the Art Equipment, Immaculate Hygeine, Extraordinary services with the perfect blend of skilled and certified professionals and quality products adhering to international standards in pocket friendly costs. Also known for their cutting-edge styles and always promises to stay up on the latest trends and fashions.</p>
                            </div>
                        </div>
                    </div>

                    {/* for mobile view */}
                    <div className="flex-wrap md:hidden">

                        <div className="w-full sm:w-1/2 p-6">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Hair Services for Mobile
                            </h3>
                            <p className="text-gray-600 mb-8">State ot the Art Equipment, Immaculate Hygeine, Extraordinary services with the perfect blend of skilled and certified professionals and quality products adhering to international standards in pocket friendly costs. Also known for their cutting-edge styles and always promises to stay up on the latest trends and fashions.</p>
                        </div>

                        <div className="w-5/6 sm:w-1/2 sm:p-4">
                            <Image alt="beauty banner" width={700} height={700} src="/images/hair.jpg" className="" />
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6 mt-20">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Bridal Makeup
                            </h3>
                            <p className="text-gray-600 mb-8">Bridal makeup is an amazing way of creating a flawless appearance on the day of the wedding. The wedding    involves many components beginning from the photos to the departure. The Bridal packages in Pune are for obtaining bridal makeup services that are specifically for the wedding. So the makeup will be able to meet the high demand.</p>
                        </div>

                        <div className="w-full sm:w-1/2 p-6">
                        <Image alt="beauty banner" width={700} height={700} src="/images/makeiup.webp" className="" />
                        </div>
                    </div>
                </div>

                
            </section>
            {/* <Slider /> */}
        </main>
        
        
        </>
    )
}

export default About;