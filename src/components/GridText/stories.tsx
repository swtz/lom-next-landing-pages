import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { GridText, GridTextProps } from '.';
import mock from './mock';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
} as Meta;

export const Light: StoryFn<GridTextProps> = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};

export const Dark: StoryFn<GridTextProps> = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};

Dark.args = {
  background: true,
};
