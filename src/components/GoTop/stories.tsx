import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
} as Meta;

export const Template: StoryFn = () => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </p>
      <GoTop />
    </div>
  );
};
