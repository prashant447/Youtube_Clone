import React from 'react'

import { Link } from 'react-router-dom'
import VideoLength from '../Utils/VideoLength'
import {BsFillCheckCircleFill} from 'react-icons/Bs'
import abbreviateNumber from 'number-abbreviate'

const SuggestionVideo = ({video}) => {
 
      return (
    <>

       <Link to = {`/video/${video?.videoId}`}>
        <div className='flex  mb-3'>
         <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img src={video?.thumbnails?.[0]?.url} alt=""  className='h-full w-full object-cover'/>

          {video?.lengthSeconds && (<VideoLength time={video?.lengthSeconds}/>)}
          </div>

          
          <div className='flex text-white mt-3'>
            


            <div className='flex flex-col ml-3 overflow-hidden'>
              <span className='text-sm font-bold  lg:text-xs xl-text-sm text-white line-clamp-2'>{video?.title}</span>
              <span className='text-[12px] font-semibold items-center flex mt-2'>{video.author.title}
              {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (<BsFillCheckCircleFill className='text-white/[0.5] text-[12px]  ml-1'/>)}
              </span>

              <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                     <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                     <span className='flex text-[24px] leading-[5px] font-bold text-white/[0.7] realtive top-2 mx-1'>.</span>
                     <span className='truncate'>{video?.publishedTimeText}</span>
              </div>

            </div>
          </div>

         
        </div>


       </Link>
        
    </>
  )
 
}

export default SuggestionVideo
