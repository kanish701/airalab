import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import AIFundamentals from './pages/capabalities/training/AIFundamentals';
import AIFreshersCourse from './pages/capabalities/training/AIFreshersCourse';
import AIBootcamps from './pages/capabalities/training/AIBootcamps';
import PromptEngineering from './pages/capabalities/training/PromptEngineering';
import FrontendDevelopment from './pages/capabalities/development/FrontendDevelopment';
import BackendDevelopment from './pages/capabalities/development/BackendDevelopment';
import AIBasedSaaSSolutions from './pages/capabalities/development/AIBasedSaaSSolutions';
import ETLSolutions from './pages/capabalities/development/ETLSolutions';
import PredictiveAnalysis from './pages/capabalities/development/PredictiveAnalysis';
import Static from './pages/capabalities/dashboard/Static';
import Dynamic from './pages/capabalities/dashboard/Dynamic';
import Interactive from './pages/capabalities/dashboard/Interactive';
import WhyAiraLabs from './pages/WhyAiraLabs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white-900">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/resources" element={<Resources />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/whyairalabs" element={<WhyAiraLabs />} />

          {/* ----- Capabalities -> Training ----- */}
          <Route path='/capabilities/ai-fundamentals' element={<AIFundamentals />} />
          <Route path='/capabilities/ai-freshers-course' element={<AIFreshersCourse />} />
          <Route path='/capabilities/ai-bootcamps' element={<AIBootcamps />} />
          <Route path='/capabilities/prompt-engineering' element={<PromptEngineering />} />

          {/* ----- Capabilities -> Development */}
          <Route path='/capabilities/frontend-development' element={<FrontendDevelopment />} />
          <Route path='/capabilities/backend-development' element={<BackendDevelopment />} />
          <Route path='/capabilities/ai-based-saas-solutions' element={<AIBasedSaaSSolutions />} />
          <Route path='/capabilities/etl-solutions' element={<ETLSolutions />} />
          <Route path='/capabilities/predictive-analysis' element={<PredictiveAnalysis />} />

          {/*----- Capabilities -> Dashboard */}
          <Route path='/capabilities/static' element={<Static />} />
          <Route path='/capabilities/dynamic' element={<Dynamic />} />
          <Route path='/capabilities/interactive' element={<Interactive />} />

          {/* ----- Capabilities -> Company ----- */}
          <Route path="/company/why-aira-labs" element={<WhyAiraLabs/>} />
          <Route path="/company/about-us" element={<AboutUs/>} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/contact-us" element={<ContactUs />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;