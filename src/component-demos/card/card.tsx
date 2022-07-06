import React from 'react';
import { Card, Space } from 'antd';

export default () => (
  <Space>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p> <p>Card content</p> <p>Card content</p>
    </Card>
    <Card
      loading
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p> <p>Card content</p> <p>Card content</p>
    </Card>
  </Space>
);
