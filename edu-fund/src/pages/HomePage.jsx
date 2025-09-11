import { useNavigate } from "react-router-dom";
import Hero from "../components/ui/Hero";
import FeatureCard from "../components/ui/FeatureCard";
import CallToAction from "../components/ui/CallToAction";
const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToScholarships = () => {
    navigate("/scholarships");
  };

  const handleStartApplication = () => {
    navigate("/apply");
  };

  const features = [
    {
      id: 1,
      title: "Find Your Fit",
      description:
        "Browse a curated list of scholarships matching your profile and academic goals.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Streamlined Process",
      description:
        "Our multi-step form makes applying quick and ensures you never miss a requirement.",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Track Your Progress",
      description:
        "Save your applications and come back to them anytime before the deadline.",
      icon: "📊",
    },
  ];

  return (
    <>
      <Hero
        title="Fund Your Future"
        subtitle="Find and apply for scholarships all in one place."
        onBrowseClick={handleNavigateToScholarships}
        onApplyClick={handleStartApplication}
      />

      <section className="features-section">
        <h2>Why Use EduFund?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      <CallToAction
        title="Ready to take the next step?"
        buttonText="Browse All Scholarships"
        onButtonClick={handleNavigateToScholarships}
      />
    </>
  );
};

export default HomePage;
