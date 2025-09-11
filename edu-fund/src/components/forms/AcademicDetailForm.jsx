import { useState } from "react";
import { Form, Input, Button, Card, Typography, Space } from "antd";

const { Title } = Typography;

const AcademicDetailsForm = ({ data, onSave, onNext, onPrev }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(data);

  const handleFinish = (values) => {
    onSave("step2", values);
    onNext();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Card
        style={{ width: "100%", maxWidth: 500, borderRadius: 12 }}
        bordered={false}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Academic Details
        </Title>

        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onFinish={handleFinish}
          onValuesChange={(_, allValues) => setFormData(allValues)}
        >
          <Form.Item
            label="GPA"
            name="gpa"
            rules={[{ required: true, message: "Please enter your GPA" }]}
          >
            <Input placeholder="Enter your GPA" />
          </Form.Item>

          <Form.Item
            label="Degree"
            name="degree"
            rules={[{ required: true, message: "Please enter your degree" }]}
          >
            <Input placeholder="Enter your degree (e.g. BSc, MSc)" />
          </Form.Item>

          <Form.Item
            label="Institution"
            name="institution"
            rules={[{ required: true, message: "Please enter your institution" }]}
          >
            <Input placeholder="Enter your institution name" />
          </Form.Item>

          <Form.Item>
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={onPrev}>Previous</Button>
              <Button type="primary" htmlType="submit">
                Next: Document Upload
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AcademicDetailsForm;
