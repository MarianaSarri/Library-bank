import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../projects/lib-bank/src/**/*.stories.@(ts|mdx)'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
};

export default config;
