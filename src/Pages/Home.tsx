import pix from "../assets/img-slider1-01.png"
import { FaArrowRightLong } from "react-icons/fa6";


const Home = () => {
   
  return (
    <div className='w-full h-[95vh] bg-cover' >
        <div className="relative">
        <img src="https://sapa.thembaydev.com/wp-content/uploads/sites/6/2023/07/bg-slider-01.jpg"/>
        <div className="w-[90%] flex absolute top-[14%] right-0 justify-between">
            <div className="w-[45%] h-[90%]">
                <img src={pix}/>
            </div>
            <div className="w-[43%] self-center mt-5 mr-6">
                <div className="text-white text-[17px] mb-1">HYBRID SMARTWATCHES</div>
                <div className="text-[45px] text-white mb-[17px] font-bold mr-3 h-[120px]">Wearable health you'll want to wear</div>
                <div className="text-white mr-6 text-[15px]">Explore a range of hybrid smartwatches crafted to track, monitor and improve overall health and wellness. Pwered by the state-of-the-art technology. Sapa trackers are renowned for their award winning design and unsurpassed battery life.</div>
                <br/>
                <br/>
                <div className="mb-11">
                    <p className="text-white text-[15px]">#1</p>
                    <p className="text-orange-600 font-semibold text-[16px]">WORLDWIDE</p>
                    <p className="text-white text-[15px]">Sapa invented The First hybrid Smart Watch</p>
                </div>
                <button className="text-white bg-orange-600 h-[40px] w-[160px] rounded-md flex  items-center justify-center hover:bg-orange-700 hover:transition-all duration-300">Buy now <FaArrowRightLong style={{fontSize:"13px", marginLeft:"7px", marginTop:"3px"}}/> </button> 
            </div>
        </div>
        </div>
            
        
    </div>
  )
}

export default Home