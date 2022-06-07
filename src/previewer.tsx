import type { FC } from 'react';
import React, { useState } from 'react';
import { Button, ConfigProvider, Layout, message } from '@madccc/antd';
import classNames from 'classnames';
import ComponentPanel from './component-panel';
import type { ThemeSelectProps } from './ThemeSelect';
import ThemeSelect from './ThemeSelect';
import useToken from './hooks/useToken';
import { DarkTheme, CompactTheme } from './icons';
import makeStyle from './utils/makeStyle';
import type { MutableTheme } from './token-panel';
import TokenPanel from './token-panel';
import { RightOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const SIDER_WIDTH = 340;

const useStyle = makeStyle('layout', (token) => ({
  '.previewer-layout.ant-layout': {
    '.ant-layout-header': {
      backgroundColor: 'white !important',
      display: 'flex',
      alignItems: 'center',
      borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      paddingInline: `${token.paddingLG}px !important`,
    },

    '.ant-layout-sider': {
      padding: 0,
      borderInlineEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      transition: `all ${token.motionDurationSlow}`,

      '.ant-btn.previewer-sider-collapse-btn': {
        position: 'fixed',
        transform: 'translateX(-50%)',
        border: 'none',
        boxShadow:
          '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',

        '&-collapsed: hover': {
          transform: 'translateX(0)',
        },
      },
    },
  },
}));

const InternalPreviewer: React.FC = () => {
  const [wrapSSR, hashId] = useStyle();
  const [token] = useToken();
  const [shownThemes, setShownThemes] = useState<string[]>(['default']);
  const [enabledThemes, setEnabledThemes] = useState<string[]>(['default']);
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [siderVisible, setSiderVisible] = useState<boolean>(true);

  const [themes, setThemes] = useState<ThemeSelectProps['themes']>([
    {
      name: '默认主题',
      key: 'default',
      config: { override: { derivative: token } },
      fixed: true,
    },
    {
      name: '暗色主题',
      key: 'dark',
      config: { override: { derivative: token } },
      icon: <DarkTheme style={{ fontSize: 16 }} />,
      closable: true,
    },
    {
      name: '紧凑主题',
      key: 'compact',
      config: { override: { derivative: token } },
      icon: <CompactTheme style={{ fontSize: 16 }} />,
      closable: true,
    },
  ]);

  return wrapSSR(
    <Layout className={classNames('previewer-layout', hashId)}>
      <Header className="previewer-header">
        <span style={{ fontSize: 16, fontWeight: 'bold', marginRight: 16 }}>
          主题预览器
        </span>
        <div>
          <ThemeSelect
            enabledThemes={enabledThemes}
            shownThemes={shownThemes}
            themes={themes}
            onEnabledThemeChange={(value) => {
              if (value.length > 2) {
                message.warning({
                  content: '最多同时展示两个主题',
                });
                return;
              }
              setEnabledThemes(value);
            }}
            onShownThemeChange={(value) => setShownThemes(value)}
          />
        </div>
      </Header>
      <Layout
        style={{
          height: 'calc(100vh - 64px)',
        }}
      >
        <Sider
          style={{
            backgroundColor: 'white',
            height: '100%',
            overflow: 'auto',
            flex: `0 0 ${SIDER_WIDTH}px`,
          }}
          width={siderVisible ? SIDER_WIDTH : 0}
        >
          <Button
            onClick={() => setSiderVisible((prev) => !prev)}
            className={classNames(
              'previewer-sider-collapse-btn',
              !siderVisible && 'previewer-sider-collapse-btn-collapsed',
            )}
            size="small"
            icon={
              <RightOutlined
                rotate={siderVisible ? 180 : 0}
                style={{
                  fontSize: 12,
                  color: 'rgba(0, 0, 0, 25%)',
                  transition: 'transform 0.3s',
                }}
              />
            }
            shape="circle"
            style={{ left: siderVisible ? SIDER_WIDTH : 0 }}
          />
          <TokenPanel
            themes={enabledThemes.map<MutableTheme>((item) => {
              const themeEntity = themes.find((theme) => theme.key === item)!;
              return {
                name: themeEntity.name,
                key: themeEntity.key,
                config: themeEntity.config,
                onThemeChange: (newTheme) => {
                  setThemes((prev) =>
                    prev.map((theme) =>
                      theme.key === themeEntity.key
                        ? {
                            ...theme,
                            config: newTheme,
                          }
                        : theme,
                    ),
                  );
                },
              };
            })}
            selectedTokens={selectedTokens}
            onTokenSelect={(tokenName) =>
              setSelectedTokens((prev) =>
                prev.includes(tokenName)
                  ? prev.filter((item) => item !== tokenName)
                  : [...prev, tokenName],
              )
            }
          />
        </Sider>
        <Content
          style={{
            padding: '28px 20px 28px 24px',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <ComponentPanel
            selectedTokens={selectedTokens}
            themes={enabledThemes.map(
              (theme) => themes.find((item) => item.key === theme)!,
            )}
          />
        </Content>
      </Layout>
    </Layout>,
  );
};

const Previewer: FC = (props) => {
  return (
    <ConfigProvider theme={{ hashed: true }}>
      <InternalPreviewer {...props} />
    </ConfigProvider>
  );
};

export default Previewer;
