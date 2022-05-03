import Image from 'next/image';
import { useRouter } from "next/router";;

function Intro() {
    const router = useRouter();

    return (
        <>
            <div className="relative min-h-[calc(100vh-72px)] grayscale-[30%]">
                <Image src="/images/saffron-banner.webp" layout="fill" objectFit="cover" alt="hero background image" />
            </div>
            <div className="flex justify-center items-center">
                <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">

                    <Image src="/0002.png" width="600" height="150" objectFit="contain" alt="logo" />
                    
                    
                    {/* <button className="bg-blue-600 uppercase text-m tracking-wide font-extrabold py-4 px-6 rounded hover:bg-[#0485ee]">
                        Book An Appointment
                    </button> */}
                    <button className="bg-gradient-to-r from-blue-600 to-purple-800 hover:bg-gradient-to-l uppercase text-medium tracking-wide font-extrabold py-4 px-6 rounded-lg">Book an Appointment</button>

                    <p className="text-xs text-center">
                        {" "}
                        Get premier Access to Raya and the Latest Dragon for an additional fee with a Disney+ subsription. As of 04/20/22, the price of Disney+ and the Disney Bundle will increase by $.
                    </p>

                    {/* <Image src="/images/1.jpeg" width="600" height="150" objectFit="contain" alt="logo" /> */}
                </div>
            </div>
        </>
    )
}

export default Intro;