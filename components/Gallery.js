import Image from 'next/image';
import Link from "next/link"

function Gallery() {
    return (
        <section>
            <h2 className="mt-20 mb-8 text-center justify-center text-3xl font-semibold underline decoration-pink-600 xl:text-4xl">Gallery</h2>
            
            <div className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                            <Image alt="gallery" width={600} height={600} className="block object-cover object-center w-full h-full rounded-lg"
                                src="/images/1.jpeg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                            <Image alt="gallery" width={600} height={600} className="block object-cover object-center w-full h-full rounded-lg"
                                src="/images/4.jpeg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                            <Image alt="gallery" width={600} height={600} className="block object-cover object-center w-full h-full rounded-lg"
                                src="/images/12.jpeg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                            <Image alt="gallery" width={600} height={600} className="block object-cover object-center w-full h-full rounded-lg"
                                src="/images/21.jpeg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                            <Image alt="gallery" width={600} height={600} className="block object-cover object-center w-full h-full rounded-lg"
                                src="/images/8.jpeg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                            <Image alt="gallery" width={600} height={600} className="block object-cover object-center w-full h-full rounded-lg"
                                src="/images/9.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className="flex text-center justify-center">
                        <Link href="/gallery">
                            <a className="flex w-fit space-x-2 mt-8 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-md shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                Learn More
                                <svg className="w-4 h-6 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                                
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;