// import './CallToAction.css';

const CallToAction = ({ title, buttonText, onButtonClick }) => {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2>{title}</h2>
        <button 
          className="button primary" 
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;