import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { addToCart, increaseItem, removeItem } from "../../Redux/cartSlice";
import { menuItemsData } from "./Data";
const Menu = () => {
const [buttonText, setButtonText] = useState("Add")
const dispatcher = useDispatch()

const navigate = useNavigate()
const itemisAdded = (e)=>{
  dispatcher(addToCart(e))
  

}
  return (
    <div>
      <h1 className="font-semibold text-center uppercase text-5xl pt-16 pb-32 font-serif  text-gray-700">
    
        Menu
        
      </h1>

      <div className="grid gap-4 gap-y-32 grid-cols-5 px-10 pb-16 ">
        {menuItemsData.map((e, id) => (
          <div className="rounded-xl shadow-lg w-56 px-4 hover:cursor-pointer py-4 flex flex-col justify-around relative bg-white  transform  hover:scale-105 transition duration-300" key={id}>
            <div className="flex justify-center items-center">
              <img src={e.img} alt="cardimg" className="absolute -top-20 w-44 " />
            </div>
            <div className="h-28"></div>
            <h4 className="font-bold uppercase text-xl">{e.name}</h4>
            <p className="text-gray-500 text-base ">{e.info}</p>
            <div className="flex justify-between ">
              <p className="font-bold text-lg">${e.price}</p>
              <button className="font-bold bg-black  transform  hover:scale-110 transition duration-300 text-white px-3 py-1 uppercase rounded-full"
              onClick={()=>itemisAdded(e)}>
                {buttonText}
              </button>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
