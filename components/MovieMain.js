import React from 'react'
import Image from 'next/image'
import StarBar from './StarBar'

export default function MovieMain({movie,url_string}) {
  return (
    <div className='relative overflow-hidden mb-5'>
      <div className='bg-gradient-to-b from-black absolute h-full w-full -z-25'></div>
      <div style={{backgroundImage:`url(${url_string})`}} className='bg-cover blur absolute h-full w-full bg-center -z-40'></div>
      <div className='py-10 px-5 sm:grid md:grid-cols-2 blur-none'>
      <div className='display:inline-block'>
      <Image
            layout="responsive"
            src={url_string}
            height={1080}
            width={1920}
            />
        </div>
        <div className='md:ml-3 blur-none'>
          <h1 className='text-4xl font-bold text-white'>{movie.title}</h1>
          <h2 className='text-xl font-bold text-white'>{movie.tagline}</h2>
          <p className='mb-5'>{movie.release_date}</p>
          <p className='mb-5 md:w-3/4 text-white'>{movie.overview}</p>
          <StarBar rating={movie.vote_average}/>
        </div>
      </div>
      </div>
  )
}
