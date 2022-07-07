import React, { useState } from 'react';
import { Transfer } from 'antd';

import mockData from './data';
import type { ComponentDemo } from '../../interface';

const initialTargetKeys = mockData
  .filter((item) => +item.key > 10)
  .map((item) => item.key);

const Demo = () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1', '2']);
  const onScroll = () => {};
  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={(nextTargetKeys) => {
        setTargetKeys(nextTargetKeys);
      }}
      onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
      }}
      onScroll={onScroll}
      render={(item) => item.title}
    />
  );
};

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['controlItemBgActiveHover', 'controlItemBgActive'],
};

export default componentDemo;
