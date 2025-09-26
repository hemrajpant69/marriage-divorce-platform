import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData";
import WhatsAppFloat from "../components/WhatsAppFloat";
export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center mt-5">Blog not found</h2>;
  }

  return (
    <div className="container my-5">
      <WhatsAppFloat />
      <Link to="/blog" className="btn btn-outline-secondary mb-3">← Back to Blog</Link>
      <div className="card shadow-lg p-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="img-fluid rounded mb-3"
        />
        <h2>{blog.title}</h2>
        <p className="text-muted">
          By <b>{blog.author}</b> | {blog.date}
        </p>
        <hr />
        <p style={{ whiteSpace: "pre-line" }}>{blog.content}</p>
      </div>
    </div>
  );
}
