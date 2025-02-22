import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Ipsa beatae voluptate quod rem quisquam
    id illo ea voluptatum quidem enim autem, voluptatem necessitatibus
    vel, a veritatis debitis porro, nam eveniet?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: StoryFn<TextComponentProps> = (args) => (
  <div>
    <TextComponent {...args} />
  </div>
);
