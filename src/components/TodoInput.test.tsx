import { render, screen, fireEvent } from '@testing-library/react'
import TodoInput from './TodoInput'

describe('TodoInput', () => {
  it('입력 후 추가 버튼 누르면 onAdd 호출됨', () => {
    const mockAdd = jest.fn()
    render(<TodoInput onAdd={mockAdd} />)

    const input = screen.getByPlaceholderText('할 일을 입력하세요')
    const button = screen.getByText('추가')

    fireEvent.change(input, { target: { value: '청소하기' } })
    fireEvent.click(button)

    expect(mockAdd).toHaveBeenCalledWith('청소하기')
  })
})