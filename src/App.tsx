import Header from './Block/Header'
import FlashSales from './Pages/FlashSales'
import HighTech from './Pages/HighTech'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <div className='h-[calc(100% - 90px)]'> */}
      <Home/>
      <FlashSales/>
      <HighTech/>
      {/* </div> */}
      
    </div>
  )
}

export default App