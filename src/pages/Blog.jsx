import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";

export default function Blog() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Blog</h2>
      <div className="row">
        {blogData.map((blog) => (
          <div key={blog.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-muted">
                  {blog.excerpt.substring(0, 100)}...
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="btn btn-primary w-100"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
