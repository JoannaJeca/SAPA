import {LiaAngleDownSolid } from 'react-icons/lia'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsMinecart } from "react-icons/bs"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full h-[90px] shadow-lg flex items-center sticky justify-center">
        <div className="w-[95%] items-center h-[100%] flex justify-between">
            <div className="cursor-pointer">
                <img src="https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/logo-1.png" width="100%"/>
            </div>
            <div className="w-[400px] h-[100%] flex items-center justify-between">
                <NavLink
                 to="/" 
                 className={({isActive} :any )=>
                   isActive ? "text-orange-600"
                   : "text-black" 
                }>
                <nav className="flex hover:transition-all duration-500 font-[600] cursor-pointer">Home</nav>

                </NavLink>
                
                <nav className="flex hover:transition-all duration-500 hover:text-orange-600 font-[600] cursor-pointer">Shop <LiaAngleDownSolid  size={13} style={{color:"black", margin:"5px", marginRight:"0px", }}/></nav>
                <nav className="flex hover:transition-all duration-500 hover:text-orange-600 font-[600] cursor-pointer">Pages <LiaAngleDownSolid  size={13} style={{color:"black", margin:"5px", marginRight:"0px", }}/></nav>
                <nav className="flex hover:transition-all duration-500 hover:text-orange-600 font-[600] cursor-pointer">Blogs <LiaAngleDownSolid  size={13} style={{color:"black", margin:"5px", marginRight:"0px", }}/></nav>
                <nav className="flex hover:transition-all duration-500 hover:text-orange-600 font-[600] cursor-pointer">Contact us</nav>
            </div>
            <div className="w-[110px] flex justify-between relative">
                <IoSearchOutline style={{fontSize:"26px"}}/>
                <CiHeart style={{fontSize:"28px"}}/>
                <NavLink 
                to="/add-to-cart"
                className={({isActive} : any)=>
                 isActive ? "text-orange-600"
                  : "text-black"
                }>
                <div className="border-l hover:text-orange-600 hover:transition-all duration-300">
                <BsMinecart style={{fontSize:"26px"}}/>
                <div className="w-[33px] h-[16px] px-[10px] text-white rounded-full text-[11px] absolute left-[90px] bottom-[17px] bg-orange-600 items-center justify-center flex font-semibold cursor-pointer ">0</div>
                </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header