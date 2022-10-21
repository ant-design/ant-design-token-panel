import { Tooltip } from 'antd';
import type { MutableTheme } from 'antd-token-previewer';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import type { TokenName, TokenValue } from '../interface';
import { tokenMeta } from '../meta';
import { mapRelatedAlias } from '../meta/TokenRelation';
import TokenInput from '../TokenInput';
import deepUpdateObj from '../utils/deepUpdateObj';
import getDesignToken from '../utils/getDesignToken';
import getValueByPath from '../utils/getValueByPath';
import makeStyle from '../utils/makeStyle';
import { getRelatedComponents } from '../utils/statistic';

const useStyle = makeStyle('TokenDetail', (token) => ({
  '.token-panel-token-detail': {
    '.token-panel-pro-token-collapse-map-collapse-token-description': {
      color: token.colorTextPlaceholder,
      marginBottom: 8,
      fontSize: 12,
    },

    '.token-panel-pro-token-collapse-map-collapse-token-usage-tag-container': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      color: token.colorTextSecondary,
    },

    '.token-panel-pro-token-collapse-map-collapse-token-usage-tag': {
      display: 'inline-block',
      marginInlineEnd: 8,
      borderRadius: 4,
      height: 20,
      padding: '0 8px',
      fontSize: 12,
      lineHeight: '20px',
      backgroundColor: 'rgba(0,0,0,0.015)',
    },

    '.token-panel-pro-token-collapse-map-collapse-token-inputs': {
      padding: '8px 10px',
      backgroundColor: 'rgba(0,0,0,0.02)',
      marginTop: 12,
      '> *:not(:last-child)': {
        marginBottom: 8,
      },
    },
  },
}));

export type TokenDetailProps = {
  themes: MutableTheme[];
  path: string[];
  tokenName: TokenName;
  className?: string;
  style?: React.CSSProperties;
};

const TokenDetail: FC<TokenDetailProps> = ({
  themes,
  path,
  tokenName,
  className,
  style,
}) => {
  const [wrapSSR, hashId] = useStyle();
  const tokenPath = [...path, tokenName];

  const handleTokenChange = (theme: MutableTheme) => (value: TokenValue) => {
    theme.onThemeChange?.(
      deepUpdateObj(theme.config, [...path, tokenName], value),
      [...path, tokenName],
    );
  };

  const relatedComponents = useMemo(() => {
    return getRelatedComponents([
      tokenName,
      ...((mapRelatedAlias as any)[tokenName] ?? []),
    ]);
  }, [tokenName]);

  return wrapSSR(
    <div
      className={classNames(className, hashId, 'token-panel-token-detail')}
      style={style}
    >
      <div className="token-panel-pro-token-collapse-map-collapse-token-description">
        {tokenMeta[tokenName]?.desc}
      </div>
      {relatedComponents.length > 0 && (
        <Tooltip
          title={getRelatedComponents(tokenName).join(', ')}
          placement="topLeft"
        >
          <div className="token-panel-pro-token-collapse-map-collapse-token-usage-tag-container">
            {relatedComponents.map((item) => (
              <span
                key={item}
                className="token-panel-pro-token-collapse-map-collapse-token-usage-tag"
              >
                {item}
              </span>
            ))}
          </div>
        </Tooltip>
      )}
      <div className="token-panel-pro-token-collapse-map-collapse-token-inputs">
        {themes.map((themeItem) => {
          return (
            <div key={themeItem.key}>
              <TokenInput
                theme={themeItem}
                canReset={themeItem.getCanReset?.(tokenPath)}
                onReset={() => themeItem.onReset?.(tokenPath)}
                onChange={handleTokenChange(themeItem)}
                value={
                  getValueByPath(themeItem.config, tokenPath) ??
                  (getDesignToken(themeItem.config) as any)[tokenName]
                }
              />
            </div>
          );
        })}
      </div>
    </div>,
  );
};

export default TokenDetail;
