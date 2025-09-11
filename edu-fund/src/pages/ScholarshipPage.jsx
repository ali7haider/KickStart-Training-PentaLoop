import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Space } from "antd";

import { fetchScholarships } from "../redux/thunks/scholarshipThunks";
import ScholarshipContainer from "../containers/ScholarshipContainer";

const { Title, Text } = Typography;
const ScholarshipPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.scholarships);

  useEffect(() => {
    dispatch(fetchScholarships());
  }, [dispatch]);

  return (
    <div style={{ padding: 24 }}>
      <Space direction="vertical" style={{ width: "100%", marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>
          Available Scholarships
        </Title>
        <Text type="secondary">
          Browse and apply for various scholarship opportunities
        </Text>
      </Space>

      <ScholarshipContainer
        scholarships={items}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default ScholarshipPage;
