import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <p className="error-description">
          The page you are looking for might have been moved or deleted.
        </p>
        <Link to="/" className="home-button">Go to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
