import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<a rel="nofollow" target="_blank" href="https://github.com/swtz">Feito com ❤️ por L.Lüders</a>`,
  },
} as Meta;

export const Template: StoryFn<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
