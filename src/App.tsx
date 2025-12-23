import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReportPreview from './pages/ReportPreview'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        
        {/* Vista previa HTML del reporte */}
        <Route path="/report-preview" element={<ReportPreview clientNameMain='' />} />
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App