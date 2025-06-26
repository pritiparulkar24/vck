import './styles/Pages.css'
import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import AddmissionPage from './pages/AdmissionPage';
import ContactPage from './pages/ContactPage';
import ChatbotComponent from './components/chatbot/chatbotComponents';
import Home from './pages/Home';


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/course" element={<CoursePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/admission" element={<AddmissionPage/>}/>
        </Routes>
        <ChatbotComponent/>
      </Router>
    </div>
  )
}

export default App;