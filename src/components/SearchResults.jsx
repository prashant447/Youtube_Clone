import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/contextApi'
import { fetchApi } from '../Utils/api'
import LeftNav from './LeftNav'
import SearchResultVideo from './SearchResultVideo'

const SearchResults = () => {

  const [result, setResult] = useState()
  const {searchQuery} = useParams()
  const {setLoading }= useContext(Context)


 useEffect(() => {
  document.getElementById('root').classList.add('custom-h')
  fetchSearchResultsData()
 }, [searchQuery])

 const fetchSearchResultsData = () =>{
  setLoading(true)
  fetchApi(`search/?q=${searchQuery}`)
  .then( (res) =>{
    setResult(res?.contents)
    setLoading(false)
    })
 }
 
  


  return (
    <>
       <div className='flex flex-row h-[calc(100%-56px)]'>
        <LeftNav/>
        <div  className='grow  w-[calc(100%-240px)] overflow-y-auto bg-black'>
              <div className='grid grid-cols-1 gap-2 p-5'>
                  {
                    
                    result?.map((item) =>{
                      if (item?.type !== 'video') 
                        return false;
                      

                      let video = item?.video
                      return(
                  
                          <SearchResultVideo key={video?.videoId} video={video}/>
                        
               
                      )
                    })
                  }
              </div>
        </div>
       </div>
      
    </>
  )
}

export default SearchResults
