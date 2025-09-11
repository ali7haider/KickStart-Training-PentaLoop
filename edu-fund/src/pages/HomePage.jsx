import { useNavigate } from "react-router-dom";
import Hero from "../components/home/Hero";
import FeatureSection from "../containers/FeatureContainer";
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
      <FeatureSection />
    </>
  );
};

export default HomePage;
