import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonalDetailsForm from "../components/forms/PersonalDetailForm";
import AcademicDetailsForm from "../components/forms/AcademicDetailForm";
import DocumentForm from "../components/forms/DocumentForm";
import ApplicationReview from "../containers/ApplicationReview";
import {
  nextStep,
  prevStep,
  saveFormData,
} from "../redux/actions/applicationActions";
import { submitApplication } from "../redux/thunks/applicationThunks";
const ApplicationPage = () => {
  const dispatch = useDispatch();
  const { currentStep, isSubmitting, formData } = useSelector(
    (state) => state.application
  );
  const handleSave = (step, data) => {
    dispatch(saveFormData(step, data));
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };
  const handleSubmit = () => {
    dispatch(submitApplication());
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetailsForm
            data={formData.step1}
            onSave={handleSave}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <AcademicDetailsForm
            data={formData.step2}
            onSave={handleSave}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 3:
        return (
          <DocumentForm
            data={formData.step3}
            onSave={handleSave}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 4:
        return  (
          <ApplicationReview
            data={formData}
            onSubmit={handleSubmit} 
            onPrev={handlePrev} 
          />
        );
      default:
        return <div>Unknown Step</div>;
    }
  };

  return <div>{renderCurrentStep()}</div>;
};

export default ApplicationPage;
