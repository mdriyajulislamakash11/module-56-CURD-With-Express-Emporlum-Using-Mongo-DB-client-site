import './App.css'
import Banner from './Components/Banner'
import Navber from './Components/Navber'

function App() {
 

  return (
    <>

    {/* Navber */}
    <nav>
      <Navber />
    </nav>
    
     {/* Banner */}
     <div className='w-11/12 mx-auto mb-24'>
      <Banner />
     </div>
     
    </>
  )
}

export default App
