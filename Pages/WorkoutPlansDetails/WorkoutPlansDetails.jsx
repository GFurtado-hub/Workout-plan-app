import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './WorkoutPlansDetails.css';

function WorkoutPlansDetails() {
    const [workouts, setWorkouts] = useState([]);
    const [filteredWorkouts, setFilteredWorkouts] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('https://json-server-backend-p30d.onrender.com/workouts')
            .then(response => {
                setWorkouts(response.data);
                setFilteredWorkouts(response.data);

                
                const uniqueTypes = ['All', ...new Set(response.data.map(workout => workout.type))];
                setTypes(uniqueTypes);
            })
            .catch(error => {
                console.error('Error fetching workouts!', error);
            });
    }, []);

    const deleteWorkout = (id) => {
        axios.delete(`https://json-server-backend-p30d.onrender.com/workouts/${id}`)
            .then(() => {
                setFilteredWorkouts(filteredWorkouts.filter(workout => workout.id !== id));
                setWorkouts(workouts.filter(workout => workout.id !== id));
            })
            .catch(error => {
                console.error('Error deleting the workout!', error);
            });
    };

    const markAsCompleted = (id) => {
        const updatedWorkouts = workouts.map(workout =>
            workout.id === id ? { ...workout, completed: true } : workout
        );

        setWorkouts(updatedWorkouts);
        setFilteredWorkouts(updatedWorkouts);

        const completedWorkout = workouts.find(workout => workout.id === id);
        if (completedWorkout) {
            const storedProgress = JSON.parse(localStorage.getItem('completedWorkouts')) || [];
            localStorage.setItem('completedWorkouts', JSON.stringify([...storedProgress, completedWorkout]));
        }
    };

    const handleFilterChange = (event) => {
        const selected = event.target.value;
        setSelectedType(selected);
        if (selected === 'All') {
            setFilteredWorkouts(workouts);
        } else {
            setFilteredWorkouts(workouts.filter(workout => workout.type === selected));
        }
    };

    return (
        <div>
           
            <div className="filter-container">
                <label htmlFor="filter">Type:</label>
                <select id="filter" value={selectedType} onChange={handleFilterChange}>
                    {types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div className="workouts-container">
                {filteredWorkouts.map(workout => (
                    <div key={workout.id} className="workout-card">
                        <h2>{workout.name} ({workout.type})</h2>
                        <ul>
                            {workout.exercises.map((exercise, index) => (
                                <li key={index}>
                                    <strong>{exercise.name}</strong>: {exercise.sets} sets x {exercise.reps} reps, {exercise.weight} kg
                                </li>
                            ))}
                        </ul>
                        <div className="button-container">
                            <Link to={`/WorkoutPlansDetails/${workout.id}`}>EDIT</Link>
                            <button onClick={() => deleteWorkout(workout.id)} className="delete-button">
                                DELETE
                            </button>
                            <button onClick={() => markAsCompleted(workout.id)} className="completed-button">
                                COMPLETED
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkoutPlansDetails;
