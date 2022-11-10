import { useState } from "react";
import "./Home.css"

const Home = () => {
  
    const [blogs,setBlog] = useState([
        {title:"my new website", preview:"lorem epsum...",author:"mario",id:1},
        {title:"this is unreal", preview:"lorem epsum...",author:"mario",id:2},
        {title:"react js is awsome", preview:"lorem epsum...",author:"mario",id:3},
    ])
    return ( 
        <div className="Home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;