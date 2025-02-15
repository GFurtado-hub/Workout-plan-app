import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './YourProgresses.css';

function YourProgresses() {
    const [completedWorkouts, setCompletedWorkouts] = useState([]);

    useEffect(() => {
        const storedProgress = JSON.parse(localStorage.getItem('completedWorkouts')) || [];
        setCompletedWorkouts(storedProgress);
    }, []);

    const deleteCompletedWorkout = (id) => {
        const updatedProgress = completedWorkouts.filter(workout => workout.id !== id);
        setCompletedWorkouts(updatedProgress);
        localStorage.setItem('completedWorkouts', JSON.stringify(updatedProgress));
    };

    return (
        <div className="progress-container">
            <h1>YOUR COMPLETED WORKOUTS</h1>
            {completedWorkouts.length === 0 ? (
                <p>No completed workouts yet.</p>
            ) : (
                <div className="progress-grid">
                    {completedWorkouts.map(workout => (
                        <div key={workout.id} className="progress-card">
                            <h2>{workout.name}</h2>
                            <ul>
                                {workout.exercises.map((exercise, index) => (
                                    <li key={index}>
                                        <strong>{exercise.name}</strong>: {exercise.sets} sets x {exercise.reps} reps, {exercise.weight} kg
                                    </li>
                                ))}
                            </ul>
                            <span className="completed-badge">✅ Completed on {workout.completedDate}</span>
                            <button onClick={() => deleteCompletedWorkout(workout.id)} className="delete-button">DELETE</button>
                        </div>
                    ))}
                </div>
            )}
            <Link to="/workout-plan-details" className="back-link">Back to Workouts Plan</Link>
        </div>
    );
}

export default YourProgresses;