import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Empty, Alert, Spin, Tag, Space } from "antd";
import {
  RocketOutlined,
  CalendarOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const ScholarshipContainer = ({ scholarships, loading, error }) => {
  const navigate = useNavigate();

  const handleApplyClick = (scholarshipId) => {
    navigate("/apply");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 50 }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>Loading scholarships...</div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description="Failed to load scholarships. Please try again later."
        type="error"
        showIcon
        style={{ marginBottom: 24 }}
      />
    );
  }

  if (!scholarships || scholarships.length === 0) {
    return (
      <Empty
        description="No scholarships available at the moment"
        style={{ margin: 50 }}
      />
    );
  }

  return (
    <div style={{ padding: "0 16px" }}>
      <Row gutter={[24, 24]}>
        {scholarships.map((scholar) => (
          <Col xs={24} sm={12} lg={8} key={scholar.id}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.09)",
              }}
              actions={[
                <Button
                  type="primary"
                  icon={<RocketOutlined />}
                  onClick={() => handleApplyClick(scholar.id)}
                  style={{ width: "80%" }}
                >
                  Apply Now
                </Button>,
              ]}
            >
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <div>
                  <h3 style={{ margin: 0,   fontSize: 18 }}>
                    {scholar.name}
                  </h3>
                  {scholar.category && (
                    <Tag color="blue" style={{ marginTop: 8 }}>
                      {scholar.category}
                    </Tag>
                  )}
                </div>

                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <CalendarOutlined  />
                    <span >
                      Deadline: {scholar.deadline}
                    </span>
                  </div>

                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <DollarOutlined  />
                    <span style={{ fontWeight: 500 }}>
                      Amount: ${scholar.amount.toLocaleString()}
                    </span>
                  </div>

                  {scholar.description && (
                    <p style={{ margin: 0, fontSize: 14 }}>
                      {scholar.description.length > 100
                        ? `${scholar.description.substring(0, 100)}...`
                        : scholar.description}
                    </p>
                  )}

                  {scholar.eligibility && (
                    <Tag color="green">Eligibility: {scholar.eligibility}</Tag>
                  )}
                </Space>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ScholarshipContainer;
