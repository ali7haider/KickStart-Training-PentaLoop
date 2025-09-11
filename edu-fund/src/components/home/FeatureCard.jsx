import { Card, Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

const FeatureCard = ({ title, description, icon }) => {
  return (
    <Card
      style={{
        height: "100%",
        borderRadius: 12,
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
