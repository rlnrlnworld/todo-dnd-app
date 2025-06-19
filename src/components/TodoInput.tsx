import { useState } from "react"

export default function TodoInput({ onAdd }: { onAdd: (text:string) => void }) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    onAdd(text)
    setText('')
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border border-gray-200 bg-white rounded px-3 py-2 text-sm"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm hover:!cursor-pointer"
      >
        추가
      </button>
    </form>
  )
}