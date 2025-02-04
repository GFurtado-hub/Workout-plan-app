import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WorkoutPlansDetails from '../Pages/WorkoutPlansDetails/WorkoutPlansDetails';
import WorkoutDetails from '../Pages/WorkoutDetails/WorkoutDetails';
import AboutPage from "../Pages/AboutPage/AboutPage";
//import Login from './components/Login';
//import SignUp from './components/SignUp'; 
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="workout-plan-app">
      <Navbar />
      <Sidebar /> 


      <Routes>
      
        <Route path="/WorkoutPlansDetails" element={<WorkoutPlansDetails />} />
        <Route path="/WorkoutPlansDetails/:id" element={<WorkoutDetails />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>

      <Footer />
    </div>
  );
}


export default App;

