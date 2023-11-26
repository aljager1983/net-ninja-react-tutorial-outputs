import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    //used in useEffect dependcies
    const [name, setName] = useState('mario');

    //handles the delete of blogs, passed as props
    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    useEffect(() => {
      console.log("use effect ran");
      console.log(name);
    }, [name]); //dependecy array

    return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      {/* Below is sample for Reusing componenets */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="All Blogs" handleDelete={handleDelete}/> */}
      <button onClick={() => setName('luigi')}> Change Name </button>
      <p>{name}</p>
    </div>
     );
}
 
export default Home;