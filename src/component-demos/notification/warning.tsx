import React from 'react';
import { notification } from '@madccc/antd';
import type { ComponentDemo } from '../../interface';

const { _InternalPanelDoNotUseOrYouWillBeFired } = notification;

const Demo = () => (
  <_InternalPanelDoNotUseOrYouWillBeFired
    message={'Notification Title'}
    type={'warning'}
    description={
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    }
  />
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorWarning'],
};

export default componentDemo;