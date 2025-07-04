import './styles/Pages.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import AddmissionPage from './pages/AdmissionPage';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';

import { useState } from 'react';
import ChatbotComponent from './components/chatbot/chatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Developer Info Popup */}
      <DeveloperInfoPopup
        show={showPopup}
        onClose={handleClosePopup}
        studentName="Saniya Mahesh Patil"
        studentPhotoUrl="/images/saniya.jpg" // Path to their photo
        uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
      />
      
      {/* Main Application */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admission" element={<AddmissionPage />} />
        </Routes>

        {/* Chatbot Component (Should appear across all routes) */}
        <ChatbotComponent/>
      </Router>
    </div>
  );
};

export default App;
