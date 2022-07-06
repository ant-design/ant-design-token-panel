import { Result } from 'antd';
import React from 'react';
import type { ComponentDemo } from '../../interface';

const Demo: React.FC = () => (
  <Result status={'info'} title="Demo示意" subTitle="status 为info" />
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorInfo'],
};

export default componentDemo;
