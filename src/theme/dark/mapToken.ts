import { getAlphaColor, getSolidColor } from './colorAlgorithm';
import type { BgMapToken, TextMapToken } from '../IPalettes';

export const colorPalettes = {
  'blue-1': '#111d2c',
  'blue-2': '#112a45',
  'blue-3': '#15395b',
  'blue-4': '#164c7e',
  'blue-5': '#1765ad',
  'blue-6': '#177ddc',
  'blue-7': '#3c9ae8',
  'blue-8': '#65b7f3',
  'blue-9': '#8dcff8',
  'blue-10': '#b7e3fa',
  'purple-1': '#1a1325',
  'purple-2': '#24163a',
  'purple-3': '#301c4d',
  'purple-4': '#3e2069',
  'purple-5': '#51258f',
  'purple-6': '#642ab5',
  'purple-7': '#854eca',
  'purple-8': '#ab7ae0',
  'purple-9': '#cda8f0',
  'purple-10': '#ebd7fa',
  'cyan-1': '#112123',
  'cyan-2': '#113536',
  'cyan-3': '#144848',
  'cyan-4': '#146262',
  'cyan-5': '#138585',
  'cyan-6': '#13a8a8',
  'cyan-7': '#33bcb7',
  'cyan-8': '#58d1c9',
  'cyan-9': '#84e2d8',
  'cyan-10': '#b2f1e8',
  'green-1': '#162312',
  'green-2': '#1d3712',
  'green-3': '#274916',
  'green-4': '#306317',
  'green-5': '#3c8618',
  'green-6': '#49aa19',
  'green-7': '#6abe39',
  'green-8': '#8fd460',
  'green-9': '#b2e58b',
  'green-10': '#d5f2bb',
  'magenta-1': '#291321',
  'magenta-2': '#40162f',
  'magenta-3': '#551c3b',
  'magenta-4': '#75204f',
  'magenta-5': '#a02669',
  'magenta-6': '#cb2b83',
  'magenta-7': '#e0529c',
  'magenta-8': '#f37fb7',
  'magenta-9': '#f8a8cc',
  'magenta-10': '#fad2e3',
  'pink-1': '#291321',
  'pink-2': '#40162f',
  'pink-3': '#551c3b',
  'pink-4': '#75204f',
  'pink-5': '#a02669',
  'pink-6': '#cb2b83',
  'pink-7': '#e0529c',
  'pink-8': '#f37fb7',
  'pink-9': '#f8a8cc',
  'pink-10': '#fad2e3',
  'red-1': '#2a1215',
  'red-2': '#431418',
  'red-3': '#58181c',
  'red-4': '#791a1f',
  'red-5': '#a61d24',
  'red-6': '#d32029',
  'red-7': '#e84749',
  'red-8': '#f37370',
  'red-9': '#f89f9a',
  'red-10': '#fac8c3',
  'orange-1': '#2b1d11',
  'orange-2': '#442a11',
  'orange-3': '#593815',
  'orange-4': '#7c4a15',
  'orange-5': '#aa6215',
  'orange-6': '#d87a16',
  'orange-7': '#e89a3c',
  'orange-8': '#f3b765',
  'orange-9': '#f8cf8d',
  'orange-10': '#fae3b7',
  'yellow-1': '#2b2611',
  'yellow-2': '#443b11',
  'yellow-3': '#595014',
  'yellow-4': '#7c6e14',
  'yellow-5': '#aa9514',
  'yellow-6': '#d8bd14',
  'yellow-7': '#e8d639',
  'yellow-8': '#f3ea62',
  'yellow-9': '#f8f48b',
  'yellow-10': '#fafab5',
  'volcano-1': '#2b1611',
  'volcano-2': '#441d12',
  'volcano-3': '#592716',
  'volcano-4': '#7c3118',
  'volcano-5': '#aa3e19',
  'volcano-6': '#d84a1b',
  'volcano-7': '#e87040',
  'volcano-8': '#f3956a',
  'volcano-9': '#f8b692',
  'volcano-10': '#fad4bc',
  'geekblue-1': '#131629',
  'geekblue-2': '#161d40',
  'geekblue-3': '#1c2755',
  'geekblue-4': '#203175',
  'geekblue-5': '#263ea0',
  'geekblue-6': '#2b4acb',
  'geekblue-7': '#5273e0',
  'geekblue-8': '#7f9ef3',
  'geekblue-9': '#a8c1f8',
  'geekblue-10': '#d2e0fa',
  'gold-1': '#2b2111',
  'gold-2': '#443111',
  'gold-3': '#594214',
  'gold-4': '#7c5914',
  'gold-5': '#aa7714',
  'gold-6': '#d89614',
  'gold-7': '#e8b339',
  'gold-8': '#f3cc62',
  'gold-9': '#f8df8b',
  'gold-10': '#faedb5',
  'lime-1': '#1f2611',
  'lime-2': '#2e3c10',
  'lime-3': '#3e4f13',
  'lime-4': '#536d13',
  'lime-5': '#6f9412',
  'lime-6': '#8bbb11',
  'lime-7': '#a9d134',
  'lime-8': '#c9e75d',
  'lime-9': '#e4f88b',
  'lime-10': '#f0fab5',
};

export const successPalettes = {
  1: colorPalettes['green-1'],
  3: colorPalettes['green-3'],
  6: colorPalettes['green-6'],
};

export const warningPalettes = {
  1: colorPalettes['gold-1'],
  3: colorPalettes['gold-3'],
  6: colorPalettes['gold-6'],
};

export const errorPalettes = {
  1: colorPalettes['red-1'],
  3: colorPalettes['red-3'],
  6: colorPalettes['red-6'],
};

// FIXME: 主色在暗色模式下的应用很有问题需要收敛
export const primaryPalettes = {
  0: '#0e161f', // TODO： Transfer 的 hover 态用的 0,感觉要改
  1: '#111b26',
  2: '#4697e3', // Slider 的 focus 态用的是 2
  3: '#153450',
  4: '#177ddc', // Slider 的 hover 态用的是 4
  5: '#165996',
  6: colorPalettes['blue-6'],
  7: '#388ed3',
};

const bgBaseColor = '#000';
const textBaseColor = '#fff';

// const bgBaseColor = 'hsl(220,20%,20%)';

// const lightBaseColor = 'hsl(220,20%,100%)';

// 一组尝试自定义风格的暗色主题
// export const bgPalettes = {
//   26: 'hsl(218,5%,27%)',
//   19: 'hsl(218,5%,15%)',
//   15: 'hsl(220,11%,27%)',
//   12: 'hsl(220,11%,22%)',
//   8: 'hsl(220,13%,18%)',
//   0: 'hsl(216,13%,15%)',
// };

// TODO： 需要定义这些色值下面的色板含义
export const bgMapToken: BgMapToken = {
  colorFill: getAlphaColor(textBaseColor, 0.18),
  colorFillSecondary: getAlphaColor(textBaseColor, 0.12),
  colorFillTertiary: getAlphaColor(textBaseColor, 0.08),
  colorFillQuaternary: getAlphaColor(textBaseColor, 0.04),

  colorBgElevated: getSolidColor(bgBaseColor, 12),
  colorBgContainer: getSolidColor(bgBaseColor, 8),
  colorBgLayout: getSolidColor(bgBaseColor, 0),
  colorBgSpotlight: getSolidColor(bgBaseColor, 26),
};

// TODO： 需要定义这些色值下面的色板含义
export const textMapToken: TextMapToken = {
  colorText: getAlphaColor(textBaseColor, 0.85),
  colorTextSecondary: getAlphaColor(textBaseColor, 0.65),
  colorTextTertiary: getAlphaColor(textBaseColor, 0.45),
  colorTextQuaternary: getAlphaColor(textBaseColor, 0.25),
};

export const borderMapToken = {
  colorBorder: getSolidColor(bgBaseColor, 26),
  // TODO：Secondary 在纯实色背景下的颜色和 Split 是一样的
  colorBorderSecondary: getSolidColor(bgBaseColor, 19),
  colorSplit: getAlphaColor(textBaseColor, 12),
};
