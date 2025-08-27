import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/blogData.json'

export default function blogContent() {
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.sections.map((blog) => (
        <div key={blog.id} className="bg-white rounded-2xl shadow-md p-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-600 text-sm mt-2">{blog.caption}</p>
          <p className="mt-3 text-gray-700 line-clamp-3">{blog.content[0]}</p>
          <Link
            to={`/content/${blog.id}`}
            className="mt-4 inline-block text-blue-600 font-medium hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  )
}
