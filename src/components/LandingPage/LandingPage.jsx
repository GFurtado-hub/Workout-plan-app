import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../../Firebase-config";
import { auth } from '../../Firebase-config';
import './LandingPage.css';

// eslint-disable-next-line react/prop-types
function LandingPage({ setIsLoggedIn }) {
    const [isSignUp, setIsSignUp] = useState(false); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true);
            navigate('/');
        } catch (error) {
            setError('Login failed: ' + error.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true);
            navigate('/'); 
        } catch (error) {
            setError('Sign-up failed: ' + error.message);
        }
    };

    return (
        <div className="landing-page">
            <div className="landing-page-content">
                <h1 className="landing-title">Welcome to the Arena!</h1>
                <p className="landing-description">Your ultimate workout companion</p>

                {!isSignUp ? (
                    <div className="form-container">
                        <h2>Log In</h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {error && <div className="error-message">{error}</div>}
                            <button type="submit">Log In</button>
                        </form>
                        <p>
                            Dont have an account?{' '}
                            <span onClick={() => setIsSignUp(true)} className="toggle-link">
                                Sign Up
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="form-container">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {error && <div className="error-message">{error}</div>}
                            <button type="submit">Sign Up</button>
                        </form>
                        <p>
                            Already have an account?{' '}
                            <span onClick={() => setIsSignUp(false)} className="toggle-link">
                                Log In
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LandingPage;
