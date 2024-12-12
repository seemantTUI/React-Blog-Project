import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams()
    const { error, isPending, data: blog } = useFetch('http://localhost:8000/blogs/'+id)
    const navigate = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE',
    }).then(() => {
        console.log('blog deleted');
        navigate('/');
    })  
}
    return (
        <div className="blog-details">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <Button variant="primary" onClick={handleClick}>Delete</Button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;