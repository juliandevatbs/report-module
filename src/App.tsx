import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReportPreview from './pages/ReportPreview'

function App() {

  return (
    <BrowserRouter>
    
    <Routes>

    <Route path="/report-preview" element={<ReportPreview clientNameMain='Julian Homez' />}/>


    </Routes>

    
    </BrowserRouter>
  )
}

export default App
