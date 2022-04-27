import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

export default function FilledStar({isClicked}) {
  return (
    <div className='relative'>
        {isClicked? <StarIcon className='h-7 blur-[.25px] text-pink-100'/> : <StarIcon className='h-7 blur-[.25px] text-pink-300'/>}
        <StarIcon className='h-9 text-purple-600 blur-sm absolute -top-1 -left-1 -z-10'/>
        <StarIcon className='h-9 text-pink-600 blur absolute -top-1 -left-1 -z-20'/>
    </div>
  )
}
