import React from 'react'

const LeftNavMenu = ({text, className, icon, action}) => {
  return (
    <>
      <div className= {"text-white  flex items-center px-3 mb-[1px] h-10 text-sm cursor-pointer rounded-lg  hover:bg-white/[0.15] " + className} onClick={action}>
        
        

        <span className='text-white mr-5'>{icon}</span>
        {text}
      </div>
    </>
  )
}

export default LeftNavMenu
