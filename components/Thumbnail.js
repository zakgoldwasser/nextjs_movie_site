import React from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import PopularityBar from './PopularityBar'
import Link from 'next/link'

export default function Thumbnail({result}){
    const BASE_URL ="https://image.tmdb.org/t/p/original/"
  return (
    <Link href={'/moviepage/'+result.id}>
    <div className='p-2 group cursor-pointer transition duration-200
     ease-in-out transform hover:z-50'>
         <div style={{height:'auto'}} className='position: relative z-10'>
         <div>
            <Image
            layout="responsive"
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
            }
            height={1080}
            width={1920}
            />
        <div className='bg-gradient-to-t from-[#131313] h-full w-full position: absolute bottom-0 opacity-0 group-hover:opacity-100'/>
        </div>
        <div className='p-2 position: absolute bottom-0 opacity-0 group-hover:opacity-100 w-full'>
            <div className='h-14 w-14'>
                {(result.vote_average>0)?<PopularityBar vote_average={result.vote_average}/>:null}
            </div>
        <div className='p-2'>
        <h2 className='mt-1 text-2xl text-white translate-all font-bold'>
            {result.title || result.original_name}</h2>
            <p className='truncate max-w-md'>{result.overview}</p>
        <p className='flex items-center'>
            {result.media_type && `${result.media_type} •`}{" "}
            {result.release_date || result.first_air_date} •{" "}
            <ThumbUpIcon className='h-5 mx-2' /> {(result.vote_count > 0)? result.vote_count: "No Votes"}
        </p>
        </div>
        </div>
        </div>
        <div className='bg-gradient-to-r from-pink-600 to-purple-600 
                        h-full w-full position: absolute bottom-0 blur-md z-0 
                        inset-0 opacity-0 group-hover:opacity-100 animate-tilt'></div>
    </div>
    </Link>
  )
}
