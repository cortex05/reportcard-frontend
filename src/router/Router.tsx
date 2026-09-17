import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../screens/Home/Home'
import Sample from '../screens/Sample/Sample'
import Single from '../screens/Single/Single'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/single" element={<Single />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
