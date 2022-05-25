import type { FC, ReactNode } from 'react';
import type { ThemeConfig } from '@madccc/antd/es/config-provider/context';
import makeStyle from './utils/makeStyle';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Button, Dropdown, Menu } from '@madccc/antd';
import { PlusOutlined } from '@ant-design/icons';

const ENABLED_THEMES_LIMIT = 2;

export type Theme = {
  name: string;
  key: string;
  theme: ThemeConfig;
  icon?: ReactNode;
};

export type ThemeSelectProps = {
  onEnabledThemeChange: (themes: string[]) => void;
  onShownThemeChange: (themes: string[]) => void;
  enabledThemes: string[];
  shownThemes: string[];
  themes: Theme[];
};

const useStyle = makeStyle('ThemeSelect', (token) => ({
  '.previewer-theme-select': {
    padding: `${token.paddingXXS}px ${token.paddingXS}px`,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    height: token.controlHeight,
    display: 'flex',
    alignItems: 'center',

    '.ant-btn.previewer-theme-select-add-btn': {
      minWidth: 0,
      width: 16,
      height: 16,
      fontSize: 8,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: token.marginSM,
    },

    '.previewer-theme-select-tag': {
      height: 22,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      borderRadius: 4,
      backgroundColor: token.colorBgComponent,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      paddingInline: 10,
      marginRight: token.marginXS,
      fontSize: token.fontSizeSM,
      position: 'relative',
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid}`,

      '&.previewer-theme-select-tag-active': {
        border: `${token.lineWidth}px ${token.lineType} ${token['blue-1']}`,
        backgroundColor: token['blue-1'],
        color: token.colorPrimary,

        '&::after': {
          content: '""',
          borderTopRightRadius: 2,
          position: 'absolute',
          right: 2,
          top: 2,
          width: 6,
          height: 6,
          background: `linear-gradient(to right top, transparent, transparent 50%, ${token.colorPrimary} 50%, ${token.colorPrimary} 100%)`,
        },
      },
    },
  },

  '.previewer-theme-select-dropdown-title': {
    cursor: 'default !important',
    paddingTop: '8px !important',
    paddingBottom: '16px !important',
    color: `${token.colorTextSecondary} !important`,
  },
}));

const ThemeSelect: FC<ThemeSelectProps> = (props) => {
  const {
    onEnabledThemeChange,
    onShownThemeChange,
    enabledThemes,
    shownThemes,
    themes,
  } = props;

  const [wrapSSR, hashId] = useStyle();

  const dropdownItems = useMemo(
    () => [
      {
        disabled: true,
        label: '添加主题即可预览',
        key: 'none',
        value: '1241oijoaisjfio',
        className: 'previewer-theme-select-dropdown-title',
      },
      ...themes
        .filter((theme) => !shownThemes.includes(theme.key))
        .map((theme) => ({
          icon: theme.icon,
          value: theme.key,
          label: theme.name,
          key: theme.key,
          onClick: () => {
            onShownThemeChange([...shownThemes, theme.key]);
          },
        })),
    ],
    [themes, shownThemes, onShownThemeChange],
  );

  const shownThemeEntities = useMemo(
    () => themes.filter((theme) => shownThemes.includes(theme.key)),
    [themes, shownThemes],
  );

  return wrapSSR(
    <div className={classNames('previewer-theme-select', hashId)}>
      {shownThemeEntities.map((theme) => (
        <div
          onClick={() => {
            onEnabledThemeChange(
              enabledThemes.includes(theme.key)
                ? enabledThemes.filter((item) => item !== theme.key)
                : [...enabledThemes, theme.key],
            );
          }}
          key={theme.key}
          className={classNames('previewer-theme-select-tag', {
            'previewer-theme-select-tag-active': enabledThemes.includes(
              theme.key,
            ),
          })}
        >
          {theme.name}
        </div>
      ))}
      <Dropdown
        placement="bottomRight"
        trigger={['click']}
        overlay={<Menu items={dropdownItems} />}
      >
        <Button
          type="primary"
          shape="circle"
          className="previewer-theme-select-add-btn"
          icon={<PlusOutlined />}
        />
      </Dropdown>
    </div>,
  );
};

export default ThemeSelect;