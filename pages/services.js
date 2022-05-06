import Head from 'next/head'
import Image from 'next/image'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Intro from '../components/Intro'

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
                <Intro />
                <h3 className="text-2xl font-bold text-center justify-center mt-20">Services Page</h3>
            </main>
            
            <Footer />
        </>
    )
}

export default services