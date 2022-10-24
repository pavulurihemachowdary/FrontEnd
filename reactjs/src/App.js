
import React from 'react';
import BlogContextDemo from './components/BlogContextDemo'

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Tony Stark"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Steve Rogers"
  }
};

export const BlogContext  = React.createContext(blogInfo);

export default function App() {
  return (
    <div className="App">
      <div>
      <h1>Hello Hema</h1>
      <BlogContext.Provider value={blogInfo}>
           <BlogContextDemo />
      </BlogContext.Provider>
      </div>
    </div>
  );
}