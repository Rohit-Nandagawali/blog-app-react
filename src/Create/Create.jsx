import './Create.css'
import { useState } from 'react';
const Create = () => {

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Mario')
    
    return ( 
        <div className="Create">
            <h2>create new blog</h2>
            <form action="">
                <label >Blog Title : </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                 />
                <label >Blog Body : </label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label >Blog Author : </label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                 <button>Add Blog</button>
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;