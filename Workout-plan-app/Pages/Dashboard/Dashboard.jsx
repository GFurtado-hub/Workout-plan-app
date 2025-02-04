import { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('https://json-server-backend-p30d.onrender.com/workouts');
        setWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Workout Plans</h1>
      <div className="workouts-grid">
        {workouts.map((workout) => (
          <div key={workout.id} className="workout-card">
            <h2>{workout.name}</h2>
            <ul>
              {workout.exercises.map((exercise, index) => (
                <li key={index}>
                  <strong>{exercise.name}</strong>: {exercise.reps} reps, {exercise.sets} sets
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;