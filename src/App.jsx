import './styles/Pages.css'
import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import AddmissionPage from './pages/AdmissionPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage.Jsx';


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/course" element={<CoursePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/admission" element={<AddmissionPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;