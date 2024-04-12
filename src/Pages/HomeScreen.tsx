import Header from "../Block/Header"
import FlashSales from "./FlashSales"
import HighTech from "./HighTech"
import Home from "./Home"

const HomeScreen = () => {
  return (
    <div>
        <Header/>
      <Home/>
      <FlashSales/>
      <HighTech/>
    </div>
  )
}

export default HomeScreen