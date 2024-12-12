import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Seemant');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            console.log('new blog added');
            navigate('/');
        })

    }
    
    return ( 
        <div className="addBlog">
            <h1>Add a new Blog</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Blog Title:</Form.Label>
                <Form.Control type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Blog body:</Form.Label>
                <Form.Control as="textarea" required rows={3} value={body} onChange={(e) => setBody(e.target.value) }/>
            </Form.Group>
            <Form.Select
                aria-label="Default select example"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                <option value="Mario">Mario</option>
                <option value="Seemant">Seemant</option>
                <option value="Luigi">Luigi</option>
            </Form.Select>
                <br></br>
                {!isPending && <Button variant="primary" type="submit">
        Submit Blog
        </Button>}

        {isPending && <Button variant="primary" type="submit" disabled>
        Submitting Blog...
        </Button>}

        </Form>
        </div>
    );
}
 
export default AddBlog;