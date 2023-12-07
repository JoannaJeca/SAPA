import { useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";

const FlashSales = () => {
const [days, setDays] = useState<number> (0)
const [hours, setHours] = useState<number> (0)
const [minutes, setMinutes] = useState<number> (0)
const [seconds, setSeconds] = useState<number> (0)

useEffect(()=>{
  const Target = new Date("12/5/24 11:59:59")

  const interval = setInterval(()=>{
    const now = new Date()
    const difference = Target.getTime() - now.getTime()

    const d = Math.floor(difference / (1000 * 60 * 60 * 24 ) )
    setDays(d)

    const h = Math.floor((difference) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
    setHours(h)

    const m = Math.floor((difference) % (1000 * 60 * 60 ) / (1000 * 60 ))
    setMinutes(m)

    const s = Math.floor((difference) % (1000 * 60 ) / (1000 ))
    setSeconds(s)
  }, 1000)
  return() => clearInterval(interval)
}, [])

  return (

    <div className='mt-[200px] w-full h-[85vh] flex justify-center items-center'>
      <div className='w-[95%] h-[100%]'>
         <div className="w-full h-[185px] flex   justify-between items-start">
          <div>
          <h2 className='text-[18px] text-gray-600'>ACTIVITY TRACKING</h2>
          <h1 className='text-[58px] font-bold'>Flash Sale</h1>
          </div>
          
          <div className="w-[24%] flex justify-between ">
           <div className="w-[70px] h-[80px] p-[10px] flex wrap font-bold bg-orange-500 flex-col justify-center text-center"><p className='text-[28px] text-white font-bold'>{days}</p> <p className="font-semibold ml-1 text-white text-[14px] text-center">DAYS</p></div>

           <div className="w-[70px] h-[80px] p-[10px] flex wrap font-bold bg-orange-500 flex-col justify-center text-center "><p className='text-[28px] text-white font-bold'>{hours}</p> <p className="font-semibold ml-1 text-white text-[14px] text-center">HOURS</p></div>

           <div className="w-[70px] h-[80px] p-[10px] flex wrap font-bold bg-orange-500 flex-col justify-center text-center"><p className='text-[28px] text-white font-bold'>{minutes}</p> <p className="font-semibold ml-1 text-white text-[14px] text-center">MINS</p></div>

           <div className="w-[70px] h-[80px] p-[10px] flex wrap font-bold bg-orange-500 flex-col justify-center text-center"><p className='text-[28px] text-white font-bold'>{seconds}</p> <p className="font-semibold ml-1 text-white text-[14px] text-center">SECS</p></div> 

          </div>
          
         </div>
    
         <div className="flex justify-between w-full h-[80%]">
          <div className="w-[353px] h-[100%]">
            <div className=" w-full  bg-slate-100 relative transition-all duration-500">
              <div className="z-10 absolute ">
                <p className="w-[50px] text-white h-[27px] bg-red-600 flex items-center justify-center  text-[12px] font-bold mb-2">-5%</p>
                <p className="w-[90px] h-[27px] bg-orange-600 flex items-center justify-center text-white font-semibold text-[14px] ">Featured</p>
              </div>
              
              <div className="-z-10 h-[100%] transition-all duration-200"><img src='https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/product-19-480x638.jpg' height="80%"/></div>
           
            <div className=" w-full absolute bottom-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-slate-100">
              <div className="z-10 absolute ">
                <p className="w-[50px] text-white h-[27px] bg-red-600 flex items-center justify-center  text-[12px] font-bold mb-2">-5%</p>
                <p className="w-[90px] h-[27px] bg-orange-600 flex items-center justify-center text-white font-semibold text-[14px] ">Featured</p>
              </div>
              <div className="absolute right-0 w-[45px] h-[140px] transition-all duration-300">
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white mb-3"><IoSearchOutline size={21}/></p>
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white mb-3"><IoHeartOutline size={21}/></p>
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white"><IoIosGitCompare size={21}/></p>
              </div>
              <div className="-z-10 h-[100%] transition-all duration-200"><img src='https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/product-20-480x638.jpg' height="80%"/></div>
            <div className="w-full h-[45px] absolute bottom-0 bg-gray-100 hover:bg-orange-500 transition-all duration-300 hover:text-white text-[16px] font-[600] flex justify-center items-center hover:transition-all ">Add to Cart</div>
            </div>
            </div>
            <div className="w-[90%]  justify-between">
            <p className="text-orange-500 text-[18px] font-semibold mb-3">$210.00</p>
            <div className="flex items-center relative w-[100px]">
            <div className="absolute ">{"⚫".repeat(5)}</div>
            <div className="absolute ">{"🟠".repeat(4)}</div>
          </div>
            </div>
           
          </div>

          <div className="w-[353px] h-[100%]">
            <div className=" w-full  bg-slate-100 relative transition-all duration-500">
              <div className="z-10 absolute ">
                <p className="w-[50px] text-white h-[27px] bg-red-600 flex items-center justify-center  text-[12px] font-bold mb-2">-6%</p>
                <p className="w-[90px] h-[27px] bg-orange-600 flex items-center justify-center text-white font-semibold text-[14px] ">Featured</p>
              </div>

              <div className="-z-10 h-[100%] transition-all duration-200"><img src='https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/product-02-480x638.jpg' height="80%"/></div>
            
            <div className=" w-full absolute bottom-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-slate-100">
              <div className="z-10 absolute ">
                <p className="w-[50px] text-white h-[27px] bg-red-600 flex items-center justify-center  text-[12px] font-bold mb-2">-6%</p>
                <p className="w-[90px] h-[27px] bg-orange-600 flex items-center justify-center text-white font-semibold text-[14px] ">Featured</p>
              </div>
              <div className="absolute right-0 w-[45px] h-[140px] transition-all duration-300">
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white mb-3"><IoSearchOutline size={21}/></p>
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white mb-3"><IoHeartOutline size={21}/></p>
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white"><IoIosGitCompare size={21}/></p>
              </div>
              <div className="-z-10 h-[100%] transition-all duration-200"><img src='https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/product-04-480x638.jpg' height="80%"/></div>
            <div className="w-full h-[45px] absolute bottom-0 bg-gray-100 hover:bg-orange-500 transition-all duration-300 hover:text-white text-[16px] font-[600] flex justify-center items-center hover:transition-all ">Add to Cart</div>
            </div>
            </div>
            <div className="w-full ">
            <p className="text-orange-500 text-[18px] font-semibold mb-3">$300.00</p>
            <div className="flex items-center relative w-[120px]">
            <div className="absolute ">{"⚫".repeat(5)}</div>
            <div className="absolute ">{"🟠".repeat(4)}</div>
          </div>
            </div>
           
          </div>
          


          <div className="w-[353px] h-[100%]">
            <div className=" w-full  bg-slate-100 relative transition-all duration-500">
              <div className="z-10 absolute ">
                <p className="w-[50px] text-white h-[27px] bg-red-600 flex items-center justify-center  text-[12px] font-bold mb-2">-9%</p>
                
              </div>
             
              <div className="-z-10 h-[100%] transition-all duration-200"><img src=' https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/product-06-480x638.jpg' height="80%"/></div>
           
            <div className=" w-full absolute bottom-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-slate-100">
              <div className="z-10 absolute ">
                <p className="w-[50px] text-white h-[27px] bg-red-600 flex items-center justify-center  text-[12px] font-bold mb-2">-9%</p>
                
              </div>
              <div className="absolute right-0 w-[45px] h-[140px] transition-all duration-300">
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white mb-3"><IoSearchOutline size={21}/></p>
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white mb-3"><IoHeartOutline size={21}/></p>
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white"><IoIosGitCompare size={21}/></p>
              </div>
              <div className="-z-10 h-[100%] transition-all duration-200"><img src='https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/product-11-480x638.jpg' height="80%"/></div>
            <div className="w-full h-[45px] absolute bottom-0 bg-gray-100 hover:bg-orange-500 transition-all duration-300 hover:text-white text-[16px] font-[600] flex justify-center items-center hover:transition-all ">Add to Cart</div>
            </div>
            </div>
            <div className="w-full ">
            <p className="text-orange-500 text-[18px] font-semibold mb-3">$210.00</p>
            <div className="flex items-center relative w-[120px]">
            <div className="absolute ">{"⚫".repeat(5)}</div>
            <div className="absolute ">{"🟠".repeat(4)}</div>
          </div>
            </div>
           
          </div>
          
          
          
          <div className="w-[353px] h-[100%] ">
            <div className=" w-full  bg-slate-100 relative transition-all duration-500">
              <div className="z-10 absolute ">
                <p className="w-[50px] text-white h-[27px] bg-red-600 flex items-center justify-center  text-[12px] font-bold mb-2">-13%</p>
                <p className="w-[90px] h-[27px] bg-orange-600 flex items-center justify-center text-white font-semibold text-[14px] ">Featured</p>
              </div>
             
              <div className="-z-10 h-[100%] transition-all duration-200"><img src='https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/product-03-480x638.jpg' height="80%"/></div>
           
            <div className=" w-full absolute bottom-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-slate-100">
              <div className="z-10 absolute ">
                <p className="w-[50px] text-white h-[27px] bg-red-600 flex items-center justify-center  text-[12px] font-bold mb-2">-13%</p>
                <p className="w-[90px] h-[27px] bg-orange-600 flex items-center justify-center text-white font-semibold text-[14px] ">Featured</p>
              </div>
              <div className="absolute right-0 w-[45px] h-[140px] transition-all duration-300">
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white mb-3"><IoSearchOutline size={21}/></p>
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white mb-3"><IoHeartOutline size={21}/></p>
                <p className="w-full  h-[40px] flex items-center justify-center bg-gray-100 hover:bg-orange-500 hover:transition-all duration-300 hover:text-white"><IoIosGitCompare size={21}/></p>
              </div>
              <div className="-z-10 h-[100%] transition-all duration-200"><img src='https://sapa.thembaydev.com/demo-2/wp-content/uploads/sites/6/2022/01/product-14-480x638.jpg' height="80%"/></div>
            <div className="w-full h-[45px] absolute bottom-0 bg-gray-100 hover:bg-orange-500 transition-all duration-300 hover:text-white text-[16px] font-[600] flex justify-center items-center hover:transition-all ">Add to Cart</div>
            </div>
            </div>
            <div className="w-full ">
            <p className="text-orange-500 text-[18px] font-semibold mb-3">$400.00</p>
            <div className="flex items-center relative w-[120px]">
            <div className="absolute ">{"⚫".repeat(5)}</div>
            <div className="absolute ">{"🟠".repeat(4)}</div>
          </div>
            </div>
           
          </div>
         </div>
      </div>
    </div>
  )
}

export default FlashSales