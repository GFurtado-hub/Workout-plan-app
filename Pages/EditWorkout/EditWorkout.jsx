import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import "./EditWorkout.css"


function EditWorkout() {
    const { id } = useParams();  
    const navigate = useNavigate();  
    const [workout, setWorkout] = useState(null);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://json-server-backend-p30d.onrender.com/workouts/${id}`)
            .then(response => {
                setWorkout(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching workout details!', error);
                setError('Error loading workout details');
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkout(prevWorkout => ({
            ...prevWorkout,
            [name]: value
        }));
    };

    const handleExerciseChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExercises = [...workout.exercises];
        updatedExercises[index][name] = value;
        setWorkout({ ...workout, exercises: updatedExercises });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://json-server-backend-p30d.onrender.com/workouts/${id}`, workout)
            .then(() => {
                alert('Workout updated successfully!');
                navigate(`/WorkoutPlansDetails`); 
            })
            .catch(error => {
                console.error('Error updating the workout!', error);
                alert('Error updating the workout.');
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="edit-workout-container">
            <h2>Edit Workout</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Workout Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={workout.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={workout.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h3>Exercises</h3>
                {workout.exercises.map((exercise, index) => (
                    <div key={index} className="exercise-form-group">
                        <div className="form-group">
                            <label htmlFor={`exerciseName-${index}`}>Exercise Name:</label>
                            <input
                                type="text"
                                id={`exerciseName-${index}`}
                                name="name"
                                value={exercise.name}
                                onChange={(e) => handleExerciseChange(index, e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`sets-${index}`}>Sets:</label>
                            <input
                                type="number"
                                id={`sets-${index}`}
                                name="sets"
                                value={exercise.sets}
                                onChange={(e) => handleExerciseChange(index, e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`reps-${index}`}>Reps:</label>
                            <input
                                type="number"
                                id={`reps-${index}`}
                                name="reps"
                                value={exercise.reps}
                                onChange={(e) => handleExerciseChange(index, e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`weight-${index}`}>Weight (kg):</label>
                            <input
                                type="number"
                                id={`weight-${index}`}
                                name="weight"
                                value={exercise.weight}
                                onChange={(e) => handleExerciseChange(index, e)}
                                required
                            />
                        </div>
                    </div>
                ))}
                <button type="submit">Update Workout</button>
            </form>
        </div>
    );
}

export default EditWorkout;
