import { Button, ConfigProvider, message, theme as antdTheme } from 'antd';
import type { Theme } from 'antd-token-previewer';
import { enUS, ThemeEditor, zhCN } from 'antd-token-previewer';
import 'antd/es/style/reset.css';
import React, { useEffect } from 'react';
import { DarkTheme, Light } from '../../src/icons';

const ANT_DESIGN_V5_CUSTOM_THEME_PRO = 'ant-design-v5-custom-theme-pro';

const Demo = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [lang, setLang] = React.useState('zh-CN');
  const [isDark, setIsDark] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>({
    name: '自定义主题',
    key: 'secret theme',
    config: {},
  });

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const storedConfig = localStorage.getItem(ANT_DESIGN_V5_CUSTOM_THEME_PRO);
    if (storedConfig) {
      setTheme((prev) => ({ ...prev, config: JSON.parse(storedConfig) }));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      ANT_DESIGN_V5_CUSTOM_THEME_PRO,
      JSON.stringify(theme.config),
    );
    messageApi.success('保存成功');
  };

  return (
    <React.StrictMode>
      {contextHolder}
      <ConfigProvider
        theme={{
          hashed: true,
          algorithm: isDark ? antdTheme.darkAlgorithm : undefined,
        }}
      >
        <ThemeEditor
          theme={theme}
          onThemeChange={handleThemeChange}
          locale={lang === 'zh-CN' ? zhCN : enUS}
          actions={
            <>
              <Button
                type="text"
                icon={lang === 'zh-CN' ? '中' : 'en'}
                onClick={() => setLang(lang === 'en-US' ? 'zh-CN' : 'en-US')}
                style={{ marginRight: 8 }}
              />
              <Button
                type="text"
                icon={
                  isDark ? (
                    <DarkTheme style={{ fontSize: 16 }} />
                  ) : (
                    <Light style={{ fontSize: 16 }} />
                  )
                }
                onClick={() => setIsDark(!isDark)}
                style={{ marginRight: 8 }}
              />
              <Button type="primary" onClick={handleSave}>
                保存
              </Button>
            </>
          }
        />
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default Demo;
