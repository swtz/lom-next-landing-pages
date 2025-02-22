import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';
import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
} as Meta;

export const Template: StoryFn<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
