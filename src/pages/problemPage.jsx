import React from 'react'
import { useParams } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import problems from '../dummydata/problemlist'

function ProblemPage() {
  const { id } = useParams()

  const pr = problems.find((p) => p.name === id)

  if (!pr) {
    return (
      <div className="p-10 text-center text-xl">
        Problem not found
      </div>
    )
  }

  return (
    <div className="p-6 grid grid-cols-2 gap-6 min-h-screen bg-gray-100">

      {/* LEFT SIDE */}
      <div className="bg-white p-6 rounded-xl shadow-md overflow-auto">
        <h1 className="text-2xl font-bold mb-2">{pr.name}</h1>

        <p className="text-sm text-gray-500 mb-2">
          {pr.difficulty} • {pr.tag}
        </p>

        <h2 className="font-semibold mt-4">Problem Statement</h2>
        <p className="text-gray-700 mb-4">{pr.statement}</p>

        <h2 className="font-semibold">Explanation</h2>
        <p className="text-gray-700">{pr.explanation}</p>
      </div>

      {/* RIGHT SIDE (EDITOR) */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// Write your solution here"
        />
      </div>
    </div>
  )
}

export default ProblemPage