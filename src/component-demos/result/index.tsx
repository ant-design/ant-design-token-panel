import React from 'react';

import Demo from './result';
import info from './info';
import warning from './warning';
import ResultWithDesc from './resultWithDesc';

import type { PreviewerDemo } from '../../interface';

const previewerDemo: PreviewerDemo = {
  default: <Demo />,
  optional: [info, warning, ResultWithDesc],
};

export default previewerDemo;
