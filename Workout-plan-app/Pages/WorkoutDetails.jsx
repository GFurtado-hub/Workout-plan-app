import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function WorkoutDetails() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    axios.get(`https://json-server-backend-p30d.onrender.com/workouts/${id}`)
      .then(response => setWorkout(response.data))
      .catch(error => console.error('Error fetching workout details!', error));
  }, [id]);

  if (!workout) return <p>Loading...</p>;

  return (
    <div>
      <h1>{workout.name}</h1>
      <p>{workout.description}</p>
      <p>Duration: {workout.duration} mins</p>
      <p>Difficulty: {workout.difficulty}</p>
    </div>
  );
}

export default WorkoutDetails;
