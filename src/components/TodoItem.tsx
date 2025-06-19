import { useSortable } from "@dnd-kit/sortable"
import { Todo } from "./TodoApp"
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2 } from "lucide-react"

type Props = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem ({ todo, onToggle, onDelete }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: todo.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between border border-gray-300 px-3 py-2 rounded bg-white"
    >
      <span
        {...attributes}
        {...listeners}
        className="cursor-move pr-2 text-gray-400 hover:text-gray-500"
        title="드래그로 순서 변경"
      >
        <GripVertical size={15} />
      </span>
      <span onClick={() => onToggle(todo.id)} className="flex-1 cursor-pointer">
        {todo.text}
      </span>
      <button
        aria-label="삭제"
        onClick={(e) => {
          e.stopPropagation()
          onDelete(todo.id)
        }}
        className="text-gray-400 hover:text-red-500"
      >
        <Trash2 size={16} />
      </button>
    </li>
  )
}