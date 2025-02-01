import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




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
        <div className="Workouts-Preview">
            {workouts.map(workout => (
                <div key={workout.id}>
                    <h2>{workout.name}</h2>
                    <p>{workout.description}</p>
                    <Link to={`/WorkoutPlansDetails/${workout.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}
export default WorkoutPlansDetails;