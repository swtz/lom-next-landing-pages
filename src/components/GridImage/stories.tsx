import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { GridImage, GridImageProps } from '.';
import mock from './mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
} as Meta;

export const Template: StoryFn<GridImageProps> = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
