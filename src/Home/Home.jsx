
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import "./Home.css"

const BlogList = ({blogs,title,handleDelete}) => {
    return ( 
        <div className="blogList">
            <h2 className="title">{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link  to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>

                    {/* <button onClick={()=>handleDelete(blog.id)}>delete</button> */}
                </div>
            ))}
        </div>
     );
}
 
const Home = () => {
  
    const {data : blogs,isPending,error} = useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="Home">
            {error && <div className="text-color">{error}</div>} 
            {isPending && <div className="text-color">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's blogs"/> */}
        </div>
     );
}
 
export default Home;