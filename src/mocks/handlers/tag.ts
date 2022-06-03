// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { Tag } from '../../@types/domain';

const tag = [
  // Get tags
  rest.get('/api/tags', (_, res, ctx) => {
    const tags: Tag[] = [
      { name: 'React', count: 36 },
      { name: 'React Router', count: 23 },
      { name: 'Svelte', count: 21 },
      { name: 'Flutter', count: 44 },
      { name: 'TypeScript', count: 34 },
      { name: 'Rust', count: 35 },
      { name: 'Testing Library', count: 51 },
      { name: 'Git', count: 13 },
      { name: 'Optimization', count: 54 },
      {
        name: 'And we may need a tag with a pretty long name to check the design',
        count: 37,
      },
      { name: 'Automation', count: 56 },
      { name: 'CSS', count: 58 },
      { name: 'Garbage collection', count: 54 },
      { name: 'JIT Compiler', count: 34 },
      { name: 'TCP/IP', count: 76 },
    ];

    return res(
      ctx.status(200),
      ctx.json({
        tags,
      }),
    );
  }),
];

export default tag;
