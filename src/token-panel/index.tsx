import useToken from '../hooks/useToken';
import React from 'react';
import AliasTokenPreview, { TokenPreviewProps } from './alias-token-preview';

export default () => {
  const [normalToken, onNormalTokenChange] = useToken();
  const [darkToken, onDarkTokenChange] = useToken();

  const tokens = [
    {
      token: normalToken,
      onTokenChange: onNormalTokenChange,
      title: '默认主题',
    },
    { token: darkToken, onTokenChange: onDarkTokenChange, title: '暗色主题' },
  ] as TokenPreviewProps['tokens'];

  return (
    <div
      style={{
        background: '#F5F7FA',
      }}
    >
      <AliasTokenPreview tokens={tokens} />
    </div>
  );
};
