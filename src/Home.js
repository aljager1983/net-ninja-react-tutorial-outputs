import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
   

    //handles the delete of blogs, passed as props
    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs);
    // }

    useEffect(() => {
      setTimeout(() => {
        console.log("use effect ran");
      fetch('http://localhost:8000/blogds')
      .then(res => {
        if(!res.ok){        //error throwing
          throw Error('could not fetch the data for that resource');
        }
        return  res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err =>{              //catching error, e.g. network error
        // console.log(err.message);
        setIsPending(false);
        setError(err.message);
      } )   
      }, 1000);
      
    }, []); //dependecy array

    return ( 
    <div className="home">
      {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}  --> for lesson 17*/}
      { error &&  <div>{error}</div> }
      {isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
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