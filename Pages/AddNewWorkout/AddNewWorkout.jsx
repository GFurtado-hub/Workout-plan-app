import  { useState } from 'react';
import axios from 'axios';
import './AddNewWorkout.css';

function AddNewWorkout() {
    const [workoutName, setWorkoutName] = useState('');
    const [description, setDescription] = useState('');
    const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weight: '' }]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'workoutName') setWorkoutName(value);
        if (name === 'description') setDescription(value);
    };

    const handleExerciseChange = (index, e) => {
        const updatedExercises = [...exercises];
        updatedExercises[index][e.target.name] = e.target.value;
        setExercises(updatedExercises);
    };

    const addExercise = () => {
        setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newWorkout = {
            name: workoutName,
            description: description,
            exercises: exercises
        };

        axios.post('https://json-server-backend-p30d.onrender.com/workouts', newWorkout)
            .then(response => {
                alert('Workout added successfully!');
                setWorkoutName('');
                setDescription('');
                setExercises([{ name: '', sets: '', reps: '', weight: '' }]);
            })
            .catch(error => {
                console.error('Error adding workout!', error);
                alert('There was an error adding the workout.');
            });
    };

    return (
        <div className="add-workout-container">
            <h2>Add New Workout</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="workoutName">Workout Name:</label>
                    <input
                        type="text"
                        id="workoutName"
                        name="workoutName"
                        value={workoutName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <h3>Exercises</h3>
                {exercises.map((exercise, index) => (
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

                <button type="button" onClick={addExercise}>Add Another Exercise</button>
                <br />
                <button type="submit" className="submit-button">Add Workout</button>
            </form>
        </div>
    );
}

export default AddNewWorkout;
