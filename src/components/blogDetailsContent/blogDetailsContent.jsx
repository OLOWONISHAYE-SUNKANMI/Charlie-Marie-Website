import React from 'react'
import { useParams, Link } from "react-router-dom";
import data from '../data/blogData.json'

export default function blogDetailsContent() {

const { id } = useParams();
  const blog = data.sections.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center mt-6">Blog not found</h2>;
  }


  return (
       <div className="max-w-4xl mx-auto p-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-xl mb-6 w-full h-64 object-cover"
      />
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.caption}</p>
      {blog.content.map((para, index) => (
        <p key={index} className="text-gray-800 leading-7 mb-4 italic">
          {para}
        </p>
      ))}
      <Link
        to="/blog"
        className="mt-6 inline-block text-blue-600 hover:underline"
      >
        ← Back to Blogs
      </Link>
    </div>
  )
}
