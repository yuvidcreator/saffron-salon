import Image from "next/image"


function Brands() {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-6 px-8 max-w-[1400px] mx-auto">
                <h2 className="text-lg font-medium text-pink-600">We are Best in</h2>
                <div className="brand group">
                    {/* <h3>Hair Services</h3> */}
                    <Image src="/images/hairdresser.png" alt="" layout="fill" objectFit="cover" />
                    {/* <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
                        <source src="/videos/disney.mp4" type="video/mp4" />
                    </video> */}
                </div>
                <div className="brand group">
                    {/* <h3>Eye Liner Services</h3> */}
                    <Image src="/images/hair-cutting.png" alt="" layout="fill" objectFit="cover" />
                    {/* <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
                        <source src="/videos/pixar.mp4" type="video/mp4" />
                    </video> */}
                </div>
                <div className="brand group">
                    <Image src="/images/mask.png" alt="" layout="fill" objectFit="cover" />
                    {/* <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
                        <source src="/images/13.mp4" type="video/mp4" />
                    </video> */}
                </div>
                <div className="brand group">
                    <Image src="/images/nail-polish.png" alt="" layout="fill" objectFit="cover" />
                    {/* <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
                        <source src="/images/13.mp4" type="video/mp4" />
                    </video> */}
                </div>
                <div className="brand group">
                    <Image src="/images/eyelashes.png" alt="" layout="fill" objectFit="cover" />
                    {/* <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
                        <source src="/videos/national-geographic.mp4" type="video/mp4" />
                    </video> */}
                </div>
            </div>

            <div className="flex justify-center items-center text-center mt-10 lg:ml-72 lg:mr-72 ml-12 mr-12 mb-10">
                <p>
                    Saffron Beauty Salon gives you the best experience in beauty, style, and wellness through high-end, personalized services, satiesfied customer service, and top-notch talent. We also provide one-on-one consultations and hair-treatment consultations. We understand that as beauty therapists, we are in a position of trust and offer full confidentiality.
                </p>
            </div>
        </section>
    )
}

export default Brands;