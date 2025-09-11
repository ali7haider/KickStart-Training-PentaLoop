// import './Hero.css';

const Hero = ({ title, subtitle, onBrowseClick, onApplyClick }) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div>
          <button onClick={onApplyClick}>Start Your Application</button>
          <button onClick={onBrowseClick}>Browse Scholarships</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
