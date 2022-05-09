import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from "next/image"
import Link from "next/link"



function Team(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
            }
        };

    return (
        <>            
            <div className="gallery container relative z-10 mx-auto bg-repeat py-12 heropattern-plus-gray-700">
                <h2 className="mb-8 text-center text-3xl font-semibold underline decoration-pink-600 xl:text-4xl">Team</h2>

                
            </div>
        </>
    )
}

export default Team