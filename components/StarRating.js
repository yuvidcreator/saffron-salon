import { StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';


function StarRating(props) {
    const [rating, setRating] = useState(null);
    const [ratehover, setRatehover] = useState(null);

    return (
        <>
            <div className="text-center justify-center">
                {/* <h3>StarRating</h3> */}
                <div className="flex justify-center flex-wrap">
                    { [...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                            <>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="rating" 
                                        value={ratingValue} 
                                        onClick={() => setRating(ratingValue)}
                                    />
                                    <StarIcon 
                                        className={`w-5 cursor-pointer transition duration-300 ${ratingValue <= (ratehover || rating) ? "text-yellow-600" : "text-gray-300"}`} 
                                        onMouseEnter={() => setRatehover(ratingValue)}
                                        onMouseLeave={() => setRatehover(null)}
                                    />
                                </label>
                            </>
                        )
                    }) }
                    <span className="ml-2">{rating}</span>
                </div>
                
            </div>
        </>
    )
}

export default StarRating