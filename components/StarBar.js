import React, {useState} from 'react'
import { StarIcon as StarOutline } from '@heroicons/react/outline'

import FilledStar from './FilledStar'



export default function StarBar({rating}) {
    const [roundedRating,setRoundedRating] = useState(Math.floor(rating))
    const [hoverRating,setHoverRating] = useState(null)
    const [isClicked,setIsClicked] = useState(false)

    function starClick(counter){
        setIsClicked(true)
        setRoundedRating(counter)
    }

  return (
    <>
    <div className='flex items-center'>
        {[...Array(10)].map((star,i)=> {
            const counter = i+1
            return(
            <label key={counter} className='cursor-pointer'>
                <input 
                    style={{display:"none"}} 
                    type="radio" value={counter} 
                    onClick={()=>starClick(counter)}
                    />
                <div onMouseEnter={()=>setHoverRating(counter)} onMouseLeave={()=>setHoverRating(null)}>
                {(counter <= (hoverRating||roundedRating))? <FilledStar isClicked={isClicked}/>:<StarOutline className='h-7'/>}
                </div>                   
                
            </label>
        )})}
        <p className='text-2xl font-bold text-white ml-2'>{rating}/10</p>
    </div>
    {isClicked? <p>You gave this movie {roundedRating}/10 stars</p>:null}
    </>
  )
}
