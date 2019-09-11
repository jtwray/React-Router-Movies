import React from "react"
export default function Director( {movie}, {stars} ) {
    return (
        <div>
            {movie.stars&&movie.stars.map( star => (
                <div key={star} className="movie-star">
                    {star}
                </div>
            ) )}
        </div>
    )
}


