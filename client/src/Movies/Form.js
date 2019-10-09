import React, {useState} from "react"

export default function Form({reviews,setReviews}) {

    const initialNewReview={title: " ", comment: " "};
    const [newReview, setNewReview]=useState( {initialNewReview} );
   
    
    const handleSubmit=event => {
        event.preventDefault();
        console.log( newReview );
        (!newReview.title||
            !newReview.comment)? alert("Please fill in all fields"): setReviews([newReview,...reviews])
        resetForm();
    };



    const handlenewReviewChange=event => {
        event.preventDefault();
        setNewReview( {
            ...newReview,
            [event.target.name]: event.target.value
        } );
        console.log( newReview.title )
    };

    const resetForm=( event ) => {
        setNewReview( initialNewReview )
    } 

      return (
        <>
            <button type="reset" value="reset" onClick={resetForm}>reset</button>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                     <input
                            type="textarea"
                            name="title"
                            placeholder="title"
                            value={newReview.title||initialNewReview.title}
                            onChange={handlenewReviewChange} />
                        <button type="submit">submit</button>
                    </label>
                </form>
                {newReview.title}
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Comment:
                         <input
                                type="textarea"
                                name="comment"
                                placeholder="comment"
                                value={newReview.comment||initialNewReview.comment}
                                onChange={handlenewReviewChange} />
                            <button type="submit">submit</button>
                        </label>
                    </form>
                   
                </div>
            </div>
        </>
    )
}