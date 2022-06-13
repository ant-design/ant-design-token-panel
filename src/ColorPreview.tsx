import type { FC } from 'react';
import React from 'react';
import classNames from 'classnames';
import makeStyle from './utils/makeStyle';

export type ColorPreviewProps = {
  color: string;
  className?: string;
  style?: React.CSSProperties;
};

const useStyle = makeStyle('ColorPreview', () => ({
  '.previewer-color-preview': {
    width: 20,
    height: 20,
    position: 'relative',
    borderRadius: '50%',
    padding: 0,
    display: 'inline-block',

    '&::before': {
      content: '""',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      top: 0,
      left: 0,
      position: 'absolute',
      zIndex: 2,
      backgroundColor: 'var(--antd-token-previewer-color-preview)',
      boxShadow:
        '0 2px 3px -1px rgba(0,0,0,0.20), inset 0 0 0 1px rgba(0,0,0,0.09)',
    },

    '&::after': {
      content: '""',
      width: 18,
      height: 18,
      borderRadius: '50%',
      top: 1,
      left: 1,
      position: 'absolute',
      zIndex: 1,
      backgroundColor: '#fff',
    },
  },
}));

const ColorPreview: FC<ColorPreviewProps> = ({
  color,
  style,
  className,
  ...restProps
}) => {
  const [warpSSR, hashId] = useStyle();

  return warpSSR(
    <div
      {...restProps}
      className={classNames('previewer-color-preview', className, hashId)}
      style={{
        // @ts-ignore
        ['--antd-token-previewer-color-preview']: color,
        ...style,
      }}
    />,
  );
};

export default ColorPreview;
