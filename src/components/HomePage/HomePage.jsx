import arenaBackground from '../../assets/Arena2.png';


function HomePage() {
    return (
        <div className="home-page" style={{ backgroundImage: `url(${arenaBackground})` }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?playlist=dQw4w9WgXcQ&autoplay=1&loop=1&mute=1"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube Video"
                ></iframe>
            </div>
        </div>
    );
}

export default HomePage;
