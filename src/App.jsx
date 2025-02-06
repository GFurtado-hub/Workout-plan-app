import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WorkoutPlansDetails from '../Pages/WorkoutPlansDetails/WorkoutPlansDetails';
import AboutPage from "../Pages/AboutPage/AboutPage";
import Sidebar from './components/Sidebar/Sidebar';
import AddNewWorkout from '../Pages/AddNewWorkout/AddNewWorkout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from './components/HomePage/HomePage';
import EditWorkout from '../Pages/EditWorkout/EditWorkout';


function App() {
  return (
    <div className="workout-plan-app">
      <Navbar />
      <Sidebar /> 


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-new-workout" element={<AddNewWorkout />} />
        <Route path="/WorkoutPlansDetails" element={<WorkoutPlansDetails />} />
        <Route path="/WorkoutPlansDetails/:id" element={<EditWorkout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>

      <Footer />
    </div>
  );
}


export default App;

