import React from 'react'
import { getMangaResponse } from '@/libs/api-libs'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const Page = async({params: { id }}) => {
  const manga = await getMangaResponse(`manga/${id}`)

  return (
    <div className='w-full'>
        <div className='text-white text-2xl pt-2 px-4 font-bold italic'>
            {manga?.data?.title || "Manga Title"} - {manga?.data?.published.prop.from.year}
        </div>
        <div className='text-white text-lg pt-2 px-4 italic'>
            {manga?.data?.title_japanese}
        </div>
        <div className='py-4 px-4 flex gap-2 text-white overflow-auto'>
          <div className='w-36 flex flex-col justify-center items-center rounded border border-white p-2'>
            <h3>Rank</h3>
            <p>{manga?.data?.rank}</p>
          </div>
          <div className='w-36 flex flex-col justify-center items-center rounded border border-white p-2'>
            <h3>Score</h3>
            <p>{manga?.data?.score}</p>
          </div>
          <div className='w-36 flex flex-col justify-center items-center rounded border border-white p-2'>
            <h3>Chapters</h3>
            <p>{manga?.data?.chapters}</p>
          </div>
          <div className='w-36 flex flex-col justify-center items-center rounded border border-white p-2'>
            <h3>Status</h3>
            <p>{manga?.data?.status}</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 px-4'>
            <div className='md:col-span-1 w-full'>
                <Image
                    className="rounded-lg w-full object-cover" 
                    src={manga?.data?.images.webp.image_url} 
                    alt={manga?.data?.title || "Manga Cover"} 
                    width={350} 
                    height={350} 
                    priority
                />
            </div>
            <p className='text-white text-lg md:col-span-2 mt-4 md:mt-0'>
                {manga?.data?.synopsis}
            </p>
        </div>
        <div className='bottom-0 left-0 w-full pt-7 bg-black/50 flex'>
        <Link 
          href="/" 
          className='bg-white/20 rounded-full px-6 py-3 hover:bg-white/30 transition-all flex items-center gap-2'
        >
          <ChevronLeft className='text-white' size={24} />
          <span className='text-white'>Back</span>
        </Link>
      </div>
    </div>
  )
}

export default Page