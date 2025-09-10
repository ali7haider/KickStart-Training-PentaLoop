// import './Hero.css';

const Hero = ({ title, subtitle, onBrowseClick, onApplyClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-actions">
          <button 
            className="button primary" 
            onClick={onApplyClick}
          >
            Start Your Application
          </button>
          <button 
            className="button secondary" 
            onClick={onBrowseClick}
          >
            Browse Scholarships
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;