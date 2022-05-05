import Image from 'next/image';
import { useRouter } from "next/router";

function Intro() {
    const router = useRouter();

    return (
        <>
            <div className="relative min-h-[calc(100vh-72px)] bg-scroll">
                <Image src="/images/saffron-front-edit.png" layout="fill" objectFit="cover" alt="hero background image" />
                <div className="flex justify-center items-center">
                <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">

                    {/* <Image src="/0002.png" width="600" height="150" objectFit="contain" alt="logo" /> */}
                    <h3>Welcome to</h3>
                    <div className="text-6xl text-center justify-center font-extrabold"><h1>Saffron<br /> <span className=" text-pink-500">Beauty Salon</span></h1></div>
                    
                    {/* <button className="bg-blue-600 uppercase text-m tracking-wide font-extrabold py-4 px-6 rounded hover:bg-[#0485ee]">
                        Book An Appointment
                    </button> */}
                    

                    <p className="text-sm text-center">
                        {" "}
                        A space designed with women at its heart. To relax, to be taken care of, to find yourself again. This is a space that lets you be, without any judgement. So walk in, let your hair down, or colour it red. Whatever your heart fancies, we promise to take care of you.
                    </p>

                    <button className="bg-gradient-to-r from-blue-600 to-purple-800 hover:bg-gradient-to-l uppercase text-medium tracking-wide font-extrabold py-4 px-6 rounded-lg">Book an Appointment</button>

                    {/* <Image src="/images/1.jpeg" width="600" height="150" objectFit="contain" alt="logo" /> */}
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Intro;