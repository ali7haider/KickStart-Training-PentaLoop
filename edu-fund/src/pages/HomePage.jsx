import { useNavigate } from "react-router-dom";
import Hero from "../components/ui/HomePage/Hero";
import FeatureCard from "../containers/FeatureContainer";
import CallToAction from "../components/ui/CallToAction";
const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToScholarships = () => {
    navigate("/scholarships");
  };

  const handleStartApplication = () => {
    navigate("/apply");
  };
  return (
    <>
      <Hero
        title="Fund Your Future"
        subtitle="Find and apply for scholarships all in one place."
        onBrowseClick={handleNavigateToScholarships}
        onApplyClick={handleStartApplication}
      />
      <FeatureCard />
    </>
  );
};

export default HomePage;
