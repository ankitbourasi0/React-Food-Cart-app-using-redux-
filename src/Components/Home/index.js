import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Menu from './Menu'
import {FaShoppingCart} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {
const navigate = useNavigate()
  const  TotalProducts = useSelector(state=> state.totalQuantity)
  return (
    <div className='px-16 relative bg-slate-100'>
        <button className='block right-10 top-5 fixed justify-center items-center   transform  hover:scale-110 transition duration-300 bg-slate-800 hover:bg-black px-4 py-4 space-x-4  rounded-full text-white' onClick={()=>navigate('/cart')}>
        <FaShoppingCart fontSize="25" />
        <p className='absolute -top-2 right-0 bg-red-400 rounded-full px-2' >{TotalProducts? TotalProducts : ""}</p>
      
        </button>
        <Banner/>
        <Menu/>
        <Footer/>
    </div>
  )
}

export default Home