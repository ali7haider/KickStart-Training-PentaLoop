import {
  fetchScholarshipFailure,
  fetchScholarshipSuccess,
  fetchScholarshipRequest,
} from "../actions/scholarshipActions";

export const fetchScholarships = () => {
  return (dispatch) => {
    dispatch(fetchScholarshipRequest());
    setTimeout(() => {
      const mockScholarships = [
        {
          id: 1,
          name: "Test Scholarship",
          deadline: "30-Sept-25",
          amount: "100",
          description: "A sample scholarship for testing purposes.",
          eligibility: "Open to all students enrolled in any degree program.",
        },
        {
          id: 2,
          name: "Merit Excellence Award",
          deadline: "15-Oct-25",
          amount: "500",
          description:
            "Awarded to students with outstanding academic performance.",
          eligibility: "Minimum GPA of 3.5 required.",
        },
        {
          id: 3,
          name: "Need-Based Scholarship",
          deadline: "01-Nov-25",
          amount: "750",
          description:
            "Supports students from financially disadvantaged backgrounds.",
          eligibility: "Household income below $40,000 per year.",
        },
        {
          id: 4,
          name: "STEM Innovators Grant",
          deadline: "20-Dec-25",
          amount: "1,200",
          description:
            "Encourages innovation and research in science, technology, engineering, and mathematics.",
          eligibility: "STEM major students with a project or research idea.",
        },
        {
          id: 5,
          name: "Women in Tech Fellowship",
          deadline: "05-Jan-26",
          amount: "1,500",
          description:
            "Empowers women pursuing careers in technology and computer science.",
          eligibility: "Female students in Computer Science or related fields.",
        },
        {
          id: 6,
          name: "Global Leaders Scholarship",
          deadline: "28-Feb-26",
          amount: "2,000",
          description:
            "Recognizes students with leadership experience and international perspective.",
          eligibility:
            "Open to students who have participated in exchange programs.",
        },
        {
          id: 7,
          name: "Community Service Award",
          deadline: "10-Mar-26",
          amount: "800",
          description:
            "Rewards students committed to making a positive impact.",
          eligibility: "At least 100 hours of documented community service.",
        },
        {
          id: 8,
          name: "First-Generation Student Grant",
          deadline: "25-Apr-26",
          amount: "1,000",
          description:
            "Supports students who are the first in their family to attend college.",
          eligibility: "Applicants must be first-generation college students.",
        },
      ];

      dispatch(fetchScholarshipSuccess(mockScholarships));
    }, 1000);
    // dispatch(fetchScholarshipFailure(error));
  };
};
