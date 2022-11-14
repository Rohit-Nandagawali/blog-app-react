import { useParams,useHistory } from "react-router-dom";
import useFetch from "../useFetch";

import './BlogDetails.css'
const BlogDetails = () => {
    const {id} = useParams()
    const history = useHistory()
    const {data : blog,isPending,error} = useFetch(`http://localhost:8000/blogs/${id}`)

    const handleDelete = () =>{
        fetch(`http://localhost:8000/blogs/${blog.id}`,{
            method:"DELETE"
        })
        .then(()=>{
            history.push('/')
        })
    }

    return ( 
        <div className="BlogDetails">
                {error && <div >{error}</div>} 
                {isPending && <div>Loading...</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>written by - {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleDelete}>Delete</button>
                    </article>
                )}
                
        </div>
     );
}
 
export default BlogDetails;