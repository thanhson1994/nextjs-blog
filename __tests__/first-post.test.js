import { render, screen, fireEvent } from "@testing-library/react";
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
    // fireEvent.click(screen.getByText(/Delete/i))
    // expect(handleDeteleTodo).toHaveBeenCalledTimes(1)
    const posts = screen.getByTestId('posts-list')
    expect(posts.childNodes.length).toEqual(10);
    // mockedTodos.data.forEach((value, index) => {
    //   expect(screen.getByText(value.title)).toBeInTheDocument();
    //    fireEvent.click(screen.getByTestId(value.title))
    //   // const handleDeteleTodo = jest.fn(value.id)
    //   const handleDeteleTodo = jest.fn()
      //  handleDeteleTodo(value.id);
    // expect(handleDeteleTodo).toHaveBeenCalledTimes(1);
    // });
  })
})

describe('FirstPost', () => {
  it('renders 0 posts', () => {
    render(<FirstPost data={ [] }  />)
    const posts = screen.getByTestId('posts-list')
    expect(posts.childNodes.length).toEqual(0);
  
  })
})

describe('FirstPost', () => {
  it('simulate delete button', () => {
    render(<FirstPost data={ mockedTodos.data }  />)
  
    const handleDeteleTodo = jest.fn()
    fireEvent.click(screen.getByTestId(mockedTodos.data[0].title))
    handleDeteleTodo(mockedTodos.data[0].id);
    const posts = screen.getByTestId('posts-list')
    expect(posts.childNodes.length).toEqual(9);
    expect(handleDeteleTodo).toHaveBeenCalledTimes(1);

    expect(handleDeteleTodo).toHaveBeenCalledWith(mockedTodos.data[0].id)

  })
})