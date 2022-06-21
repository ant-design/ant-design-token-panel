import type { TokenEntity } from '../src/interface';
import type { ThemeConfig } from '@madccc/antd/es/config-provider/context';
import {
  convertTokenArrToConfig,
  convertTokenConfigToArr,
} from '../src/utils/convertToken';

describe('Utils', () => {
  describe('convertToken', () => {
    const tokenPair: { arr: TokenEntity[]; config: ThemeConfig }[] = [
      {
        arr: [
          {
            name: 'colorDefaultOutline',
            token: 'colorDefaultOutline',
            value: '#f5f5',
            type: 'color',
            description: 'colorDefaultOutline',
            source: 'alias',
          },
        ],
        config: {
          override: {
            alias: {
              colorDefaultOutline: '#f5f5',
            },
          },
        },
      },
      {
        arr: [
          {
            name: 'colorBgTextHover',
            token: 'colorBgTextHover',
            value: 'rgba(0, 0, 0, 0.01)',
            type: 'color',
            description: 'colorBgTextHover',
            source: 'Button',
          },
        ],
        config: {
          override: {
            Button: {
              colorBgTextHover: 'rgba(0, 0, 0, 0.01)',
            },
          },
        },
      },
    ];
    tokenPair.forEach(({ arr, config }, index) => {
      it(`convertTokenArrToConfig ${index + 1}`, () => {
        expect(convertTokenArrToConfig(arr)).toStrictEqual(config);
      });
      it(`convertTokenConfigToArr ${index + 1}`, () => {
        expect(convertTokenConfigToArr(config)).toStrictEqual(arr);
      });
    });
  });
});
