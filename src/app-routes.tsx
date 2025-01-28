import { Route, Routes } from 'react-router'
import Patients from './patient/Patients'
import Upload from './upload/Upload'

function AppRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Patients />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  )
}

export default AppRoutes
