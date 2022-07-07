import React from 'react';
import { Slider } from '@madccc/antd';
import type { ComponentDemo } from '../../interface';

const Demo = () => (
  <>
    <Slider defaultValue={30} />
    <Slider range defaultValue={[20, 50]} />
  </>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: [
    'colorBgContent',
    'colorBgContentHover',
    'colorBgContainer',
    'colorPrimary',
    'colorPrimaryBorderHover',
    'colorPrimaryBorder',
  ],
};

export default componentDemo;
