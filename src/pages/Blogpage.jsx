import React from 'react';
import {useState, useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';


const Blogpage = () => {
    const[posts, setPosts]=useState([]);
    const[searchParams, setSearchParams]= useSearchParams();

    const postQuery = searchParams.get('post') || '';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        setSearchParams({post: query})

    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div >
            <h1>Our news</h1>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input type="search" name='search' />
                <input type="submit" value='Search' />
            </form>
            <Link to="/posts/new"><h1>Add new post</h1></Link>
            {
                posts.filter(
                    post => post.title.includes(postQuery)
                ).map(post=>(
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li style={{textAlign: "left"}} >{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
};

export default Blogpage;