import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

   

    //handles the delete of blogs, passed as props
    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    useEffect(() => {
      console.log("use effect ran");
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return  res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
    }, []); //dependecy array

    return ( 
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
     
    </div>
     );
}
 
export default Home;

//npx json-server --watch data/db.json --port 8000
//above line is to run json server on lesson 16
//    /blogs        GET       fetch all blogs
//    /blogs/{id}   GET       fetch a single blog
//    /blogs        POST      add a new blog
//    /blogs/{id}   DELETE    delete a blog