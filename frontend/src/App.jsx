import './App.css'
import Ledger from './pages/Ledger/Ledger'
import {Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Ledger />} />
    </Routes>      
    </>
  )
}

export default App
