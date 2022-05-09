import Head from 'next/head'
import Image from 'next/image'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Intro from '../components/Intro'
import Rodamap from '../components/Rodamap'
import Services from '../components/Services'
import Team from '../components/Team'


export default function Home() {
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
        <Brands />
        <Services />
        <Gallery />
        <Rodamap />
        <Team />
      </main>
      
      <Footer />
    </>
  )
}
