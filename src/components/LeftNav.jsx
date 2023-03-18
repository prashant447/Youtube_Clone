

import React, { useContext } from 'react'

import { categories } from '../Utils/Icons'
import {  useNavigate } from 'react-router-dom'
import LeftNavMenu from './LeftNavMenu'
import { Context } from '../context/contextApi'


const LeftNav = () => {
  const {selectCategories, setSelectCategories ,mobileMenu} = useContext(Context)
  const navigate = useNavigate()


  const clickHandler = (name, type) =>{
        switch(type){
          case 'category':
            return setSelectCategories(name)
            case 'home':
              return setSelectCategories(name)
              
              
              case 'menu':
                return false
                
                default :
                break;
              }
              
            }
           




  return (
    <>
      <div className={`md:block w-[240px] overflow-y-auto h-full py-4  z-10 overflow-hidden bg-black absolute md:relative  translate-x-[-230px] md:translate-x-0 transition-all ${mobileMenu ?  "translate-x-0" : ''}`}>
        <div className='flex px-5 flex-col '>
          {
               categories.map((item) =>{
                return(
                        <div key={item.name}>
                         <LeftNavMenu text={item.type === 'home'? 'Home': item.name}
                         icon={item.icon}
                         action = {() =>{
                          clickHandler(item.name, item.type)
                          // console.log(item.name, item.type)
                          navigate('/')
                         }}
                          className= {`${selectCategories === item.name ? 'bg-white/[0.2]': ""}`}/>
                         
                         
                        {
                          item.divider && (<hr className='my-5 border-white[0.2]'></hr>)
                        }
                        </div>
                )
               })
          }
           <hr className='my-5 border-white/[1.1]'></hr>
           <div className='text-white text-[10px]'>
              Clone By TechGeeks360
           </div>


        </div>

      </div>
    </>
  )
}

export default LeftNav

