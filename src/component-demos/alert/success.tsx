import React from 'react';
import { Alert, Space } from 'antd';
import type { ComponentDemo } from '../../interface';

const Demo = () => (
  <Space direction={'vertical'}>
    <Alert message="Success Tips" type="success" showIcon />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
  </Space>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorSuccess', 'colorSuccessBorder', 'colorSuccessBg'],
};

export default componentDemo;
