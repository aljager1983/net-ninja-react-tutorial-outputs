import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
    // const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
    

    return ( 
    <div className="home">
      { error &&  <div>{error}</div> }
      {isPending && <div>Loading...</div> }
      {data && <BlogList blogs={data} title="All Blogs"  />}
      {/* {blogs && <BlogList blogs={blogs} title="All Blogs"  />} */}
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