import type { Config } from 'tailwindcss';
export default <Partial<Config>>{
  theme: {
    boxShadow: {
      1: '0px 3px 52px rgba(90, 92, 102, 0.06)',
      2: '3px 7px 18px rgba(103, 105, 116, 0.0833424)',
      3: '-5px 10px 52px rgba(90, 92, 102, 0.06)',
      4: '-10px 5px 18px rgba(103, 105, 116, 0.0833424)',
    },
    colors: {
      'blue-100': '#8C8EFF',
      'blue-200': '#595CFF',
      'blue-300': '#383BE4',
      green: '#00CB6F',
      orange: '#FFBC2C',
      red: '#EE7764',
      white: '#FFFFFF',
      'gray-100': '#F9F9FB',
      'gray-200': '#F0F0F5',
      'gray-300': '#E6E6EB',
      'gray-400': '#AFB1BD',
      'gray-500': '#82828B',
      black: '#000000',
    },
    extend: {
      spacing: {
        'max-content-w': '1160px',
      },
    },
  },
};
