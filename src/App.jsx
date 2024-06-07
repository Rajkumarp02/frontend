import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './Components/Navbar/RootLayout';
import Mission from './pages/Aboutus/Mission';
import Vision from './pages/Aboutus/Vision';
import Values from './pages/Aboutus/Values';
import OurMission from './pages/Aboutus/OurMission';
import Demo from './Components/Contact/Demo';

const Home = lazy(() => import('./pages/Home/Home'));
const AboutUs = lazy(() => import('./pages/Aboutus/AboutUs'));
const OurService = lazy(() => import('./pages/OurService/OurService'));
const Terms = lazy(() => import('./Components/TermsAndCondition/Terms'));
const MainContact = lazy(() => import('./Components/Contact/MainContact'));
const WebdesignService = lazy(() => import('./pages/OurService/webdesignService/WebdesignService'));
const BussinessDevelopment = lazy(() => import('./Components/OurService/BussinessDevelopment'));
const BussinessCollaboration = lazy(() => import('./Components/OurService/BussinessCollaboration'));
const WebDevelopment = lazy(() => import('./Components/OurService/WebDevelopment'));
const AppDevelopment = lazy(() => import('./Components/OurService/AppDevelopment'));
const Digital = lazy(() => import('./Components/OurService/Digital'));
const LearnWithUs = lazy(() => import('./pages/Learn/LearnWithUs'));
const Career = lazy(() => import('./pages/Career/Career'));
const DigitalMarketing = lazy(() => import('./pages/OurService/DigitalMarketing/Digital'));
const Finance = lazy(() => import('./Components/OurService/Finance'));
const Legal = lazy(() => import('./Components/OurService/Legal'));
const BrandPromotion = lazy(() => import('./Components/OurService/Branding'));
const UIUX = lazy(() => import('./Components/OurService/UIUX'));
const Privacy = lazy(() => import('./Components/MainTerms/Privacy'));
const Refund = lazy(() => import('./Components/MainTerms/Refund'));
const DisClaimer = lazy(() => import('./Components/MainTerms/Disclaimer'));

function App() {
  return (
    <div className="conatiner-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
            <Route
              path="aboutus"
              element={<Suspense fallback={<div>Loading...</div>}><AboutUs /></Suspense>}
            >
              <Route path="" element={<Mission />} />
              <Route path="vision" element={<Vision />} />
              <Route path="values" element={<Values />} />
            </Route>
            <Route path='/ourService' element={<Suspense fallback={<div>Loading...</div>}><OurService /></Suspense>} />
            <Route path='/contactus' element={<Suspense fallback={<div>Loading...</div>}><MainContact /></Suspense>} />
            <Route path='/web-design' element={<Suspense fallback={<div>Loading...</div>}><WebdesignService /></Suspense>} />
            <Route path='/action1' element={<Suspense fallback={<div>Loading...</div>}><BussinessDevelopment /></Suspense>} />
            <Route path='/action2' element={<Suspense fallback={<div>Loading...</div>}><BussinessCollaboration /></Suspense>} />
            <Route path='/action3' element={<Suspense fallback={<div>Loading...</div>}><WebDevelopment /></Suspense>} />
            <Route path='/action4' element={<Suspense fallback={<div>Loading...</div>}><AppDevelopment /></Suspense>} />
            <Route path='/action5' element={<Suspense fallback={<div>Loading...</div>}><Digital /></Suspense>} />
            <Route path='/action6' element={<Suspense fallback={<div>Loading...</div>}><WebdesignService /></Suspense>} />
            <Route path='/action7' element={<Suspense fallback={<div>Loading...</div>}><DigitalMarketing /></Suspense>} />
            <Route path='/learnwithus' element={<Suspense fallback={<div>Loading...</div>}><LearnWithUs /></Suspense>} />
            <Route path='/career' element={<Suspense fallback={<div>Loading...</div>}><Career /></Suspense>} />
            <Route path='/finance' element={<Suspense fallback={<div>Loading...</div>}><Finance /></Suspense>} />
            <Route path='/legal' element={<Suspense fallback={<div>Loading...</div>}><Legal /></Suspense>} />
            <Route path='/Branding and auditing' element={<Suspense fallback={<div>Loading...</div>}><BrandPromotion /></Suspense>} />
            <Route path='/UI-UX' element={<Suspense fallback={<div>Loading...</div>}><UIUX /></Suspense>} />
            <Route path='/terms-and-condition' element={<Suspense fallback={<div>Loading...</div>}><Terms /></Suspense>} />
            <Route path='/privacy' element={<Suspense fallback={<div>Loading...</div>}><Privacy /></Suspense>} />
            <Route path='/refund' element={<Suspense fallback={<div>Loading...</div>}><Refund /></Suspense>} />
            <Route path='/disclaimer' element={<Suspense fallback={<div>Loading...</div>}><DisClaimer /></Suspense>} />
          </Route>
          <Route path='/demo' element={<Demo/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;