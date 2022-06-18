import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import Brands from '../components/Brands'
import CallToAction from '../components/CallToAction'
import Gallery from '../components/Gallery'
import Intro from '../components/Intro'
import Rodamap from '../components/Rodamap'
import Services from '../components/Services'
import Team from '../components/Team'


export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover' />
        <title>Saffron Beauty Salon</title>
        <meta name="keywords" content="Saffron Beauty Salon, Beauty Parlour in dhanori, Makeup, Bridal makeup, Nails and Nail extensions, Waxing, hair smoothening, full body massage" />
        <meta name="description" content="Get styled by Saffron Beauty Salon. We gives you the best experience with high quality professionals in Beauty & Hair Services, Makeup, Nails & Female Full Body Massages." />
      </Head>

      <main>
        <Intro />
        <Brands />
        <Services />
        <CallToAction />
        {/* <Rodamap /> */}
        <Gallery />
        {/* <Team /> */}
        <br />
        <br />
      </main>

    </>
  )
}
