import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import BookButton from './BookButton';
import StaticStarRating from './StaticStarRating';

function Intro() {
    const router = useRouter();

    return (
        <section>
            <div className="relative min-h-[calc(100vh-72px)] bg-scroll">
                <Image src="/images/saffron-front-edit.png" layout="fill" objectFit="cover" alt="hero background image" />
                <div className="flex justify-center items-center">
                    <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">

                        {/* <Image src="/0002.png" width="600" height="150" objectFit="contain" alt="logo" /> */}
                        <h2 className="text-white">Welcome to</h2>
                        <div className="text-3xl md:text-5xl text-center text-white justify-center font-extrabold">
                            <h1>Saffron<br /> <span className=" text-pink-500">Beauty Salon</span></h1>
                            <StaticStarRating number={5}/>
                        </div>
                        <h3 className="text-white text-xl font-semibold">Creating Your best Look</h3>
                        {/* <button className="bg-blue-600 uppercase text-m tracking-wide font-extrabold py-4 px-6 rounded hover:bg-[#0485ee]">
                            Book An Appointment
                        </button> */}
                        

                        <p className="text-sm text-white text-center">
                            {" "}
                            A space designed with women at its heart. To relax, to be taken care of, to find yourself again. This is a space that lets you be, without any judgement. So walk in, let your hair down, or colour it red. Whatever your heart fancies, we promise to take care of you.
                        </p>
                        <BookButton />

                        {/* <Image src="/images/1.jpeg" width="600" height="150" objectFit="contain" alt="logo" /> */}
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Intro;