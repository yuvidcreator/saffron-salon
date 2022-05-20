import Head from 'next/head'
import Image from 'next/image'
import Brands from '../../components/Brands'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Intro from '../../components/Intro'

function services() {
    return (
        <>
            <Head>
                <title>Saffron Beauty Salon</title>
                <meta name="description" content="Saffron Beauty Salon, Beauty Parlour in dhanori, Makeup, Bridal makeup, Nails and Nail extensions, Waxing, hair smoothening, full body massage" />
                <meta name="description" content="Saffron Beauty Salon Next App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="relative min-h-[calc(100vh-72px)]">
                    <Image src="/images/saffron-salon.jpg" layout="fill" objectFit="cover" alt="hero background image" />
                    <div className="flex justify-center items-center">
                        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">

                            {/* <Image src="/0002.png" width="600" height="150" objectFit="contain" alt="logo" /> */}
                            <h3 className="text-white">Welcome to</h3>
                            <div className="text-6xl text-center text-white justify-center font-extrabold"><h1>What we<br /> <span className=" text-pink-500">Offer</span></h1></div>
                            
                            {/* <button className="bg-blue-600 uppercase text-m tracking-wide font-extrabold py-4 px-6 rounded hover:bg-[#0485ee]">
                                Book An Appointment
                            </button> */}
                            
                            <p className="text-sm text-white text-center">
                                {" "}
                                Saffron Beauty Salon gives you the best experience in beauty, style, and wellness through high-end, personalized services, impeccable customer service, and top-notch talent. We also provide one-on-one consultations and pre-treatment consultations. We understand that as beauty therapists, we are in a position of trust and offer full confidentiality.
                            </p>

                            <button className="bg-gradient-to-r from-blue-600 to-purple-800 hover:bg-gradient-to-l uppercase text-medium tracking-wide text-white font-extrabold py-4 px-6 rounded-lg">Book an Appointment</button>

                            {/* <Image src="/images/1.jpeg" width="600" height="150" objectFit="contain" alt="logo" /> */}
                        </div>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto m-8">
                    <h3 className="mt-4 mb-8 text-center justify-center text-xl font-semibold underline decoration-pink-600 xl:text-3xl">Our Services</h3>
                </div>

                <div className="overflow-hidden text-gray-700 ">
                    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap md:w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery" width={990} height={1280} className="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/services/service1.jpeg" />
                                </div>
                            </div>
                            <div className="flex flex-wrap md:w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery" width={990} height={1280} className="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/services/service2.jpeg" />
                                </div>
                            </div>
                            <div className="flex flex-wrap md:w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery" width={990} height={1280} className="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/services/service3.jpeg" />
                                </div>
                            </div>
                            <div className="flex flex-wrap md:w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery" width={990} height={1280} className="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/services/service4.jpeg" />
                                </div>
                            </div>
                        </div>
                        <div className="flex text-center justify-center">
                            <div className="w-full p-1 md:p-2">
                                <Image alt="gallery" width={990} height={1280} className="block object-cover object-center w-full h-full rounded-lg"
                                src="/images/services/service5.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default services