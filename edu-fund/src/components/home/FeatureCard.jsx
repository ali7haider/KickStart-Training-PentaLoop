import { Card, Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

const FeatureCard = ({ title, description, icon }) => {
  return (
    <Card
      hoverable
      style={{
        height: "100%",
        border: "none",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
      }}
      bodyStyle={{
        padding: 32,
        textAlign: "center",
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <div
          style={{
            fontSize: 48,
            color: "#1890ff",
            marginBottom: 16,
          }}
        >
          {icon}
        </div>

        <Title level={4} style={{ margin: 0, fontWeight: 600 }}>
          {title}
        </Title>

        <Paragraph
          style={{
            color: "rgba(0, 0, 0, 0.65)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Paragraph>
      </Space>
    </Card>
  );
};

export default FeatureCard;
