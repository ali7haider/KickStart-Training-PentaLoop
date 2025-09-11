import { Row, Col, Card, Typography, Space } from 'antd';
import { 
  RocketOutlined, 
  SearchOutlined, 
  SafetyCertificateOutlined, 
  ClockCircleOutlined,
  TeamOutlined,
  DollarOutlined
} from '@ant-design/icons';

const { Title } = Typography;
import FeatureCard from './FeatureCard';
const features = [
  {
    id: 1,
    title: "Quick Application",
    description: "Apply to multiple scholarships with a single profile and save hours of paperwork.",
    icon: <RocketOutlined />
  },
  {
    id: 2,
    title: "Smart Matching",
    description: "Our algorithm matches you with scholarships that fit your profile and qualifications.",
    icon: <SearchOutlined />
  },
  {
    id: 3,
    title: "Verified Opportunities",
    description: "All scholarships are verified to ensure legitimacy and timely disbursement.",
    icon: <SafetyCertificateOutlined />
  },
  {
    id: 4,
    title: "Deadline Tracking",
    description: "Never miss a deadline with our smart notification system and calendar integration.",
    icon: <ClockCircleOutlined />
  },
  {
    id: 5,
    title: "Community Support",
    description: "Connect with other students and get advice from successful applicants.",
    icon: <TeamOutlined />
  },
  {
    id: 6,
    title: "No Hidden Fees",
    description: "Our platform is completely free for students. We believe education should be accessible.",
    icon: <DollarOutlined />
  }
];

const FeaturesSection = () => {
  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Title 
          level={2} 
          style={{ 
            textAlign: 'center', 
            marginBottom: 60,
            fontSize: '2.5rem',
            fontWeight: 600
          }}
        >
          Why Use EduFund?
        </Title>
        
        <Row gutter={[32, 32]} justify="center">
          {features.map((feature) => (
            <Col xs={24} sm={12} lg={8} key={feature.id}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};


export default FeaturesSection;