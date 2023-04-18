import React from 'react'

const Footer = () => {
  return (
    <div className='px-10 flex justify-between  border-t-2 py-8 '>
        
        <div className='w-1/2'>
        <p className='font-semibold text-xl'>We're a team of Professional cooks who are excited about their food,<br/> 
        amazing skills and expertiness in cooking. </p>

        </div>
        <div>
            <div className='flex items-center space-x-3 font-bold font-serif  text-xl uppercase'>
            <img src='images/logo.png' alt='logo' width="50" height="50"/>
          <div>
          <h3>Food Loop</h3>
          <p className='text-sm tracking-wider '>Restaurant & BBQ</p>
          </div>
            </div>
          
        </div>
    </div>
  )
}

export default Footer