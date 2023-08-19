module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components/index.ts',
          '@theme': './src/theme/theme.ts',
          '@icons': './src/assets/icons/index.ts',
          '@images': './src/assets/images/index.ts',
          '@hooks': './src/hooks/index.ts',
          '@screens': './src/screens/index.ts',
          '@routes': './src/routes/index.ts',
          '@utils': './src/utils/index.ts',
          '@contexts': './src/contexts/index.ts',
          '@domain': './src/domain/index.ts',
          '@services': './src/services/index.ts',
          '@infra': './src/infra/index.ts',
        },
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
