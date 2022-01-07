import { render, screen } from "@testing-library/react";
import FirstPost from '../pages/posts/first-post'

import { mockedTodos } from '../__mock__/mock';
import { server, rest } from '../test-utils/server';

describe('FirstPost', () => {
  it('renders a heading', () => {
    render(<FirstPost data={ mockedTodos.data }  />)

    const heading = screen.getByRole('heading', {
      name: /First Post/i,
    })
    expect(heading).toBeInTheDocument()

  
  })
})