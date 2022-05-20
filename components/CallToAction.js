import Image from 'next/image';
import Link from 'next/link';

function CallToAction() {
    return (
        <>
            <section className="relative py-14 2xl:py-14 bg-gray-800 overflow-hidden">
                {/* <Image className="hidden lg:block absolute top-0 right-0 h-128 w-128 -mt-52 -mr-52" src="zospace-assets/lines/circle.svg" alt="" />
                <Image className="hidden lg:block absolute bottom-0 left-0 h-128 w-128 -mb-52" src="zospace-assets/lines/full-circle.svg" alt="" />
                <Image className="block absolute bottom-0 left-0 h-24 md:h-32 lg:h-72 lg:ml-24 -mb-8" src="zospace-assets/images/five-stars.svg" alt="" /> */}
                {/* <Image className="block absolute bottom-0 left-0 h-128 w-128 -mb-96 -ml-24" src="/images/saffron-salon.jpg" width={1200} height={400} alt="" /> */}
                <div className="container px-3 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-lg text-blue-400 font-bold">What&apos;s new at Shuffle</span>
                        <h2 className="my-10 text-5xl lg:text-6xl font-bold font-heading text-white">Creating Your best Look</h2>
                        <div className="max-w-md mx-auto">
                            <p className="mb-20 text-lg text-gray-200">If you have a look you want but don't know how to achieve, we can work together to form a plan. Stick with us. We offer a free clean-up cut between your appointments and solid advice on how to keep your hair healthy!</p>
                            <Link href="https://wa.me/917208875838/" passHref>
                                <a className="inline-block mb-4 sm:mb-0 sm:mr-4 py-5 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Join us now</a>
                            </Link>
                            <Link href="tel:+91-7208875838" passHref>
                                <a className="inline-block py-5 px-12 text-white font-bold border border-gray-300 hover:border-gray-200 rounded-full">Call Now</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction