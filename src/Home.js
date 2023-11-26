import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

   

    //handles the delete of blogs, passed as props
    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    useEffect(() => {
      console.log("use effect ran");
    }, []); //dependecy array

    return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
     
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