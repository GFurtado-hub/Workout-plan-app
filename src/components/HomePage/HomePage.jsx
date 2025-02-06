

function HomePage() {
    return (
        <div className="home-page">
            
            <video width="100%" controls>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default HomePage;
