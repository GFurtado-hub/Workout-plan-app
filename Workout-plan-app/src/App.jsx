import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WorkoutPlansDetails from '../Pages/WorkoutPlansDetails';
import WorkoutDetails from '../Pages/WorkoutDetails'; 
//import Login from './Pages/Login'; 
//import Signup from './Pages/Signup'; 

function App() {
  return (
    <div className="workout-plan-app">
      <Navbar />

      <Routes>
        
        <Route path="/WorkoutPlansDetails" element={<WorkoutPlansDetails />} />
        <Route path="/WorkoutPlansDetails/:id" element={<WorkoutDetails />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

