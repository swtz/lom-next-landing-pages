import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { GridTwoColumns, GridTwoColumnsProps } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
} as Meta;

export const Light: StoryFn<GridTwoColumnsProps> = (args) => (
  <div>
    <GridTwoColumns {...args} />
  </div>
);

export const Dark: StoryFn<GridTwoColumnsProps> = (args) => (
  <div>
    <GridTwoColumns {...args} />
  </div>
);

Dark.args = {
  background: true,
};
