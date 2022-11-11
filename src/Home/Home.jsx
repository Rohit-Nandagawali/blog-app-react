import { useEffect } from "react";
import { useState } from "react";
import "./Home.css"

const BlogList = ({blogs,title,handleDelete}) => {
    return ( 
        <div className="blogList">
            <h2 className="title">{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>delete</button>
                </div>
            ))}
        </div>
     );
}
 
const Home = () => {
  
    const [blogs,setBlog] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog =>blog.id !== id)
        setBlog(newBlogs)
    }

    // called everytime when the state changes
    // we can also set to run useEffect hook when specific state is changes [name]
    // if it is set to [] empty dependecies then useEffect will be called on the first render
    useEffect(()=>{
            fetch("http://localhost:8000/blogs") //fetch info from this and then
            .then(responce =>{              //then get a responce
                if(!responce.ok){           //if status is not ok
                    throw Error("Could not fetch data for that resource")
                }
                return responce.json()      //convert that json file into javascript object
            })
            .then(
                data =>{
                    setError(null)
                    setIsPending(false)
                    setBlog(data)
                }
            )
            .catch(err => {
                setIsPending(false)
                setError(err.message);   //if there is any error occur while connecting to server
            })
    },[]) //this will be called only once and first time


    return ( 
        <div className="Home">
            {error && <div className="text-color">{error}</div>} 
            {isPending && <div className="text-color">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's blogs"/> */}
        </div>
     );
}
 
export default Home;