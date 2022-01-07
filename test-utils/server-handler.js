import { rest } from 'msw';
import { mockedTodos } from '../__mock__/mock';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', (_req, res, ctx) => {
    return res(ctx.json(mockedTodos));
  }),
];

export { handlers };