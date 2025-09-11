import { Row, Col, Typography, Button, Space, Card } from "antd";
import { RocketOutlined, SearchOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Hero = ({ title, subtitle, onBrowseClick, onApplyClick }) => {
  return (
    <Card
      bodyStyle={{
        textAlign: "center",
        padding: "60px 20px",
      }}
      style={{
        margin: "10px 50px",
        borderRadius: 12,
      }}
    >
      <Row justify="center">
        <Col xs={24} md={18} lg={14}>
          <Title level={1}>{title}</Title>
          <Paragraph
            style={{ fontSize: "18px", color: "var(--ant-text-color)" }}
          >
            {subtitle}
          </Paragraph>

          <Space size="middle" wrap>
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              onClick={onApplyClick}
            >
              Start Your Application
            </Button>

            <Button
              size="large"
              icon={<SearchOutlined />}
              onClick={onBrowseClick}
            >
              Browse Scholarships
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default Hero;
