import React, { useState, useEffect } from "react";
import { Form, Divider, Input, Button, Row, Col, Modal, message } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { createTransaction } from "../../services/transaction.service";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const SendCoin = () => {
  const [form] = Form.useForm();
  const publicKey = localStorage.getItem("publicKey");
  const history = useHistory();
  const params = useParams();
  const id = parseInt(params.id);
  const [project, setProject] = useState();

  const onFinish = async (values) => {
    const data = values;
    data.sender = publicKey;
    await createTransaction(data)
      .then((res) => {
        if (res.status === 204) {
          message.error("Send coin failed! Something is wrong");
        }
        if (res.status === 200) {
          message.success(`Your are sent coin ${data.amount} successfull!`);
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const onReset = () => {
    form.resetFields();
  };
  
  return (
    <div style={{ textAlign: "left" }}>
      <h1>Send Coin</h1>
      <Divider />
      <Form {...layout} form={form} onFinish={onFinish}>
        <Form.Item
          name="receiver"
          label="Receiver public key"
          rules={[
            {
              required: true,
              message: "Please input Receiver public key",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[
            {
              required: true,
              message: "Please input your Amount",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="privateKey"
          label="Private Key"
          rules={[
            {
              required: true,
              message: "Please input your Private key",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ margin: 5 }}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset} style={{ margin: 5 }}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SendCoin;
