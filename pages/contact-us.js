import Head from 'next/head'
import Image from 'next/image'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Intro from '../components/Intro'


function Contact() {
    return (
        <>
            <Head>
                <title>Saffron Beauty Salon</title>
                <meta name="keywords" content="Saffron Beauty Salon, Beauty Parlour in dhanori, Makeup, Bridal makeup, Nails and Nail extensions, Waxing, hair smoothening, full body massage" />
                <meta name="description" content="Saffron Beauty Salon Next App" />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:url' content='https://www.saffronbeautysalon.com' />
                <meta name='twitter:title' content='Beauty Services | Saffron Beauty Salon' />
                <meta name='twitter:description' content='Get variety of Beauty & Hair Services, Makeup, Nails & Female Full Body Massages at Saffron Beauty Salon. Get all pricing.' />
                <meta name='twitter:image' content='https://www.saffronbeautysalon.com/512x512.png' />
                <meta name='twitter:creator' content='@saffronbeautysalonspa' />

                <meta property='og:type' content='website' />
                <meta property='og:title' content='Beauty Services | Saffron Beauty Salon' />
                <meta property='og:description' content='Get variety of Beauty & Hair Services, Makeup, Nails & Female Full Body Massages at Saffron Beauty Salon. Get all pricing.' />
                <meta property='og:site_name' content='Saffron Beauty Salon App' />
                <meta property='og:url' content='https://www.facebook.com/saffronbeautysalonspa/' />
                <meta property='og:image' content='https://www.saffronbeautysalon.com/512x512.png' />
            </Head>

            <main>
                <div className="relative min-h-[calc(100vh-72px)]">
                    <Image src="/images/saffron-iinner-baner.jpg" layout="fill" objectFit="cover" alt="hero background image" className="contrast-125" />
                    <div className="flex justify-center items-center">
                        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">

                            {/* <Image src="/0002.png" width="600" height="150" objectFit="contain" alt="logo" /> */}
                            <h3 className="text-white">Welcome to</h3>
                            <div className="text-6xl text-center text-white justify-center font-extrabold"><h1>Contact<br /> <span className=" text-pink-500">us</span></h1></div>
                            
                            {/* <button className="bg-blue-600 uppercase text-m tracking-wide font-extrabold py-4 px-6 rounded hover:bg-[#0485ee]">
                                Book An Appointment
                            </button> */}
                            
                            <p className="text-sm text-white text-center">
                                {" "}
                                A space designed with women at its heart. To relax, to be taken care of, to find yourself again. This is a space that lets you be, without any judgement. So walk in, let your hair down, or colour it red. Whatever your heart fancies, we promise to take care of you.
                            </p>

                            <button className="bg-gradient-to-r from-blue-600 to-purple-800 hover:bg-gradient-to-l uppercase text-medium tracking-wide text-white font-extrabold py-4 px-6 rounded-lg">Book an Appointment</button>

                            {/* <Image src="/images/1.jpeg" width="600" height="150" objectFit="contain" alt="logo" /> */}
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-center justify-center mt-20">Contact us Page</h3>

            </main>
            
            
        </>
    )
}

export default Contact;