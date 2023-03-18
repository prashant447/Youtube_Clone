import React, { useContext, useState } from 'react'
import '../styles/Header.css'
import { AiOutlineSearch, AiOutlineVideoCameraAdd, AiOutlineBell } from 'react-icons/Ai';
import { CgClose} from 'react-icons/Cg';
import { SlMenu } from 'react-icons/Sl';

import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Context} from '../context/contextApi';
import Loader from './loader/Loader';
import ytLogoMobile from "../assets/images/yt-logo-mobile.png";
import ytLogo from "../assets/images/yt-logo.png";


const Header = () => {
     const [searchQuery, setSearchQuery] = useState('')
     

     const {mobileMenu, setMobileMenu, loading} = useContext(Context);

     let navigate = useNavigate();
   
     const searchHandler = (event) =>{
          if ((event?.key === 'Enter' || event === 'searchButton') &&  searchQuery?.length>0) {
            navigate(`/searchresult/${searchQuery}`)
            // setSearchQuery('')
          }
         
     }

     const mobileMenuToggle = () =>{
      setMobileMenu(!mobileMenu)
     }

     let {pathname} = useLocation();
      const pageName = pathname?.split('/')?.filter(Boolean)?.[0]



  return (
    <>
      <div className='sticky top-0 flex justify-between z-50 h-14 px-4 items-center md:px-5 bg-white dark:bg-black'>
       {loading && <Loader/>}
        

        <div className='flex h-5 items-center'>
             {pageName !== 'video' && (
              <div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[black]/[0.6]' onClick={mobileMenuToggle}>
                {mobileMenu ? (<CgClose className='text-white text-xl '/>) : (<SlMenu className='text-white text-xl'/>)}
              </div>
             )}


             <Link to="/" className='flex h-5 items-center'>
             <img src={ytLogo} alt=""  className='h-full hidden dark:md:block'/>
             <img src={ytLogoMobile} alt=""  className='h-full md:hidden '/>

             </Link>


            

      
      </div>
      <div className='group flex items-center '>
                  <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">

                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                      <AiOutlineSearch className='text-white text-xl'/>
                    </div>

              


             <input type="text" className='bg-transparent outline-none text-white pr-5 pl-5 w-44 md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]' 
             onChange={(e) => setSearchQuery(e.target.value)}
             value={searchQuery} onKeyUp={searchHandler}/>





        <button className='w-[40px] md:w-[60px] md:h-10 h-8 flex items-center justify-center border-0 border-l-0 boder-[#303030] rounded-l-3xl bg-white/[0.1]'  onClick={() => searchHandler("searchButton")}>
          <AiOutlineSearch className='text-white text-xl'/>
             </button>
        </div>
      </div>
          <div className="flex items-center">
              <div className='hidden md:flex'>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#3e3e3e]/[0.6]">
                     <AiOutlineVideoCameraAdd className='text-white text-xl cursor-pointer'/>
                
                  </div>

                  <div className="flex items-center justify-center h-10 w-10 ml-2 rounded-full hover:bg-[#3e3e3e]/[0.6]">
                     
                     <AiOutlineBell className='text-white text-xl  cursor-pointer'/>
                      </div>


                     
              </div>

              <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 cursor-pointer">
                        <img src="https://robohash.org/stefan-one" alt="" />
                      </div>

          </div>


      
             </div>

       
    
    </>
  )
}

export default Header
