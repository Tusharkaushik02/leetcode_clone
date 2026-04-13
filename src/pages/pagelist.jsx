import React from 'react'
import problems from '../dummydata/problemlist'
import {Link } from 'react-router-dom'
function Problemlist() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Problem List
      </h1>

      <div className="m-5">
        {problems.map((data, index) => (
          <Link to={data.name}>
          
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-200 border border-gray-200 m-3"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {data.name}
            </h2>

            <div className="flex justify-between items-center mt-4">
              <span
                className={`px-3 py-1 text-sm rounded-full font-medium
                  ${
                    data.difficulty === "Easy"
                      ? "bg-green-100 text-green-700"
                      : data.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }
                `}
              >
                {data.difficulty}
              </span>

              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {data.tag}
              </span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Problemlist