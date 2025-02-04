
import './AboutPage.css';
function AboutPage() {
  return (
    <div className="about-page">
      <h1>About This Project</h1>
      <p>
      </p>
      <h2>Team Members</h2>
      <div className="team-members-container">
        <div className="team-member">
        <div className="member-image">
            <img
              src="https://media.licdn.com/dms/image/v2/C4D03AQHXRgV0m-J_tw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658324825184?e=1743033600&v=beta&t=VaoNhfgo5yiGM-C6xEy4np6ex_mq87wcLybQLZ3vZD4" // Replace with your image URLs
              alt="Francesco Torchia"
            />
          </div>
          <div className="member-info">
            <h3>Francesco Torchia</h3>
            <p className="member-title">IronHack Student</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/FraT97" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/francesco-torchia-wd" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="team-member">
        <div className="member-image">
            <img
              src="www.linkedin.com/in/gonçalo-furtado-22820233b"
              alt="Gonçalo Furtado"
            />
          </div>
          <div className="member-info">
            <h3>Gonçalo Furtado</h3>
            <p className="member-title">IronHack Student</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/GFurtado-hub" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <h2>Project Details</h2>
      <p>
        This project was developed using React.js and React Router.
      </p>
    </div>
  );
}

export default AboutPage;