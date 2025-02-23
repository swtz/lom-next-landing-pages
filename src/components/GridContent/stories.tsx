import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { GridContent, GridContentProps } from '.';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
} as Meta;

export const Light: StoryFn<GridContentProps> = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};

export const Dark: StoryFn<GridContentProps> = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};

Dark.args = {
  background: true,
};
