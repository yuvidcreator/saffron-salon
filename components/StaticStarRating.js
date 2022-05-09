import { StarIcon } from '@heroicons/react/solid';
import React from 'react';


function StaticStarRating(props) {
    return (
        <>
            <div className="text-center justify-center p-2">
                {/* <h3>StaticStarRating</h3> */}
                <div className="flex justify-center flex-wrap">
                    { [...Array(props.number)].map(i => {
                        const ratingValue = i + 1;

                        return (
                            <>
                                <label>
                                    <StarIcon className="w-5 text-yellow-500" />
                                </label>
                            </>
                        )
                    }) }
                </div>
                
            </div>
        </>
    )
}

export default StaticStarRating