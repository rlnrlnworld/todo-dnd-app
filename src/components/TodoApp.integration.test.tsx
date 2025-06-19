import TodoApp from "./TodoApp"
import { render, screen, fireEvent } from '@testing-library/react'

it('할 일을 삭제하면 화면에서 사라짐', () => {
  render(<TodoApp />)

  const input = screen.getByPlaceholderText('할 일을 입력하세요')
  const button = screen.getByText('추가')

  fireEvent.change(input, { target: { value: '운동하기' } })
  fireEvent.click(button)

  const deleteButton = screen.getByLabelText('삭제')
  fireEvent.click(deleteButton)

  expect(screen.queryByText('운동하기')).not.toBeInTheDocument()
})