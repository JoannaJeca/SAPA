import { NavLink } from "react-router-dom";
import Header from "../Block/Header"
import {FaAngleRight} from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri";

const AddToCart = ()=>{
    return(
        <div>
            <Header/>
            <div className="w-full h-[70vh] bg-red-500 flex justify-center">
                <div className="w-[90%] h-[100%] bg-red-700">
                   <div className="text-[40px] font-bold w-full justify-center flex-col items-center flex">Shopping Cart
                  <div className="flex w-[120px] justify-center ">
                  <NavLink to="/">
                  <p className="text-[16px] text-gray-400 hover:text-orange-600 transition-all duration-300 hover:transition-all cursor-pointer font-normal">Home</p>
                  </NavLink>
                   <FaAngleRight style={{fontSize:"19px", alignSelf:"center"}} />
                   <p className="font-normal text-[17px]">Page</p>
                  </div>
                   </div>   
                   <br/>
                   <br/>
                   <div className="w-full flex ">
                      <div className="w-full flex ">
                     <p className="w-[42%] border-b pb-3">Product</p>
                     <div className="w-[58%] border-b flex justify-around pb-3">
                        <p>Price</p>
                        <p>Qty</p>
                        <p>Total</p>
                     </div>
                   </div>
                   </div>
                    <div className="pl-[40px] py-[50px] flex   items-center justify-between">
                        <div className="w-[570px] ">My name is Adisa Halimat from primary 1 b</div>
                        <div className="w-[200px] pl-[23px]">$20590</div>
                        <div  className="w-[200px] pl-[30px]" >hjfjse</div>
                        <div className=" flex justify-end text-end w-[100px]">wyidgiwgd</div>
                        <RiDeleteBin5Line/>
                    </div>
                    <hr/>
                </div>
                   {/* {Array.from({length:3}, ()=>(
                    <div>
                        
                    </div>
                   ))} */}
            </div>
        </div>
    )
};
export default AddToCart;
//a strong customer focus,” said John Stevenson, marketing specialist at My GRE Exam Preparation. “They create a culture that is centered around their customers and focus their processes, products and services around their services needs.2 Feb 2021