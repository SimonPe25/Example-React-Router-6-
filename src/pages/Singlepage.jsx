import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Singlepage = () => {

    const{id}= useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace:true})

    console.log("navigate", navigate);
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>res.json())
        .then(data => setPost(data))
    }, [id]);
    return (
        <div>
            {post &&(
                <>
                <button onClick={goBack}>Go back</button>
            {/* Переходить navigate goHome не рекомендуют, лучше link или Кастомный типа customLink */}
                <button onClick={goHome}>Go Home</button>
                <h1>title -- {post.title}</h1>
                <p>body -- {post.body}</p>
                <p>id -- {post.id}</p>
                <p>userId -- {post.userId}</p>
                <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                

                
                </>
            )}
        </div>
    )
}

export default Singlepage;