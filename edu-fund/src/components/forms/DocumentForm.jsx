import { useState } from "react";
import { Form, Input, Upload, Button, Card, Typography, Space, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;

const DocumentForm = ({ data, onSave, onNext, onPrev }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(data);

  const handleFinish = () => {
    onSave("step3", formData);
    onNext();
  };

  const handleFileChange = (fieldName, { file }) => {
    if (file.status !== "removed") {
      setFormData({ ...formData, [fieldName]: true });
      message.success(`${file.name} selected`);
    } else {
      setFormData({ ...formData, [fieldName]: false });
      message.info(`${fieldName} removed`);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Card
        style={{ width: "100%", maxWidth: 500, borderRadius: 12 }}
        bordered={false}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Document Upload
        </Title>

        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Essay"
            name="essay"
            rules={[{ required: true, message: "Please enter your essay" }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Write your essay here..."
              onChange={(e) =>
                setFormData({ ...formData, essay: e.target.value })
              }
              value={formData.essay}
            />
          </Form.Item>

          <Form.Item label="Transcript">
            <Upload
              beforeUpload={() => false} // prevent auto-upload
              onChange={(info) => handleFileChange("transcriptUploaded", info)}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Select Transcript</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Recommendation Letter">
            <Upload
              beforeUpload={() => false}
              onChange={(info) =>
                handleFileChange("recommendationLetterUploaded", info)
              }
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Select Recommendation Letter</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={onPrev}>Previous</Button>
              <Button type="primary" htmlType="submit">
                Next: Review Application
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default DocumentForm;
