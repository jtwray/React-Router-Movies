import React from "react"
export function Review( {reviews} ) {
    return (
        <>
            {reviews.map( ( rvw, index ) => (
                <div key={index+rvw.title}>
                    <h2>{rvw.title}</h2>
                    <h3>{rvw.comment}</h3>


                </div> ) )}
        </>
    )
}