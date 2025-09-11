import React from "react";
import { Card, Typography, Descriptions, Button, Space } from "antd";

const { Title } = Typography;

const ApplicationReview = ({ data, onPrev, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Card
        style={{ width: "100%", maxWidth: 700, borderRadius: 12 }}
        bordered={false}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Review Your Application
        </Title>

        {/* Personal Details */}
        <Descriptions
          title="Personal Details"
          bordered
          column={1}
          size="middle"
          style={{ marginBottom: 24 }}
        >
          <Descriptions.Item label="First Name">
            {data.step1.firstName}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {data.step1.lastName}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {data.step1.email}
          </Descriptions.Item>
        </Descriptions>

        {/* Academic Details */}
        <Descriptions
          title="Academic Details"
          bordered
          column={1}
          size="middle"
          style={{ marginBottom: 24 }}
        >
          <Descriptions.Item label="GPA">{data.step2.gpa}</Descriptions.Item>
          <Descriptions.Item label="Degree">
            {data.step2.degree}
          </Descriptions.Item>
          <Descriptions.Item label="Institution">
            {data.step2.institution}
          </Descriptions.Item>
        </Descriptions>

        {/* Documents */}
        <Descriptions
          title="Documents"
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label="Essay">{data.step3.essay}</Descriptions.Item>
          <Descriptions.Item label="Transcript Uploaded">
            {data.step3.transcriptUploaded ? "Yes ✅" : "No ❌"}
          </Descriptions.Item>
          <Descriptions.Item label="Recommendation Letter Uploaded">
            {data.step3.recommendationLetterUploaded ? "Yes ✅" : "No ❌"}
          </Descriptions.Item>
        </Descriptions>

        {/* Actions */}
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <Space>
            <Button onClick={onPrev}>Previous</Button>
            <Button type="primary" onClick={handleSubmit}>
              Submit Application
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default ApplicationReview;
