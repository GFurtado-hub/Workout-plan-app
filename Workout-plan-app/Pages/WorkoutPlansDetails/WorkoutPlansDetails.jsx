import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './WorkoutPlansDetails.css'; 

function WorkoutPlansDetails() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios.get('https://json-server-backend-p30d.onrender.com/workouts')
            .then(response => {
                setWorkouts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the workouts!', error);
            });
    }, []);

    return (
        <div className="workouts-container">
            {workouts.map(workout => (
                <div key={workout.id} className="workout-card">
                    <h2>{workout.name}</h2>
                    <p>{workout.exercises}</p>
                    <p>{workout.sets} x {workout.reps}</p>
                    <p>{workout.weight}kg</p>
                    <Link to={`/WorkoutPlansDetails/${workout.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default WorkoutPlansDetails;