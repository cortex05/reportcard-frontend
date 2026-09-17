import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../screens/Home/Home'
import SampleBill from '../screens/Samples/SampleBill/SampleBill'
import SamplePolitician from '../screens/Samples/SamplePolitician/SamplePolitician'
import Single from '../screens/Single/Single'
import Footer from '../components/Footer/Footer'

const Router = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample-bill" element={<SampleBill />} />
          <Route path="/sample-politician" element={<SamplePolitician />} />
          <Route path="/single" element={<Single />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default Router

