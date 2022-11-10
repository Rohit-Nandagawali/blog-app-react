import { useState } from "react";
import "./Home.css"

const BlogList = ({blogs,title}) => {
    return ( 
        <div className="blogList">
            <h2 className="title">{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
const Home = () => {
  
    const [blogs,setBlog] = useState([
        {title:"my new website", preview:"lorem epsum...",author:"mario",id:1},
        {title:"this is unreal", preview:"lorem epsum...",author:"rohit",id:2},
        {title:"react js is awsome", preview:"lorem epsum...",author:"mario",id:3},
    ])
    return ( 
        <div className="Home">
          <BlogList blogs={blogs} title="All blogs"/>
          <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's blogs"/>
        </div>
     );
}
 
export default Home;