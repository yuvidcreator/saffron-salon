import Link from 'next/link';

function BookButton() {
    return (
        <>
            <Link href="tel:+91-7208875838" passHref>
                <a target={"new"} className="bg-gradient-to-r from-blue-600 to-purple-800 hover:bg-gradient-to-l uppercase text-sm md:text-medium tracking-wide text-white font-extrabold py-3 px-5 rounded-lg">Book an Appointment</a>
            </Link>
        </>
    )
}

export default BookButton