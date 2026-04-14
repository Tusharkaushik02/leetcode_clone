import React from 'react'
import { useParams } from 'react-router-dom'
import Editor from '@monaco-editor/react'

import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function ProblemPage() {
  const navigate=useNavigate()
  return (
    <div className="p-6 grid grid-cols-2 gap-6 min-h-screen bg-gray-100">

      {/* LEFT SIDE */}
      <div className="bg-white p-6 rounded-xl shadow-md overflow-auto">
        <Outlet />
      </div>

      {/* RIGHT SIDE (EDITOR) */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// Write your solution here"
        />
        <div className='flex gap-3 text-3xl justify-end m-10'>
          <button className="px-4 py-1 bg-black text-white rounded cursor-pointer" onClick={()=>{navigate("run")}}>Run</button>
        <button className="px-4 py-1 bg-black text-white rounded cursor-pointer" onClick={()=>{navigate("submit")}}>Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default ProblemPage