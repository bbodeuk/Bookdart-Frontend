// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const bookmark = [
  // Create bookmark
  rest.post('/api/bookmarks', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        ok: true,
        data: {
          title: 'My awesome bookmark',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id sollicitudin ligula. Quisque vitae nibh arcu. Aliquam tempor nisl nulla, sed tempus lectus sodales eu.',
          link: 'https://example.com/',
          image: 'https://picsum.photos/400/300',
          tags: ['react', 'typescript'],
        },
      }),
    ),
  ),
  // Delete bookmark
  rest.delete('/api/bookmarks/:bookmarkId', (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ ok: true })),
  ),
];

export default bookmark;
