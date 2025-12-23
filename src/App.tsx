import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ReportPreview from './pages/ReportPreview'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Vista previa HTML del reporte */}
        <Route path="/report-preview" element={<ReportPreview />} />
        
        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<Navigate to="/report-preview" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App