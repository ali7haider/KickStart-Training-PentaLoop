import { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title } = Typography;

const PersonalDetailsForm = ({ data, onSave, onNext }) => {
  const [form] = Form.useForm(); 
  const [formData, setFormData] = useState(data);

  const handleFinish = (values) => {
    onSave("step1", values);
    onNext();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Card
        style={{ width: "100%", maxWidth: 500, borderRadius: 12 }}
        bordered={false}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Personal Details
        </Title>

        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onFinish={handleFinish}
          onValuesChange={(_, allValues) => setFormData(allValues)}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please enter your first name" }]}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Enter a password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Next: Academic Details
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PersonalDetailsForm;
