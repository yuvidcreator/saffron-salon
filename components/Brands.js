import Image from "next/image"


function Brands() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
            <h2 className="text-2xl text-pink-600">Our Services</h2>
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
                <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
                    <source src="/videos/national-geographic.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Brands;