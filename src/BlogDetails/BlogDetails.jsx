import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    return ( 
        <div className="BlogDetails">
            <h2>Blog details - {id}</h2>
        </div>
     );
}
 
export default BlogDetails;