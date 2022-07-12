import React from 'react';
import { Popconfirm, message } from 'antd';
import type { ComponentDemo } from '../../interface';

function confirm() {
  message.success('Click on Yes');
}
function cancel() {
  message.error('Click on No');
}
const Demo = () => (
  <Popconfirm
    title="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorBgElevated'],
  key: 'default',
};

export default componentDemo;
