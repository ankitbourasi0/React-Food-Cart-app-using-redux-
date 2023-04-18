import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Banner = () => {
  return (
    <div className='w-full  h-screen '>
        
        <nav className='pb-16 pt-4'>
        <div>
            <div className='flex items-center space-x-3 font-bold font-serif  text-xl uppercase'>
            <img src='/images/logo.png' alt='logo' width="50" height="50"/>
           
          <div>
          <h3>Food Loop</h3>
          <p className='text-sm tracking-wider '>Restaurant & BBQ</p>
          </div>
            </div>
          
        </div>
        </nav>
        <div className='flex '>

        {/* left area */}
        <div className='flex flex-col  space-y-6 justify-center w-1/2'>
            <div>
                <h1 className='font-bold text-6xl'>Delicious food for your cravings</h1>
            </div>
            <div>
                <h3 className='font-semibold text-gray-600 text-2xl'>
                    We made fresh and healthy meals with different recipes
                </h3>
            </div>
            <div>
                <button className='bg-gray-900 hover:bg-black px-6 py-4 text-white text-xl transform  hover:translate-x-2 hover:scale-x-105 transition duration-300 rounded-l-full rounded-t-full flex  justify-between  space-x-4 items-center font-semibold '>
                  <p>View Menu</p>
                    <div className='font-bold '>
                    <AiOutlineArrowRight/>
                    </div>
                  
                </button>
            </div>

        </div>
        {/* right area  */}
        <div className='flex justify-center items-center w-1/2'>
            <img src='images/banner.png' className='w-full ' alt='banner'/>
        </div>
        </div>
    </div>
  )
}

export default Banner