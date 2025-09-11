import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps, Card } from "antd";
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

const { Step } = Steps;

const ApplicationPage = () => {
  const dispatch = useDispatch();
  const { currentStep, formData } = useSelector(
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
        return (
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

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
      {/* Steps Navigation */}
      <Card style={{ marginBottom: 32, borderRadius: 12 }}>
        <Steps current={currentStep - 1} size="small" responsive>
          <Step title="Personal Details" />
          <Step title="Academic Details" />
          <Step title="Documents" />
          <Step title="Review" />
        </Steps>
      </Card>

      {/* Render Current Step Form */}
      {renderCurrentStep()}
    </div>
  );
};

export default ApplicationPage;
