import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque
          consequuntur laborum dolor facere rem voluptas commodi ullam, non,
          eius eos doloribus debitis nostrum? Obcaecati accusantium a suscipit
          ab ea.
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { disable: true },
  },
} as Meta;

export const Template: StoryFn<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
