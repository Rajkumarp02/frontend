import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './Components/Navbar/RootLayout';

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
function App() {
  return (
    <div className="conatiner-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
            <Route path='/aboutus' element={<Suspense fallback={<div>Loading...</div>}><AboutUs /></Suspense>} />
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
            
          </Route>
          <Route path='/terms-and-condition' element={<Suspense fallback={<div>Loading...</div>}><Terms /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;