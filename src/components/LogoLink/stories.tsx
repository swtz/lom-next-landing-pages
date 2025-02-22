import { Meta, StoryFn } from '@storybook/react/types-6-0';
import React from 'react';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Hello, LogoLink!',
    srcImg: 'assets/images/logo-github.svg',
    link: 'http://localhost',
  },
} as Meta;

export const ImageOnly: StoryFn<LogoLinkProps> = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
);

export const TextOnly: StoryFn<LogoLinkProps> = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
);

TextOnly.args = {
  srcImg: '',
};
